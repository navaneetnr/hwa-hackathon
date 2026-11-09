import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { NewsletterForm } from "@/components/newsletter-form";
import { SectionHeading } from "@/components/ui";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "Aurel is a small design house in Copenhagen making considered objects for modern living — designed to be repaired, not replaced.",
};

const values = [
  {
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
    title: "Made by people we know",
    copy: "Six workshops across Europe. We visit each one, know the names on the floor, and pay above the living wage.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80",
    title: "Repair, then replace",
    copy: "Every piece has a spare-parts list and a repair path. Send it back and we will refinish, resole or rewire it.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80",
    title: "Small runs, no waste",
    copy: "We make what we can sell. When a run ends, it ends. No seasonal clear-outs, no landfill by design.",
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

const faqs = [
  {
    id: "shipping",
    question: "Where do you ship, and how long does it take?",
    answer:
      "We ship worldwide from Copenhagen. Standard delivery is 3–5 working days in Europe and 5–8 elsewhere. Orders over $150 ship free, carbon-neutral. Express is available at checkout.",
  },
  {
    id: "returns",
    question: "What is your returns policy?",
    answer:
      "Live with a piece for 30 days. If it isn't right, send it back unused in its original packaging for a full refund. We cover return shipping on orders over $150.",
  },
  {
    id: "care",
    question: "How do I care for my pieces?",
    answer:
      "Every order includes a care card specific to its materials. Leather wants a dry cloth and occasional conditioner; oak wants oil once a year; electronics want a soft brush and a dry room. Write to us for anything deeper — we keep spare parts for at least ten years.",
  },
  {
    id: "contact",
    question: "Can I visit the studio?",
    answer:
      "The showroom in Nyhavn is open Thursday to Saturday, 11–6. No appointment needed for a look, though we recommend one for repairs and fittings. Write to hello@aurel.studio.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-x grid gap-12 pb-16 pt-10 lg:grid-cols-2 lg:items-end lg:gap-16 lg:pt-16">
        <div>
          <p className="eyebrow flex items-center gap-3 text-clay">
            <span className="h-px w-8 bg-clay" />
            Our story
          </p>
          <h1 className="display mt-5 text-[clamp(3rem,7vw,6rem)]">
            A small house,
            <br />
            a long <em className="italic text-clay">view.</em>
          </h1>
          <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-muted">
            Aurel began in a Copenhagen workshop in 2014 with a stubborn idea:
            the things we use every day should be worth keeping. Twelve years
            later, that is still the whole plan.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-sand lg:aspect-[5/4]">
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80"
            alt="The Aurel studio in Copenhagen"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-5 left-5 rounded-full bg-paper/90 px-4 py-2 text-[0.6rem] font-bold uppercase tracking-[0.14em] backdrop-blur">
            Nyhavn, Copenhagen
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper/60">
        <div className="container-x grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "2014", label: "Founded in Copenhagen" },
            { value: "6", label: "Partner workshops" },
            { value: "56", label: "Pieces in the collection" },
            { value: "4.8", label: "Average rating, 12k homes" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="display text-4xl text-clay">{stat.value}</p>
              <p className="mt-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-20 md:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-clay">The idea</p>
          <p className="display mt-6 text-3xl leading-[1.15] sm:text-4xl md:text-5xl">
            We are not trying to sell you more things. We are trying to sell you
            the <em className="italic text-clay">last</em> thing you will need
            to buy.
          </p>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-relaxed text-muted">
            That means fewer products, better materials, and a repair desk
            that never closes. It is a slower way to run a company. It is also
            the only way we know how.
          </p>
        </Reveal>
      </section>

      <section className="container-x pb-20 md:pb-24">
        <Reveal>
          <SectionHeading
            eyebrow="What we stand for"
            title={
              <>
                Three rules we <em className="italic text-clay">don&apos;t</em>{" "}
                break
              </>
            }
          />
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 80}>
              <div className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="eyebrow mt-5 text-[0.58rem] text-clay">
                  0{index + 1}
                </p>
                <h3 className="display mt-2 text-2xl">{value.title}</h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">
                  {value.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-20 text-paper md:py-24" id="materials">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-clay">Materials</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Everything has a <em className="italic text-clay">paper trail.</em>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/60">
              We name the mill, the tannery and the workshop. If we can&apos;t
              trace a material to its source, we don&apos;t use it.
            </p>
            <Link
              href="/shop"
              className="btn btn-outline mt-8 border-paper/30 text-paper hover:bg-paper hover:text-ink"
            >
              Shop the collection
              <ArrowRightIcon className="size-4" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <dl className="divide-y divide-paper/15 border-y border-paper/15">
              {[
                {
                  term: "Leather",
                  detail: "Vegetable-tanned, Tuscany — a by-product of the food industry.",
                },
                {
                  term: "Timber",
                  detail: "FSC-certified oak and walnut from managed European forests.",
                },
                {
                  term: "Metals",
                  detail: "Recycled aluminium and stainless steel, machined in Portugal.",
                },
                {
                  term: "Textiles",
                  detail: "GOTS-certified cotton and recycled wool from a mill in Belgium.",
                },
                {
                  term: "Packaging",
                  detail: "Recycled board, paper tape, no plastic — ever.",
                },
              ].map((item) => (
                <div
                  key={item.term}
                  className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4"
                >
                  <dt className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-clay">
                    {item.term}
                  </dt>
                  <dd className="text-[0.85rem] leading-relaxed text-paper/65">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
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
          />
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {journal.map((story, index) => (
            <Reveal key={story.title} delay={index * 80}>
              <article className="group">
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
                <h3 className="display mt-2 text-2xl">{story.title}</h3>
                <p className="mt-2 inline-flex items-center gap-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink/60">
                  Read the story
                  <ArrowUpRightIcon className="size-3.5" />
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pb-20 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-clay">Questions</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              The useful <em className="italic text-clay">bits.</em>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Still stuck? Write to the studio and a person will reply, usually
              within a day.
            </p>
            <div className="mt-8 rounded-2xl border border-ink/10 bg-paper/60 p-6">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-muted">
                The studio
              </p>
              <p className="mt-3 text-sm font-semibold">hello@aurel.studio</p>
              <p className="mt-1 text-sm text-muted">
                Nyhavn 12, 1051 Copenhagen
                <br />
                Thursday–Saturday, 11–6
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {faqs.map((faq) => (
                <details key={faq.id} id={faq.id} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[0.95rem] font-semibold">
                    {faq.question}
                    <span className="grid size-7 shrink-0 place-items-center rounded-full border border-ink/20 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-xl text-[0.85rem] leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x pb-20 md:pb-24">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-olive px-6 py-16 text-paper sm:px-12 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full border-[36px] border-paper/10"
          />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow text-paper/70">Stay in touch</p>
              <h2 className="display mt-4 text-4xl sm:text-5xl">
                The studio, in your inbox.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/70">
                New arrivals, workshop notes and the occasional playlist. One
                or two emails a month.
              </p>
            </div>
            <div className="max-w-md">
              <NewsletterForm variant="dark" />
              <p className="mt-4 text-[0.62rem] uppercase tracking-[0.14em] text-paper/50">
                Unsubscribe anytime · 12,000 readers
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
