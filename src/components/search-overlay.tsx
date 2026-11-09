"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useStore } from "@/components/store-provider";
import { CloseIcon, SearchIcon } from "@/components/icons";
import { Price } from "@/components/ui";
import { products, searchProducts } from "@/lib/products";

const trending = [
  "Headphones",
  "Automatic watch",
  "Sneakers",
  "Backpack",
  "Coffee",
  "Lamp",
];

export function SearchOverlay() {
  const { searchOpen, closeSearch } = useStore();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!searchOpen) return;
    const timer = setTimeout(() => {
      setQuery("");
      inputRef.current?.focus();
    }, 120);
    return () => clearTimeout(timer);
  }, [searchOpen]);

  const results = query.trim() ? searchProducts(query).slice(0, 6) : products.filter((p) => p.bestseller).slice(0, 4);

  return (
    <div
      className={`fixed inset-0 z-[85] ${searchOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!searchOpen}
      inert={!searchOpen}
    >
      <button
        type="button"
        aria-label="Close search"
        onClick={closeSearch}
        className={`absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-300 ${
          searchOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className={`absolute inset-x-0 top-0 max-h-[92vh] overflow-y-auto bg-cream shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          searchOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
        }`}
      >
        <div className="container-x py-6 sm:py-9">
          <div className="flex items-center justify-between gap-4">
            <p className="eyebrow text-clay">Search the collection</p>
            <button
              type="button"
              onClick={closeSearch}
              aria-label="Close search"
              className="grid size-10 place-items-center rounded-full transition hover:bg-ink/5"
            >
              <CloseIcon className="size-5" />
            </button>
          </div>

          <div className="mt-5 flex items-center gap-3 border-b border-ink/25 pb-4">
            <SearchIcon className="size-6 shrink-0 text-muted" />
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              placeholder="What are you looking for?"
              aria-label="Search products"
              className="display w-full bg-transparent text-3xl outline-none placeholder:text-ink/25 sm:text-4xl md:text-5xl"
            />
            <span className="hidden shrink-0 rounded border border-ink/20 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-wider text-muted sm:block">
              Esc
            </span>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="eyebrow text-[0.58rem] text-muted">Trending</span>
            {trending.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setQuery(term)}
                className="rounded-full border border-ink/15 px-3 py-1.5 text-[0.7rem] font-semibold transition hover:border-ink hover:bg-ink hover:text-paper"
              >
                {term}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between">
              <p className="eyebrow text-[0.6rem] text-muted">
                {query.trim()
                  ? `${results.length} ${results.length === 1 ? "result" : "results"}`
                  : "Most loved"}
              </p>
              {query.trim() ? (
                <Link
                  href="/shop"
                  onClick={closeSearch}
                  className="link-underline text-[0.7rem] font-semibold uppercase tracking-[0.12em]"
                >
                  View all
                </Link>
              ) : null}
            </div>

            {results.length === 0 ? (
              <div className="mt-6 rounded-2xl border border-dashed border-ink/20 px-6 py-12 text-center">
                <p className="display text-2xl">Nothing found for “{query}”</p>
                <p className="mt-2 text-sm text-muted">
                  Try a broader term — “audio”, “leather” or “lamp”.
                </p>
              </div>
            ) : (
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {results.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/product/${product.slug}`}
                      onClick={closeSearch}
                      className="group flex items-center gap-4 rounded-2xl p-2 transition hover:bg-sand/60"
                    >
                      <span className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-sand">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="64px"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold">
                          {product.name}
                        </span>
                        <span className="block truncate text-[0.7rem] text-muted">
                          {product.tagline}
                        </span>
                      </span>
                      <Price price={product.price} className="text-sm font-semibold" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
