"use client";

import { useId, useState } from "react";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

export function NewsletterForm({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const inputId = useId();
  const dark = variant === "dark";

  if (done) {
    return (
      <div
        className={`flex items-center gap-3 rounded-full px-5 py-4 text-sm ${
          dark ? "bg-paper/10 text-paper" : "bg-ink/5 text-ink"
        } ${className}`}
        role="status"
      >
        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-clay text-paper">
          <CheckIcon className="size-3.5" />
        </span>
        You&apos;re on the list. Look out for the next edit.
      </div>
    );
  }

  return (
    <form
      className={`flex items-center gap-2 border-b pb-2 ${
        dark ? "border-paper/30" : "border-ink/30"
      } ${className}`}
      onSubmit={(event) => {
        event.preventDefault();
        if (!email.includes("@")) return;
        setDone(true);
      }}
    >
      <label htmlFor={inputId} className="sr-only">
        Email address
      </label>
      <input
        id={inputId}
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your email address"
        className={`w-full bg-transparent py-2 text-sm outline-none ${
          dark
            ? "text-paper placeholder:text-paper/45"
            : "text-ink placeholder:text-ink/40"
        }`}
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className={`grid size-10 shrink-0 place-items-center rounded-full transition ${
          dark
            ? "bg-paper text-ink hover:bg-clay hover:text-paper"
            : "bg-ink text-paper hover:bg-clay"
        }`}
      >
        <ArrowRightIcon className="size-4" />
      </button>
    </form>
  );
}
