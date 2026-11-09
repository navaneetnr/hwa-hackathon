import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your bag",
  description: "Review the pieces in your Aurel bag and continue to checkout.",
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
