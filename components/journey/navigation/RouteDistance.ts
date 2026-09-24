export type RouteCoordinate = [number, number];

const EARTH_RADIUS_METERS = 6371000;

function distanceMeters(
  first: RouteCoordinate,
  second: RouteCoordinate
): number {
  const lat1 =
    (first[1] * Math.PI) / 180;

  const lat2 =
    (second[1] * Math.PI) / 180;

  const deltaLat =
    ((second[1] - first[1]) * Math.PI) /
    180;

  const deltaLon =
    ((second[0] - first[0]) * Math.PI) /
    180;

  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(deltaLon / 2) ** 2;

  const c =
    2 *
    Math.atan2(
      Math.sqrt(a),
      Math.sqrt(1 - a)
    );

  return EARTH_RADIUS_METERS * c;
}

export function calculateRouteDistances(
  coordinates: RouteCoordinate[]
): number[] {
  if (coordinates.length === 0) {
    return [];
  }

  const distances = [0];

  for (
    let index = 1;
    index < coordinates.length;
    index += 1
  ) {
    const segmentDistance = distanceMeters(
      coordinates[index - 1],
      coordinates[index]
    );

    distances.push(
      distances[index - 1] +
        segmentDistance
    );
  }

  return distances;
}

export function calculateTotalRouteDistance(
  coordinates: RouteCoordinate[]
): number {
  const distances =
    calculateRouteDistances(coordinates);

  return distances.length > 0
    ? distances[distances.length - 1]
    : 0;
}
