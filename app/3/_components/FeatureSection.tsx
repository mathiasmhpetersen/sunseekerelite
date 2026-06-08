import Image from "next/image";
import type { ReactNode } from "react";

type Variant = "dark" | "light";

interface FeatureSectionProps {
  variant: Variant;
  label: string;
  title: string;
  body: string;
  bullets?: string[];
  note?: string;
  image?: { src: string; alt: string; bgClass?: string };
  reverse?: boolean;
  children?: ReactNode;
}

export default function FeatureSection({
  variant,
  label,
  title,
  body,
  bullets,
  note,
  image,
  reverse = false,
  children,
}: FeatureSectionProps) {
  const isDark = variant === "dark";
  const sectionClass = isDark
    ? "bg-[#0a0a0a] text-white"
    : "bg-white text-ink-primary";
  const bodyClass = isDark ? "text-white/75" : "text-ink-secondary";
  const noteClass = isDark ? "text-white/55" : "text-ink-tertiary";
  const bulletDot = isDark
    ? "bg-brand-orange-light"
    : "bg-brand-orange-dark";

  return (
    <section className={sectionClass}>
      <div className="mx-auto max-w-content px-5 py-20 lg:px-8 lg:py-28">
        <div
          className={`grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 ${
            reverse ? "md:[&>div:first-child]:order-2" : ""
          }`}
        >
          <div>
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-brand-orange-dark">
              {label}
            </p>
            <h2
              className="mt-4 text-balance text-[30px] font-bold leading-[1.12] tracking-[-0.02em] md:text-[40px]"
            >
              {title}
            </h2>
            <p className={`mt-5 text-[16.5px] leading-[1.6] ${bodyClass}`}>
              {body}
            </p>

            {bullets && bullets.length > 0 && (
              <ul className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className={`flex items-start gap-2.5 text-[14.5px] ${bodyClass}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${bulletDot}`}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {note && (
              <p className={`mt-6 text-[13px] italic ${noteClass}`}>{note}</p>
            )}
          </div>

          <div>
            {image ? (
              <div
                className={`relative aspect-[5/4] w-full overflow-hidden rounded-2xl ${
                  image.bgClass ??
                  (isDark ? "bg-[#141414]" : "bg-[#f4efe6]")
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 560px"
                  className="object-contain p-8"
                />
              </div>
            ) : (
              children
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
