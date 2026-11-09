import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";
import {
  ArrowUpRightIcon,
  InstagramIcon,
  PinterestIcon,
  SpotifyIcon,
} from "@/components/icons";
import { categories } from "@/lib/products";

const shopLinks = [
  { href: "/shop", label: "Shop all" },
  ...categories.map((category) => ({
    href: `/collections/${category.slug}`,
    label: category.name,
  })),
];

const helpLinks = [
  { href: "/about#shipping", label: "Shipping" },
  { href: "/about#returns", label: "Returns" },
  { href: "/about#care", label: "Care guide" },
  { href: "/about#contact", label: "Contact" },
  { href: "/about", label: "FAQ" },
];

const companyLinks = [
  { href: "/about", label: "Our story" },
  { href: "/about#materials", label: "Materials" },
  { href: "/about#journal", label: "Journal" },
  { href: "/wishlist", label: "Wishlist" },
  { href: "/cart", label: "Your bag" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="container-x grid gap-12 py-16 md:py-20 lg:grid-cols-[1.1fr_1.6fr] lg:gap-20">
        <div>
          <Link
            href="/"
            className="display text-2xl font-semibold uppercase tracking-[0.24em]"
          >
            Aurel
            <span className="ml-1 inline-block size-1.5 -translate-y-2 rounded-full bg-clay" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/60">
            Considered objects for modern living. Designed in Copenhagen, made
            by people we know, built to be kept.
          </p>
          <div className="mt-8 max-w-sm">
            <p className="eyebrow mb-3 text-[0.6rem] text-paper/50">
              Letters, occasionally
            </p>
            <NewsletterForm variant="dark" />
            <p className="mt-3 text-[0.65rem] leading-relaxed text-paper/40">
              New arrivals, studio notes and the odd playlist. No noise.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-2">
            {[
              { Icon: InstagramIcon, label: "Instagram" },
              { Icon: PinterestIcon, label: "Pinterest" },
              { Icon: SpotifyIcon, label: "Spotify" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-paper/20 text-paper/70 transition hover:border-paper hover:text-paper"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="eyebrow text-[0.6rem] text-clay">Shop</h3>
            <ul className="mt-4 space-y-2.5">
              {shopLinks.slice(0, 7).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.82rem] text-paper/65 transition hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow text-[0.6rem] text-clay">Help</h3>
            <ul className="mt-4 space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.82rem] text-paper/65 transition hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow text-[0.6rem] text-clay">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.82rem] text-paper/65 transition hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container-x flex flex-col gap-5 border-t border-paper/10 py-6 text-[0.65rem] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Aurel Studio. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-2">
          {["Visa", "Mastercard", "Amex", "Apple Pay", "Klarna"].map((method) => (
            <span
              key={method}
              className="rounded border border-paper/15 px-2 py-1 text-[0.58rem] font-semibold uppercase tracking-wider text-paper/55"
            >
              {method}
            </span>
          ))}
        </div>
        <Link
          href="/about"
          className="inline-flex items-center gap-1 text-paper/55 transition hover:text-paper"
        >
          Made with care
          <ArrowUpRightIcon className="size-3" />
        </Link>
      </div>

      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden px-4 pb-2 text-center"
      >
        <span className="display block text-[clamp(4rem,17.5vw,15rem)] font-semibold uppercase leading-[0.72] tracking-[0.02em] text-paper/[0.06]">
          Aurel
        </span>
      </div>
    </footer>
  );
}
