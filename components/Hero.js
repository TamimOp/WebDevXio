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
        className="top-0 left-0 w-full h-full object-cover z-0"
      />
      <p className="text-4xl text-center mt-20">
        Already <span className="text-blue-600">Chosen</span> by the{" "}
        <span className="text-blue-600">leaders</span>
      </p>
    </div>
  );
}

export default Hero;
