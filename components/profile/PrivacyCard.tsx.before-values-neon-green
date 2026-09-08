"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Fingerprint,
  MapPinned,
  Bell,
  Languages,
  Moon,
  X,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import StatusBadge from "../ui/StatusBadge";

type SettingKey =
  | "biometrics"
  | "location"
  | "notifications"
  | "language"
  | "appearance";

type SettingsState = {
  biometrics: boolean;
  location: "Always" | "While Using" | "Off";
  notifications: boolean;
  language: "English" | "Hindi";
  appearance: "Dark Mode" | "Light Mode";
};

const SETTINGS_KEY = "swm-privacy-settings";

const DEFAULT_SETTINGS: SettingsState = {
  biometrics: true,
  location: "Always",
  notifications: true,
  language: "English",
  appearance: "Dark Mode",
};

export default function PrivacyCard() {
  const [settingsState, setSettingsState] =
    useState<SettingsState>(DEFAULT_SETTINGS);

  const [activeSetting, setActiveSetting] =
    useState<SettingKey | null>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(SETTINGS_KEY);

      if (saved) {
        const parsed = JSON.parse(saved);

        setSettingsState({
          ...DEFAULT_SETTINGS,
          ...parsed,
        });
      }
    } catch (error) {
      console.error("Unable to load privacy settings:", error);
    }
  }, []);

  const updateSettings = (next: SettingsState) => {
    setSettingsState(next);
    window.localStorage.setItem(
      SETTINGS_KEY,
      JSON.stringify(next),
    );
  };

  const openSetting = (key: SettingKey) => {
    setActiveSetting(key);
  };

  const closeSetting = () => {
    setActiveSetting(null);
  };

  const settingRows = [
    {
      key: "biometrics" as const,
      icon: Fingerprint,
      title: "Face ID / Biometrics",
      value: settingsState.biometrics ? "Enabled" : "Disabled",
    },
    {
      key: "location" as const,
      icon: MapPinned,
      title: "Location Sharing",
      value: settingsState.location,
    },
    {
      key: "notifications" as const,
      icon: Bell,
      title: "Notifications",
      value: settingsState.notifications ? "Enabled" : "Disabled",
    },
    {
      key: "language" as const,
      icon: Languages,
      title: "Language",
      value: settingsState.language,
    },
    {
      key: "appearance" as const,
      icon: Moon,
      title: "Appearance",
      value: settingsState.appearance,
    },
  ];

  return (
    <>
      <GlassCard>
        <div className="w-full min-w-0 px-3">

          {/* Header */}

          <div className="flex items-start justify-between gap-4">

            <div className="min-w-0">

              <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
                PRIVACY & SECURITY
              </p>

              <h2 className="mt-2 text-[23px] font-bold tracking-tight text-white">
                Privacy Settings
              </h2>

              <p className="mt-2 text-[10px] font-semibold leading-5 text-red-400">
                Control how your safety information, location and notifications
                are managed.
              </p>

            </div>

            <StatusBadge
              label="Protected"
              color="green"
            />

          </div>

          {/* Settings */}

          <div className="mt-6 space-y-3">

            {settingRows.map(
              ({ key, icon: Icon, title, value }, index) => (

                <motion.button
                  type="button"
                  key={key}
                  onClick={() => openSetting(key)}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.07,
                    duration: 0.3,
                  }}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-3
                    rounded-2xl
                    border
                    border-white/5
                    bg-white/[0.04]
                    p-4
                    text-left
                    transition
                    hover:border-cyan-400/20
                    hover:bg-white/[0.06]
                    active:scale-[0.99]
                  "
                >

                  <div className="flex min-w-0 items-center gap-3">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-cyan-400/10
                      "
                    >

                      <Icon
                        size={20}
                        strokeWidth={1.8}
                        className="text-cyan-300"
                      />

                    </div>

                    <span className="truncate text-[12px] font-semibold text-white">
                      {title}
                    </span>

                  </div>

                  <div className="flex shrink-0 items-center gap-2">

                    <motion.span
                      animate={{
                        opacity: [0.35, 1, 0.35],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-emerald-400
                        shadow-[0_0_10px_rgba(52,211,153,0.8)]
                      "
                    />

                    <span className="text-[10px] font-medium text-white/50">
                      {value}
                    </span>

                  </div>

                </motion.button>

              ),
            )}

          </div>

          {/* Security State */}

          <div className="mt-5 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] px-4 py-3">

            <div className="flex items-center gap-2">

              <motion.span
                animate={{
                  opacity: [0.35, 1, 0.35],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_10px_rgba(52,211,153,0.8)]
                "
              />

              <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-300">
                Privacy protection active
              </span>

            </div>

          </div>

        </div>
      </GlassCard>

      {/* Setting Modal */}

      {activeSetting && (

        <div
          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            bg-black/70
            px-5
            backdrop-blur-sm
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            className="
              w-full
              max-w-[340px]
              rounded-[26px]
              border
              border-white/10
              bg-[#0d1420]
              p-5
              shadow-2xl
            "
          >

            <div className="flex items-start justify-between gap-4">

              <div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
                  PRIVACY & SECURITY
                </p>

                <h3 className="mt-2 text-[21px] font-bold text-white">
                  {settingRows.find(
                    (setting) => setting.key === activeSetting,
                  )?.title}
                </h3>

              </div>

              <button
                type="button"
                onClick={closeSetting}
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  text-white/70
                "
              >
                <X size={17} />
              </button>

            </div>

            <div className="mt-5">

              {/* Biometrics */}

              {activeSetting === "biometrics" && (

                <div>

                  <p className="text-[10px] leading-5 text-white/45">
                    Use biometric protection for supported safety actions.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      updateSettings({
                        ...settingsState,
                        biometrics: !settingsState.biometrics,
                      })
                    }
                    className="
                      mt-4
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-white/5
                      bg-white/[0.04]
                      p-4
                    "
                  >

                    <span className="text-[11px] font-semibold text-white">
                      Biometric Protection
                    </span>

                    <span
                      className={`text-[10px] font-semibold ${
                        settingsState.biometrics
                          ? "text-emerald-300"
                          : "text-red-400"
                      }`}
                    >
                      {settingsState.biometrics
                        ? "Enabled"
                        : "Disabled"}
                    </span>

                  </button>

                  <p className="mt-3 text-[9px] leading-4 text-white/30">
                    Prototype setting. Actual device biometric authentication
                    will be connected during production implementation.
                  </p>

                </div>

              )}

              {/* Location */}

              {activeSetting === "location" && (

                <div>

                  <p className="text-[10px] leading-5 text-white/45">
                    Choose when SWM may share your location.
                  </p>

                  <div className="mt-4 space-y-2">

                    {(
                      [
                        "Always",
                        "While Using",
                        "Off",
                      ] as SettingsState["location"][]
                    ).map((option) => (

                      <button
                        type="button"
                        key={option}
                        onClick={() => {
                          updateSettings({
                            ...settingsState,
                            location: option,
                          });
                          closeSetting();
                        }}
                        className="
                          flex
                          w-full
                          items-center
                          justify-between
                          rounded-2xl
                          border
                          border-white/5
                          bg-white/[0.04]
                          p-4
                          text-left
                        "
                      >

                        <span className="text-[11px] font-semibold text-white">
                          {option}
                        </span>

                        {settingsState.location === option && (
                          <span className="text-[10px] font-semibold text-emerald-300">
                            Selected
                          </span>
                        )}

                      </button>

                    ))}

                  </div>

                </div>

              )}

              {/* Notifications */}

              {activeSetting === "notifications" && (

                <div>

                  <p className="text-[10px] leading-5 text-white/45">
                    Control SWM safety and notification alerts.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      updateSettings({
                        ...settingsState,
                        notifications: !settingsState.notifications,
                      })
                    }
                    className="
                      mt-4
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-white/5
                      bg-white/[0.04]
                      p-4
                    "
                  >

                    <span className="text-[11px] font-semibold text-white">
                      Safety Notifications
                    </span>

                    <span
                      className={`text-[10px] font-semibold ${
                        settingsState.notifications
                          ? "text-emerald-300"
                          : "text-red-400"
                      }`}
                    >
                      {settingsState.notifications
                        ? "Enabled"
                        : "Disabled"}
                    </span>

                  </button>

                </div>

              )}

              {/* Language */}

              {activeSetting === "language" && (

                <div>

                  <p className="text-[10px] leading-5 text-white/45">
                    Select your preferred SWM language.
                  </p>

                  <div className="mt-4 space-y-2">

                    {(["English", "Hindi"] as SettingsState["language"][]).map(
                      (option) => (

                        <button
                          type="button"
                          key={option}
                          onClick={() => {
                            updateSettings({
                              ...settingsState,
                              language: option,
                            });
                            closeSetting();
                          }}
                          className="
                            flex
                            w-full
                            items-center
                            justify-between
                            rounded-2xl
                            border
                            border-white/5
                            bg-white/[0.04]
                            p-4
                            text-left
                          "
                        >

                          <span className="text-[11px] font-semibold text-white">
                            {option}
                          </span>

                          {settingsState.language === option && (
                            <span className="text-[10px] font-semibold text-emerald-300">
                              Selected
                            </span>
                          )}

                        </button>

                      ),
                    )}

                  </div>

                </div>

              )}

              {/* Appearance */}

              {activeSetting === "appearance" && (

                <div>

                  <p className="text-[10px] leading-5 text-white/45">
                    Choose the appearance used by the prototype.
                  </p>

                  <div className="mt-4 space-y-2">

                    {(
                      ["Dark Mode", "Light Mode"] as SettingsState["appearance"][]
                    ).map((option) => (

                      <button
                        type="button"
                        key={option}
                        onClick={() => {
                          updateSettings({
                            ...settingsState,
                            appearance: option,
                          });
                          closeSetting();
                        }}
                        className="
                          flex
                          w-full
                          items-center
                          justify-between
                          rounded-2xl
                          border
                          border-white/5
                          bg-white/[0.04]
                          p-4
                          text-left
                        "
                      >

                        <span className="text-[11px] font-semibold text-white">
                          {option}
                        </span>

                        {settingsState.appearance === option && (
                          <span className="text-[10px] font-semibold text-emerald-300">
                            Selected
                          </span>
                        )}

                      </button>

                    ))}

                  </div>

                </div>

              )}

            </div>

          </motion.div>

        </div>

      )}

    </>
  );
}