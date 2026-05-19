import Link from "next/link";
import SunseekerLogo from "./SunseekerLogo";

const items: { label: string; href: string }[] = [
  { label: "Produkter", href: "https://sunseekerelite.com/dk" },
  { label: "Tilbehør", href: "https://sunseekerelite.com/dk/accessories" },
  { label: "Udforsk", href: "https://sunseekerelite.com/dk/news" },
  { label: "Om Os", href: "https://sunseekerelite.com/dk/about-us" },
  { label: "Bliv Forhandler", href: "https://sunseekerelite.com/dk/become-a-dealer" },
  { label: "Hvor den kan købes", href: "https://sunseekerelite.com/dk/where-to-buy" },
  { label: "Support", href: "https://sunseekerelite.com/dk/support" },
];

export default function MainNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.06] bg-[#0a0a0a]/95 text-white backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 lg:px-8">
        <Link href="https://sunseekerelite.com/dk" aria-label="Sunseeker Elite" className="flex items-center">
          <SunseekerLogo height={28} />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[14px] font-medium text-white/85 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-white/85">
          <span aria-hidden className="hover:text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
          </span>
          <span aria-hidden className="hover:text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
          </span>
        </div>
      </div>
    </header>
  );
}
