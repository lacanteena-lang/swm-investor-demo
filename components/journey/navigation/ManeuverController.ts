import {
  completeCurrentManeuver,
  type Maneuver,
  type ManeuverState,
} from "./ManeuverEngine";
import {
  evaluateManeuverProgress,
  type ManeuverProgressResult,
} from "./ManeuverProgression";

export type ManeuverControllerResult = {
  progress: ManeuverProgressResult | null;
  state: ManeuverState;
};

export function evaluateCurrentManeuver(
  currentRouteDistanceMeters: number,
  maneuvers: Maneuver[],
  maneuverState: ManeuverState,
  routeDistances: number[]
): ManeuverControllerResult {
  if (
    maneuvers.length === 0 ||
    maneuverState.completedCount >= maneuvers.length ||
    maneuverState.currentIndex >= maneuvers.length
  ) {
    return {
      progress: null,
      state: maneuverState,
    };
  }

  const currentManeuver =
    maneuvers[maneuverState.currentIndex];

  const progress =
    evaluateManeuverProgress(
      currentRouteDistanceMeters,
      currentManeuver,
      routeDistances
    );

  if (!progress.shouldAdvance) {
    return {
      progress,
      state: maneuverState,
    };
  }

  return {
    progress,
    state: completeCurrentManeuver(
      maneuverState,
      maneuvers.length
    ),
  };
}
