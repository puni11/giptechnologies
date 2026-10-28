import Image from "next/image";
import Navbar from "./NavBars";
import HeroHeading from "./HeroHeading";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col font-sans justify-end gap-6 overflow-hidden bg-gradient-to-b from-hero-blue to-hero-blue-deep px-4 pt-[120px] pb-12 text-white lg:block lg:p-0">
      <Navbar />

      {/* Drop the portrait cut-out at /public/hero.jpg */}
      <Image
        src="/heroimage.jpeg"
        alt="Portrait of a woman with curly red hair, a red hoop earring and a white turtleneck"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-top"
      />

     <HeroHeading />

      <p className="relative z-[2] max-w-[390px] font-body text-lg leading-[1.55] font-semibold tracking-[-0.3px] md:text-[22px] lg:absolute lg:right-[62px] lg:bottom-[72px] lg:w-[400px] lg:max-w-none">
        We craft bold brand identities and digital experiences that finally make
        your work impossible to ignore.
      </p>
    </section>
  );
}