import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShopClient } from "@/components/shop-client";
import { categories, getCategory, products } from "@/lib/products";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Collection not found" };
  return {
    title: category.name,
    description: `${category.name} at Aurel — ${category.blurb}`,
    openGraph: {
      title: `${category.name} — Aurel`,
      description: category.blurb,
      images: [category.image],
    },
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const items = products.filter((product) => product.category === category.slug);

  return (
    <ShopClient
      items={products}
      initialCategory={category.slug}
      eyebrow={`Collection — ${items.length} pieces`}
      title={category.name}
      description={`${category.blurb} Made in small runs, priced honestly, and built to be repaired.`}
    />
  );
}
