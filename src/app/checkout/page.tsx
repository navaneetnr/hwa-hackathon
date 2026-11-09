"use client";

import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/components/store-provider";
import { OrderSummary } from "@/components/order-summary";
import { CheckIcon, LockIcon, ArrowRightIcon, BagIcon } from "@/components/icons";
import { formatPrice } from "@/lib/products";

type PlacedOrder = {
  number: string;
  total: number;
  email: string;
  items: number;
};

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm outline-none transition placeholder:text-ink/35 focus:border-ink/50";

const labelClass =
  "mb-1.5 block text-[0.62rem] font-bold uppercase tracking-[0.14em] text-muted";

export default function CheckoutPage() {
  const { cartCount, cartLines, total, shipping, clearCart } = useStore();
  const [order, setOrder] = useState<PlacedOrder | null>(null);
  const [express, setExpress] = useState(false);

  if (order) {
    return (
      <div className="container-x flex flex-col items-center py-20 text-center md:py-28">
        <span className="grid size-20 place-items-center rounded-full bg-olive text-paper">
          <CheckIcon className="size-9" />
        </span>
        <p className="eyebrow mt-8 text-clay">Order confirmed</p>
        <h1 className="display mt-4 text-4xl sm:text-6xl">Thank you.</h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
          Your order <span className="font-semibold text-ink">{order.number}</span>{" "}
          is in. A confirmation is on its way to{" "}
          <span className="font-semibold text-ink">{order.email}</span>. We pack
          by hand, so expect it to leave the studio within two working days.
        </p>

        <div className="mt-10 w-full max-w-md rounded-2xl border border-ink/10 bg-paper p-6 text-left">
          <div className="flex items-center justify-between border-b border-ink/10 pb-4">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-muted">
              Order total
            </span>
            <span className="display text-2xl">{formatPrice(order.total)}</span>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-muted">Items</span>
            <span className="font-semibold">{order.items}</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-muted">Delivery</span>
            <span className="font-semibold text-olive">Carbon-neutral</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-muted">Estimated arrival</span>
            <span className="font-semibold">3–5 working days</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/shop" className="btn btn-primary">
            Keep shopping
            <ArrowRightIcon className="size-4" />
          </Link>
          <Link href="/wishlist" className="btn btn-outline">
            View wishlist
          </Link>
        </div>
        <p className="mt-8 text-[0.62rem] uppercase tracking-[0.12em] text-muted">
          This is a demo store — no payment was taken.
        </p>
      </div>
    );
  }

  if (cartCount === 0) {
    return (
      <div className="container-x flex flex-col items-center py-24 text-center">
        <span className="grid size-20 place-items-center rounded-full bg-sand">
          <BagIcon className="size-8 text-ink/60" />
        </span>
        <h1 className="display mt-7 text-4xl">Nothing to check out</h1>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
          Your bag is empty. Add a piece or two and we&apos;ll get it on its way.
        </p>
        <Link href="/shop" className="btn btn-primary mt-8">
          Shop the collection
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="container-x py-10 md:py-14">
      <div className="border-b border-ink/10 pb-6">
        <div className="flex flex-wrap items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-muted">
          <Link href="/cart" className="transition hover:text-ink">
            Bag
          </Link>
          <span aria-hidden>/</span>
          <span className="text-ink">Details</span>
          <span aria-hidden>/</span>
          <span>Confirmation</span>
        </div>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
          <h1 className="display text-5xl sm:text-6xl">Checkout</h1>
          <p className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-olive">
            <LockIcon className="size-4" />
            Secure demo checkout
          </p>
        </div>
      </div>

      <form
        id="checkout-form"
        className="mt-8 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14"
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          setOrder({
            number: `AUR-${Math.floor(100000 + Math.random() * 900000)}`,
            total: total + (express ? 18 : 0),
            email: String(data.get("email") ?? ""),
            items: cartCount,
          });
          clearCart();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <div className="space-y-9">
          <fieldset>
            <legend className="display text-2xl">Contact</legend>
            <div className="mt-4">
              <label htmlFor="email" className={labelClass}>
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className={inputClass}
              />
              <p className="mt-2 text-[0.68rem] text-muted">
                Order updates only. No marketing unless you ask.
              </p>
            </div>
          </fieldset>

          <fieldset>
            <legend className="display text-2xl">Shipping address</legend>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className={labelClass}>
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  required
                  autoComplete="given-name"
                  placeholder="Ada"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClass}>
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  required
                  autoComplete="family-name"
                  placeholder="Lovelace"
                  className={inputClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="address" className={labelClass}>
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  required
                  autoComplete="street-address"
                  placeholder="12 Nyhavn"
                  className={inputClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="apartment" className={labelClass}>
                  Apartment, suite, etc.{" "}
                  <span className="font-normal normal-case tracking-normal">
                    (optional)
                  </span>
                </label>
                <input
                  id="apartment"
                  name="apartment"
                  autoComplete="address-line2"
                  placeholder="Floor 3"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="city" className={labelClass}>
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  required
                  autoComplete="address-level2"
                  placeholder="Copenhagen"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="postal" className={labelClass}>
                  Postal code
                </label>
                <input
                  id="postal"
                  name="postal"
                  required
                  autoComplete="postal-code"
                  placeholder="1051"
                  className={inputClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="country" className={labelClass}>
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  required
                  autoComplete="country-name"
                  defaultValue="Denmark"
                  className={`${inputClass} appearance-none`}
                >
                  {[
                    "Denmark",
                    "United States",
                    "United Kingdom",
                    "Germany",
                    "France",
                    "Netherlands",
                    "Sweden",
                    "Japan",
                    "Australia",
                  ].map((country) => (
                    <option key={country}>{country}</option>
                  ))}
                </select>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="display text-2xl">Delivery</legend>
            <div className="mt-4 space-y-2">
              <label className="flex cursor-pointer items-center justify-between rounded-xl border border-ink bg-paper px-4 py-3.5">
                <span className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="delivery"
                    value="standard"
                    checked={!express}
                    onChange={() => setExpress(false)}
                    className="size-4 accent-[#15140f]"
                  />
                  <span>
                    <span className="block text-sm font-semibold">
                      Carbon-neutral standard
                    </span>
                    <span className="block text-[0.7rem] text-muted">
                      3–5 working days · free over $150
                    </span>
                  </span>
                </span>
                <span className="text-sm font-semibold text-olive">
                  {shipping === 0 ? "Free" : formatPrice(shipping)}
                </span>
              </label>
              <label className="flex cursor-pointer items-center justify-between rounded-xl border border-ink/15 bg-paper px-4 py-3.5">
                <span className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="delivery"
                    value="express"
                    checked={express}
                    onChange={() => setExpress(true)}
                    className="size-4 accent-[#15140f]"
                  />
                  <span>
                    <span className="block text-sm font-semibold">
                      Studio express
                    </span>
                    <span className="block text-[0.7rem] text-muted">
                      1–2 working days
                    </span>
                  </span>
                </span>
                <span className="text-sm font-semibold">+$18</span>
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend className="display text-2xl">Payment</legend>
            <p className="mt-2 text-[0.7rem] text-muted">
              Demo only — no card will be charged. Use any numbers you like.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="card" className={labelClass}>
                  Card number
                </label>
                <input
                  id="card"
                  name="card"
                  required
                  inputMode="numeric"
                  autoComplete="cc-number"
                  placeholder="4242 4242 4242 4242"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="expiry" className={labelClass}>
                  Expiry
                </label>
                <input
                  id="expiry"
                  name="expiry"
                  required
                  autoComplete="cc-exp"
                  placeholder="MM / YY"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="cvc" className={labelClass}>
                  CVC
                </label>
                <input
                  id="cvc"
                  name="cvc"
                  required
                  inputMode="numeric"
                  autoComplete="cc-csc"
                  placeholder="123"
                  className={inputClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="cardName" className={labelClass}>
                  Name on card
                </label>
                <input
                  id="cardName"
                  name="cardName"
                  required
                  autoComplete="cc-name"
                  placeholder="Ada Lovelace"
                  className={inputClass}
                />
              </div>
            </div>
          </fieldset>

          <label className="flex items-start gap-3 text-[0.78rem] text-muted">
            <input
              type="checkbox"
              required
              className="mt-0.5 size-4 shrink-0 accent-[#15140f]"
            />
            <span>
              I agree to the terms of sale and the 30-day returns policy. I
              understand this is a demonstration store.
            </span>
          </label>
        </div>

        <div>
          <OrderSummary
            extraShipping={express ? 18 : 0}
            cta={
              <button type="submit" className="btn btn-primary w-full">
                Place order — {formatPrice(total + (express ? 18 : 0))}
                <ArrowRightIcon className="size-4" />
              </button>
            }
          />
          <div className="mt-5 rounded-2xl border border-ink/10 bg-paper/60 p-5">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-muted">
              In your bag
            </p>
            <ul className="mt-3 space-y-2">
              {cartLines.map((line) => (
                <li
                  key={`${line.slug}-${line.color}`}
                  className="flex items-center justify-between gap-3 text-[0.75rem]"
                >
                  <span className="truncate text-muted">
                    {line.qty} × {line.product.name}
                  </span>
                  <span className="shrink-0 font-semibold">
                    {formatPrice(line.product.price * line.qty)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
