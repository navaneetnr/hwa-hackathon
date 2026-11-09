import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
  description: "A secure demo checkout for the Aurel collection.",
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
