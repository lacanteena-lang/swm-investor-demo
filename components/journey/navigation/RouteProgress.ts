export type RouteCoordinate = [number, number];

export type RouteProgress = {
  nearestIndex: number;
  distanceToRouteMeters: number;
  progressIndex: number;
  progressRatio: number;
  distanceAlongRouteMeters: number;
  matchedPoint: RouteCoordinate;
  segmentIndex: number;
  segmentProgress: number;
};

const EARTH_RADIUS_METERS = 6371000;

function toLocalMeters(
  coordinate: RouteCoordinate,
  referenceLatitude: number
): [number, number] {
  const longitudeRadians =
    (coordinate[0] * Math.PI) / 180;
  const latitudeRadians =
    (coordinate[1] * Math.PI) / 180;
  const referenceLatitudeRadians =
    (referenceLatitude * Math.PI) / 180;

  return [
    longitudeRadians *
      EARTH_RADIUS_METERS *
      Math.cos(referenceLatitudeRadians),
    latitudeRadians * EARTH_RADIUS_METERS,
  ];
}

function distanceMeters(
  first: RouteCoordinate,
  second: RouteCoordinate
): number {
  const lat1 = (first[1] * Math.PI) / 180;
  const lat2 = (second[1] * Math.PI) / 180;

  const deltaLat =
    ((second[1] - first[1]) * Math.PI) / 180;
  const deltaLon =
    ((second[0] - first[0]) * Math.PI) / 180;

  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(deltaLon / 2) ** 2;

  const c =
    2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS_METERS * c;
}

function projectPointOntoSegment(
  point: RouteCoordinate,
  start: RouteCoordinate,
  end: RouteCoordinate
): {
  point: RouteCoordinate;
  fraction: number;
  distanceMeters: number;
} {
  const referenceLatitude =
    (point[1] + start[1] + end[1]) / 3;

  const pointMeters = toLocalMeters(
    point,
    referenceLatitude
  );
  const startMeters = toLocalMeters(
    start,
    referenceLatitude
  );
  const endMeters = toLocalMeters(
    end,
    referenceLatitude
  );

  const segmentX = endMeters[0] - startMeters[0];
  const segmentY = endMeters[1] - startMeters[1];

  const segmentLengthSquared =
    segmentX * segmentX + segmentY * segmentY;

  if (segmentLengthSquared === 0) {
    return {
      point: start,
      fraction: 0,
      distanceMeters: distanceMeters(point, start),
    };
  }

  const pointX = pointMeters[0] - startMeters[0];
  const pointY = pointMeters[1] - startMeters[1];

  const rawFraction =
    (pointX * segmentX + pointY * segmentY) /
    segmentLengthSquared;

  const fraction = Math.max(
    0,
    Math.min(1, rawFraction)
  );

  const projectedX =
    startMeters[0] + segmentX * fraction;
  const projectedY =
    startMeters[1] + segmentY * fraction;

  const latitudeRadians =
    projectedY / EARTH_RADIUS_METERS;

  const latitude =
    (latitudeRadians * 180) / Math.PI;

  const longitudeRadians =
    projectedX /
    (EARTH_RADIUS_METERS *
      Math.cos(
        (referenceLatitude * Math.PI) / 180
      ));

  const longitude =
    (longitudeRadians * 180) / Math.PI;

  const projectedPoint: RouteCoordinate = [
    longitude,
    latitude,
  ];

  return {
    point: projectedPoint,
    fraction,
    distanceMeters: distanceMeters(
      point,
      projectedPoint
    ),
  };
}

export function calculateRouteProgress(
  userLocation: RouteCoordinate,
  routeCoordinates: RouteCoordinate[]
): RouteProgress {
  if (routeCoordinates.length === 0) {
    return {
      nearestIndex: -1,
      distanceToRouteMeters: Infinity,
      progressIndex: 0,
      progressRatio: 0,
      distanceAlongRouteMeters: 0,
      matchedPoint: userLocation,
      segmentIndex: -1,
      segmentProgress: 0,
    };
  }

  if (routeCoordinates.length === 1) {
    return {
      nearestIndex: 0,
      distanceToRouteMeters: distanceMeters(
        userLocation,
        routeCoordinates[0]
      ),
      progressIndex: 0,
      progressRatio: 0,
      distanceAlongRouteMeters: 0,
      matchedPoint: routeCoordinates[0],
      segmentIndex: 0,
      segmentProgress: 0,
    };
  }

  let bestSegmentIndex = 0;
  let bestFraction = 0;
  let bestDistance = Infinity;
  let bestPoint = routeCoordinates[0];

  for (
    let index = 0;
    index < routeCoordinates.length - 1;
    index += 1
  ) {
    const projection = projectPointOntoSegment(
      userLocation,
      routeCoordinates[index],
      routeCoordinates[index + 1]
    );

    if (projection.distanceMeters < bestDistance) {
      bestDistance = projection.distanceMeters;
      bestSegmentIndex = index;
      bestFraction = projection.fraction;
      bestPoint = projection.point;
    }
  }

  const progressIndex =
    bestSegmentIndex + bestFraction;

  const progressRatio =
    routeCoordinates.length > 1
      ? progressIndex /
        (routeCoordinates.length - 1)
      : 0;

  const nearestIndex =
    bestFraction < 0.5
      ? bestSegmentIndex
      : bestSegmentIndex + 1;

  let distanceAlongRouteMeters = 0;

  for (
    let index = 0;
    index < bestSegmentIndex;
    index += 1
  ) {
    distanceAlongRouteMeters +=
      distanceMeters(
        routeCoordinates[index],
        routeCoordinates[index + 1]
      );
  }

  distanceAlongRouteMeters +=
    distanceMeters(
      routeCoordinates[bestSegmentIndex],
      bestPoint
    );

  return {
    nearestIndex,
    distanceToRouteMeters: bestDistance,
    progressIndex,
    progressRatio,
    distanceAlongRouteMeters,
    matchedPoint: bestPoint,
    segmentIndex: bestSegmentIndex,
    segmentProgress: bestFraction,
  };
}
