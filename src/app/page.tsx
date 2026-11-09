import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { NewsletterForm } from "@/components/newsletter-form";
import { SectionHeading, Stars } from "@/components/ui";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  LeafIcon,
  ReturnIcon,
  ShieldIcon,
  TruckIcon,
} from "@/components/icons";
import {
  featuredCategories,
  formatPrice,
  getBestsellers,
  getNewArrivals,
  products,
} from "@/lib/products";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80";
const EDITORIAL_ONE =
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80";
const EDITORIAL_TWO =
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80";

const marqueeItems = [
  "Free shipping over $150",
  "Designed in Copenhagen",
  "30-day returns",
  "Carbon-neutral delivery",
  "Two-year warranty",
  "Made to be kept",
];

const principles = [
  {
    number: "01",
    title: "Materials with a paper trail",
    copy: "Full-grain leather, FSC oak, recycled aluminium. We name the mill and the maker.",
  },
  {
    number: "02",
    title: "Repair before replace",
    copy: "Spare parts, resoling and refinishing for as long as you own the piece.",
  },
  {
    number: "03",
    title: "Small runs, no waste",
    copy: "We make what we can sell. When a run ends, it ends — no landfill clear-outs.",
  },
];

const testimonials = [
  {
    quote:
      "The Halo has replaced three pairs of headphones. Two years in, the pads are the only thing I've changed.",
    name: "Mara Lindqvist",
    role: "Sound designer, Stockholm",
    product: "Halo Over-Ear",
  },
  {
    quote:
      "I bought the Voyager for a two-week trip and now use it every single day. It looks better scuffed.",
    name: "Daniel Okafor",
    role: "Architect, London",
    product: "Voyager Backpack",
  },
  {
    quote:
      "Everything arrives feeling considered — the packaging, the weight, the little care card. It's rare.",
    name: "Sofia Marchetti",
    role: "Ceramicist, Milan",
    product: "Solstice Lounge Chair",
  },
];

const journal = [
  {
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80",
    category: "Interiors",
    title: "The case for one very good chair",
    read: "6 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80",
    category: "Rituals",
    title: "A slower morning, in four movements",
    read: "4 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
    category: "Studio",
    title: "Inside the workshop with Frame 35",
    read: "8 min read",
  },
];

