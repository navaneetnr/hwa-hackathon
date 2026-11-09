"use client";

import { useState } from "react";
import { useStore } from "@/components/store-provider";
import { CheckIcon, LeafIcon, ReturnIcon, ShieldIcon } from "@/components/icons";
import { formatPrice } from "@/lib/products";

export function OrderSummary({
  cta,
  title = "Order summary",
  extraShipping = 0,
}: {
  cta?: React.ReactNode;
  title?: string;
  extraShipping?: number;
}) {
  const {
    subtotal,
    shipping,
    discount,
    total,
    promo,
    applyPromo,
    clearPromo,
    cartCount,
  } = useStore();
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const submitPromo = () => {
    const ok = applyPromo(code);
    setError(!ok);
    if (ok) setCode("");
  };

  return (
    <div className="rounded-2xl border border-ink/10 bg-paper p-5 sm:p-6 lg:sticky lg:top-28">
      <div className="flex items-center justify-between">
        <h2 className="display text-2xl">{title}</h2>
        <span className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-muted">
          {cartCount} {cartCount === 1 ? "item" : "items"}
        </span>
      </div>

      <div className="mt-5">
        {promo ? (
          <div className="flex items-center justify-between rounded-full bg-olive/10 px-4 py-2.5 text-[0.72rem] text-olive">
            <span className="inline-flex items-center gap-2 font-semibold">
              <CheckIcon className="size-3.5" />
              {promo.code} applied — {promo.percent}% off
            </span>
            <button
              type="button"
              onClick={clearPromo}
              className="text-[0.62rem] font-bold uppercase tracking-[0.1em] underline-offset-2 hover:underline"
            >
              Remove
            </button>
          </div>
        ) : (
          <div>
            <div className="flex gap-2">
              <label htmlFor="promo" className="sr-only">
                Promo code
              </label>
              <input
                id="promo"
                value={code}
                onChange={(event) => {
                  setCode(event.target.value);
                  setError(false);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    submitPromo();
                  }
                }}
                placeholder="Promo code"
                className="w-full rounded-full border border-ink/15 bg-cream/50 px-4 py-2.5 text-xs outline-none transition focus:border-ink/40"
              />
              <button
                type="button"
                onClick={submitPromo}
                className="shrink-0 rounded-full border border-ink/20 px-4 text-[0.62rem] font-bold uppercase tracking-[0.1em] transition hover:bg-ink hover:text-paper"
              >
                Apply
              </button>
            </div>
            {error ? (
              <p className="mt-2 text-[0.68rem] text-clay">
                That code isn&apos;t valid. Try WELCOME10.
              </p>
            ) : (
              <p className="mt-2 text-[0.62rem] text-muted">
                New here? Use WELCOME10 for 10% off.
              </p>
            )}
          </div>
        )}
      </div>

      <dl className="mt-6 space-y-3 border-t border-ink/10 pt-5 text-sm">
        <div className="flex items-center justify-between">
          <dt className="text-muted">Subtotal</dt>
          <dd className="font-semibold">{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-muted">Shipping</dt>
          <dd className="font-semibold">
            {shipping === 0 ? (
              <span className="text-olive">Free</span>
            ) : (
              formatPrice(shipping)
            )}
          </dd>
        </div>
        {extraShipping > 0 ? (
          <div className="flex items-center justify-between">
            <dt className="text-muted">Express surcharge</dt>
            <dd className="font-semibold">{formatPrice(extraShipping)}</dd>
          </div>
        ) : null}
        {discount > 0 ? (
          <div className="flex items-center justify-between text-olive">
            <dt>Discount</dt>
            <dd className="font-semibold">−{formatPrice(discount)}</dd>
          </div>
        ) : null}
        <div className="flex items-center justify-between border-t border-ink/10 pt-4">
          <dt className="text-[0.7rem] font-bold uppercase tracking-[0.14em]">
            Total
          </dt>
          <dd className="display text-3xl">
            {formatPrice(total + extraShipping)}
          </dd>
        </div>
      </dl>

      {cta ? <div className="mt-5">{cta}</div> : null}

      <ul className="mt-5 space-y-2.5 border-t border-ink/10 pt-5 text-[0.68rem] text-muted">
        <li className="flex items-center gap-2">
          <LeafIcon className="size-3.5 text-olive" />
          Carbon-neutral delivery on every order
        </li>
        <li className="flex items-center gap-2">
          <ReturnIcon className="size-3.5 text-olive" />
          30-day returns, no questions asked
        </li>
        <li className="flex items-center gap-2">
          <ShieldIcon className="size-3.5 text-olive" />
          Secure checkout · 2-year warranty
        </li>
      </ul>
    </div>
  );
}
