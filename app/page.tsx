"use client";

import { useState } from "react";

import { NavigationProvider } from "../components/navigation/NavigationContext";
import NavigationStack from "../components/navigation/NavigationStack";

import AppShell from "../components/layout/AppShell";

import HomeScreen from "../components/home/HomeScreen";
import AIHome from "../components/ai/AIHome";
import JourneyHome from "../components/journey/JourneyHome";
import SOSHome from "../components/sos/SOSHome";
import ProfileHome from "../components/profile/ProfileHome";

export default function Page() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <NavigationProvider navigate={setActiveTab}>
      <AppShell>
        <NavigationStack screenKey={activeTab}>

          {activeTab === "home" && (
            <HomeScreen
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab === "ai" && (
            <AIHome
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab === "journey" && (
            <JourneyHome
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab === "sos" && (
            <SOSHome
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab === "profile" && (
            <ProfileHome
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab !== "home" &&
            activeTab !== "ai" &&
            activeTab !== "journey" &&
            activeTab !== "sos" &&
            activeTab !== "profile" && (
              <div className="flex h-full items-center justify-center text-center text-white">
                <div>
                  <h1 className="text-4xl font-bold">
                    {activeTab.toUpperCase()}
                  </h1>

                  <p className="mt-4 text-white/60">
                    Screen coming next...
                  </p>
                </div>
              </div>
            )}

        </NavigationStack>
      </AppShell>
    </NavigationProvider>
  );
}