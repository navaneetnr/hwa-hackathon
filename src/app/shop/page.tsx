import type { Metadata } from "next";
import { ShopClient } from "@/components/shop-client";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop all",
  description:
    "Browse all 56 Aurel pieces — audio, timepieces, footwear, bags, eyewear, cameras, home and desk objects.",
};

export default function ShopPage() {
  return (
    <ShopClient
      items={products}
      eyebrow="The collection"
      description="Fifty-six considered objects for the everyday. Every piece is made in small runs, priced honestly, and built to be repaired."
    />
  );
}
