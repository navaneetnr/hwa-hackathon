import { StarIcon } from "@/components/icons";
import { formatPrice } from "@/lib/products";

export function Stars({
  rating,
  className = "",
  size = "size-3.5",
}: {
  rating: number;
  className?: string;
  size?: string;
}) {
  const rounded = Math.round(rating * 2) / 2;
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-hidden>
      {[1, 2, 3, 4, 5].map((star) => {
        const fill = rounded >= star ? 1 : rounded >= star - 0.5 ? 0.5 : 0;
        return (
          <span key={star} className={`relative inline-block ${size}`}>
            <StarIcon
              filled={false}
              className={`absolute inset-0 ${size} text-current opacity-30`}
            />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <StarIcon className={`${size} text-current`} />
            </span>
          </span>
        );
      })}
    </span>
  );
}

export function Price({
  price,
  compareAt,
  className = "",
}: {
  price: number;
  compareAt?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-baseline gap-2 ${className}`}>
      <span>{formatPrice(price)}</span>
      {compareAt ? (
        <span className="text-[0.8em] font-normal text-muted line-through">
          {formatPrice(compareAt)}
        </span>
      ) : null}
    </span>
  );
}

const badgeStyles: Record<string, string> = {
  Bestseller: "bg-ink text-paper",
  New: "bg-clay text-paper",
  Limited: "bg-olive text-paper",
  "Editor's pick": "bg-paper/90 text-ink",
};

export function Badge({ label }: { label: string }) {
  return (
    <span
      className={`eyebrow inline-flex rounded-full px-2.5 py-1 text-[0.6rem] ${
        badgeStyles[label] ?? "bg-paper text-ink"
      }`}
    >
      {label}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  action,
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-end justify-between gap-6 border-b border-ink/10 pb-6 ${className}`}
    >
      <div>
        {eyebrow ? <p className="eyebrow mb-3 text-clay">{eyebrow}</p> : null}
        <h2 className="display text-4xl md:text-5xl">{title}</h2>
      </div>
      {action ? <div className="pb-1">{action}</div> : null}
    </div>
  );
}

export function RatingLine({
  rating,
  reviews,
  className = "",
}: {
  rating: number;
  reviews: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 text-xs text-muted ${className}`}>
      <Stars rating={rating} className="text-clay" />
      <span>
        {rating.toFixed(1)} · {reviews} reviews
      </span>
    </span>
  );
}
