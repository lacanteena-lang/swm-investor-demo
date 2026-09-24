export type OffRouteState =
  | "normal"
  | "suspicious"
  | "confirmed_deviation";

export type OffRouteInput = {
  distanceToRouteMeters: number;
  gpsAccuracyMeters: number;
  matchConfidence: number;
};

export type OffRouteResult = {
  state: OffRouteState;
  shouldReroute: boolean;
};

const SUSPICIOUS_DISTANCE_METERS = 35;
const CONFIRMED_DISTANCE_METERS = 60;
const MAX_ACCURACY_FOR_DECISION = 50;
const MIN_MATCH_CONFIDENCE = 0.2;
const REQUIRED_CONFIRMATIONS = 2;

export class OffRouteDetector {
  private suspiciousCount = 0;

  evaluate(input: OffRouteInput): OffRouteResult {
    const {
      distanceToRouteMeters,
      gpsAccuracyMeters,
      matchConfidence,
    } = input;

    if (
      !Number.isFinite(distanceToRouteMeters) ||
      gpsAccuracyMeters > MAX_ACCURACY_FOR_DECISION ||
      matchConfidence < MIN_MATCH_CONFIDENCE
    ) {
      this.suspiciousCount = 0;

      return {
        state: "normal",
        shouldReroute: false,
      };
    }

    if (distanceToRouteMeters < SUSPICIOUS_DISTANCE_METERS) {
      this.suspiciousCount = 0;

      return {
        state: "normal",
        shouldReroute: false,
      };
    }

    this.suspiciousCount += 1;

    if (
      distanceToRouteMeters >= CONFIRMED_DISTANCE_METERS &&
      this.suspiciousCount >= REQUIRED_CONFIRMATIONS
    ) {
      return {
        state: "confirmed_deviation",
        shouldReroute: true,
      };
    }

    return {
      state: "suspicious",
      shouldReroute: false,
    };
  }

  reset(): void {
    this.suspiciousCount = 0;
  }
}
