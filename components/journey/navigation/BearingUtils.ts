export type Coordinate = {
  latitude: number;
  longitude: number;
};

const EARTH_RADIUS_METERS = 6371000;

export function calculateBearing(
  from: Coordinate,
  to: Coordinate
): number {
  const lat1 =
    (from.latitude * Math.PI) / 180;
  const lat2 =
    (to.latitude * Math.PI) / 180;

  const deltaLongitude =
    ((to.longitude - from.longitude) * Math.PI) / 180;

  const y =
    Math.sin(deltaLongitude) *
    Math.cos(lat2);

  const x =
    Math.cos(lat1) *
      Math.sin(lat2) -
    Math.sin(lat1) *
      Math.cos(lat2) *
      Math.cos(deltaLongitude);

  const bearing =
    (Math.atan2(y, x) * 180) / Math.PI;

  return (bearing + 360) % 360;
}

export function angularDifference(
  firstBearing: number,
  secondBearing: number
): number {
  const difference =
    Math.abs(
      ((firstBearing - secondBearing + 540) %
        360) -
        180
    );

  return difference;
}

export function bearingToDirection(
  bearing: number
): "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW" {
  const normalized =
    ((bearing % 360) + 360) % 360;

  const directions = [
    "N",
    "NE",
    "E",
    "SE",
    "S",
    "SW",
    "W",
    "NW",
  ] as const;

  const index =
    Math.round(normalized / 45) % 8;

  return directions[index];
}
