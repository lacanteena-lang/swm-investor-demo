import type { Maneuver } from "./ManeuverEngine";

export type ManeuverProgressState =
  | "approaching"
  | "imminent"
  | "passed";

export type ManeuverProgressResult = {
  state: ManeuverProgressState;
  distanceToManeuverMeters: number;
  shouldAdvance: boolean;
};

const IMMINENT_DISTANCE_METERS = 100;
const PASSED_DISTANCE_METERS = 5;
const ARRIVAL_TOLERANCE_METERS = 2;

export function evaluateManeuverProgress(
  currentRouteDistanceMeters: number,
  maneuver: Maneuver,
  routeDistances: number[]
): ManeuverProgressResult {
  const maneuverIndex = maneuver.fromRouteIndex;

  const maneuverRouteDistance =
    routeDistances[maneuverIndex] ?? 0;

  const distanceToManeuverMeters =
    maneuverRouteDistance -
    currentRouteDistanceMeters;

  if (
    maneuver.type === "arrival" &&
    currentRouteDistanceMeters >=
      maneuverRouteDistance -
        ARRIVAL_TOLERANCE_METERS
  ) {
    return {
      state: "passed",
      distanceToManeuverMeters,
      shouldAdvance: true,
    };
  }

  if (
    currentRouteDistanceMeters >=
    maneuverRouteDistance +
      PASSED_DISTANCE_METERS
  ) {
    return {
      state: "passed",
      distanceToManeuverMeters,
      shouldAdvance: true,
    };
  }

  if (
    distanceToManeuverMeters <=
    IMMINENT_DISTANCE_METERS
  ) {
    return {
      state: "imminent",
      distanceToManeuverMeters,
      shouldAdvance: false,
    };
  }

  return {
    state: "approaching",
    distanceToManeuverMeters,
    shouldAdvance: false,
  };
}
