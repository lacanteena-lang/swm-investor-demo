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

type Props = {
  setActiveTab: (tab: string) => void;
};

export default function PremiumHome({ setActiveTab }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative h-full overflow-hidden">
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

          <JourneyCard setActiveTab={setActiveTab} />

          <EnterpriseCard />

          <QuickActions />
        </div>
      )}
    </div>
  );
}