import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    const { data: incidents, error: incidentError } =
      await supabaseAdmin
        .from("incident_timeline")
        .select(
          "id, user_id, title, description, created_at, notification_status, notification_contact_count, concierge_status"
        )
        .in("concierge_status", ["activated", "assigned"])
        .order("created_at", { ascending: false });

    if (incidentError) {
      console.error("Unable to load Concierge incidents:", {
        message: incidentError.message,
        details: incidentError.details,
        hint: incidentError.hint,
        code: incidentError.code,
      });

      return NextResponse.json(
        { error: "Unable to load Concierge incidents." },
        { status: 500 }
      );
    }

    const userIds = [
      ...new Set(
        (incidents ?? [])
          .map((incident) => incident.user_id)
          .filter(Boolean)
      ),
    ];

    let profiles: { id: string; mobile: string | null }[] = [];

    if (userIds.length > 0) {
      const { data: profileData, error: profileError } =
        await supabaseAdmin
          .from("profiles")
          .select("id, mobile")
          .in("id", userIds);

      if (profileError) {
        console.error("Unable to load Concierge user profiles:", {
          message: profileError.message,
          details: profileError.details,
          hint: profileError.hint,
          code: profileError.code,
        });

        return NextResponse.json(
          { error: "Unable to load user contact details." },
          { status: 500 }
        );
      }

      profiles = profileData ?? [];
    }

    const profileMap = new Map(
      profiles.map((profile) => [profile.id, profile.mobile])
    );

    const result = (incidents ?? []).map((incident) => ({
      ...incident,
      mobile: profileMap.get(incident.user_id) ?? null,
    }));

    return NextResponse.json({
      success: true,
      incidents: result,
    });
  } catch (error) {
    console.error("Concierge GET error:", error);

    return NextResponse.json(
      { error: "Unable to load Concierge incidents." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { incidentId, userId, contactCount, latitude, longitude } = body;

    if (!incidentId) {
      return NextResponse.json(
        { error: "Incident ID is required." },
        { status: 400 }
      );
    }

    const { error: updateError } = await supabaseAdmin
      .from("incident_timeline")
      .update({
        concierge_status: "activated",
      })
      .eq("id", incidentId);

    if (updateError) {
      console.error("Unable to activate Human Concierge:", {
        message: updateError.message,
        details: updateError.details,
        hint: updateError.hint,
        code: updateError.code,
      });

      return NextResponse.json(
        {
          error: "Unable to activate Human Concierge.",
          details: updateError.message,
        },
        { status: 500 }
      );
    }

    console.log("HUMAN CONCIERGE ACTIVATED:", {
      incidentId,
      userId,
      contactCount,
      latitude,
      longitude,
    });

    return NextResponse.json({
      success: true,
      conciergeStatus: "activated",
      incidentId,
      message: "Human Concierge has been alerted.",
    });
  } catch (error) {
    console.error("Concierge API error:", error);

    return NextResponse.json(
      { error: "Unable to activate Human Concierge." },
      { status: 500 }
    );
  }
}
