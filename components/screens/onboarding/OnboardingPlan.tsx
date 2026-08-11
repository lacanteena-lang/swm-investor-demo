"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Screen from "../../ui/Screen";

type Plan = "free" | "premium" | "pro" | "family";

const plans = {
  free: {
    name: "FREE",
    subtitle: "Stay Protected",
    price: "₹0",
    yearly: "",
    badge: "",
    button: "Get Started",
    accent: "neutral",
    features: [
      "AI Risk Assessment (Limited)",
      "One-Tap SOS",
      "Trusted Contacts (3)",
      "Basic Live Location Sharing",
      "Safety Tips & Alerts",
    ],
  },

  premium: {
    name: "PREMIUM",
    subtitle: "Stay Ahead",
    price: "₹149",
    yearly: "₹1,499 / year  •  Save 17%",
    badge: "MOST POPULAR",
    button: "Choose Premium",
    accent: "red",
    features: [
      "Everything in Free",
      "AI Risk Assessment (Full)",
      "Live Tracking (Real-time)",
      "Concierge Support 24/7",
      "Evidence Vault (Basic)",
      "Advanced Safety Alerts",
      "Emergency Assist",
    ],
  },

  pro: {
    name: "PRO",
    subtitle: "Stay Unstoppable",
    price: "₹249",
    yearly: "₹2,499 / year  •  Save 16%",
    badge: "",
    button: "Go Pro",
    accent: "blue",
    features: [
      "Everything in Premium",
      "Evidence Vault (Unlimited)",
      "Travel Safety Mode",
      "Priority Concierge",
      "Family Safety Circle",
      "Advanced Analytics",
      "Monthly Safety Report",
    ],
  },

  family: {
    name: "FAMILY PLAN",
    subtitle: "Stay Together",
    price: "₹499",
    yearly: "",
    badge: "",
    button: "Protect Family",
    accent: "purple",
    features: [
      "Everything in Premium",
      "Up to 5 Family Members",
      "Shared Live Tracking",
      "Family SOS Alerts",
      "Family Safety Dashboard",
      "SOS Device Discount",
    ],
  },
};

