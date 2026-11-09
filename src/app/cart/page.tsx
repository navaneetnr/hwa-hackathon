"use client";

import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/components/store-provider";
import { OrderSummary } from "@/components/order-summary";
import {
  ArrowRightIcon,
  BagIcon,
  MinusIcon,
  PlusIcon,
  ReturnIcon,
} from "@/components/icons";
import { formatPrice } from "@/lib/products";

export default function CartPage() {
  const { cartLines, cartCount, updateQty, removeFromCart } = useStore();

  return (
    <div className="container-x py-10 md:py-14">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink/10 pb-6">
        <div>
          <p className="eyebrow text-clay">Almost yours</p>
          <h1 className="display mt-3 text-5xl sm:text-6xl">Your bag</h1>
        </div>
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted">
          {cartCount} {cartCount === 1 ? "item" : "items"}
        </p>
      </div>

      {cartLines.length === 0 ? (
        <div className="flex flex-col items-center py-24 text-center">
          <span className="grid size-20 place-items-center rounded-full bg-sand">
            <BagIcon className="size-8 text-ink/60" />
          </span>
          <h2 className="display mt-7 text-3xl">Your bag is empty</h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Nothing in here yet. Start with the pieces people come back for —
            or browse the full collection.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/shop" className="btn btn-primary">
              Shop all pieces
              <ArrowRightIcon className="size-4" />
            </Link>
            <Link href="/wishlist" className="btn btn-outline">
              View wishlist
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <div>
            <ul className="divide-y divide-ink/10 border-b border-ink/10">
              {cartLines.map((line) => (
                <li
                  key={`${line.slug}-${line.color}`}
                  className="flex gap-4 py-6 sm:gap-6"
                >
                  <Link
                    href={`/product/${line.slug}`}
                    className="relative size-24 shrink-0 overflow-hidden rounded-2xl bg-sand sm:size-32"
                  >
                    <Image
                      src={line.product.image}
                      alt={line.product.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <Link
                          href={`/product/${line.slug}`}
                          className="display text-xl transition hover:text-clay sm:text-2xl"
                        >
                          {line.product.name}
                        </Link>
                        <p className="mt-1 text-[0.7rem] uppercase tracking-[0.12em] text-muted">
                          {line.color}
                        </p>
                        <p className="mt-1 text-[0.72rem] text-muted">
                          {line.product.tagline}
                        </p>
                      </div>
                      <div className="text-right text-sm font-semibold">
                        {formatPrice(line.product.price * line.qty)}
                        {line.qty > 1 ? (
                          <p className="mt-0.5 text-[0.65rem] font-normal text-muted">
                            {formatPrice(line.product.price)} each
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
                      <div className="flex items-center rounded-full border border-ink/15">
                        <button
                          type="button"
                          onClick={() =>
                            updateQty(line.slug, line.color, line.qty - 1)
                          }
                          aria-label={`Decrease quantity of ${line.product.name}`}
                          className="grid size-9 place-items-center rounded-full transition hover:bg-ink/5"
                        >
                          <MinusIcon className="size-3.5" />
                        </button>
                        <span className="w-7 text-center text-xs font-semibold">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQty(line.slug, line.color, line.qty + 1)
                          }
                          aria-label={`Increase quantity of ${line.product.name}`}
                          className="grid size-9 place-items-center rounded-full transition hover:bg-ink/5"
                        >
                          <PlusIcon className="size-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(line.slug, line.color)}
                        className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-muted underline-offset-4 transition hover:text-clay hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/shop"
                className="link-underline text-[0.7rem] font-bold uppercase tracking-[0.14em]"
              >
                Continue shopping
              </Link>
              <p className="inline-flex items-center gap-2 text-[0.7rem] text-muted">
                <ReturnIcon className="size-4 text-olive" />
                Free returns within 30 days
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-ink/10 bg-paper/60 p-6">
              <p className="display text-xl">A note from the studio</p>
              <p className="mt-2 max-w-lg text-[0.82rem] leading-relaxed text-muted">
                Every order is packed by hand in Copenhagen and shipped in
                plastic-free packaging. If you&apos;re buying a gift, write to us
                after checkout and we&apos;ll include a card.
              </p>
            </div>
          </div>

          <div>
            <OrderSummary
              cta={
                <Link href="/checkout" className="btn btn-primary w-full">
                  Continue to checkout
                  <ArrowRightIcon className="size-4" />
                </Link>
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}
