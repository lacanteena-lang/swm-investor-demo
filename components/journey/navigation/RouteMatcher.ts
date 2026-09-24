import type { GPSPosition } from "./NavigationTypes";

export type RouteMatch = {
  position: GPSPosition;
  matchedLatitude: number;
  matchedLongitude: number;
  distanceToRouteMeters: number;
  confidence: number;
  matched: boolean;
  roadName: string | null;
  roadClass: string | null;
  beginBearing: number | null;
  endBearing: number | null;
};

export type GeoapifyMatchedWaypoint = {
  original_index: number;
  location: [number, number];
  original_location: [number, number];
  match_type: string;
  match_distance: number;
  leg_index: number;
  step_index: number;
};

export type GeoapifyMatchedStep = {
  name?: string;
  road_class?: string;
  begin_bearing?: number;
  end_bearing?: number;
};

export function createUnmatchedRoutePosition(
  position: GPSPosition
): RouteMatch {
  return {
    position,
    matchedLatitude: position.latitude,
    matchedLongitude: position.longitude,
    distanceToRouteMeters: Infinity,
    confidence: 0,
    matched: false,
    roadName: null,
    roadClass: null,
    beginBearing: null,
    endBearing: null,
  };
}

export function createRouteMatch(
  position: GPSPosition,
  waypoint: GeoapifyMatchedWaypoint,
  step?: GeoapifyMatchedStep
): RouteMatch {
  const matchDistance = Number(waypoint.match_distance);

  const confidence = Number.isFinite(matchDistance)
    ? Math.max(0, Math.min(1, 1 - matchDistance / 100))
    : 0;

  return {
    position,
    matchedLatitude: waypoint.location[1],
    matchedLongitude: waypoint.location[0],
    distanceToRouteMeters: Number.isFinite(matchDistance)
      ? matchDistance
      : Infinity,
    confidence,
    matched: waypoint.match_type === "matched",
    roadName: step?.name ?? null,
    roadClass: step?.road_class ?? null,
    beginBearing:
      typeof step?.begin_bearing === "number"
        ? step.begin_bearing
        : null,
    endBearing:
      typeof step?.end_bearing === "number"
        ? step.end_bearing
        : null,
  };
}
