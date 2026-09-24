import { NextResponse } from "next/server";

type GPSPoint = {
  latitude: number;
  longitude: number;
  timestamp: number;
  heading?: number | null;
};

export async function POST(request: Request) {
  const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing Geoapify API key" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const points = body?.points as GPSPoint[];

    if (!Array.isArray(points) || points.length < 2) {
      return NextResponse.json(
        { error: "At least two GPS points are required" },
        { status: 400 }
      );
    }

    const waypoints = points.map((point) => ({
      location: [point.longitude, point.latitude],
      timestamp: new Date(point.timestamp).toISOString(),
      ...(typeof point.heading === "number"
        ? { bearing: point.heading }
        : {}),
    }));

    const response = await fetch(
      `https://api.geoapify.com/v1/mapmatching?apiKey=${encodeURIComponent(
        apiKey
      )}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mode: "drive",
          waypoints,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error("Geoapify map matching error:", errorText);

      return NextResponse.json(
        {
          error: "Geoapify map matching request failed",
          details: errorText,
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Map matching error:", error);

    return NextResponse.json(
      { error: "Unable to perform map matching" },
      { status: 500 }
    );
  }
}
