"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/components/store-provider";
import { ProductCard } from "@/components/product-card";
import {
  ArrowRightIcon,
  CheckIcon,
  HeartIcon,
  LeafIcon,
  MinusIcon,
  PlusIcon,
  ReturnIcon,
  ShieldIcon,
  TruckIcon,
} from "@/components/icons";
import { Badge, Price, RatingLine, SectionHeading } from "@/components/ui";
import {
  categoryName,
  formatPrice,
  type Product,
} from "@/lib/products";

export function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const [activeImage, setActiveImage] = useState(0);
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const [qty, setQty] = useState(1);
  const saved = isWishlisted(product.slug);
  const save = product.compareAt
    ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
    : 0;

  return (
    <>
      <section className="container-x pt-6">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted">
          <Link href="/shop" className="transition hover:text-ink">
            Shop
          </Link>
          <span aria-hidden>/</span>
          <Link
            href={`/collections/${product.category}`}
            className="transition hover:text-ink"
          >
            {categoryName(product.category)}
          </Link>
          <span aria-hidden>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </section>

      <section className="container-x grid gap-10 pb-16 pt-8 lg:grid-cols-12 lg:gap-14 lg:pt-10">
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-sand">
            <Image
              src={product.gallery[activeImage] ?? product.image}
              alt={`${product.name} — view ${activeImage + 1}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            {product.badge ? (
              <div className="absolute left-4 top-4">
                <Badge label={product.badge} />
              </div>
            ) : null}
            <div className="absolute bottom-4 right-4 rounded-full bg-paper/85 px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.14em] backdrop-blur">
              {activeImage + 1} / {product.gallery.length}
            </div>
          </div>

          <div className="mt-3 grid grid-cols-4 gap-3">
            {product.gallery.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`View image ${index + 1} of ${product.name}`}
                aria-pressed={activeImage === index}
                className={`relative aspect-square overflow-hidden rounded-xl bg-sand transition ${
                  activeImage === index
                    ? "ring-2 ring-ink ring-offset-2 ring-offset-cream"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            ))}
            <div className="flex flex-col justify-center rounded-xl border border-dashed border-ink/15 px-3 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-muted">
              Free
              <br />
              returns
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow text-clay">{categoryName(product.category)}</p>
            <h1 className="display mt-3 text-4xl sm:text-5xl">{product.name}</h1>
            <p className="mt-2 text-sm italic text-muted">{product.tagline}</p>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <RatingLine rating={product.rating} reviews={product.reviews} />
              <span className="text-xs text-muted">·</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-olive">
                <span className="size-1.5 rounded-full bg-olive" />
                In stock, ships in 1–2 days
              </span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Price
                price={product.price}
                compareAt={product.compareAt}
                className="text-2xl font-semibold"
              />
              {save > 0 ? (
                <span className="rounded-full bg-clay/10 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.1em] text-clay">
                  Save {save}%
                </span>
              ) : null}
            </div>

            <p className="mt-6 text-[0.92rem] leading-relaxed text-muted">
              {product.description}
            </p>

            <div className="mt-8">
              <div className="flex items-center justify-between">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em]">
                  Colour
                </p>
                <p className="text-[0.7rem] text-muted">{color}</p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {product.colors.map((option) => (
                  <button
                    key={option.name}
                    type="button"
                    onClick={() => setColor(option.name)}
                    aria-label={option.name}
                    aria-pressed={color === option.name}
                    className={`grid size-9 place-items-center rounded-full border transition ${
                      color === option.name
                        ? "border-ink"
                        : "border-transparent hover:border-ink/30"
                    }`}
                  >
                    <span
                      className="size-6 rounded-full ring-1 ring-inset ring-ink/10"
                      style={{ backgroundColor: option.hex }}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 flex gap-2.5">
              <div className="flex items-center rounded-full border border-ink/20">
                <button
                  type="button"
                  onClick={() => setQty((value) => Math.max(1, value - 1))}
                  aria-label="Decrease quantity"
                  className="grid size-11 place-items-center rounded-full transition hover:bg-ink/5"
                >
                  <MinusIcon className="size-3.5" />
                </button>
                <span className="w-7 text-center text-sm font-semibold">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((value) => Math.min(10, value + 1))}
                  aria-label="Increase quantity"
                  className="grid size-11 place-items-center rounded-full transition hover:bg-ink/5"
                >
                  <PlusIcon className="size-3.5" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => addToCart(product.slug, qty, color, { openDrawer: true })}
                className="btn btn-primary flex-1"
              >
                Add to bag — {formatPrice(product.price * qty)}
              </button>
              <button
                type="button"
                onClick={() => toggleWishlist(product.slug)}
                aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
                aria-pressed={saved}
                className={`grid size-[3.2rem] shrink-0 place-items-center rounded-full border transition ${
                  saved
                    ? "border-clay bg-clay text-paper"
                    : "border-ink/20 hover:border-ink"
                }`}
              >
                <HeartIcon filled={saved} className="size-5" />
              </button>
            </div>

            <div className="mt-5 flex items-center gap-2 rounded-xl bg-olive/10 px-4 py-3 text-[0.72rem] text-olive">
              <LeafIcon className="size-4 shrink-0" />
              Carbon-neutral delivery. Plastic-free packaging on every order.
            </div>

            <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {[
                {
                  title: "Details",
                  content: (
                    <ul className="space-y-1.5">
                      {product.details.map((detail) => (
                        <li key={detail} className="flex gap-2">
                          <CheckIcon className="mt-0.5 size-3.5 shrink-0 text-clay" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  ),
                },
                {
                  title: "Materials & care",
                  content: (
                    <p>
                      Made from responsibly sourced materials and finished by
                      hand. Wipe with a soft, dry cloth. For deeper care, follow
                      the card included in your order — or write to the studio
                      and we&apos;ll help.
                    </p>
                  ),
                },
                {
                  title: "Shipping & returns",
                  content: (
                    <p>
                      Free carbon-neutral shipping over $150. Orders ship within
                      1–2 business days. Not right? Return it within 30 days,
                      unused, for a full refund. Repairs are free for two years.
                    </p>
                  ),
                },
              ].map((section) => (
                <details key={section.title} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-[0.8rem] font-semibold">
                    {section.title}
                    <PlusIcon className="size-4 transition group-open:rotate-45" />
                  </summary>
                  <div className="pt-3 text-[0.8rem] leading-relaxed text-muted">
                    {section.content}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2 text-center">
              {[
                { Icon: TruckIcon, label: "Free over $150" },
                { Icon: ReturnIcon, label: "30-day returns" },
                { Icon: ShieldIcon, label: "2-year warranty" },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1.5 rounded-xl border border-ink/10 px-2 py-3"
                >
                  <Icon className="size-4 text-clay" />
                  <span className="text-[0.56rem] font-bold uppercase tracking-[0.1em] text-muted">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x pb-20 md:pb-24">
        <SectionHeading
          eyebrow="Complete the look"
          title={
            <>
              You might also <em className="italic text-clay">like</em>
            </>
          }
          action={
            <Link
              href="/shop"
              className="link-underline text-[0.7rem] font-bold uppercase tracking-[0.14em]"
            >
              Shop all
              <ArrowRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </>
  );
}
