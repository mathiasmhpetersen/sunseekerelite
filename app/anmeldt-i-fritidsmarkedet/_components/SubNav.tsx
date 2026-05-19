import Link from "next/link";
import CtaButton from "./CtaButton";

export default function SubNav() {
  return (
    <div className="w-full border-t border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-3 px-4 py-3 sm:flex-row sm:items-center lg:px-8">
        <div className="text-sm font-medium text-white/90">
          sunseeker Elite X Gen 2 Series
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="https://sunseekerelite.com/dk/x-gen-2-series"
            className="text-sm font-medium text-white/90 transition hover:text-white"
          >
            Oversigt
          </Link>
          <Link
            href="https://sunseekerelite.com/dk/x-gen-2-series#specs"
            className="text-sm font-medium text-white/90 transition hover:text-white"
          >
            Specifikationer
          </Link>
          <CtaButton
            href="https://sunseekerelite.com/dk/where-to-buy?product_type=x-gen-2-series"
            size="sm"
          >
            Hvor den kan købes
          </CtaButton>
        </div>
      </div>
    </div>
  );
}
