"use client";

import { useEffect, useState } from "react";
import { CAMPAIGN_DEADLINE_ISO, CAMPAIGN_DEADLINE_LABEL } from "../_lib/campaign";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const DEADLINE_MS = new Date(CAMPAIGN_DEADLINE_ISO).getTime();

function computeTimeLeft(): TimeLeft | null {
  const diff = DEADLINE_MS - Date.now();
  if (diff <= 0) return null;
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

type Variant = "dark" | "light";

export default function Countdown({
  variant = "dark",
}: {
  variant?: Variant;
}) {
  // Start null so server + first client render match (avoids hydration
  // mismatch); the real value fills in after mount.
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(computeTimeLeft());
    const id = setInterval(() => setTimeLeft(computeTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const isDark = variant === "dark";
  const boxClass = isDark
    ? "bg-white/10 text-white"
    : "bg-[#f4efe6] text-ink-primary";
  const labelClass = isDark ? "text-white/55" : "text-ink-tertiary";
  const introClass = isDark ? "text-white/70" : "text-ink-secondary";

  if (!mounted) {
    // Reserve space, no numbers yet.
    return (
      <p className={`text-[13px] ${introClass}`}>
        Sommertilbud — kun frem til {CAMPAIGN_DEADLINE_LABEL}. Så længe lager
        haves.
      </p>
    );
  }

  if (!timeLeft) {
    return (
      <p
        className={`text-[13.5px] font-semibold ${
          isDark ? "text-white/85" : "text-ink-primary"
        }`}
      >
        Tilbuddet er slut — spørg din forhandler om aktuelle priser.
      </p>
    );
  }

  const units: { value: number; label: string }[] = [
    { value: timeLeft.days, label: "dage" },
    { value: timeLeft.hours, label: "timer" },
    { value: timeLeft.minutes, label: "min." },
    { value: timeLeft.seconds, label: "sek." },
  ];

  return (
    <div>
      <p className={`text-[12.5px] font-medium ${introClass}`}>
        Sommertilbuddet slutter {CAMPAIGN_DEADLINE_LABEL}
      </p>
      <div
        className="mt-2.5 flex gap-2"
        style={{ fontVariantNumeric: "tabular-nums" }}
        role="timer"
        aria-label={`Tilbuddet slutter om ${timeLeft.days} dage, ${timeLeft.hours} timer, ${timeLeft.minutes} minutter og ${timeLeft.seconds} sekunder`}
      >
        {units.map((u) => (
          <div
            key={u.label}
            className={`flex min-w-[54px] flex-col items-center rounded-xl px-3 py-2 ${boxClass}`}
          >
            <span className="text-[22px] font-bold leading-none tracking-[-0.02em]">
              {String(u.value).padStart(2, "0")}
            </span>
            <span
              className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] ${labelClass}`}
            >
              {u.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
