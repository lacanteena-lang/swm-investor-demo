"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mic, MicOff, Radio } from "lucide-react";

import GlassCard from "../ui/GlassCard";
import PremiumButton from "../ui/PremiumButton";

type Props = {
  onStartJourney?: () => void;
};

type ConversationMessage = {
  role: "user" | "assistant";
  text: string;
};

type SpeechRecognitionResultEventLike = {
resultIndex: number;
  results: {
    length: number;
    [index: number]: {
     [index: number]: {
  transcript: string;
};

isFinal: boolean;

length: number;
    };
  };
};

type SpeechRecognitionLike = {
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives?: number;
  lang: string;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onerror: ((event: unknown) => void) | null;
  onresult:
    | ((event: SpeechRecognitionResultEventLike) => void)
    | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
};

type SpeechRecognitionConstructor =
  new () => SpeechRecognitionLike;

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

const BASE_WAVE = [
  0, 4, -6, 8, -5, 12, -7, 17, -10, 7,
  -15, 10, -6, 22, -12, 8, -29, 14, -8, 5,
  -19, 11, -5, 32, -15, 8, -6, 24, -11, 6,
  -36, 16, -8, 5, -22, 12, -6, 29, -13, 7,
  -18, 10, -5, 40, -18, 8, -5, 26, -12, 6,
  -30, 14, -7, 4, -20, 10, -5, 34, -15, 8,
  -24, 12, -6, 5, -18, 10, -5, 27, -12, 7,
  -21, 11, -6, 4, -16, 9, -5, 23, -10, 6,
  -14, 8, -4, 3, -8, 5, -3, 2, -1, 0,
];

const CENTER_Y = 110;
const WIDTH = 1000;
const AMPLITUDE = 1.18;

const IMMEDIATE_SAFETY_RESPONSE =
  "I\'m here with you. Are you in immediate danger?";

/*
 * SWM Concierge voice selection.
 * Prefer Microsoft Jenny (Natural) when the browser exposes it,
 * then fall back to other natural-sounding female English voices.
 */
function selectSWMConciergeVoice(
  voices: SpeechSynthesisVoice[]
): SpeechSynthesisVoice | null {
  if (!voices.length) return null;

  const englishVoices = voices.filter((voice) =>
    /^(en)([-_]|$)/i.test(voice.lang || "")
  );

  const pool = englishVoices.length
    ? englishVoices
    : voices;

  const normalize = (value: string) =>
    value.toLowerCase().replace(/[\u00AE\u2122]/g, "").trim();

  const exactJenny = pool.find((voice) => {
    const name = normalize(voice.name);
    return (
      name.includes("microsoft jenny") ||
      name.includes("jenny online")
    );
  });

  if (exactJenny) return exactJenny;

  const preferredFemale = [
    "jenny",
    "aria",
    "zira",
    "sonia",
    "hazel",
    "samantha",
    "karen",
    "moira",
    "ava",
    "susan",
    "google uk english female",
    "google us english female",
  ];

  for (const preferred of preferredFemale) {
    const match = pool.find((voice) =>
      normalize(voice.name).includes(preferred)
    );

    if (match) return match;
  }

  const naturalFemale = pool.find((voice) => {
    const name = normalize(voice.name);
    return (
      name.includes("female") ||
      name.includes("natural")
    );
  });

  return naturalFemale || pool[0] || null;
}

function createPath(
  values: number[],
  phase: number,
  strength: number
) {
  return values
    .map((value, index) => {
      const x =
        (index / (values.length - 1)) * WIDTH;

      const localPhase =
        phase * (0.85 + (index % 9) * 0.035);

      const movement =
        Math.sin(localPhase + index * 0.48) *
        6 *
        strength;

      const secondaryMovement =
        Math.sin(
          phase * 0.47 +
            index * 0.83
        ) *
        3 *
        strength;

      const y =
        CENTER_Y +
        value * AMPLITUDE * strength +
        movement +
        secondaryMovement;

      return `${index === 0 ? "M" : "L"}${x.toFixed(
        1
      )} ${y.toFixed(1)}`;
    })
    .join(" ");
}

