import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/components/store-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";
import { SearchOverlay } from "@/components/search-overlay";
import { Toast } from "@/components/toast";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hwa-hackathon.vercel.app"),
  title: {
    default: "Aurel — Considered objects for modern living",
    template: "%s — Aurel",
  },
  description:
    "Aurel is a small design house making audio, timepieces, footwear and objects for the home. Designed in Copenhagen, made to be kept.",
  keywords: [
    "design objects",
    "audio",
    "watches",
    "footwear",
    "bags",
    "homeware",
    "Aurel",
  ],
  openGraph: {
    title: "Aurel — Considered objects for modern living",
    description:
      "Audio, timepieces, footwear and objects for the home. Designed in Copenhagen, made to be kept.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Aurel studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurel — Considered objects for modern living",
    description:
      "Audio, timepieces, footwear and objects for the home. Designed in Copenhagen, made to be kept.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f0e6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-cream text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-paper"
        >
          Skip to content
        </a>
        <StoreProvider>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <CartDrawer />
          <SearchOverlay />
          <Toast />
        </StoreProvider>
      </body>
    </html>
  );
}
