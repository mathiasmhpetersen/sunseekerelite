import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

interface CtaButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
}

export default function CtaButton({
  href,
  children,
  variant = "primary",
  size = "md",
}: CtaButtonProps) {
  const sizeClass =
    size === "sm"
      ? "px-5 py-2 text-sm"
      : size === "lg"
        ? "px-9 py-4 text-lg"
        : "px-8 py-3.5 text-base";

  if (variant === "secondary") {
    return (
      <Link
        href={href}
        className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-white font-bold text-white transition hover:bg-white/10 ${sizeClass}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,80,22,0.3)] ${sizeClass}`}
    >
      {children}
    </Link>
  );
}
