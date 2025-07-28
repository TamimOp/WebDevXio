"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";

const logos = [
  { src: "/assets/Slack.webp", width: 102.1, height: 25.67, alt: "SlackLogo" },
  {
    src: "/assets/heap_logo.webp",
    width: 108.38,
    height: 35.5,
    alt: "HeapLogo",
  },
  {
    src: "/assets/AnytimeFitnessLogo.webp",
    width: 150,
    height: 35.5,
    alt: "AnytimeFitnessLogo",
  },
  {
    src: "/assets/leadhuntio_logo.webp",
    width: 194.44,
    height: 35.5,
    alt: "LeadHuntioLogo",
  },
];

export default function Company() {
  const singleSetRef = useRef(null);
  const [animationWidth, setAnimationWidth] = useState(0);

  useLayoutEffect(() => {
    const calculateWidth = () => {
      if (singleSetRef.current) {
        const measuredWidth = singleSetRef.current.scrollWidth;
        console.log("[Marquee] Measured width:", measuredWidth);
        setAnimationWidth(measuredWidth);
      } else {
        console.log("[Marquee] singleSetRef.current is null.");
      }
    };

    calculateWidth();

    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center mt-0 md:mt-5 font-inter">
      <p className="text-xl md:text-3xl lg:text-5xl text-center font-bold pb-0 md:pb-10">
        Already <span className="text-[#274AFF]">Chosen</span> by the{" "}
        <span className="text-[#274AFF]">leaders</span>
      </p>

      {/* Blur effect separator */}
      <div className="relative w-full h-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#E0E6FF] backdrop-blur-md"></div>
      </div>

      {/* Seamless Marquee Container */}
      <div className="w-full bg-[#E0E6FF] py-3 md:py-12 overflow-hidden">
        <motion.div
          className="flex gap-10 md:gap-60 w-max"
          animate={
            animationWidth > 0 ? { x: ["0px", `-${animationWidth}px`] } : {}
          }
          transition={
            animationWidth > 0
              ? {
                  duration: 15,
                  ease: "linear",
                  repeat: Infinity,
                }
              : {}
          }
        >
          {/* First set of logos - this is the one we measure */}
          <div
            ref={singleSetRef}
            className="flex gap-10 md:gap-60 flex-shrink-0 min-w-max"
          >
            {logos.map((logo, i) => (
              <div
                key={`first-${i}`}
                className="flex-shrink-0 w-[70px] md:w-auto h-auto"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  draggable={false}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          <div className="flex gap-10 md:gap-60 flex-shrink-0 min-w-max">
            {logos.map((logo, i) => (
              <div
                key={`second-${i}`}
                className="flex-shrink-0 w-[70px] md:w-auto h-auto"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
