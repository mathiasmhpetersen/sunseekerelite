import Link from "next/link";
import type { ReactNode } from "react";

interface SoftCtaProps {
  href: string;
  children: ReactNode;
}

export default function SoftCta({ href, children }: SoftCtaProps) {
  return (
    <section className="bg-white px-4 py-8 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-[680px]">
        <Link
          href={href}
          className="group inline-flex items-center gap-2 text-[15px] font-semibold text-brand-orange-dark transition hover:text-brand-orange-light"
        >
          <span className="underline-offset-4 group-hover:underline">
            {children}
          </span>
          <span aria-hidden className="transition group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
