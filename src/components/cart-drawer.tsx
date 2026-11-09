"use client";

import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/components/store-provider";
import {
  ArrowRightIcon,
  BagIcon,
  CloseIcon,
  MinusIcon,
  PlusIcon,
  TruckIcon,
} from "@/components/icons";
import { formatPrice } from "@/lib/products";

const FREE_SHIPPING = 150;

export function CartDrawer() {
  const {
    cartOpen,
    closeCart,
    cartLines,
    cartCount,
    subtotal,
    updateQty,
    removeFromCart,
  } = useStore();

  const remaining = Math.max(0, FREE_SHIPPING - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING) * 100);

  return (
    <div
      className={`fixed inset-0 z-[70] ${cartOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!cartOpen}
      inert={!cartOpen}
    >
      <button
        type="button"
        aria-label="Close bag"
        onClick={closeCart}
        className={`absolute inset-0 bg-ink/40 backdrop-blur-[2px] transition-opacity duration-500 ${
          cartOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-paper shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-5 sm:px-6">
          <div>
            <p className="eyebrow text-[0.6rem] text-clay">Your bag</p>
            <h2 className="display mt-1 text-2xl">
              {cartCount} {cartCount === 1 ? "item" : "items"}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close bag"
            className="grid size-10 place-items-center rounded-full transition hover:bg-ink/5"
          >
            <CloseIcon className="size-5" />
          </button>
        </div>

        {cartLines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <span className="grid size-16 place-items-center rounded-full bg-sand">
              <BagIcon className="size-7 text-ink/70" />
            </span>
            <h3 className="display mt-6 text-2xl">Your bag is empty</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
              Good things take a little finding. Start with the pieces everyone
              comes back for.
            </p>
            <Link href="/shop" onClick={closeCart} className="btn btn-primary mt-7">
              Explore the shop
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        ) : (
          <>
            <div className="border-b border-ink/10 px-5 py-4 sm:px-6">
              <div className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em]">
                <TruckIcon className="size-4 text-clay" />
                {remaining > 0 ? (
                  <span>
                    {formatPrice(remaining)} away from free shipping
                  </span>
                ) : (
                  <span className="text-olive">Free shipping unlocked</span>
                )}
              </div>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-sand">
                <div
                  className="h-full rounded-full bg-clay transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <ul className="flex-1 divide-y divide-ink/10 overflow-y-auto px-5 sm:px-6">
              {cartLines.map((line) => (
                <li key={`${line.slug}-${line.color}`} className="flex gap-4 py-5">
                  <Link
                    href={`/product/${line.slug}`}
                    onClick={closeCart}
                    className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-sand"
                  >
                    <Image
                      src={line.product.image}
                      alt={line.product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <Link
                          href={`/product/${line.slug}`}
                          onClick={closeCart}
                          className="block truncate text-sm font-semibold"
                        >
                          {line.product.name}
                        </Link>
                        <p className="mt-0.5 text-[0.7rem] text-muted">
                          {line.color}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(line.slug, line.color)}
                        className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-muted underline-offset-4 hover:text-clay hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center rounded-full border border-ink/15">
                        <button
                          type="button"
                          onClick={() =>
                            updateQty(line.slug, line.color, line.qty - 1)
                          }
                          aria-label={`Decrease quantity of ${line.product.name}`}
                          className="grid size-7 place-items-center rounded-full hover:bg-ink/5"
                        >
                          <MinusIcon className="size-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-semibold">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQty(line.slug, line.color, line.qty + 1)
                          }
                          aria-label={`Increase quantity of ${line.product.name}`}
                          className="grid size-7 place-items-center rounded-full hover:bg-ink/5"
                        >
                          <PlusIcon className="size-3" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold">
                        {formatPrice(line.product.price * line.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-ink/10 bg-cream/50 px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">Subtotal</span>
                <span className="text-lg font-semibold">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-[0.68rem] text-muted">
                Taxes calculated at checkout. Shipping is free over $150.
              </p>
              <div className="mt-4 grid gap-2.5">
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="btn btn-primary w-full"
                >
                  Checkout
                  <ArrowRightIcon className="size-4" />
                </Link>
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="btn btn-outline w-full"
                >
                  View bag
                </Link>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
