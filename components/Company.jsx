"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/assets/Slack.png", width: 102.1, height: 25.67, alt: "SlackLogo" },
  {
    src: "/assets/heap_logo.png",
    width: 108.38,
    height: 35.5,
    alt: "HeapLogo",
  },
  {
    src: "/assets/AnytimeFitnessLogo.png",
    width: 150,
    height: 35.5,
    alt: "AnytimeFitnessLogo",
  },
  {
    src: "/assets/leadhuntio_logo.png",
    width: 194.44,
    height: 35.5,
    alt: "LeadHuntioLogo",
  },
];

export default function Company() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-5">
      <p className="text-3xl lg:text-5xl text-center font-medium pb-10">
        Already <span className="text-[#274AFF]">Chosen</span> by the{" "}
        <span className="text-[#274AFF]">leaders</span>
      </p>

      {/* Blur effect separator */}
      <div className="relative w-full h-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#E0E6FF] backdrop-blur-md"></div>
      </div>

      {/* Seamless Marquee */}
      <div className="w-full bg-[#E0E6FF] py-3 md:py-12 overflow-hidden">
        <motion.div
          className="flex gap-10 md:gap-60 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 w-[70px] md:w-auto h-auto">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
