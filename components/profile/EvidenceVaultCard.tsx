"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FolderLock,
  Camera,
  Video,
  Mic,
  FileText,
  Lock,
  Plus,
  Clock,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import StatusBadge from "../ui/StatusBadge";
import { supabase } from "../../lib/supabase";

type TimelineEvent = {
  id: string;
  title: string;
  description: string;
  created_at: string;
};

export default function EvidenceVaultCard() {
  const photoInputRef = useRef<HTMLInputElement | null>(null);
  const videoInputRef = useRef<HTMLInputElement | null>(null);
  const audioInputRef = useRef<HTMLInputElement | null>(null);

  const [photoCount, setPhotoCount] = useState(0);
  const [videoCount, setVideoCount] = useState(0);
  const [audioCount, setAudioCount] = useState(0);
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([]);
  const [showTimeline, setShowTimeline] = useState(false);
  const [timelineTitle, setTimelineTitle] = useState("");
  const [timelineDescription, setTimelineDescription] = useState("");

  const getCurrentUser = async () => {
    let { data } = await supabase.auth.getUser();

    if (!data.user) {
      const { data: anonymousData, error } =
        await supabase.auth.signInAnonymously();

      if (error) throw error;

      return anonymousData.user;
    }

    return data.user;
  };

  const loadPhotoCount = async () => {
    try {
      const user = await getCurrentUser();
      if (!user) return;

      const { data, error } = await supabase.storage
        .from("evidence-vault")
        .list(user.id, {
          limit: 1000,
          sortBy: { column: "created_at", order: "desc" },
        });

      if (error) throw error;

      setPhotoCount((data ?? []).filter((item) => item.name).length);
    } catch (error) {
      console.error("Unable to load evidence photos:", error);
    }
  };

  const loadVideoCount = async () => {
    try {
      const user = await getCurrentUser();
      if (!user) return;

      const { data, error } = await supabase.storage
        .from("evidence-vault")
        .list(`${user.id}/videos`, {
          limit: 1000,
          sortBy: { column: "created_at", order: "desc" },
        });

      if (error) throw error;

      setVideoCount((data ?? []).filter((item) => item.name).length);
    } catch (error) {
      console.error("Unable to load evidence videos:", error);
    }
  };

  const loadAudioCount = async () => {
    try {
      const user = await getCurrentUser();
      if (!user) return;

      const { data, error } = await supabase.storage
        .from("evidence-vault")
        .list(`${user.id}/audio`, {
          limit: 1000,
          sortBy: { column: "created_at", order: "desc" },
        });

      if (error) throw error;

      setAudioCount((data ?? []).filter((item) => item.name).length);
    } catch (error) {
      console.error("Unable to load evidence audio:", error);
    }
  };

  const loadTimelineEvents = async () => {
    try {
      const user = await getCurrentUser();
      if (!user) return;

      const { data, error } = await supabase
        .from("incident_timeline")
        .select("id, title, description, created_at")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;

      setTimelineEvents(data ?? []);
    } catch (error) {
      console.error("Unable to load incident timeline:", error);
    }
  };

  useEffect(() => {
    loadPhotoCount();
    loadVideoCount();
    loadAudioCount();
    loadTimelineEvents();
  }, []);

  const items = [
    {
      icon: Camera,
      title: "Photos",
      value: `${photoCount} ${photoCount === 1 ? "File" : "Files"}`,
    },
    {
      icon: Video,
      title: "Videos",
      value: `${videoCount} ${videoCount === 1 ? "File" : "Files"}`,
    },
    {
      icon: Mic,
      title: "Audio",
      value: `${audioCount} ${audioCount === 1 ? "File" : "Files"}`,
    },
    {
      icon: FileText,
      title: "Incident Timeline",
      value: timelineEvents.length === 0
        ? "Automatic"
        : `${timelineEvents.length} ${timelineEvents.length === 1 ? "Event" : "Events"}`,
    },
  ];

  const handlePhotosClick = () => {
    photoInputRef.current?.click();
  };

  const handleVideosClick = () => {
    videoInputRef.current?.click();
  };

  const handleAudioClick = () => {
    audioInputRef.current?.click();
  };

  const handleTimelineClick = () => {
    setShowTimeline((current) => !current);
  };

  const handlePhotoSelection = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    try {
      const user = await getCurrentUser();
      if (!user) throw new Error("No authenticated user.");

      for (const file of Array.from(files)) {
        const safeFileName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
        const filePath = `${user.id}/${Date.now()}-${crypto.randomUUID()}-${safeFileName}`;

        const { error } = await supabase.storage
          .from("evidence-vault")
          .upload(filePath, file, {
            cacheControl: "3600",
            contentType: file.type,
            upsert: false,
          });

        if (error) throw error;
      }

      await loadPhotoCount();

      alert(
        files.length === 1
          ? "Photo uploaded successfully."
          : `${files.length} photos uploaded successfully.`,
      );
    } catch (error) {
      console.error("Unable to upload evidence photo:", error);
      alert("Photo upload failed. Please check the Supabase Storage policy.");
    } finally {
      event.target.value = "";
    }
  };

  const handleVideoSelection = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    try {
      const user = await getCurrentUser();
      if (!user) throw new Error("No authenticated user.");

      for (const file of Array.from(files)) {
        const safeFileName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
        const filePath = `${user.id}/videos/${Date.now()}-${crypto.randomUUID()}-${safeFileName}`;

        const { error } = await supabase.storage
          .from("evidence-vault")
          .upload(filePath, file, {
            cacheControl: "3600",
            contentType: file.type,
            upsert: false,
          });

        if (error) throw error;
      }

      await loadVideoCount();

      alert(
        files.length === 1
          ? "Video uploaded successfully."
          : `${files.length} videos uploaded successfully.`,
      );
    } catch (error) {
      console.error("Unable to upload evidence video:", error);
      alert("Video upload failed. Please check the Supabase Storage policy.");
    } finally {
      event.target.value = "";
    }
  };

  const handleAudioSelection = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    try {
      const user = await getCurrentUser();
      if (!user) throw new Error("No authenticated user.");

      for (const file of Array.from(files)) {
        const safeFileName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
        const filePath = `${user.id}/audio/${Date.now()}-${crypto.randomUUID()}-${safeFileName}`;

        const { error } = await supabase.storage
          .from("evidence-vault")
          .upload(filePath, file, {
            cacheControl: "3600",
            contentType: file.type,
            upsert: false,
          });

        if (error) throw error;
      }

      await loadAudioCount();

      alert(
        files.length === 1
          ? "Audio uploaded successfully."
          : `${files.length} audio files uploaded successfully.`,
      );
    } catch (error) {
      console.error("Unable to upload evidence audio:", error);
      alert("Audio upload failed. Please check the Supabase Storage policy.");
    } finally {
      event.target.value = "";
    }
  };

  const handleAddTimelineEvent = async () => {
    if (!timelineTitle.trim()) return;

    try {
      const user = await getCurrentUser();
      if (!user) throw new Error("No authenticated user.");

      const { error } = await supabase
        .from("incident_timeline")
        .insert({
          user_id: user.id,
          title: timelineTitle.trim(),
          description: timelineDescription.trim(),
        });

      if (error) throw error;

      setTimelineTitle("");
      setTimelineDescription("");
      await loadTimelineEvents();
    } catch (error) {
      console.error("Unable to add incident timeline event:", error);
      alert(
        "Timeline event could not be saved. If the incident_timeline table has not been created yet, we will set that up next.",
      );
    }
  };

  return (
    <GlassCard>
      <div className="w-full min-w-0 px-3">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-cyan-300">
              EVIDENCE VAULT
            </p>

            <h2 className="mt-2 text-[23px] font-bold tracking-tight text-white">
              Secure Evidence Storage
            </h2>

            <p className="... font-semibold text-red-400">
              Emergency evidence is organized and protected in one secure vault.
            </p>
          </div>

          <motion.div
            animate={{
              opacity: [0.55, 1, 0.55],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10"
          >
            <FolderLock
              size={21}
              strokeWidth={1.8}
              className="text-cyan-300"
            />
          </motion.div>
        </div>

        <div className="mt-5">
          <StatusBadge
            label="Encrypted Cloud Storage"
            color="green"
          />
        </div>

        <input
          ref={photoInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handlePhotoSelection}
        />

        <input
          ref={videoInputRef}
          type="file"
          accept="video/*"
          multiple
          className="hidden"
          onChange={handleVideoSelection}
        />

        <input
          ref={audioInputRef}
          type="file"
          accept="audio/*"
          multiple
          className="hidden"
          onChange={handleAudioSelection}
        />

        <div className="mt-6 space-y-3">
          {items.map(
            ({ icon: Icon, title, value }, index) => (
              <motion.button
                type="button"
                key={title}
                onClick={
                  title === "Photos"
                    ? handlePhotosClick
                    : title === "Videos"
                      ? handleVideosClick
                      : title === "Audio"
                        ? handleAudioClick
                        : title === "Incident Timeline"
                          ? handleTimelineClick
                          : undefined
                }
                disabled={false}
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.3,
                }}
                className="flex w-full items-center justify-between gap-3 rounded-2xl border border-white/5 bg-white/[0.04] p-4 text-left disabled:cursor-default"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">
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

                <span className="shrink-0 text-[10px] font-medium text-white/45">
                  {value}
                </span>
              </motion.button>
            ),
          )}
        </div>

        {showTimeline && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.025] p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Clock size={17} className="text-cyan-300" />
                <p className="text-[11px] font-semibold text-white">
                  Incident Timeline
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowTimeline(false)}
                className="text-[10px] text-white/40"
              >
                Close
              </button>
            </div>

            <div className="mt-4 space-y-3">
              {timelineEvents.length === 0 ? (
                <p className="text-[10px] leading-5 text-white/45">
                  No timeline events yet.
                </p>
              ) : (
                timelineEvents.map((event) => (
                  <div
                    key={event.id}
                    className="rounded-xl border border-white/5 bg-white/[0.035] p-3"
                  >
                    <p className="text-[11px] font-semibold text-white">
                      {event.title}
                    </p>

                    {event.description && (
                      <p className="mt-1 text-[10px] leading-5 text-white/45">
                        {event.description}
                      </p>
                    )}

                    <p className="mt-2 text-[9px] text-white/25">
                      {new Date(event.created_at).toLocaleString()}
                    </p>
                  </div>
                ))
              )}

              <div className="border-t border-white/5 pt-3">
                <div className="flex items-center gap-2">
                  <Plus size={15} className="text-cyan-300" />
                  <p className="text-[10px] font-semibold text-white">
                    Add Timeline Event
                  </p>
                </div>

                <input
                  value={timelineTitle}
                  onChange={(event) => setTimelineTitle(event.target.value)}
                  placeholder="Event title"
                  className="mt-3 w-full rounded-xl border border-white/5 bg-white/[0.04] px-3 py-2 text-[10px] text-white outline-none placeholder:text-white/25"
                />

                <textarea
                  value={timelineDescription}
                  onChange={(event) =>
                    setTimelineDescription(event.target.value)
                  }
                  placeholder="Description (optional)"
                  rows={3}
                  className="mt-2 w-full resize-none rounded-xl border border-white/5 bg-white/[0.04] px-3 py-2 text-[10px] text-white outline-none placeholder:text-white/25"
                />

                <button
                  type="button"
                  onClick={handleAddTimelineEvent}
                  className="mt-2 w-full rounded-xl border border-cyan-400/10 bg-cyan-400/10 px-3 py-2 text-[10px] font-semibold text-cyan-200"
                >
                  Save Timeline Event
                </button>
              </div>
            </div>
          </motion.div>
        )}

        <div className="mt-5 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-4">
          <div className="flex items-start gap-3">
            <Lock
              size={19}
              strokeWidth={1.8}
              className="mt-0.5 shrink-0 text-emerald-300"
            />

            <div>
              <p className="text-[11px] font-semibold text-white">
                Protected Evidence
              </p>

              <p className="mt-1 text-[10px] leading-5 text-white/45">
                Emergency evidence is encrypted and protected from tampering.
              </p>
            </div>

            <motion.span
              animate={{
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="ml-auto mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
            />
          </div>
        </div>
      </div>
    </GlassCard>
  );
}