export default function HomePage() {
  const newArrivals = getNewArrivals(8);
  const bestsellers = getBestsellers(4);
  const halo = products[0];

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-24 size-[34rem] rounded-full bg-clay/10 blur-3xl"
        />
        <div className="container-x relative grid gap-12 pb-16 pt-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="animate-fade-up">
              <p className="flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-muted">
                <span className="h-px w-10 bg-clay" />
                The Autumn Edit — 2026
              </p>
              <h1 className="display mt-6 text-[clamp(3.4rem,8.4vw,7rem)]">
                Objects that
                <br />
                <em className="italic text-clay">earn</em> their
                <br />
                place.
              </h1>
              <p className="mt-7 max-w-md text-[0.95rem] leading-relaxed text-muted">
                A small design house for the things you reach for every day.
                Audio, timepieces, footwear and objects for the home — made
                slowly, and made to be kept.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/shop" className="btn btn-primary">
                  Shop the collection
                  <ArrowRightIcon className="size-4" />
                </Link>
                <Link
                  href="/about"
                  className="link-underline px-2 py-3 text-[0.72rem] font-bold uppercase tracking-[0.14em]"
                >
                  Our story
                </Link>
              </div>
              <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-ink/10 pt-6">
                {[
                  { value: "56", label: "Considered pieces" },
                  { value: "4.8", label: "Average rating" },
                  { value: "12k+", label: "Happy homes" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dt className="display text-3xl">{stat.value}</dt>
                    <dd className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-muted">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="relative lg:col-span-6 lg:col-start-7 xl:col-span-7">
            <div className="animate-fade-in relative ml-auto w-full max-w-[34rem]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand sm:aspect-[5/6]">
                <Image
                  src={HERO_IMAGE}
                  alt="A sunlit living room with a sculptural lounge chair"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-paper/90 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-ink backdrop-blur">
                  <LeafIcon className="size-3.5 text-olive" />
                  Carbon-neutral delivery
                </div>
              </div>

              <div className="absolute -bottom-8 left-0 w-[16rem] rounded-2xl bg-paper/95 p-3 shadow-[0_24px_60px_-24px_rgba(21,20,15,0.5)] backdrop-blur sm:-left-6">
                <div className="flex items-center gap-3">
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-sand">
                    <Image
                      src={halo.image}
                      alt={halo.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="eyebrow text-[0.52rem] text-muted">
                      Most loved
                    </p>
                    <p className="mt-0.5 truncate text-sm font-semibold">
                      {halo.name}
                    </p>
                    <p className="text-xs text-muted">{formatPrice(halo.price)}</p>
                  </div>
                  <Link
                    href={`/product/${halo.slug}`}
                    aria-label={`View ${halo.name}`}
                    className="grid size-9 shrink-0 place-items-center rounded-full bg-ink text-paper transition hover:bg-clay"
                  >
                    <ArrowUpRightIcon className="size-4" />
                  </Link>
                </div>
              </div>

              <div className="absolute -right-2 top-6 text-ink/70 sm:-right-5">
                <div className="relative size-24 animate-spin-slow sm:size-28">
                  <svg viewBox="0 0 120 120" className="size-full">
                    <defs>
                      <path
                        id="hero-badge-path"
                        d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                      />
                    </defs>
                    <text
                      fontSize="8.6"
                      letterSpacing="2.8"
                      fill="currentColor"
                      className="uppercase"
                    >
                      <textPath href="#hero-badge-path">
                        Autumn edit · SS26 · Aurel studio ·
                      </textPath>
                    </text>
                  </svg>
                  <span className="absolute inset-0 grid place-items-center text-xl">
                    ✳
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-ink/10 bg-paper/60">
        <div className="flex overflow-hidden py-4">
          <div className="flex w-max animate-marquee items-center">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
                {marqueeItems.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="flex items-center gap-6 whitespace-nowrap px-6 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-ink/60"
                  >
                    {item}
                    <span className="text-clay">✳</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="container-x py-20 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Browse the collection"
            title={
              <>
                Shop by <em className="italic text-clay">category</em>
              </>
            }
            action={
              <Link href="/shop" className="link-underline text-[0.7rem] font-bold uppercase tracking-[0.14em]">
                View all 56 pieces
                <ArrowRightIcon className="size-4" />
              </Link>
            }
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {featuredCategories.map((category, index) => {
            const count = products.filter(
              (product) => product.category === category.slug,
            ).length;
            return (
              <Reveal
                key={category.slug}
                delay={index * 60}
                className={index % 2 === 1 ? "md:mt-10" : ""}
              >
                <Link
                  href={`/collections/${category.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-sand">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/5 to-transparent" />
                    <div className="absolute inset-x-4 bottom-4 text-paper">
                      <p className="text-[0.55rem] font-bold uppercase tracking-[0.18em] text-paper/70">
                        {count} pieces
                      </p>
                      <div className="mt-1 flex items-end justify-between gap-2">
                        <h3 className="display text-2xl sm:text-3xl">
                          {category.name}
                        </h3>
                        <span className="grid size-8 shrink-0 place-items-center rounded-full border border-paper/40 transition group-hover:bg-paper group-hover:text-ink">
                          <ArrowUpRightIcon className="size-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-x pb-20 md:pb-24">
        <Reveal>
          <SectionHeading
            eyebrow="Just landed"
            title={
              <>
                New this <em className="italic text-clay">week</em>
              </>
            }
            action={
              <Link href="/shop" className="link-underline text-[0.7rem] font-bold uppercase tracking-[0.14em]">
                Shop all new
                <ArrowRightIcon className="size-4" />
              </Link>
            }
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
          {newArrivals.map((product, index) => (
            <Reveal key={product.slug} delay={(index % 4) * 70}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="container-x grid items-center gap-14 py-20 md:py-24 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src={EDITORIAL_ONE}
                alt="A calm interior with warm timber and linen"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 right-2 hidden w-44 overflow-hidden rounded-2xl border-[10px] border-ink sm:block lg:w-56">
              <div className="relative aspect-square">
                <Image
                  src={EDITORIAL_TWO}
                  alt="Detail of a woven textile and ceramics"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute left-5 top-5 rounded-full bg-paper px-4 py-2 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-ink">
              Est. 2014
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow text-clay">The Aurel standard</p>
            <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-[3.6rem]">
              Buy once.
              <br />
              <em className="italic text-clay">Keep it.</em>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/60">
              We started with a simple frustration: things weren&apos;t being
              made to last. So we set a rule — nothing leaves the studio unless
              we&apos;d still want it in ten years.
            </p>
            <ul className="mt-9 space-y-6">
              {principles.map((principle) => (
                <li
                  key={principle.number}
                  className="flex gap-5 border-t border-paper/15 pt-5"
                >
                  <span className="display shrink-0 text-xl text-clay">
                    {principle.number}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold">{principle.title}</h3>
                    <p className="mt-1.5 max-w-sm text-[0.82rem] leading-relaxed text-paper/55">
                      {principle.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn btn-outline mt-9 border-paper/30 text-paper hover:bg-paper hover:text-ink">
              Read our story
              <ArrowRightIcon className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="The shortlist"
            title={
              <>
                Most loved, <em className="italic text-clay">right now</em>
              </>
            }
            action={
              <Link href="/shop" className="link-underline text-[0.7rem] font-bold uppercase tracking-[0.14em]">
                Shop bestsellers
                <ArrowRightIcon className="size-4" />
              </Link>
            }
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
          {bestsellers.map((product, index) => (
            <Reveal key={product.slug} delay={index * 70}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 grid gap-4 rounded-3xl border border-ink/10 bg-paper/60 p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
          {[
            {
              Icon: TruckIcon,
              title: "Free shipping",
              copy: "On orders over $150, carbon-neutral.",
            },
            {
              Icon: ReturnIcon,
              title: "30-day returns",
              copy: "Live with it. If it's not right, send it back.",
            },
            {
              Icon: ShieldIcon,
              title: "Two-year warranty",
              copy: "Plus repairs for as long as you own it.",
            },
            {
              Icon: LeafIcon,
              title: "Plastic-free packing",
              copy: "Recycled board, paper tape, no filler.",
            },
          ].map(({ Icon, title, copy }) => (
            <div key={title} className="flex gap-3">
              <Icon className="mt-0.5 size-5 shrink-0 text-clay" />
              <div>
                <h3 className="text-[0.8rem] font-semibold">{title}</h3>
                <p className="mt-1 text-[0.72rem] leading-relaxed text-muted">
                  {copy}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="bg-sand/70 py-20 md:py-24">
        <div className="container-x">
          <Reveal className="text-center">
            <p className="eyebrow text-clay">Word of mouth</p>
            <h2 className="display mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl">
              Loved, and used <em className="italic">daily</em>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 90}>
                <figure className="flex h-full flex-col rounded-2xl bg-paper p-7">
                  <Stars rating={5} className="text-clay" size="size-4" />
                  <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-ink/10 pt-4">
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="mt-0.5 text-[0.7rem] text-muted">
                      {testimonial.role}
                    </p>
                    <p className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-clay">
                      Bought {testimonial.product}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-24" id="journal">
        <Reveal>
          <SectionHeading
            eyebrow="From the journal"
            title={
              <>
                Notes from the <em className="italic text-clay">studio</em>
              </>
            }
            action={
              <Link href="/about#journal" className="link-underline text-[0.7rem] font-bold uppercase tracking-[0.14em]">
                All stories
                <ArrowRightIcon className="size-4" />
              </Link>
            }
          />
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {journal.map((story, index) => (
            <Reveal key={story.title} delay={index * 80}>
              <Link href="/about#journal" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center gap-3 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-muted">
                  <span className="text-clay">{story.category}</span>
                  <span aria-hidden>·</span>
                  <span>{story.read}</span>
                </div>
                <h3 className="display mt-2 text-2xl transition group-hover:text-clay">
                  {story.title}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pb-20 md:pb-24">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-clay px-6 py-16 text-paper sm:px-12 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full border-[40px] border-paper/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-20 size-72 rounded-full bg-ink/10 blur-2xl"
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="eyebrow text-paper/70">Letters, occasionally</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl md:text-6xl">
              A slower kind of inbox.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-paper/75">
              New arrivals, studio notes and the odd playlist. One or two emails
              a month, never more.
            </p>
            <div className="mx-auto mt-8 max-w-md text-left">
              <NewsletterForm variant="dark" />
            </div>
            <p className="mt-4 text-[0.62rem] uppercase tracking-[0.14em] text-paper/50">
              Unsubscribe anytime · 12,000 readers
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container-x pb-20">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-ink/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-sm text-sm text-muted">
            Not sure where to start? The shortlist is a good place.
          </p>
          <Link href="/shop" className="btn btn-outline">
            Browse all 56 pieces
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
