import Link from "next/link";
import type { ReactNode } from "react";

interface MidPageCtaProps {
  href: string;
  children: ReactNode;
}

export default function MidPageCta({ href, children }: MidPageCtaProps) {
  return (
    <div className="mid-page-cta">
      <Link className="mid-page-cta__button" href={href}>
        {children}
        <span className="mid-page-cta__arrow" aria-hidden>
          →
        </span>
      </Link>
    </div>
  );
}
