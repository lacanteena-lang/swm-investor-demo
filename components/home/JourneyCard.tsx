"use client";

import { useEffect, useState } from "react";
import { Clock, MapPin, Navigation, X } from "lucide-react";

type Props = {
  setActiveTab: (tab: string) => void;
};

const DESTINATION_STORAGE_KEY = "swm_home_destination";

export default function JourneyCard({ setActiveTab }: Props) {
  const [destination, setDestination] = useState("");
  const [draftDestination, setDraftDestination] = useState("");
  const [showDestination, setShowDestination] = useState(false);

  const [eta, setEta] = useState("");
  const [draftEta, setDraftEta] = useState("");
  const [showEta, setShowEta] = useState(false);
  const [showAiReady, setShowAiReady] = useState(false);
  const [showRouteSafe, setShowRouteSafe] = useState(false);

  // Restore the saved destination after the app loads.
  useEffect(() => {
    try {
      const savedDestination = window.localStorage.getItem(
        DESTINATION_STORAGE_KEY
      );

      if (savedDestination) {
        setDestination(savedDestination);
      }

      const savedEta = window.localStorage.getItem("swm_home_eta");

      if (savedEta) {
        setEta(savedEta);
      }
    } catch {
      // Keep the prototype working even if browser storage is unavailable.
    }
  }, []);

  const openDestination = () => {
    setDraftDestination(destination);
    setShowDestination(true);
  };

  const saveDestination = () => {
    const value = draftDestination.trim();

    if (!value) {
      alert("Please enter a destination.");
      return;
    }

    setDestination(value);

    try {
      window.localStorage.setItem(DESTINATION_STORAGE_KEY, value);
    } catch {
      // The visible state is still updated if storage is unavailable.
    }

    setShowDestination(false);
  };

  const openEta = () => {
    setDraftEta(eta);
    setShowEta(true);
  };

  const saveEta = () => {
    const value = draftEta.trim();

    if (!value) {
      alert("Please enter an ETA.");
      return;
    }

    setEta(value);

    try {
      window.localStorage.setItem("swm_home_eta", value);
    } catch {
      // The visible state is still updated if storage is unavailable.
    }

    setShowEta(false);
  };

  return (
    <>
      <div className="h-full">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
              START SAFE JOURNEY
            </p>

            <h2 className="mt-1 text-[17px] font-bold leading-tight text-white">
              Ready to Protect
              <br />
              You
            </h2>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/55 bg-gradient-to-br from-[#0878D8] via-[#0758B8] to-[#063A83] shadow-[0_0_24px_rgba(0,174,255,0.45)]">
            <Navigation
              size={19}
              strokeWidth={2.2}
              className="text-cyan-100"
            />
          </div>
        </div>

        {/* DESTINATION + ETA */}

        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={openDestination}
            aria-label="Select destination"
            className="rounded-2xl border border-cyan-300/55 bg-gradient-to-br from-[#0878D8] via-[#0758B8] to-[#063A83] p-3 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_25px_rgba(0,110,255,0.28)] transition-all duration-200 hover:brightness-110 active:scale-[0.99]"
          >
            <div className="flex items-center gap-2">
              <MapPin
                size={12}
                strokeWidth={2.4}
                className="text-cyan-100"
              />

              <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/80">
                DESTINATION
              </span>
            </div>

            <p className="mt-2 line-clamp-2 text-[12px] font-semibold leading-4 text-white">
              {destination || (
                <>
                  Select
                  <br />
                  Destination
                </>
              )}
            </p>
          </button>

          <button
            type="button"
            onClick={openEta}
            aria-label="Set ETA"
            className="rounded-2xl border border-cyan-300/55 bg-gradient-to-br from-[#0878D8] via-[#0758B8] to-[#063A83] p-3 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_25px_rgba(0,110,255,0.28)] transition-all duration-200 hover:brightness-110 active:scale-[0.99]"
          >
            <div className="flex items-center gap-2">
              <Clock
                size={12}
                strokeWidth={2.4}
                className="text-cyan-100"
              />

              <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/80">
                ETA
              </span>
            </div>

            <p className="mt-2 text-[15px] font-bold text-white">
              {eta || "--:--"}
            </p>
          </button>
        </div>

        {/* AI READY + ROUTE SAFE */}

        <div className="mt-3 flex gap-2">
          <button
            type="button"
            aria-label="AI Ready"
            onClick={() => setShowAiReady(true)}
            className="flex-1 rounded-xl border border-cyan-300/55 bg-gradient-to-br from-[#0878D8] via-[#0758B8] to-[#063A83] py-2 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_20px_rgba(0,110,255,0.22)] transition-all duration-200 hover:brightness-110 active:scale-[0.99]"
          >
            <span className="text-[10px] font-semibold text-white">
              AI READY
            </span>
          </button>

          <button
            type="button"
            aria-label="Route Safe"
            onClick={() => setShowRouteSafe(true)}
            className="flex-1 rounded-xl border border-cyan-300/55 bg-gradient-to-br from-[#0878D8] via-[#0758B8] to-[#063A83] py-2 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_20px_rgba(0,110,255,0.22)] transition-all duration-200 hover:brightness-110 active:scale-[0.99]"
          >
            <span className="text-[10px] font-semibold text-white">
              ROUTE SAFE
            </span>
          </button>
        </div>

        {/* START JOURNEY */}

        <button
          type="button"
          aria-label="Start Journey"
          onClick={() => setActiveTab("journey")}
          className="mt-3 block h-[10px] w-full cursor-pointer rounded-full border border-cyan-300/55 bg-gradient-to-br from-[#0878D8] via-[#0758B8] to-[#063A83] shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_20px_rgba(0,110,255,0.22)] transition-all duration-300 hover:brightness-110 active:scale-[0.99]"
        />
      </div>

      {/* ROUTE SAFE MODAL */}

      {showRouteSafe && (
        <div
          className="fixed inset-0 z-[230] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
          onClick={() => setShowRouteSafe(false)}
        >
          <div
            className="w-full max-w-[340px] rounded-[26px] border border-white/10 bg-[#0d1420] p-5 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
                  SAFE JOURNEY
                </p>

                <h3 className="mt-2 text-[22px] font-bold text-white">
                  Route Safe
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-white/45">
                  SWM is ready to support your journey with your saved
                  destination and ETA.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowRouteSafe(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70"
                aria-label="Close Route Safe"
              >
                <X size={17} />
              </button>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40">
                  Destination
                </p>
                <p className="mt-2 text-[12px] font-semibold text-white">
                  {destination || "Not set"}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40">
                  ETA
                </p>
                <p className="mt-2 text-[12px] font-semibold text-white">
                  {eta || "Not set"}
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                  <span className="text-[10px] font-semibold text-emerald-300">
                    Route Safety Ready
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowRouteSafe(false)}
              className="mt-5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[10px] font-semibold text-white/60 transition hover:bg-white/[0.08]"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* AI READY MODAL */}

      {showAiReady && (
        <div
          className="fixed inset-0 z-[220] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
          onClick={() => setShowAiReady(false)}
        >
          <div
            className="w-full max-w-[340px] rounded-[26px] border border-white/10 bg-[#0d1420] p-5 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
                  PERSONAL SAFETY AI
                </p>

                <h3 className="mt-2 text-[22px] font-bold text-white">
                  AI Ready
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-white/45">
                  Your AI Safety Concierge is ready to assist with supported
                  safety workflows.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowAiReady(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70"
                aria-label="Close AI Ready"
              >
                <X size={17} />
              </button>
            </div>

            <div className="mt-5 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                <span className="text-[10px] font-semibold text-emerald-300">
                  AI Concierge Online
                </span>
              </div>

              <p className="mt-2 text-[9px] leading-4 text-white/40">
                Ready to support your journey.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAiReady(false)}
              className="mt-5 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[10px] font-semibold text-white/60 transition hover:bg-white/[0.08]"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ETA MODAL */}

      {showEta && (
        <div className="fixed inset-0 z-[210] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm">
          <div className="w-full max-w-[340px] rounded-[26px] border border-white/10 bg-[#0d1420] p-5 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
                  SAFE JOURNEY
                </p>

                <h3 className="mt-2 text-[22px] font-bold text-white">
                  Set ETA
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-white/45">
                  Enter the estimated arrival time for this journey.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowEta(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70"
                aria-label="Close ETA"
              >
                <X size={17} />
              </button>
            </div>

            <div className="mt-5">
              <div className="relative">
                <Clock
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300"
                />

                <input
                  autoFocus
                  value={draftEta}
                  onChange={(event) => setDraftEta(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") saveEta();
                  }}
                  placeholder="e.g. 10:30 PM"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-[11px] text-white outline-none placeholder:text-white/25 focus:border-cyan-400/30"
                />
              </div>

              <button
                type="button"
                onClick={saveEta}
                className="mt-4 w-full rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-[10px] font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
              >
                Save ETA
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DESTINATION MODAL */}

      {showDestination && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm">
          <div className="w-full max-w-[340px] rounded-[26px] border border-white/10 bg-[#0d1420] p-5 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
                  SAFE JOURNEY
                </p>

                <h3 className="mt-2 text-[22px] font-bold text-white">
                  Select Destination
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-white/45">
                  Enter where you are going so SWM can prepare your journey.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowDestination(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70"
                aria-label="Close destination"
              >
                <X size={17} />
              </button>
            </div>

            <div className="mt-5">
              <div className="relative">
                <MapPin
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300"
                />

                <input
                  autoFocus
                  value={draftDestination}
                  onChange={(event) =>
                    setDraftDestination(event.target.value)
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      saveDestination();
                    }
                  }}
                  placeholder="Enter destination"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-[11px] text-white outline-none placeholder:text-white/25 focus:border-cyan-400/30"
                />
              </div>

              <button
                type="button"
                onClick={saveDestination}
                className="mt-4 w-full rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-[10px] font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
              >
                Save Destination
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}