
import Link from "next/link";
import RevenueCounter from "./RevenueCounter";

const links = [
  { label: "Home", href: "/", n: "01" },
  { label: "About us", href: "/about", n: "02" },
  { label: "Projects", href: "/projects", n: "03" },
  { label: "Blogs", href: "/blogs", n: "04" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex min-h-[90px] items-center justify-between px-4 py-3 text-white lg:pr-[51px] lg:pl-14">

      {/* Brand + Revenue Stat */}
      <div className="flex flex-col items-start gap-[5px]">
        <div data-brand-stat className="flex flex-col gap-[2px]">
          <span
  className="text-[9px] leading-none font-bold tracking-[1.1px] text-white/65 uppercase"
>
  Revenue driven for our clients
</span>
          <div className="flex items-center gap-[5px] ">
            {/* Growth Icon */}
            <svg
              viewBox="0 0 18 18"
              fill="none"
              className="size-[13px] text-accent"
              aria-hidden="true"
            >
              <rect x="2" y="9" width="3" height="7" rx="1" fill="currentColor" />
              <rect x="7.5" y="5" width="3" height="11" rx="1" fill="currentColor" />
              <rect x="13" y="2" width="3" height="14" rx="1" fill="currentColor" />
            </svg>

          <RevenueCounter />

      
          </div>
        </div>

       <Link
  href="/"
  data-brand-logo
  aria-label="GIP Technologies home"
  className="font-display text-[22px] leading-none font-bold tracking-[-0.5px] uppercase"
>
  GIP.TECHNOLOGIES
</Link>
      </div>

      {/* Navigation */}
      <nav aria-label="Primary" className="flex items-center gap-10">
        <ul className="hidden items-center gap-8 min-[900px]:flex">
          {links.map(({ label, href, n }) => (
            <li key={href}>
              <Link
                href={href}
                className="inline-flex items-start gap-1.5 text-base leading-[1.2] font-medium tracking-[-0.2px]"
              >
                {label}
                <sup className="-mt-[3px] font-mono text-[11px] leading-none font-medium tracking-[0.6px] text-white/55">
                  {n}
                </sup>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="inline-flex h-[43px] items-center justify-center rounded-full bg-surface-alt px-5 py-3 text-base leading-[1.2] font-semibold tracking-[-0.2px] whitespace-nowrap text-ink"
        >
          Contact us
        </Link>
      </nav>
    </header>
  );
}
