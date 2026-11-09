"use client";

import Link from "next/link";
import { useStore } from "@/components/store-provider";
import { ProductCard } from "@/components/product-card";
import { ArrowRightIcon, HeartIcon } from "@/components/icons";
import { getProduct } from "@/lib/products";

export default function WishlistPage() {
  const { wishlist, addToCart, showToast } = useStore();
  const items = wishlist.flatMap((slug) => {
    const product = getProduct(slug);
    return product ? [product] : [];
  });

  return (
    <div className="container-x py-10 md:py-14">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink/10 pb-6">
        <div>
          <p className="eyebrow text-clay">Saved for later</p>
          <h1 className="display mt-3 text-5xl sm:text-6xl">Wishlist</h1>
        </div>
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted">
          {items.length} {items.length === 1 ? "piece" : "pieces"}
        </p>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center py-24 text-center">
          <span className="grid size-20 place-items-center rounded-full bg-sand">
            <HeartIcon className="size-8 text-ink/60" />
          </span>
          <h2 className="display mt-7 text-3xl">Nothing saved yet</h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Tap the heart on anything you like and it will wait for you here.
            No rush, no pressure.
          </p>
          <Link href="/shop" className="btn btn-primary mt-8">
            Find something good
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      ) : (
        <>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-muted">
              Saved on this device. Sign in later to sync across devices.
            </p>
            <button
              type="button"
              onClick={() => {
                items.forEach((item) =>
                  addToCart(item.slug, 1, item.colors[0]?.name),
                );
                showToast(
                  `${items.length} ${items.length === 1 ? "piece" : "pieces"} added to bag`,
                );
              }}
              className="btn btn-outline"
            >
              Add all to bag
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
            {items.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-md text-sm text-muted">
              Changed your mind about something? Tap the heart again to remove
              it.
            </p>
            <Link href="/shop" className="btn btn-outline">
              Keep browsing
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
