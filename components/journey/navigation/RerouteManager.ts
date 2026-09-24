export type RerouteDecision = {
  shouldReroute: boolean;
  reason:
    | "confirmed_deviation"
    | "cooldown"
    | "insufficient_movement";
};

type Coordinate = {
  latitude: number;
  longitude: number;
};

const REROUTE_COOLDOWN_MS = 15000;
const MIN_MOVEMENT_METERS = 75;

function distanceMeters(
  first: Coordinate,
  second: Coordinate
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

export class RerouteManager {
  private lastRerouteTime = 0;
  private lastReroutePosition: Coordinate | null = null;

  evaluate(
    currentPosition: Coordinate,
    now: number = Date.now()
  ): RerouteDecision {
    if (
      now - this.lastRerouteTime <
      REROUTE_COOLDOWN_MS
    ) {
      return {
        shouldReroute: false,
        reason: "cooldown",
      };
    }

    if (this.lastReroutePosition) {
      const movement = distanceMeters(
        this.lastReroutePosition,
        currentPosition
      );

      if (movement < MIN_MOVEMENT_METERS) {
        return {
          shouldReroute: false,
          reason: "insufficient_movement",
        };
      }
    }

    return {
      shouldReroute: true,
      reason: "confirmed_deviation",
    };
  }

  markReroute(
    position: Coordinate,
    now: number = Date.now()
  ): void {
    this.lastRerouteTime = now;
    this.lastReroutePosition = position;
  }

  reset(): void {
    this.lastRerouteTime = 0;
    this.lastReroutePosition = null;
  }
}
