import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="container-x flex flex-col items-center py-24 text-center md:py-32">
      <p className="display text-[clamp(6rem,20vw,14rem)] leading-none text-clay">
        404
      </p>
      <h1 className="display mt-2 text-4xl sm:text-5xl">
        This one got away.
      </h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
        The page you were looking for has moved, sold out, or never existed.
        The good stuff is still in the shop.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/shop" className="btn btn-primary">
          Shop the collection
          <ArrowRightIcon className="size-4" />
        </Link>
        <Link href="/" className="btn btn-outline">
          Back home
        </Link>
      </div>
    </div>
  );
}
