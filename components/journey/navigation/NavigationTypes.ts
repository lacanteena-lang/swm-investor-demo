export type GPSPosition = {
  latitude: number;
  longitude: number;
  accuracy: number;
  speed: number | null;
  heading: number | null;
  timestamp: number;
};

export type GPSHistoryPoint = GPSPosition & {
  sequence: number;
};

export type NavigationPosition = {
  raw: GPSPosition;
  history: GPSHistoryPoint[];
  quality: "excellent" | "good" | "usable" | "poor" | "invalid";
};
