import Link from "next/link";

const links = [
  { label: "Home", href: "/", n: "01" },
  { label: "About us", href: "/about", n: "02" },
  { label: "Projects", href: "/projects", n: "03" },
  { label: "Blogs", href: "/blogs", n: "04" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-10 flex h-[73px] items-center justify-between px-4 text-white lg:pr-[51px] lg:pl-14">
      <Link
        href="/"
        aria-label="Operator.X home"
        className="font-display text-[22px] leading-none font-bold tracking-[-0.5px] uppercase"
      >
        GIP.TECHNOLOGIES
      </Link>

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