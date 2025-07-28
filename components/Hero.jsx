import Image from "next/image";
import Circle from "./Circle";
import Company from "./Company";

export default function HeroNew() {
  return (
    <section className="w-full flex flex-col gap-2" id="home">
      <div className="hero h-[60vh] sm:h-[100vh] mt-20 md:mt-0 relative overflow-hidden">
        {/* Use next/image for background */}
        <Image
          src="/assets/Hero_bg.webp"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center opacity-30 z-[-1]"
          sizes="100vw"
        />
        <Circle />
        {/* Gradient overlay */}
        <div
          className="absolute bottom-0 left-0 w-full h-[150px] pointer-events-none z-1"
          style={{
            background: "linear-gradient(to bottom, transparent, white)",
          }}
        />
      </div>
      <Company />
    </section>
  );
}
