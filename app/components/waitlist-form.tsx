"use client";

import { useState } from "react";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex w-full max-w-md flex-col gap-4 sm:flex-row sm:items-stretch"
      noValidate
    >
      <label htmlFor="waitlist-email" className="sr-only">
        Email for waitlist
      </label>
      <input
        id="waitlist-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        value={email}
        onChange={(ev) => {
          setEmail(ev.target.value);
          if (status !== "idle") setStatus("idle");
        }}
        className="h-14 flex-1 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 text-[15px] text-[var(--foreground)] outline-none backdrop-blur-sm transition-[border-color,box-shadow] placeholder:text-white/35 focus:border-[color-mix(in_oklab,var(--atlantis-gold)_55%,transparent)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--atlantis-gold)_25%,transparent)]"
      />
      <button
        type="submit"
        className="h-14 shrink-0 rounded-xl bg-[var(--atlantis-gold)] px-8 text-[15px] font-bold tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_1px_3px_rgba(0,0,0,0.35)] transition-[filter,transform] hover:brightness-110 active:scale-[0.98] sm:min-w-[180px] [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]"
      >
        Join waitlist
      </button>
      {status === "error" ? (
        <p
          className="sm:absolute sm:left-0 sm:top-full sm:mt-3 text-center text-sm text-red-300/90 sm:text-left"
          role="alert"
        >
          Enter a valid email address.
        </p>
      ) : null}
      {status === "success" ? (
        <p
          className="sm:absolute sm:left-0 sm:top-full sm:mt-3 text-center text-sm text-[var(--atlantis-gold-soft)] sm:text-left"
          role="status"
        >
          You&apos;re on the list. We&apos;ll be in touch soon.
        </p>
      ) : null}
    </form>
  );
}
