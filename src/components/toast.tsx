"use client";

import { useStore } from "@/components/store-provider";
import { CheckIcon } from "@/components/icons";

export function Toast() {
  const { toast } = useStore();

  return (
    <div
      className={`pointer-events-none fixed bottom-6 left-1/2 z-[95] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 transition-all duration-500 ${
        toast ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
      role="status"
      aria-live="polite"
    >
      {toast ? (
        <div className="flex items-center gap-3 rounded-full bg-ink px-5 py-3.5 text-paper shadow-[0_18px_50px_-12px_rgba(21,20,15,0.6)]">
          <span className="grid size-6 shrink-0 place-items-center rounded-full bg-clay">
            <CheckIcon className="size-3.5" />
          </span>
          <span className="text-sm font-medium">{toast}</span>
        </div>
      ) : null}
    </div>
  );
}
