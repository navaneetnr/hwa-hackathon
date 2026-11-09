import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "The Aurel pieces you have saved for later.",
};

export default function WishlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
