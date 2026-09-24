import type { GPSHistoryPoint } from "./NavigationTypes";
import {
  calculateBearing,
  type Coordinate,
} from "./BearingUtils";

const MIN_MOVEMENT_METERS = 5;

function distanceMeters(
  first: Coordinate,
  second: Coordinate
): number {
  const earthRadiusMeters = 6371000;

  const lat1 =
    (first.latitude * Math.PI) / 180;
  const lat2 =
    (second.latitude * Math.PI) / 180;

  const deltaLat =
    ((second.latitude - first.latitude) *
      Math.PI) /
    180;

  const deltaLon =
    ((second.longitude - first.longitude) *
      Math.PI) /
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

  return earthRadiusMeters * c;
}

export function calculateMovementBearing(
  history: GPSHistoryPoint[]
): number | null {
  if (history.length < 2) {
    return null;
  }

  const current =
    history[history.length - 1];

  for (
    let index = history.length - 2;
    index >= 0;
    index -= 1
  ) {
    const previous = history[index];

    const distance = distanceMeters(
      previous,
      current
    );

    if (distance >= MIN_MOVEMENT_METERS) {
      return calculateBearing(
        {
          latitude: previous.latitude,
          longitude: previous.longitude,
        },
        {
          latitude: current.latitude,
          longitude: current.longitude,
        }
      );
    }
  }

  return null;
}
