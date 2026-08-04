"use client";

import { useState } from "react";

import OnlineHeader from "./OnlineHeader";
import StatusPills from "./StatusPills";
import LogoCard from "./LogoCard";
import JourneyCards from "./JourneyCards";
import ViewServicesButton from "./ViewServicesButton";

import AIConciergeCard from "./AIConciergeCard";
import JourneyCard from "./JourneyCard";
import EnterpriseCard from "./EnterpriseCard";
import QuickActions from "./QuickActions";

export default function PremiumHome() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="
        flex
        h-full
        flex-col
        overflow-y-auto
        no-scrollbar
        px-5
        pt-6
        pb-36
      "
    >
      <OnlineHeader />

      <StatusPills />

      <LogoCard />

      <JourneyCards />

      <ViewServicesButton
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      />

      {expanded && (
        <div className="mt-8 space-y-6">

          <AIConciergeCard />

          <JourneyCard />

          <EnterpriseCard />

          <QuickActions />

        </div>
      )}

    </div>
  );
}