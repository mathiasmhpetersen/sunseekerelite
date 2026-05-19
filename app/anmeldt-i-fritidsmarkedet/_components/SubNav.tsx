import Link from "next/link";
import CtaButton from "./CtaButton";
import SunseekerLogo from "./SunseekerLogo";

export default function SubNav() {
  return (
    <div className="w-full bg-[#0a0a0a] text-white">
      <div className="mx-auto flex h-[52px] max-w-content items-center justify-between gap-4 px-4 lg:px-8">
        <div className="flex items-center gap-3">
          <SunseekerLogo height={22} />
          <span className="hidden text-[13px] font-medium text-white/60 sm:inline">
            Elite X Gen 2 Series
          </span>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="https://sunseekerelite.com/dk/x-gen-2-series"
            className="border-b-2 border-[#ff5016] pb-[6px] text-[13px] font-medium text-white"
          >
            Oversigt
          </Link>
          <Link
            href="https://sunseekerelite.com/dk/x-gen-2-series#specs"
            className="hidden text-[13px] font-medium text-white/85 transition hover:text-white sm:inline"
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
