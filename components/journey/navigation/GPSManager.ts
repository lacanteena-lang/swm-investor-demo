import type {
  GPSHistoryPoint,
  GPSPosition,
  NavigationPosition,
} from "./NavigationTypes";

const MAX_HISTORY = 10;

export function getGPSQuality(
  accuracy: number
): NavigationPosition["quality"] {
  if (!Number.isFinite(accuracy) || accuracy <= 0) {
    return "invalid";
  }

  if (accuracy <= 10) {
    return "excellent";
  }

  if (accuracy <= 25) {
    return "good";
  }

  if (accuracy <= 50) {
    return "usable";
  }

  if (accuracy <= 100) {
    return "poor";
  }

  return "invalid";
}

export class GPSManager {
  private history: GPSHistoryPoint[] = [];
  private sequence = 0;

  processPosition(position: GPSPosition): NavigationPosition {

    const gpsPosition: GPSPosition = {
      latitude: position.latitude,
      longitude: position.longitude,
      accuracy: position.accuracy,
      speed:
        typeof position.speed === "number" && Number.isFinite(position.speed)
          ? position.speed
          : null,
      heading:
        typeof position.heading === "number" && Number.isFinite(position.heading)
          ? position.heading
          : null,
      timestamp: position.timestamp,
    };

    const historyPoint: GPSHistoryPoint = {
      ...gpsPosition,
      sequence: ++this.sequence,
    };

    this.history = [...this.history, historyPoint].slice(-MAX_HISTORY);

    return {
      raw: gpsPosition,
      history: this.history,
      quality: getGPSQuality(gpsPosition.accuracy),
    };
  }

  getHistory(): GPSHistoryPoint[] {
    return [...this.history];
  }

  reset(): void {
    this.history = [];
    this.sequence = 0;
  }
}




