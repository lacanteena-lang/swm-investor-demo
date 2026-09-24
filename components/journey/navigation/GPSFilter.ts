import type { GPSHistoryPoint, GPSPosition } from "./NavigationTypes";

const MAX_ACCURACY_FOR_FILTER = 100;

function calculateDistanceMeters(
  first: GPSPosition,
  second: GPSPosition
): number {
  const earthRadiusMeters = 6371000;

  const lat1 = (first.latitude * Math.PI) / 180;
  const lat2 = (second.latitude * Math.PI) / 180;
  const deltaLat =
    ((second.latitude - first.latitude) * Math.PI) / 180;
  const deltaLon =
    ((second.longitude - first.longitude) * Math.PI) / 180;

  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(deltaLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadiusMeters * c;
}

export function isGPSJump(
  previous: GPSHistoryPoint,
  current: GPSPosition
): boolean {
  if (
    previous.accuracy > MAX_ACCURACY_FOR_FILTER ||
    current.accuracy > MAX_ACCURACY_FOR_FILTER
  ) {
    return true;
  }

  const distanceMeters = calculateDistanceMeters(previous, current);
  const elapsedSeconds =
    Math.max(current.timestamp - previous.timestamp, 1) / 1000;

  const speedMetersPerSecond =
    current.speed !== null && current.speed >= 0
      ? current.speed
      : null;

  if (speedMetersPerSecond !== null) {
    const expectedDistance =
      speedMetersPerSecond * elapsedSeconds;

    return (
      distanceMeters > Math.max(expectedDistance * 3, 100)
    );
  }

  return distanceMeters > 150;
}

export function getLastValidPoint(
  history: GPSHistoryPoint[]
): GPSHistoryPoint | null {
  for (let index = history.length - 1; index >= 0; index -= 1) {
    if (history[index].accuracy <= MAX_ACCURACY_FOR_FILTER) {
      return history[index];
    }
  }

  return null;
}
