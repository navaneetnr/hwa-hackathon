"use client";

import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/components/store-provider";
import { HeartIcon, PlusIcon } from "@/components/icons";
import { Badge, Price, Stars } from "@/components/ui";
import { categoryName, type Product } from "@/lib/products";

export function ProductCard({
  product,
  priority = false,
  className = "",
}: {
  product: Product;
  priority?: boolean;
  className?: string;
}) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const saved = isWishlisted(product.slug);
  const hoverImage = product.gallery[1] ?? product.image;

  return (
    <article className={`group relative ${className}`}>
      <Link
        href={`/product/${product.slug}`}
        className="block focus-visible:outline-none"
        aria-label={`${product.name} — ${product.tagline}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-0"
          />
          <Image
            src={hoverImage}
            alt=""
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="scale-[1.04] object-cover opacity-0 transition duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          {product.badge ? (
            <div className="absolute left-3 top-3">
              <Badge label={product.badge} />
            </div>
          ) : null}
        </div>
      </Link>

      <div className="absolute right-3 top-3 flex flex-col gap-2">
        <button
          type="button"
          onClick={() => toggleWishlist(product.slug)}
          aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          aria-pressed={saved}
          className="grid size-9 place-items-center rounded-full bg-paper/90 text-ink shadow-sm backdrop-blur transition hover:bg-paper hover:text-clay"
        >
          <HeartIcon filled={saved} className="size-4" />
        </button>
      </div>

      <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-md:translate-y-0 max-md:opacity-100">
        <button
          type="button"
          onClick={() => addToCart(product.slug, 1, product.colors[0]?.name)}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-paper/95 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink shadow-sm backdrop-blur transition hover:bg-ink hover:text-paper"
        >
          <PlusIcon className="size-3.5" />
          Quick add
        </button>
      </div>

      <Link href={`/product/${product.slug}`} className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="eyebrow text-[0.58rem] text-muted">
            {categoryName(product.category)}
          </p>
          <h3 className="mt-1 truncate text-[0.95rem] font-semibold tracking-tight">
            {product.name}
          </h3>
          <div className="mt-1.5 flex items-center gap-1.5 text-muted">
            <Stars rating={product.rating} className="text-clay" size="size-3" />
            <span className="text-[0.68rem]">
              {product.rating.toFixed(1)} ({product.reviews})
            </span>
          </div>
        </div>
        <div className="shrink-0 text-right text-sm font-semibold">
          <Price price={product.price} compareAt={product.compareAt} className="flex-col items-end gap-0.5" />
        </div>
      </Link>
    </article>
  );
}