export default function OnboardingPlan() {
  const router = useRouter();

  const [selectedPlan, setSelectedPlan] =
    useState<Plan>("premium");

  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const [paymentMethod, setPaymentMethod] =
    useState<"upi" | "card" | "bank">("upi");

  const [otp, setOtp] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [processing, setProcessing] = useState(false);

  const selected = plans[selectedPlan];

  const isPaid = selectedPlan !== "free";

  const otpComplete = otp.every(
    (digit) => digit.length === 1
  );

  function updateOtp(
    index: number,
    value: string
  ) {
    const digit = value
      .replace(/\D/g, "")
      .slice(-1);

    const next = [...otp];

    next[index] = digit;

    setOtp(next);

    if (digit && index < 5) {
      document
        .getElementById(`swm-otp-${index + 1}`)
        ?.focus();
    }
  }

  function continueToHome() {
    if (!otpComplete) return;

    setProcessing(true);

    setTimeout(() => {
      router.push("/");
    }, 800);
  }

  return (
    <Screen>

      <div className="relative h-full w-full overflow-hidden bg-[#05070d] text-white">

        {/* =====================================================
            AMBIENT BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0">

          <div
            className="
              absolute
              left-1/2
              top-[-100px]
              h-[320px]
              w-[320px]
              -translate-x-1/2
              rounded-full
              bg-cyan-400/10
              blur-[110px]
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-[1500px]
              h-[380px]
              w-[380px]
              -translate-x-1/2
              rounded-full
              bg-blue-500/10
              blur-[120px]
            "
          />

          <div
            className="
              absolute
              left-1/2
              bottom-[-80px]
              h-[220px]
              w-[320px]
              -translate-x-1/2
              rounded-full
              bg-[#880001]/20
              blur-[75px]
            "
          />

        </div>

        {/* =====================================================
            SINGLE CONTINUOUS PHONE SCROLL
        ===================================================== */}

        <div
          className="
            relative
            z-10
            h-full
            overflow-y-auto
            px-5
            pt-8
            pb-10
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >

          {/* ===================================================
              WELCOME
          =================================================== */}

          <section className="flex flex-col items-center">

            <div
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white/65
              "
            >
              Personal Safety
            </div>

            <div className="relative mt-7">

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[130px]
                  w-[130px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-cyan-300/10
                  blur-[32px]
                "
              />

              <img
                src="/images/swm-logo.png"
                alt="Stay With Me"
                className="
                  relative
                  z-10
                  w-[150px]
                  object-contain
                  drop-shadow-[0_0_18px_rgba(120,220,255,0.6)]
                "
              />

            </div>

            <p
              className="
                mt-5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-cyan-300/80
              "
            >
              Your Companion For Today
            </p>

            <h1
              className="
                mt-4
                text-center
                text-[36px]
                font-semibold
                leading-[1.02]
                tracking-[-0.04em]
              "
            >
              You&apos;re Never
              <br />
              Alone.
            </h1>

            <p
              className="
                mt-5
                max-w-[290px]
                text-center
                text-[13px]
                leading-6
                text-white/55
              "
            >
              AI-powered protection backed by your
              <br />
              <span className="text-white/85">
                Personal Safety Concierge.
              </span>
            </p>

            <div
              className="
                mt-7
                w-full
                rounded-[24px]
                border
                border-white/10
                bg-white/[0.055]
                p-4
                backdrop-blur-xl
              "
            >

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-300/10
                    text-cyan-300
                  "
                >
                  ◉
                </div>

                <div>

                  <p className="text-[14px] font-semibold">
                    Protection that stays with you
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/50">
                    Intelligent support when you need it.
                    <br />
                    Human support when it matters.
                  </p>

                </div>

              </div>

            </div>

            <div className="mt-4 grid w-full grid-cols-3 gap-2">

              <Value title="AI-POWERED" icon="✦" />

              <Value title="HUMAN-SUPPORTED" icon="◉" />

              <Value title="PRIVACY-FIRST" icon="◇" />

            </div>

          </section>

          <Divider text="CREATE YOUR ACCOUNT" />

          {/* ===================================================
              ACCOUNT
          =================================================== */}

          <section>

            <Step
              number="01"
              title="CREATE YOUR ACCOUNT"
            />

            <h2 className="mt-4 text-[25px] font-semibold">
              Welcome to SWM
            </h2>

            <p className="mt-2 text-[12px] leading-5 text-white/45">
              Create your account to begin your personal safety journey.
            </p>

            <div className="mt-5 space-y-3">

              <Input
                label="Mobile Number"
                value={mobile}
                onChange={setMobile}
                placeholder="+91 98765 43210"
              />

              <Input
                label="Email Address"
                value={email}
                onChange={setEmail}
                placeholder="you@example.com"
              />

            </div>

          </section>

          <Divider text="CHOOSE YOUR PROTECTION" />

          {/* ===================================================
              PLAN SECTION
          =================================================== */}

          <section>

            <Step
              number="02"
              title="YOUR SWM PLAN"
            />

            <h2 className="mt-4 text-[27px] font-semibold">
              Choose Your Protection
            </h2>

            <p className="mt-2 text-[13px] leading-5 text-white/45">
              Select the SWM experience that&apos;s right for you.
            </p>

            <div className="mt-6 space-y-5">

              {(Object.keys(plans) as Plan[]).map(
                (key) => {

                  const item = plans[key];

                  return (
                    <PlanCard
                      key={key}
                      plan={item}
                      active={
                        selectedPlan === key
                      }
                      onSelect={() =>
                        setSelectedPlan(key)
                      }
                    />
                  );
                }
              )}

            </div>

          </section>

          {/* ===================================================
              PAYMENT
          =================================================== */}

          {isPaid && (
            <>
              <Divider text="SECURE PAYMENT" />

              <section>

                <Step
                  number="03"
                  title="PAYMENT METHOD"
                />

                <h2 className="mt-4 text-[25px] font-semibold">
                  Secure Payment
                </h2>

                <p className="mt-2 text-[12px] leading-5 text-white/45">
                  Choose how you&apos;d like to pay for your SWM protection.
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2">

                  <Payment
                    label="UPI"
                    active={
                      paymentMethod === "upi"
                    }
                    onClick={() =>
                      setPaymentMethod("upi")
                    }
                  />

                  <Payment
                    label="CARD"
                    active={
                      paymentMethod === "card"
                    }
                    onClick={() =>
                      setPaymentMethod("card")
                    }
                  />

                  <Payment
                    label="BANK"
                    active={
                      paymentMethod === "bank"
                    }
                    onClick={() =>
                      setPaymentMethod("bank")
                    }
                  />

                </div>

              </section>
            </>
          )}

          {/* ===================================================
              OTP
          =================================================== */}

          <Divider text="VERIFY MOBILE" />

          <section>

            <Step
              number="04"
              title="MOBILE VERIFICATION"
            />

            <h2 className="mt-4 text-[25px] font-semibold">
              Verify Your Mobile
            </h2>

            <p className="mt-2 text-[12px] text-white/45">
              Enter the 6-digit OTP sent to your mobile.
            </p>

            <div className="mt-6 grid grid-cols-6 gap-2">

              {otp.map((digit, index) => (

                <input
                  key={index}
                  id={`swm-otp-${index}`}
                  value={digit}
                  maxLength={1}
                  inputMode="numeric"
                  onChange={(e) =>
                    updateOtp(
                      index,
                      e.target.value
                    )
                  }
                  className="
                    h-[50px]
                    w-full
                    rounded-[14px]
                    border
                    border-white/10
                    bg-white/[0.045]
                    text-center
                    text-[19px]
                    font-bold
                    text-white
                    outline-none
                    focus:border-cyan-300/50
                  "
                />

              ))}

            </div>

            <div className="mt-4 flex justify-between">

              <span className="text-[10px] text-white/30">
                OTP sent to your mobile
              </span>

              <button
                type="button"
                onClick={() =>
                  setOtp([
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                  ])
                }
                className="
                  text-[10px]
                  font-semibold
                  text-cyan-300
                "
              >
                Resend OTP
              </button>

            </div>

          </section>

          {/* ===================================================
              FINAL CTA
          =================================================== */}

          <section className="mt-10 pb-8">

            <button
              type="button"
              disabled={
                !otpComplete ||
                processing
              }
              onClick={continueToHome}
              className={`
                relative
                w-full
                rounded-[22px]
                border
                border-[#A80001]
                py-4
                text-[14px]
                font-black
                uppercase
                tracking-[0.10em]
                transition-all

                ${
                  otpComplete &&
                  !processing
                    ? "bg-[#880001] text-white shadow-[0_0_18px_rgba(136,0,1,0.95),0_0_42px_rgba(136,0,1,0.55)]"
                    : "bg-[#3a0708] text-white/30"
                }
              `}
            >

              {otpComplete &&
                !processing && (
                  <span
                    className="
                      absolute
                      inset-[-8px]
                      -z-10
                      rounded-[28px]
                      bg-[#880001]/45
                      blur-[16px]
                      animate-pulse
                    "
                  />
                )}

              {processing
                ? "Entering SWM..."
                : selectedPlan === "free"
                  ? "Activate & Enter SWM"
                  : `Pay ${selected.price} & Enter SWM`}

            </button>

            <p className="mt-4 text-center text-[9px] text-white/25">
              Secure • Private • AI-Assisted • Human-Supported
            </p>

          </section>

        </div>

      </div>

    </Screen>
  );
}

/* =========================================================
   PLAN CARD
========================================================= */

function PlanCard({
  plan,
  active,
  onSelect,
}: {
  plan: (typeof plans)[Plan];
  active: boolean;
  onSelect: () => void;
}) {
  const red = plan.accent === "red";
  const blue = plan.accent === "blue";
  const purple = plan.accent === "purple";

  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[26px]
        border
        p-5
        transition-all
        duration-300

        ${
          active && red
            ? "border-[#A80001] bg-[#880001]/14 shadow-[0_0_20px_rgba(136,0,1,0.65),0_0_48px_rgba(136,0,1,0.28)]"
            : active
              ? "border-cyan-300/45 bg-white/[0.07] shadow-[0_0_20px_rgba(103,232,249,0.10)]"
              : "border-white/10 bg-white/[0.035]"
        }
      `}
    >

      {/* PREMIUM RED GLOW */}

      {red && (
        <div
          className="
            pointer-events-none
            absolute
            right-[-45px]
            top-[-45px]
            h-[150px]
            w-[150px]
            rounded-full
            bg-[#880001]/20
            blur-[45px]
          "
        />
      )}

      {/* POPULAR BADGE */}

      {plan.badge && (
        <div
          className="
            absolute
            right-4
            top-4
            rounded-full
            bg-[#880001]
            px-3
            py-1.5
            text-[8px]
            font-black
            uppercase
            tracking-[0.08em]
            text-white
            shadow-[0_0_14px_rgba(136,0,1,0.85)]
          "
        >
          ★ {plan.badge}
        </div>
      )}

      {/* PLAN NAME */}

      <p className="text-[12px] font-medium text-white/50">
        {plan.subtitle}
      </p>

      <h3 className="mt-1 text-[24px] font-black tracking-[-0.02em]">
        {plan.name}
      </h3>

      {/* PRICE */}

      <div className="mt-4 flex items-end gap-2">

        <span className="text-[32px] font-black leading-none">
          {plan.price}
        </span>

        <span className="mb-1 text-[11px] text-white/45">
          / month
        </span>

      </div>

      {/* YEARLY */}

      {plan.yearly && (
        <p
          className={`
            mt-2
            text-[10px]
            font-semibold

            ${
              red
                ? "text-red-300"
                : blue
                  ? "text-blue-300"
                  : "text-white/45"
            }
          `}
        >
          {plan.yearly}
        </p>
      )}

      {/* FEATURES */}

      <div className="mt-5 space-y-3">

        {plan.features.map(
          (feature) => (

            <div
              key={feature}
              className="flex items-start gap-3"
            >

              <span
                className={`
                  mt-[1px]
                  flex
                  h-[19px]
                  w-[19px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-[10px]
                  font-black

                  ${
                    red
                      ? "bg-red-500/20 text-red-300"
                      : blue
                        ? "bg-blue-400/20 text-blue-300"
                        : purple
                          ? "bg-purple-400/20 text-purple-300"
                          : "bg-cyan-300/10 text-cyan-300"
                  }
                `}
              >
                ✓
              </span>

              <span className="text-[12px] leading-[1.35] text-white/70">
                {feature}
              </span>

            </div>

          )
        )}

      </div>

      {/* CTA */}

      <button
        type="button"
        onClick={onSelect}
        className={`
          mt-6
          w-full
          rounded-[17px]
          border
          py-3.5
          text-[12px]
          font-bold
          transition-all

          ${
            active && red
              ? "border-[#A80001] bg-[#880001] text-white shadow-[0_0_18px_rgba(136,0,1,0.65)]"
              : active
                ? "border-cyan-300/45 bg-cyan-300/10 text-cyan-200"
                : "border-white/15 bg-white/[0.025] text-white/75"
          }
        `}
      >
        {active ? "Selected" : plan.button}
      </button>

    </div>
  );
}

/* =========================================================
   VALUE
========================================================= */

function Value({
  title,
  icon,
}: {
  title: string;
  icon: string;
}) {
  return (
    <div
      className="
        flex
        h-[76px]
        flex-col
        items-center
        justify-center
        rounded-[18px]
        border
        border-white/10
        bg-white/[0.045]
      "
    >

      <div className="mb-2 text-[16px] text-cyan-300">
        {icon}
      </div>

      <span className="text-center text-[8px] font-bold tracking-[0.08em] text-white/65">
        {title}
      </span>

    </div>
  );
}

/* =========================================================
   INPUT
========================================================= */

function Input({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div
      className="
        rounded-[18px]
        border
        border-white/10
        bg-white/[0.045]
        px-4
        py-4
      "
    >

      <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/40">
        {label}
      </p>

      <input
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        className="
          mt-2
          w-full
          bg-transparent
          text-[14px]
          text-white
          outline-none
          placeholder:text-white/25
        "
      />

    </div>
  );
}

/* =========================================================
   PAYMENT
========================================================= */

function Payment({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        h-[56px]
        rounded-[16px]
        border
        text-[11px]
        font-bold

        ${
          active
            ? "border-cyan-300/50 bg-cyan-300/10 text-cyan-200"
            : "border-white/10 bg-white/[0.035] text-white/55"
        }
      `}
    >
      {label}
    </button>
  );
}

/* =========================================================
   STEP
========================================================= */

function Step({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2">

      <span
        className="
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-full
          bg-cyan-300/10
          text-[10px]
          font-bold
          text-cyan-300
        "
      >
        {number}
      </span>

      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300/80">
        {title}
      </span>

    </div>
  );
}

/* =========================================================
   DIVIDER
========================================================= */

function Divider({
  text,
}: {
  text: string;
}) {
  return (
    <div className="my-10 flex items-center gap-3">

      <div className="h-px flex-1 bg-white/10" />

      <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.15em] text-white/30">
        {text}
      </span>

      <div className="h-px flex-1 bg-white/10" />

    </div>
  );
}