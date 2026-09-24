import { GPSManager } from "./GPSManager";
import { isGPSJump } from "./GPSFilter";
import {
  calculateMovementBearing,
} from "./MovementBearing";
import {
  createRouteMatch,
  createUnmatchedRoutePosition,
  type GeoapifyMatchedStep,
  type GeoapifyMatchedWaypoint,
  type RouteMatch,
} from "./RouteMatcher";
import {
  calculateRouteProgress,
  type RouteCoordinate,
  type RouteProgress,
} from "./RouteProgress";
import {
  calculateRouteDistances,
} from "./RouteDistance";
import {
  OffRouteDetector,
  type OffRouteResult,
} from "./OffRouteDetector";
import {
  RerouteManager,
  type RerouteDecision,
} from "./RerouteManager";
import {
  createManeuverState,
  type Maneuver,
  type ManeuverState,
} from "./ManeuverEngine";
import {
  evaluateCurrentManeuver,
  type ManeuverControllerResult,
} from "./ManeuverController";
import type {
  ManeuverProgressResult,
} from "./ManeuverProgression";
import type {
  NavigationPosition,
  GPSPosition,
} from "./NavigationTypes";

export type NavigationEngineState = {
  position: NavigationPosition | null;
  effectiveBearing: number | null;
  routeMatch: RouteMatch | null;
  routeProgress: RouteProgress | null;
  offRoute: OffRouteResult | null;
  reroute: RerouteDecision | null;
  maneuvers: Maneuver[];
  maneuverState: ManeuverState;
  maneuverProgress: ManeuverProgressResult | null;
};

export class NavigationEngine {
  private gpsManager = new GPSManager();
  private offRouteDetector = new OffRouteDetector();
  private rerouteManager = new RerouteManager();

  private routeCoordinates: RouteCoordinate[] = [];
  private routeDistances: number[] = [];

  private state: NavigationEngineState = {
    position: null,
    effectiveBearing: null,
    routeMatch: null,
    routeProgress: null,
    offRoute: null,
    reroute: null,
    maneuvers: [],
    maneuverState: createManeuverState([]),
    maneuverProgress: null,
  };

  setRoute(routeCoordinates: RouteCoordinate[]): void {
    this.routeCoordinates = routeCoordinates;
    this.routeDistances =
      calculateRouteDistances(routeCoordinates);

    this.state = {
      ...this.state,
      routeProgress: null,
      maneuverState: createManeuverState(
        this.state.maneuvers
      ),
      maneuverProgress: null,
    };
  }

  setManeuvers(maneuvers: Maneuver[]): void {
    this.state = {
      ...this.state,
      maneuvers,
      maneuverState: createManeuverState(maneuvers),
      maneuverProgress: null,
    };
  }

  processGPSUpdate(
    position: GPSPosition
  ): NavigationEngineState {
    const navigationPosition =
      this.gpsManager.processPosition(position);

    const previousPoint =
      navigationPosition.history.length >= 2
        ? navigationPosition.history[
            navigationPosition.history.length - 2
          ]
        : null;

    if (
      previousPoint &&
      isGPSJump(previousPoint, navigationPosition.raw)
    ) {
      this.state = {
        ...this.state,
        position: navigationPosition,
      };

      return this.state;
    }

    const effectiveBearing =
      navigationPosition.raw.heading ??
      calculateMovementBearing(
        navigationPosition.history
      );

    let routeProgress: RouteProgress | null = null;

    if (this.routeCoordinates.length > 0) {
      routeProgress = calculateRouteProgress(
        [
          navigationPosition.raw.longitude,
          navigationPosition.raw.latitude,
        ],
        this.routeCoordinates
      );
    }

    let maneuverProgress =
      this.state.maneuverProgress;

    let maneuverState =
      this.state.maneuverState;

    if (
      routeProgress &&
      this.state.maneuvers.length > 0 &&
      this.routeDistances.length > 0
    ) {
      const maneuverResult =
        evaluateCurrentManeuver(
          routeProgress.distanceAlongRouteMeters,
          this.state.maneuvers,
          this.state.maneuverState,
          this.routeDistances
        );

      maneuverProgress =
        maneuverResult.progress;

      maneuverState =
        maneuverResult.state;
    }

    this.state = {
      ...this.state,
      position: navigationPosition,
      effectiveBearing,
      routeProgress,
      maneuverState,
      maneuverProgress,
    };

    return this.state;
  }

  applyGeoapifyMatch(
    waypoint: GeoapifyMatchedWaypoint,
    step?: GeoapifyMatchedStep
  ): NavigationEngineState {
    const navigationPosition = this.state.position;

    if (!navigationPosition) {
      return this.state;
    }

    const routeMatch = createRouteMatch(
      navigationPosition.raw,
      waypoint,
      step
    );

    const offRoute = this.offRouteDetector.evaluate({
      distanceToRouteMeters:
        routeMatch.distanceToRouteMeters,
      gpsAccuracyMeters:
        navigationPosition.raw.accuracy,
      matchConfidence: routeMatch.confidence,
    });

    let reroute: RerouteDecision | null = null;

    if (offRoute.shouldReroute) {
      reroute = this.rerouteManager.evaluate(
        navigationPosition.raw
      );

      if (reroute.shouldReroute) {
        this.rerouteManager.markReroute(
          navigationPosition.raw
        );
      }
    }

    this.state = {
      ...this.state,
      routeMatch,
      offRoute,
      reroute,
    };

    return this.state;
  }

  applyUnmatchedResult(): NavigationEngineState {
    const navigationPosition = this.state.position;

    if (!navigationPosition) {
      return this.state;
    }

    const routeMatch = createUnmatchedRoutePosition(
      navigationPosition.raw
    );

    this.state = {
      ...this.state,
      routeMatch,
      offRoute: {
        state: "normal",
        shouldReroute: false,
      },
      reroute: null,
    };

    return this.state;
  }

  getState(): NavigationEngineState {
    return this.state;
  }

  reset(): void {
    this.gpsManager.reset();
    this.offRouteDetector.reset();
    this.rerouteManager.reset();

    this.state = {
      position: null,
      effectiveBearing: null,
      routeMatch: null,
      routeProgress: null,
      offRoute: null,
      reroute: null,
      maneuvers: [],
      maneuverState: createManeuverState([]),
      maneuverProgress: null,
    };

    this.routeCoordinates = [];
    this.routeDistances = [];
  }
}


