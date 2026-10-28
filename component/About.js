import Image from "next/image";
import Link from "next/link";

import LogoMarquee from "./Logomarquees";
import ScrollRevealText from "./Scrollrevealtext";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-canvas px-4 pt-16 pb-12 lg:min-h-[912px] lg:pt-[134px] font-sans">
      {/* Drop the hills render at /public/hills.png */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[64%] [mask-image:linear-gradient(to_bottom,black_45%,transparent_100%)]">
        <Image
          src="/image.avif"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="relative z-10 mx-auto w-full bg-white max-w-[698px] border border-[#e6e6e6] bg-surface-alt px-6 pt-16 pb-14 sm:px-[74px] sm:pt-20 sm:pb-[74px]">
        <p className="font-mono text-[11px] leading-none font-medium tracking-[0.6px] text-[#555] uppercase">
          {"{Who we are}"}
        </p>

        <ScrollRevealText
          text="THE CREATIVE STUDIO FOR BRANDS THAT REFUSE TO BLEND IN"
          className="mt-[34px] font-display text-[40px] leading-none font-semibold tracking-[0.4px] uppercase sm:text-[60px] sm:tracking-[0.6px]"
        />

        <p className="mt-10 max-w-[410px] text-[18px] leading-[23px] font-medium tracking-[-0.2px] text-[#6b6b6b]">
          Founders call us when their brand stops matching their ambition - from
          rebrands to website overhauls. We turn overlooked businesses into ones
          impossible to ignore.
        </p>

        <div className="mt-[46px]">
          <LogoMarquee />
        </div>

        <Link
          href="/about"
          className="mt-[42px] inline-flex h-8 items-center justify-center rounded-full bg-ink px-3.5 text-xs leading-none font-semibold tracking-[-0.1px] whitespace-nowrap text-on-primary"
        >
          Know more about us
        </Link>
      </div>
    </section>
  );
}