function useLiveWaveform(
  listening: boolean
) {
  const [path, setPath] =
    useState(() =>
      createPath(BASE_WAVE, 0, 0.18)
    );

  const animationRef =
    useRef<number | null>(null);

  const startTimeRef =
    useRef<number | null>(null);

  useEffect(() => {
    if (!listening) {
      if (animationRef.current !== null) {
        cancelAnimationFrame(
          animationRef.current
        );
      }

      startTimeRef.current = null;

      setPath(
        createPath(
          BASE_WAVE,
          0,
          0.18
        )
      );

      return;
    }

    const animate = (
      timestamp: number
    ) => {
      if (
        startTimeRef.current === null
      ) {
        startTimeRef.current =
          timestamp;
      }

      const elapsed =
        timestamp -
        startTimeRef.current;

      const phase =
        elapsed * 0.00155;

      setPath(
        createPath(
          BASE_WAVE,
          phase,
          1
        )
      );

      animationRef.current =
        requestAnimationFrame(
          animate
        );
    };

    animationRef.current =
      requestAnimationFrame(
        animate
      );

    return () => {
      if (
        animationRef.current !== null
      ) {
        cancelAnimationFrame(
          animationRef.current
        );
      }

      startTimeRef.current = null;
    };
  }, [listening]);

  return path;
}

function isImmediateDanger(
  text: string
) {
  const normalized =
    text
      .toLowerCase()
      .replace(/[.,!?]/g, " ");

  const dangerPhrases = [
    "i am in immediate danger",
    "i'm in immediate danger",
    "immediate danger",
    "i am in danger",
    "i'm in danger",
    "i am being attacked",
    "i'm being attacked",
    "someone is attacking me",
    "they are attacking me",
    "he is attacking me",
    "she is attacking me",
    "someone has a weapon",
    "they have a weapon",
    "there is a weapon",
    "i am trapped",
    "i'm trapped",
    "help me now",
  ];

  return dangerPhrases.some(
    (phrase) =>
      normalized.includes(phrase)
  );
}

