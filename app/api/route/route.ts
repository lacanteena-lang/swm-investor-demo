import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const start = searchParams.get("start");
  const end = searchParams.get("end");
  const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;

  if (!start || !end || !apiKey) {
    return NextResponse.json(
      { error: "Missing route parameters or Geoapify API key" },
      { status: 400 }
    );
  }

  try {
    const [startLng, startLat] = start.split(",");
    const [endLng, endLat] = end.split(",");

    if (!startLng || !startLat || !endLng || !endLat) {
      return NextResponse.json(
        { error: "Invalid route coordinates" },
        { status: 400 }
      );
    }

    const waypoints = `${startLat},${startLng}|${endLat},${endLng}`;

    const response = await fetch(
      `https://api.geoapify.com/v1/routing?waypoints=${encodeURIComponent(
        waypoints
      )}&mode=drive&format=geojson&details=instruction_details&lang=en&apiKey=${encodeURIComponent(
        apiKey
      )}`
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error("Geoapify routing error:", errorText);

      return NextResponse.json(
        {
          error: "Geoapify routing request failed",
          details: errorText,
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    const feature = data?.features?.[0];

    const rawCoordinates = feature?.geometry?.coordinates ?? [];
    const geometryType = feature?.geometry?.type;

    const coordinates: [number, number][] =
      geometryType === "MultiLineString"
        ? rawCoordinates.flat()
        : rawCoordinates;

    const instructions: Array<{
      text: string;
      type: string;
      location: [number, number];
    }> = [];

    const maneuvers: Array<{
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
    }> = [];

    const legs = feature?.properties?.legs ?? [];

    legs.forEach((leg: any, legIndex: number) => {
      const legCoordinates =
        geometryType === "MultiLineString"
          ? rawCoordinates[legIndex] ?? []
          : rawCoordinates;

      (leg?.steps ?? []).forEach((step: any) => {
        const coordinate = legCoordinates[step.from_index];

        const text =
          step?.instruction?.text ??
          step?.instruction?.transition_instruction ??
          "";

        if (
          Array.isArray(coordinate) &&
          coordinate.length >= 2 &&
          typeof text === "string" &&
          text.trim()
        ) {
          const instructionType =
            step?.instruction?.type ?? "Straight";

          instructions.push({
            text: text.trim(),
            type: instructionType,
            location: [coordinate[0], coordinate[1]],
          });

          maneuvers.push({
            text: text.trim(),
            type: instructionType,
            location: [coordinate[0], coordinate[1]],
            fromIndex:
              typeof step?.from_index === "number"
                ? step.from_index
                : -1,
            toIndex:
              typeof step?.to_index === "number"
                ? step.to_index
                : -1,
            roadName:
              typeof step?.name === "string"
                ? step.name
                : null,
            roadClass:
              typeof step?.road_class === "string"
                ? step.road_class
                : null,
            beginBearing:
              typeof step?.begin_bearing === "number"
                ? step.begin_bearing
                : null,
            endBearing:
              typeof step?.end_bearing === "number"
                ? step.end_bearing
                : null,
            distanceMeters:
              typeof step?.distance === "number"
                ? step.distance
                : null,
            durationSeconds:
              typeof step?.time === "number"
                ? step.time
                : null,
          });
        }
      });
    });

    return NextResponse.json({
      coordinates,
      instructions,
      maneuvers,
    });
  } catch (error) {
    console.error("Route error:", error);

    return NextResponse.json(
      { error: "Unable to fetch route" },
      { status: 500 }
    );
  }
}
