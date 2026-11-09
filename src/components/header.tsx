"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useStore } from "@/components/store-provider";
import {
  BagIcon,
  CloseIcon,
  HeartIcon,
  MenuIcon,
  SearchIcon,
} from "@/components/icons";
import { categories, products } from "@/lib/products";

export function Header() {
  const pathname = usePathname();
  const { cartCount, openCart, openSearch, hydrated, wishlist } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="bg-ink text-paper">
        <div className="container-x flex h-9 items-center justify-center gap-5 text-[0.58rem] font-semibold uppercase tracking-[0.18em] sm:gap-8">
          <span>Free carbon-neutral shipping over $150</span>
          <span className="hidden items-center gap-5 sm:flex">
            <span aria-hidden className="text-clay">
              ✳
            </span>
            <span>30-day returns</span>
            <span aria-hidden className="text-clay">
              ✳
            </span>
            <span>The Autumn Edit is here</span>
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-ink/10 bg-cream/90 shadow-[0_8px_30px_-20px_rgba(21,20,15,0.5)] backdrop-blur-xl"
            : "border-b border-transparent bg-cream"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="grid size-9 place-items-center rounded-full transition hover:bg-ink/5"
            >
              <MenuIcon className="size-5" />
            </button>
          </div>

          <Link
            href="/"
            className="display shrink-0 text-[1.4rem] font-semibold uppercase tracking-[0.22em] md:text-[1.55rem]"
            aria-label="Aurel home"
          >
            Aurel
            <span className="ml-1 inline-block size-1.5 -translate-y-2 rounded-full bg-clay" />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 lg:flex xl:gap-9"
          >
            {[
              { href: "/shop", label: "Shop all" },
              ...categories
                .filter((category) =>
                  ["audio", "timepieces", "footwear", "bags", "home"].includes(
                    category.slug,
                  ),
                )
                .map((category) => ({
                  href: `/collections/${category.slug}`,
                  label: category.name,
                })),
            ].map((item) => {
              const active =
                item.href === "/shop"
                  ? pathname === "/shop"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[0.66rem] font-bold uppercase tracking-[0.16em] transition hover:text-clay ${
                    active ? "text-ink" : "text-ink/60"
                  }`}
                >
                  {item.label}
                  {active ? (
                    <span className="absolute -bottom-1.5 left-0 h-px w-full bg-clay" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-0.5 sm:gap-1">
            <button
              type="button"
              onClick={openSearch}
              aria-label="Search products"
              className="grid size-10 place-items-center rounded-full transition hover:bg-ink/5"
            >
              <SearchIcon className="size-[1.15rem]" />
            </button>
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative hidden size-10 place-items-center rounded-full transition hover:bg-ink/5 sm:grid"
            >
              <HeartIcon className="size-[1.15rem]" />
              {hydrated && wishlist.length > 0 ? (
                <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-clay" />
              ) : null}
            </Link>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open bag, ${hydrated ? cartCount : 0} items`}
              className="relative grid size-10 place-items-center rounded-full transition hover:bg-ink/5"
            >
              <BagIcon className="size-[1.15rem]" />
              {hydrated && cartCount > 0 ? (
                <span className="absolute right-0.5 top-0.5 grid min-w-[1.05rem] place-items-center rounded-full bg-clay px-1 text-[0.58rem] font-bold leading-4 text-paper">
                  {cartCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[80] lg:hidden ${menuOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col bg-cream shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
            <span className="display text-xl font-semibold uppercase tracking-[0.22em]">
              Aurel
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="grid size-9 place-items-center rounded-full hover:bg-ink/5"
            >
              <CloseIcon className="size-5" />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-6">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/shop"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline justify-between border-b border-ink/10 py-3.5"
                >
                  <span className="display text-3xl">Shop all</span>
                  <span className="eyebrow text-[0.55rem] text-muted">{products.length}</span>
                </Link>
              </li>
              {categories.map((category, index) => (
                <li key={category.slug}>
                  <Link
                    href={`/collections/${category.slug}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline justify-between border-b border-ink/10 py-3.5"
                  >
                    <span className="display text-3xl">{category.name}</span>
                    <span className="eyebrow text-[0.55rem] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="grid grid-cols-2 gap-3 border-t border-ink/10 p-6">
            <Link
              href="/wishlist"
              onClick={() => setMenuOpen(false)}
              className="btn btn-outline w-full"
            >
              <HeartIcon className="size-4" />
              Wishlist
            </Link>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                openCart();
              }}
              className="btn btn-primary w-full"
            >
              <BagIcon className="size-4" />
              Bag ({hydrated ? cartCount : 0})
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
