"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { SearchIcon, CloseIcon, ChevronDownIcon } from "@/components/icons";
import {
  categories,
  categoryName,
  type CategorySlug,
  type Product,
} from "@/lib/products";

type SortKey = "featured" | "new" | "price-asc" | "price-desc" | "rating";
type PriceKey = "all" | "under-100" | "100-250" | "250-500" | "over-500";

const priceOptions: { value: PriceKey; label: string }[] = [
  { value: "all", label: "All prices" },
  { value: "under-100", label: "Under $100" },
  { value: "100-250", label: "$100 – $250" },
  { value: "250-500", label: "$250 – $500" },
  { value: "over-500", label: "$500+" },
];

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "new", label: "Newest" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Top rated" },
];

function matchesPrice(product: Product, bucket: PriceKey) {
  switch (bucket) {
    case "under-100":
      return product.price < 100;
    case "100-250":
      return product.price >= 100 && product.price < 250;
    case "250-500":
      return product.price >= 250 && product.price < 500;
    case "over-500":
      return product.price >= 500;
    default:
      return true;
  }
}

export function ShopClient({
  items,
  initialCategory = "all",
  eyebrow,
  title,
  description,
}: {
  items: Product[];
  initialCategory?: CategorySlug | "all";
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
}) {
  const [category, setCategory] = useState<CategorySlug | "all">(initialCategory);
  const [sort, setSort] = useState<SortKey>("featured");
  const [price, setPrice] = useState<PriceKey>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const result = items.filter((product) => {
      if (category !== "all" && product.category !== category) return false;
      if (!matchesPrice(product, price)) return false;
      if (
        q &&
        ![product.name, product.tagline, product.description, product.category]
          .join(" ")
          .toLowerCase()
          .includes(q)
      ) {
        return false;
      }
      return true;
    });

    return [...result].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "new":
          return Number(Boolean(b.isNew)) - Number(Boolean(a.isNew));
        default:
          return (
            Number(Boolean(b.bestseller)) - Number(Boolean(a.bestseller)) ||
            b.reviews - a.reviews
          );
      }
    });
  }, [items, category, price, query, sort]);

  const activeFilters =
    (category !== "all" ? 1 : 0) +
    (price !== "all" ? 1 : 0) +
    (query.trim() ? 1 : 0);

  const reset = () => {
    setCategory("all");
    setPrice("all");
    setQuery("");
    setSort("featured");
  };

  const heading =
    title ??
    (category === "all" ? (
      <>
        The full <em className="italic text-clay">collection</em>
      </>
    ) : (
      categoryName(category)
    ));

  return (
    <>
      <section className="container-x pb-8 pt-10 md:pb-10 md:pt-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow flex items-center gap-3 text-clay">
              <span className="h-px w-8 bg-clay" />
              {eyebrow ?? "Shop"}
            </p>
            <h1 className="display mt-4 text-5xl sm:text-6xl md:text-7xl">
              {heading}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
              {description ??
                "Fifty-six considered objects for the everyday. Every piece is made in small runs, priced honestly, and built to be repaired."}
            </p>
          </div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted">
            {items.length} pieces
          </p>
        </div>
      </section>

      <div className="sticky top-16 z-30 border-y border-ink/10 bg-cream/92 backdrop-blur-xl md:top-[4.5rem]">
        <div className="container-x flex flex-col gap-3 py-3.5 xl:flex-row xl:items-center xl:justify-between">
          <div className="no-scrollbar -mx-1 flex gap-1.5 overflow-x-auto px-1">
            <button
              type="button"
              onClick={() => setCategory("all")}
              className={`shrink-0 rounded-full border px-3.5 py-2 text-[0.66rem] font-bold uppercase tracking-[0.12em] transition ${
                category === "all"
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink"
              }`}
            >
              All
            </button>
            {categories.map((option) => (
              <button
                key={option.slug}
                type="button"
                onClick={() => setCategory(option.slug)}
                className={`shrink-0 rounded-full border px-3.5 py-2 text-[0.66rem] font-bold uppercase tracking-[0.12em] transition ${
                  category === option.slug
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink"
                }`}
              >
                {option.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="relative flex-1 xl:w-52 xl:flex-none">
              <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search pieces"
                aria-label="Search pieces"
                className="w-full rounded-full border border-ink/15 bg-paper/60 py-2 pl-9 pr-8 text-xs outline-none transition focus:border-ink/40"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 grid size-6 -translate-y-1/2 place-items-center rounded-full text-muted hover:bg-ink/5"
                >
                  <CloseIcon className="size-3.5" />
                </button>
              ) : null}
            </div>

            <div className="relative">
              <select
                value={price}
                onChange={(event) => setPrice(event.target.value as PriceKey)}
                aria-label="Filter by price"
                className="appearance-none rounded-full border border-ink/15 bg-paper/60 py-2 pl-3 pr-8 text-xs font-semibold outline-none transition focus:border-ink/40"
              >
                {priceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted" />
            </div>

            <div className="relative">
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
                aria-label="Sort products"
                className="appearance-none rounded-full border border-ink/15 bg-paper/60 py-2 pl-3 pr-8 text-xs font-semibold outline-none transition focus:border-ink/40"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted" />
            </div>
          </div>
        </div>
      </div>

      <section className="container-x py-10 md:py-14">
        <div className="mb-8 flex items-center justify-between gap-4">
          <p className="text-xs text-muted">
            Showing <span className="font-semibold text-ink">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "piece" : "pieces"}
            {category !== "all" ? ` in ${categoryName(category)}` : ""}
          </p>
          {activeFilters > 0 ? (
            <button
              type="button"
              onClick={reset}
              className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-clay underline-offset-4 hover:underline"
            >
              Clear filters ({activeFilters})
            </button>
          ) : null}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-ink/20 px-6 py-20 text-center">
            <p className="display text-3xl">Nothing here — yet.</p>
            <p className="mx-auto mt-3 max-w-sm text-sm text-muted">
              Try removing a filter or searching for something broader.
            </p>
            <button type="button" onClick={reset} className="btn btn-primary mt-7">
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-md text-sm text-muted">
            Can&apos;t find it? We restock most pieces every six weeks.
          </p>
          <Link href="/about#contact" className="btn btn-outline">
            Ask the studio
          </Link>
        </div>
      </section>
    </>
  );
}
