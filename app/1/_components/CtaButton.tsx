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
      ? "px-5 py-2 text-[13px]"
      : size === "lg"
        ? "px-10 py-[18px] text-[1.0625rem]"
        : "px-9 py-4 text-base";

  if (variant === "secondary") {
    return (
      <Link
        href={href}
        className={`inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-white/70 font-semibold text-white transition hover:border-white hover:bg-white/[0.08] ${sizeClass}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient font-bold text-white transition hover:-translate-y-[1px] hover:shadow-[0_10px_24px_rgba(255,80,22,0.25)] hover:brightness-[1.03] ${sizeClass}`}
    >
      {children}
    </Link>
  );
}