export default function VoicePanel({
  onStartJourney,
}: Props) {
  const [listening, setListening] =
    useState(false);

  const [processing, setProcessing] =
    useState(false);

  const [status, setStatus] =
    useState("Ready when you are");

  const [lastTranscript, setLastTranscript] =
    useState("");

  const [immediateSafety, setImmediateSafety] =
    useState(false);

  const [conversation, setConversation] =
    useState<ConversationMessage[]>([]);

  const recognitionRef =
    useRef<SpeechRecognitionLike | null>(null);

  const manuallyStoppedRef =
    useRef(false);

  const conversationActiveRef =
    useRef(false);

  const processingRef =
    useRef(false);

  const recognitionRunningRef =
    useRef(false);

  const restartAfterRecognitionRef =
    useRef(false);

  const responseSpeakingRef =
    useRef(false);

  const restartTimerRef =
    useRef<number | null>(null);

  const interimTranscriptRef =
    useRef("");

  const conversationRef =
    useRef<ConversationMessage[]>([]);

  const wavePath =
    useLiveWaveform(listening);

  useEffect(() => {
    processingRef.current =
      processing;
  }, [processing]);

  useEffect(() => {
    conversationRef.current =
      conversation;
  }, [conversation]);

  /*
   * Add a message to the local
   * conversation history.
   */
  const addConversationMessage = (
    role: "user" | "assistant",
    text: string
  ) => {
    const newMessage: ConversationMessage = {
      role,
      text,
    };

    setConversation((current) => [
      ...current,
      newMessage,
    ]);

    conversationRef.current = [
      ...conversationRef.current,
      newMessage,
    ];
  };

  /*
   * Speak a Concierge response.
   */
  const tryRestartMicrophone = (
    restartListening = true
  ) => {
    if (!restartListening) {
      setStatus("Ready when you are");
      return;
    }

    if (
      !conversationActiveRef.current ||
      manuallyStoppedRef.current ||
      processingRef.current ||
      recognitionRunningRef.current ||
      responseSpeakingRef.current
    ) {
      return;
    }

    restartAfterRecognitionRef.current = true;

    window.setTimeout(() => {
      if (
        conversationActiveRef.current &&
        !manuallyStoppedRef.current &&
        !processingRef.current &&
        !recognitionRunningRef.current &&
        !responseSpeakingRef.current
      ) {
        startListening();
      }
    }, 80);
  };


  const speakResponse = (
    text: string,
    restartListening = true,
    onFinished?: () => void
  ) => {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window)
    ) {
      responseSpeakingRef.current = false;
      onFinished?.();

      if (
        restartListening &&
        conversationActiveRef.current &&
        !manuallyStoppedRef.current
      ) {
        tryRestartMicrophone(true);
      }

      return;
    }

    if (restartTimerRef.current !== null) {
      window.clearTimeout(
        restartTimerRef.current
      );
      restartTimerRef.current = null;
    }

    window.speechSynthesis.cancel();

    responseSpeakingRef.current =
      restartListening;

    setListening(false);
    setProcessing(false);
    processingRef.current = false;
    setStatus(
      "Concierge is responding..."
    );

    const utterance =
      new SpeechSynthesisUtterance(text);

    const availableVoices =
      window.speechSynthesis.getVoices();

    const swmVoice =
      selectSWMConciergeVoice(
        availableVoices
      );

    if (swmVoice) {
      utterance.voice = swmVoice;
      utterance.lang = swmVoice.lang;
      console.log(
        "SWM VOICE: Concierge voice selected:",
        swmVoice.name,
        swmVoice.lang
      );
    } else {
      utterance.lang = "en-US";
    }

    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.volume = 1;

    let finished = false;

    const finishSpeaking = () => {
      if (finished) return;
      finished = true;

      responseSpeakingRef.current = false;

      if (onFinished) {
        onFinished();
      }

      if (
        restartListening &&
        conversationActiveRef.current &&
        !manuallyStoppedRef.current
      ) {
        setStatus(
          "Your Concierge is ready to listen."
        );

        window.setTimeout(() => {
          if (
            conversationActiveRef.current &&
            !manuallyStoppedRef.current &&
            !processingRef.current &&
            !recognitionRunningRef.current &&
            !responseSpeakingRef.current
          ) {
            startListening();
          }
        }, 80);
      } else {
        setStatus(
          "Ready when you are"
        );
      }
    };

    utterance.onstart = () => {
      setListening(false);
      setProcessing(false);
      processingRef.current = false;
      setStatus(
        "Concierge is responding..."
      );
    };

    utterance.onend = finishSpeaking;
    utterance.onerror = finishSpeaking;

    window.speechSynthesis.speak(
      utterance
    );
  };


  /*
   * Immediate local safety response.
   *
   * This happens before waiting for Gemini.
   */
  const triggerImmediateSafetyResponse = (
    spokenText: string
  ) => {
    setImmediateSafety(true);
    setLastTranscript(spokenText);
    setProcessing(false);
    processingRef.current = false;
    setListening(false);

    addConversationMessage(
      "assistant",
      IMMEDIATE_SAFETY_RESPONSE
    );

    setStatus(
      "Immediate safety response"
    );

    speakResponse(
      IMMEDIATE_SAFETY_RESPONSE,
      true
    );
  };

  /*
   * Fast local Concierge responses.
   * These common safety turns never wait for Gemini.
   */
  const getInstantConciergeResponse = (
    userMessage: string
  ): string | null => {
    const text = userMessage
      .toLowerCase()
      .trim()
      .replace(/[.,!?]/g, "");

    const previous =
      conversationRef.current[
        conversationRef.current.length - 2
      ];

    const previousConciergeMessage =
      previous?.role === "assistant"
        ? previous.text.toLowerCase()
        : "";

    if (
      previousConciergeMessage.includes(
        "are you in immediate danger"
      )
    ) {
      if (
        text === "no" ||
        text === "nope" ||
        text === "not really" ||
        text === "not right now" ||
        text === "not at the moment"
      ) {
        return "Okay. What is making you feel unsafe?";
      }

      if (
        text === "yes" ||
        text === "yeah" ||
        text === "yep" ||
        text === "i am" ||
        text === "i'm in danger"
      ) {
        return "Okay. Stay with me. If you're in immediate danger, use SOS now.";
      }
    }

    if (
      text.includes("someone is following me") ||
      text.includes("someone following me") ||
      text.includes("being followed")
    ) {
      return "Okay. Stay with me. Are you walking right now?";
    }

    if (
      previousConciergeMessage.includes(
        "are you walking"
      )
    ) {
      const isInVehicle =
        text.includes("taxi") ||
        text.includes("cab") ||
        text.includes("uber") ||
        text.includes("ola") ||
        text.includes("auto") ||
        text.includes("rickshaw") ||
        text.includes("car") ||
        text.includes("vehicle") ||
        text.includes("bus") ||
        text.includes("train") ||
        text.includes("metro") ||
        text.includes("subway") ||
        text.includes("in the car") ||
        text.includes("in a car");

      if (isInVehicle) {
        return "Okay. Stay with me. Are you somewhere safe inside the vehicle?";
      }

      if (
        text === "yes" ||
        text === "yeah" ||
        text === "yep" ||
        text.includes("i am walking") ||
        text.includes("i'm walking")
      ) {
        return "Okay. Can you move toward a busy or well-lit place?";
      }

      if (
        text === "no" ||
        text === "nope" ||
        text.includes("not walking") ||
        text.includes("not right now")
      ) {
        return "Okay. Stay with me. What are you doing right now?";
      }
    }

    if (
      previousConciergeMessage.includes(
        "would you like me to start a protected journey"
      )
    ) {
      const affirmative =
        text === "yes" ||
        text === "yeah" ||
        text === "yep" ||
        text === "sure" ||
        text === "okay" ||
        text === "ok" ||
        text === "please" ||
        text === "please do" ||
        text === "go ahead" ||
        text === "start it" ||
        text === "start the journey" ||
        text === "yes please" ||
        text === "yeah please" ||
        text === "yes go ahead";

      if (affirmative) {
        return "Absolutely. Starting your Protected Journey now.";
      }

      if (
        text === "no" ||
        text === "nope" ||
        text === "not now" ||
        text === "not right now" ||
        text === "no thank you" ||
        text === "no thanks"
      ) {
        return "Okay. I'll stay with you. We can keep talking while you walk.";
      }
    }

    if (
      text.includes("going for a walk") ||
      text.includes("go for a walk") ||
      text.includes("going on a walk") ||
      text.includes("go on a walk")
    ) {
      return "Of course. I'll stay with you. Would you like me to start a Protected Journey?";
    }

    if (
      text.includes("stay with me") ||
      text.includes("don't leave me") ||
      text.includes("dont leave me")
    ) {
      return "I'm here with you. Tell me what's happening.";
    }

    if (
      text === "sos" ||
      text.includes("start sos") ||
      text.includes("use sos") ||
      text.includes("press sos")
    ) {
      return "SOS is available now if you need urgent help.";
    }

    return null;
  };

  /*
   * Normal AI request with the COMPLETE
   * recent conversation history.
   */
  const sendNormalAiRequest = async (
    spokenText: string
  ) => {
    const trimmed =
      spokenText.trim();

    if (!trimmed) {
      return;
    }

    setProcessing(true);
    processingRef.current = true;

    setListening(false);

    setStatus(
      "Concierge is thinking..."
    );

    /*
     * Add the user's latest statement
     * before sending the request.
     */
    const userMessage: ConversationMessage = {
      role: "user",
      text: trimmed,
    };

    const updatedConversation = [
      ...conversationRef.current,
      userMessage,
    ];

    setConversation(
      updatedConversation
    );

    conversationRef.current =
      updatedConversation;

    try {
      const response =
        await fetch("/api/ai", {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            message: trimmed,
            history:
              updatedConversation.slice(
                -12
              ),
          }),
        });

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "Unable to contact the AI Concierge."
        );
      }

      const reply =
        data?.reply ||
        "I'm here and ready to help.";

      /*
       * Save the Concierge response
       * so the next request knows what
       * was already said.
       */
      const assistantMessage: ConversationMessage = {
        role: "assistant",
        text: reply,
      };

      const completeConversation = [
        ...conversationRef.current,
        assistantMessage,
      ];

      setConversation(
        completeConversation
      );

      conversationRef.current =
        completeConversation;

      /*
       * If this was a safety statement,
       * the immediate local response has
       * already been delivered.
       *
       * Do not speak a second delayed
       * response over it.
       */
      if (
        isImmediateDanger(
          trimmed
        )
      ) {
        setProcessing(false);
        processingRef.current = false;

        return;
      }

      speakResponse(reply);
    } catch (error) {
      console.error(
        "Voice Concierge error:",
        error
      );

      setProcessing(false);
      processingRef.current = false;

      if (
        isImmediateDanger(
          trimmed
        )
      ) {
        return;
      }

      const fallback =
        "I'm having trouble connecting right now. Please try again in a moment.";

      speakResponse(fallback);
    }
  };

  /*
   * Process spoken text.
   */
  const sendToConcierge = async (
    spokenText: string
  ) => {
    const trimmed =
      spokenText.trim();

    if (
      !trimmed ||
      processingRef.current
    ) {
      return;
    }

    setLastTranscript(trimmed);
console.log(
  "SWM DEBUG RECEIVED:",
  JSON.stringify(trimmed)
);
    /*
     * Store the user message immediately.
     */
    const userMessage: ConversationMessage = {
      role: "user",
      text: trimmed,
    };

    const updatedConversation = [
      ...conversationRef.current,
      userMessage,
    ];

    setConversation(
      updatedConversation
    );

    conversationRef.current =
      updatedConversation;

    /*
     * Safety-first local response.
     * Never call Gemini when a known Concierge
     * response is already available locally.
     */
    if (
      isImmediateDanger(
        trimmed
      )
    ) {
      triggerImmediateSafetyResponse(
        trimmed
      );
      return;
    }

    const instantResponse =
      getInstantConciergeResponse(
        trimmed
      );

    if (instantResponse) {
      /*
       * Check the previous Concierge question BEFORE appending the
       * new assistant response. This is what allows a bare YES to
       * trigger the Protected Journey callback reliably.
       */
      const previousConciergeMessage =
        conversationRef.current[
          conversationRef.current.length - 2
        ];

      const shouldStartJourneyAfterSpeaking =
        previousConciergeMessage?.role === "assistant" &&
        previousConciergeMessage.text
          .toLowerCase()
          .includes(
            "would you like me to start a protected journey"
          ) &&
        /^(yes|yeah|yep|sure|okay|ok|please|please do|go ahead|start it|start the journey|yes please|yeah please|yes go ahead)$/i.test(
          trimmed
            .toLowerCase()
            .replace(/[.,!?]/g, "")
            .replace(/\s+/g, " ")
            .trim()
        );

      setProcessing(false);
      processingRef.current = false;
      setListening(false);

      addConversationMessage(
        "assistant",
        instantResponse
      );

      setStatus(
        "Your Concierge is ready to listen."
      );

      /*
       * IMPORTANT:
       * Do not pass onStartJourney into speakResponse().
       *
       * YES must first receive exactly the same spoken Concierge
       * response as every other conversational turn. Only after
       * that response has finished do we start the Journey.
       *
       * This prevents the Journey navigation callback from
       * interrupting/unmounting the Concierge before the user hears
       * the response.
       */
      if (
        shouldStartJourneyAfterSpeaking
      ) {
        speakResponse(
          instantResponse,
          true,
          () => {
            onStartJourney?.();
          }
        );
      } else {
        speakResponse(
          instantResponse,
          true
        );
      }

      return;
    }

    await sendNormalAiRequest(
      trimmed
    );
  };

  /*
   * Start REAL browser microphone.
   */
  /*
   * Start one recognition session for the continuous Concierge.
   * The conversation remains active even when Chrome ends an
   * individual recognition session.
   */
  const startListening = () => {
    if (
      typeof window === "undefined"
    ) {
      return;
    }

    const Recognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!Recognition) {
      setStatus(
        "Voice recognition is not supported in this browser."
      );
      return;
    }

    if (
      manuallyStoppedRef.current ||
      processingRef.current ||
      recognitionRunningRef.current ||
      responseSpeakingRef.current
    ) {
      return;
    }

    const recognition =
      new Recognition();

    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 5;
    recognition.lang = "en-IN";

    let finalBuffer = "";
    let latestInterim = "";
    let delivered = false;

    recognition.onstart = () => {
      recognitionRunningRef.current = true;
      setListening(true);
      setStatus("Listening...");

      console.log(
        "SWM VOICE: recognition started"
      );
    };

    recognition.onresult = (
      event
    ) => {
      for (
        let i = event.resultIndex;
        i < event.results.length;
        i += 1
      ) {
        const result =
          event.results[i];

        const alternatives =
          Array.from(
            {
              length: Math.min(
                result.length || 1,
                5
              ),
            },
            (_, index) =>
              result?.[index]?.transcript?.trim() || ""
          ).filter(Boolean);

        const transcript =
          alternatives[0] || "";

        if (!result.isFinal) {
          latestInterim =
            transcript;

          console.log(
            "SWM Voice Interim:",
            transcript
          );

          /*
           * Chrome is delivering bare YES/NO/YEAH as interim speech
           * and then ending without promoting them to final.
           *
           * Exact short confirmations are therefore committed
           * immediately. Longer speech is NOT committed here.
           */
          const shortConfirmation =
            transcript
              .toLowerCase()
              .replace(/[.,!?]/g, " ")
              .replace(/\s+/g, " ")
              .trim();

          if (
            /^(yes|yeah|yep|no|nope|ok|okay|sure)$/.test(
              shortConfirmation
            ) &&
            !delivered &&
            !processingRef.current &&
            !manuallyStoppedRef.current
          ) {
            delivered = true;
            latestInterim = "";

            console.log(
              "SWM Voice Transcript (short confirmation):",
              shortConfirmation
            );

            void sendToConcierge(
              shortConfirmation
            );
          }

          continue;
        }

        latestInterim = "";

        const cleaned =
          transcript
            .replace(/\s+/g, " ")
            .trim();

        if (
          cleaned &&
          !delivered
        ) {
          delivered = true;

          console.log(
            "SWM Voice Transcript:",
            cleaned
          );

          /*
           * Stop this browser recognition session before the
           * Concierge starts speaking. This prevents the microphone
           * and speech synthesis from competing for the same turn.
           */
          void sendToConcierge(
            cleaned
          );
        }
      }
    };


    recognition.onerror = (
      event
    ) => {
      const error =
        event as {
          error?: string;
        };

      recognitionRunningRef.current =
        false;
      setListening(false);

      console.error(
        "Speech recognition error:",
        event
      );

      if (
        error?.error === "aborted"
      ) {
        return;
      }

      if (
        manuallyStoppedRef.current
      ) {
        setStatus(
          "Ready when you are"
        );
        return;
      }

      setStatus(
        "Your Concierge is ready to listen."
      );
    };

    recognition.onend = () => {
      recognitionRunningRef.current =
        false;

      setListening(false);

      if (
        recognitionRef.current === recognition
      ) {
        recognitionRef.current = null;
      }

      console.log(
        "SWM VOICE: recognition ended"
      );

      /*
       * Chrome can end a short utterance such as YES, NO or YEAH
       * after giving us only an interim transcript.
       *
       * The last interim transcript is therefore a legitimate
       * completed conversational turn when no final result arrived.
       *
       * This applies equally to longer speech if Chrome ends before
       * promoting the result to final.
       */
      if (
        !delivered &&
        latestInterim &&
        !manuallyStoppedRef.current
      ) {
        const cleaned =
          latestInterim
            .replace(/\s+/g, " ")
            .trim();

        if (cleaned) {
          delivered = true;

          console.log(
            "SWM Voice Transcript (interim fallback):",
            cleaned
          );

          void sendToConcierge(
            cleaned
          );

          return;
        }
      }

      /*
       * No speech was captured at all.
       * Keep the conversation alive with one controlled restart.
       *
       * If speech WAS captured, sendToConcierge/speakResponse owns
       * the next listening turn.
       */
      if (
        conversationActiveRef.current &&
        !manuallyStoppedRef.current &&
        !processingRef.current &&
        !responseSpeakingRef.current
      ) {
        tryRestartMicrophone(
          true
        );
      }
    };


    recognitionRef.current =
      recognition;

    try {
      recognition.start();
    } catch (error) {
      recognitionRunningRef.current =
        false;

      console.error(
        "Unable to start microphone:",
        error
      );

      setListening(false);
      setStatus(
        "Unable to start the microphone."
      );
    }
  };


  /*
   * End the conversation.
   */
  const endSession = () => {
    manuallyStoppedRef.current =
      true;

    restartAfterRecognitionRef.current = false;

    conversationActiveRef.current =
      false;

    if (restartTimerRef.current !== null) {
      window.clearTimeout(restartTimerRef.current);
      restartTimerRef.current = null;
    }

    recognitionRunningRef.current = false;

    if (
      recognitionRef.current
    ) {
      try {
        recognitionRef.current.abort();
      } catch {
        // Ignore
      }
    }

    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      window.speechSynthesis.cancel();
    }

    setListening(false);
    setProcessing(false);

    processingRef.current = false;

    setStatus(
      "Ready when you are"
    );
  };

  /*
   * Start a fresh continuous
   * Concierge conversation.
   */
  const startConversation = () => {
    manuallyStoppedRef.current =
      false;

    conversationActiveRef.current =
      true;

    setImmediateSafety(false);
    setProcessing(false);
    processingRef.current = false;
    setLastTranscript("");

    const openingMessage =
      "I'm here with you. How can I help?";

    setConversation([
      {
        role: "assistant",
        text: openingMessage,
      },
    ]);

    conversationRef.current = [
      {
        role: "assistant",
        text: openingMessage,
      },
    ];

    /*
     * Speak immediately through the same Concierge speech engine
     * used for every subsequent response.
     */
    speakResponse(openingMessage, true);
  };

  /*
   * Existing Talk to Concierge trigger.
   */
  useEffect(() => {
    const handleTalkToConcierge =
      () => {
        document
          .getElementById(
            "swm-voice-concierge"
          )
          ?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });

        window.setTimeout(() => {
          startConversation();
        }, 250);
      };

    window.addEventListener(
      "swm-talk-to-concierge",
      handleTalkToConcierge
    );

    return () => {
      window.removeEventListener(
        "swm-talk-to-concierge",
        handleTalkToConcierge
      );
    };
  }, []);

  /*
   * Cleanup.
   */
  useEffect(() => {
    return () => {
      manuallyStoppedRef.current =
        true;

      restartAfterRecognitionRef.current = false;

      conversationActiveRef.current =
        false;

      if (restartTimerRef.current !== null) {
        window.clearTimeout(restartTimerRef.current);
        restartTimerRef.current = null;
      }

      recognitionRunningRef.current = false;

      if (
        recognitionRef.current
      ) {
        try {
          recognitionRef.current.abort();
        } catch {
          // Ignore
        }
      }

      if (
        typeof window !== "undefined" &&
        "speechSynthesis" in window
      ) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div id="swm-voice-concierge">

      <GlassCard
        className="
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-white/15
          bg-black/20
          p-5
          backdrop-blur-2xl
          shadow-[0_0_45px_rgba(0,0,0,0.35)]
        "
      >

        {/* BLUE AMBIENT GLOW */}

        <motion.div
          animate={{
            opacity: listening
              ? [0.18, 0.38, 0.18]
              : [0.08, 0.16, 0.08],
            scale: listening
              ? [0.95, 1.12, 0.95]
              : [1, 1.05, 1],
          }}
          transition={{
            duration: listening ? 1.2 : 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[80px]
            h-[300px]
            w-[300px]
            -translate-x-1/2
            rounded-full
            bg-[#147DFF]
            blur-[100px]
          "
        />

        {/* HEADER */}

        <div className="relative z-10 text-center">

          <p
            className="
              text-[12px]
              font-black
              uppercase
              tracking-[0.26em]
              text-white
            "
          >
            Personal Safety Concierge
          </p>

          <h2
            className="
              mt-3
              text-[31px]
              font-black
              leading-none
              tracking-[-0.04em]
              text-white
            "
          >
            {processing
              ? "Concierge Thinking"
              : listening
              ? "I'm Listening"
              : "Talk Naturally"}
          </h2>

          <div
            className="
              mx-auto
              mt-4
              max-w-[320px]
              text-[14px]
              font-black
              leading-6
              text-white
            "
          >
            {immediateSafety ? (
              <>
                <p>
                  I'm here with you.
                </p>

                <p>
                  Are you in immediate danger?
                </p>
              </>
            ) : processing ? (
              <>
                <p>
                  I heard you.
                </p>

                <p>
                  Your Personal Safety Concierge
                  is preparing a response.
                </p>
              </>
            ) : listening ? (
              <>
                <p>
                  Speak naturally.
                </p>

                <p>
                  Your AI Concierge is listening.
                </p>
              </>
            ) : (
              <>
                <p>
                  Speak naturally with your AI
                  Concierge.
                </p>

                <p>
                  It understands your requests
                  and stays connected.
                </p>
              </>
            )}
          </div>

        </div>

        {/* MICROPHONE */}

        <div className="relative z-10 mt-7 flex justify-center">

          <div className="relative flex h-[142px] w-[142px] items-center justify-center">

            <motion.div
              animate={{
                scale: listening
                  ? [0.88, 1.28, 0.88]
                  : [0.94, 1.08, 0.94],
                opacity: listening
                  ? [0.55, 0, 0.55]
                  : [0.25, 0.08, 0.25],
              }}
              transition={{
                duration: listening ? 1.3 : 3,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="
                absolute
                inset-0
                rounded-full
                border-2
                border-[#147DFF]/80
              "
            />

            <motion.div
              animate={{
                scale: listening
                  ? [0.9, 1.18, 0.9]
                  : [0.95, 1.07, 0.95],
                opacity: listening
                  ? [0.5, 0.05, 0.5]
                  : [0.22, 0.06, 0.22],
              }}
              transition={{
                duration: listening ? 1.3 : 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.25,
              }}
              className="
                absolute
                inset-[12px]
                rounded-full
                border
                border-[#42A5FF]/70
              "
            />

            <motion.div
              animate={{
                opacity: listening
                  ? [0.25, 0.65, 0.25]
                  : [0.10, 0.25, 0.10],
              }}
              transition={{
                duration: listening ? 1 : 2.8,
                repeat: Infinity,
              }}
              className="
                absolute
                h-[105px]
                w-[105px]
                rounded-full
                bg-[#147DFF]/40
                blur-[30px]
              "
            />

            <motion.div
              animate={{
                scale: listening
                  ? [1, 1.08, 1]
                  : [1, 1.03, 1],
              }}
              transition={{
                duration: listening ? 1 : 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                flex
                h-[82px]
                w-[82px]
                items-center
                justify-center
                rounded-full
                border
                border-[#42A5FF]/80
                bg-[#147DFF]/40
              "
            >
              {listening ? (
                <Radio
                  size={36}
                  className="
                    text-white
                    drop-shadow-[0_0_14px_rgba(20,125,255,1)]
                  "
                />
              ) : (
                <Mic
                  size={36}
                  className="
                    text-white
                    drop-shadow-[0_0_14px_rgba(20,125,255,1)]
                  "
                />
              )}
            </motion.div>

          </div>

        </div>

        {/* WAVEFORM */}

        <div
          className="
            relative
            z-10
            mt-3
            flex
            h-[118px]
            w-full
            items-center
            justify-center
          "
        >

          <motion.div
            animate={{
              opacity: listening
                ? [0.07, 0.13, 0.07]
                : 0.03,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[65px]
              w-[90%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#FF5A00]
              blur-[25px]
            "
          />

          <svg
            viewBox="0 0 1000 220"
            preserveAspectRatio="none"
            className="
              relative
              h-[112px]
              w-full
              overflow-visible
            "
          >

            <path
              d={wavePath}
              fill="none"
              stroke="#FF5A00"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="miter"
              opacity={
                listening ? 0.16 : 0.04
              }
              style={{
                filter: "blur(5px)",
              }}
            />

            <path
              d={wavePath}
              fill="none"
              stroke="#FF5A00"
              strokeWidth="1.9"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              opacity={
                listening ? 0.94 : 0.20
              }
              style={{
                filter:
                  "drop-shadow(0 0 3px rgba(255,90,0,0.80)) drop-shadow(0 0 7px rgba(255,90,0,0.40))",
              }}
            />

            <path
              d={wavePath}
              fill="none"
              stroke="#FFE4D2"
              strokeWidth="0.45"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              opacity={
                listening ? 0.70 : 0.14
              }
            />

          </svg>

        </div>

        {/* STATUS */}

        <div className="relative z-10 mt-2 min-h-[78px] text-center">

          {immediateSafety ? (
            <motion.div
              initial={{
                opacity: 0,
                y: 5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
            >

              <p
                className="
                  text-[14px]
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-red-400
                "
              >
                Safety Alert
              </p>

              <p className="mt-3 text-[13px] font-bold text-[#39FF14]">
                If you are in immediate danger, use SOS now.
              </p>

            </motion.div>
          ) : processing ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >

              <div className="flex items-center justify-center gap-2">

                <motion.span
                  animate={{
                    opacity: [0.35, 1, 0.35],
                    scale: [0.8, 1.15, 0.8],
                  }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                  }}
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-cyan-400
                  "
                />

                <p
                  className="
                    text-[14px]
                    font-black
                    uppercase
                    tracking-[0.20em]
                    text-cyan-300
                  "
                >
                  Processing...
                </p>

              </div>

              {lastTranscript && (
                <p className="mt-3 text-[13px] font-bold text-white/70">
                  {lastTranscript ? "LIVE" : "READY"}
                </p>
              )}

            </motion.div>
          ) : listening ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >

              <div className="flex items-center justify-center gap-2">

                <motion.span
                  animate={{
                    opacity: [0.35, 1, 0.35],
                    scale: [0.8, 1.15, 0.8],
                  }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                  }}
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#FF5A00]
                  "
                />

                <p
                  className="
                    text-[15px]
                    font-black
                    uppercase
                    tracking-[0.30em]
                    text-[#FF5A00]
                  "
                >
                  Listening...
                </p>

              </div>

              <p className="mt-3 text-[14px] font-black text-white">
                Speak naturally. Your AI Concierge is listening.
              </p>

            </motion.div>
          ) : (
            <div>

              <p className="text-[12px] font-black uppercase tracking-[0.22em] text-white">
                {status}
              </p>

              <p className="mt-2 text-[13px] font-bold text-[#39FF14]">
                Tap Start Listening to talk with your Concierge.
              </p>

            </div>
          )}

        </div>

        {/* IMMEDIATE SOS */}

        {immediateSafety && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            className="relative z-10 mt-4"
          >
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(
                  new Event("swm-sos-request")
                );
              }}
              className="
                flex
                h-14
                w-full
                items-center
                justify-center
                rounded-[18px]
                bg-red-600
                text-[14px]
                font-black
                uppercase
                tracking-[0.16em]
                text-white
                shadow-[0_0_25px_rgba(239,68,68,0.55)]
                transition
                hover:bg-red-500
                active:scale-[0.98]
              "
            >
              SOS
            </button>
          </motion.div>
        )}

        {/* BUTTONS */}

        <div className="relative z-10 mt-5 grid w-full grid-cols-2 gap-3">

          <PremiumButton
            onClick={startConversation}
            disabled={processing}
            className="
              h-14
              rounded-[18px]
              border
              border-[#42A5FF]/70
              bg-[#147DFF]
              text-white
              shadow-[0_0_18px_rgba(20,125,255,0.55)]
            "
          >
            <div className="flex items-center justify-center gap-2">

              <Mic size={18} />

              <span className="whitespace-nowrap text-[12px] font-black">
                {listening
                  ? "Listening..."
                  : "Start Listening"}
              </span>

            </div>
          </PremiumButton>

          <button
            type="button"
            onClick={endSession}
            className="
              h-14
              rounded-[18px]
              border
              border-white/20
              bg-white/[0.07]
              px-3
              text-white
            "
          >
            <div className="flex items-center justify-center gap-2">

              <MicOff size={18} />

              <span className="whitespace-nowrap text-[12px] font-black">
                End Session
              </span>

            </div>
          </button>

        </div>

        {/* TRUST */}

        <div className="relative z-10 mt-5 flex items-center justify-center gap-2">

          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-emerald-400
              shadow-[0_0_10px_rgba(52,211,153,1)]
            "
          />

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-[#C76B4A]
            "
          >
            Private - Secure - Concierge Supported
          </span>

        </div>

      </GlassCard>
    </div>
  );
}



