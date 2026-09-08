import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const query = request.nextUrl.searchParams.get("q")?.trim();

    if (!query) {
      return NextResponse.json(
        { error: "Destination is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEOAPIFY_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Geoapify API key is not configured." },
        { status: 500 }
      );
    }

    const url = new URL(
      "https://api.geoapify.com/v1/geocode/search"
    );

    url.searchParams.set("text", query);
    url.searchParams.set("apiKey", apiKey);
    url.searchParams.set("limit", "5");
    url.searchParams.set("filter", "countrycode:in");

    const response = await fetch(url.toString(), {
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Geoapify geocoding error:", data);

      return NextResponse.json(
        { error: data?.message || "Unable to find destination." },
        { status: 500 }
      );
    }

    const features = Array.isArray(data?.features) ? data.features : [];

    if (!features.length) {
      return NextResponse.json(
        { error: "Destination could not be found." },
        { status: 404 }
      );
    }
const results = features.map((feature: any) => {
  const [longitude, latitude] = feature.geometry.coordinates;

  return {
    latitude,
    longitude,
    formatted: feature.properties?.formatted || query,
  };
});
return NextResponse.json({ results });    

   
  } catch (error) {
    console.error("Geocoding API error:", error);

    return NextResponse.json(
      { error: "Unable to find destination." },
      { status: 500 }
    );
  }
}