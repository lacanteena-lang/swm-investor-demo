export type ManeuverType =
  | "straight"
  | "slight_left"
  | "slight_right"
  | "left"
  | "right"
  | "sharp_left"
  | "sharp_right"
  | "u_turn"
  | "merge"
  | "roundabout"
  | "exit"
  | "arrival";

export type Maneuver = {
  id: string;
  type: ManeuverType;
  text: string;
  latitude: number;
  longitude: number;
  roadName: string | null;
  routeIndex: number;
  fromRouteIndex: number;
  toRouteIndex: number;
  distanceMeters: number | null;
  durationSeconds: number | null;
  completed: boolean;
};

export type GeoapifyManeuver = {
  text: string;
  type: string;
  location: [number, number];
  fromIndex: number;
  toIndex: number;
  roadName: string | null;
  roadClass: string | null;
  beginBearing: number | null;
  endBearing: number | null;
  distanceMeters: number | null;
  durationSeconds: number | null;
};

export type ManeuverState = {
  currentIndex: number;
  completedCount: number;
  remainingCount: number;
};

function mapManeuverType(type: string): ManeuverType {
  const normalized = type.toLowerCase();

  if (normalized.includes("destination")) {
    return "arrival";
  }

  if (normalized.includes("u_turn") || normalized.includes("uturn")) {
    return "u_turn";
  }

  if (normalized.includes("sharp") && normalized.includes("left")) {
    return "sharp_left";
  }

  if (normalized.includes("sharp") && normalized.includes("right")) {
    return "sharp_right";
  }

  if (normalized.includes("slight") && normalized.includes("left")) {
    return "slight_left";
  }

  if (normalized.includes("slight") && normalized.includes("right")) {
    return "slight_right";
  }

  if (normalized.includes("roundabout")) {
    return "roundabout";
  }

  if (normalized.includes("merge")) {
    return "merge";
  }

  if (normalized.includes("exit")) {
    return "exit";
  }

  if (normalized.includes("left")) {
    return "left";
  }

  if (normalized.includes("right")) {
    return "right";
  }

  return "straight";
}

export function createManeuversFromGeoapify(
  source: GeoapifyManeuver[]
): Maneuver[] {
  return source
    .filter(
      (item) =>
        Array.isArray(item.location) &&
        item.location.length >= 2 &&
        typeof item.text === "string" &&
        item.text.trim()
    )
    .map((item, index) => ({
      id: `maneuver-${index}`,
      type: mapManeuverType(item.type),
      text: item.text.trim(),
      latitude: item.location[1],
      longitude: item.location[0],
      roadName: item.roadName ?? null,
      routeIndex:
        typeof item.fromIndex === "number"
          ? item.fromIndex
          : 0,
      fromRouteIndex:
        typeof item.fromIndex === "number"
          ? item.fromIndex
          : 0,
      toRouteIndex:
        typeof item.toIndex === "number"
          ? item.toIndex
          : typeof item.fromIndex === "number"
            ? item.fromIndex
            : 0,
      distanceMeters:
        typeof item.distanceMeters === "number"
          ? item.distanceMeters
          : null,
      durationSeconds:
        typeof item.durationSeconds === "number"
          ? item.durationSeconds
          : null,
      completed: false,
    }));
}

export function createManeuverState(
  maneuvers: Maneuver[]
): ManeuverState {
  return {
    currentIndex: 0,
    completedCount: 0,
    remainingCount: maneuvers.length,
  };
}

export function completeCurrentManeuver(
  state: ManeuverState,
  totalManeuvers: number
): ManeuverState {
  const nextIndex = Math.min(
    state.currentIndex + 1,
    Math.max(totalManeuvers - 1, 0)
  );

  const completedCount = Math.min(
    state.completedCount + 1,
    totalManeuvers
  );

  return {
    currentIndex: nextIndex,
    completedCount,
    remainingCount: Math.max(
      totalManeuvers - completedCount,
      0
    ),
  };
}
