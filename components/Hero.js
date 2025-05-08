import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="">
      <Image
        src="/assets/Hero_bg.jpg"
        width={1440}
        height={1029}
        alt="HeroBg"
        className="top-0 left-0 w-full h-full object-cover z-10"
      />
      This is Hero Section
    </div>
  );
}

export default Hero;
