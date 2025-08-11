"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CiCalendar } from "react-icons/ci";
import Button from "@/components/Button";

function WeavyText({ text }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check on mount and on resize
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // On mobile, replace \n with space
  const displayText = isMobile ? text.replace(/\n/g, " ") : text;

  // Split into chars, keeping track of line breaks if not mobile
  const chars = [];
  displayText.split(isMobile ? "" : "\n").forEach((line, lineIdx, arr) => {
    line.split("").forEach((char) => chars.push({ char, key: Math.random() }));
    if (!isMobile && lineIdx < arr.length - 1)
      chars.push({ char: "\n", key: `br-${lineIdx}` });
  });

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.012,
      },
    },
  };
  const child = {
    hidden: { y: 16, opacity: 0 },
    visible: {
      y: [16, -8, 0],
      opacity: 1,
      transition: { duration: 0.25, ease: "easeOut" },
    },
    exit: { y: -16, opacity: 0, transition: { duration: 0.12 } },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ display: "inline-block" }}
    >
      {chars.map(({ char, key }, i) =>
        char === "\n" ? (
          // Only render <br /> on desktop
          <br key={key} className="hidden sm:block" />
        ) : (
          <motion.span
            key={key}
            variants={child}
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        )
      )}
    </motion.span>
  );
}

export default function Circle() {
  const [contentId, setContentId] = useState(0);
  const [position, setPosition] = useState(0);
  const [cx, setCx] = useState([22]);
  const [cy, setCy] = useState([110]);
  const [index, setIndex] = useState(0);

  const path = [
    {
      x: [
        22, 25, 28, 31, 35, 38, 42, 46, 50, 54, 59, 63, 68, 73, 77, 82, 88, 93,
        98, 104, 109, 115, 121, 126, 132, 138, 144, 150, 156, 163, 169, 175,
        181, 187, 194, 200,
      ],
      y: [
        110, 104, 98, 93, 88, 82, 77, 73, 68, 63, 59, 54, 50, 46, 42, 38, 35,
        31, 28, 25, 22, 19, 16, 14, 12, 10, 8, 6, 5, 4, 2, 2, 1, 0, 1,
      ],
    },
    {
      x: [
        200, 206, 213, 219, 225, 231, 237, 244, 250, 256, 262, 268, 274, 279,
        285, 291, 296, 302, 307, 312, 318, 323, 327, 332, 337, 341, 346, 350,
        354, 358, 362, 365, 369, 372, 375, 378,
      ],
      y: [
        0, 0, 0, 1, 2, 2, 4, 5, 6, 8, 10, 12, 14, 16, 19, 22, 25, 28, 31, 35,
        38, 42, 46, 50, 54, 59, 63, 68, 73, 77, 82, 88, 93, 98, 104, 110,
      ],
    },
    {
      x: [
        378, 375, 372, 369, 365, 362, 358, 354, 350, 346, 341, 337, 332, 327,
        323, 318, 312, 307, 302, 296, 291, 285, 279, 274, 268, 262, 256, 250,
        244, 237, 231, 225, 219, 213, 206, 200,
      ],
      y: [
        110, 104, 98, 93, 88, 82, 77, 73, 68, 63, 59, 54, 50, 46, 42, 38, 35,
        31, 28, 25, 22, 19, 16, 14, 12, 10, 8, 6, 5, 4, 2, 2, 1, 0, 0, 1,
      ],
    },
    {
      x: [
        200, 194, 187, 181, 175, 169, 163, 156, 150, 144, 138, 132, 126, 121,
        115, 109, 104, 98, 93, 88, 82, 77, 73, 68, 63, 59, 54, 50, 46, 42, 38,
        35, 31, 28, 25, 22,
      ],
      y: [
        0, 0, 0, 1, 2, 2, 4, 5, 6, 8, 10, 12, 14, 16, 19, 22, 25, 28, 31, 35,
        38, 42, 46, 50, 54, 59, 63, 68, 73, 77, 82, 88, 93, 98, 104, 110,
      ],
    },
  ];

  const contentMap = {
    0: 0,
    1: 1,
    2: 2,
    3: 1,
    4: 0,
  };

  const contents = [
    {
      headline: (
        <>
          High-Conversion SaaS Websites
          <br />
          That Drive Growth
        </>
      ),
      // <br/> before SaaS
      text: "We design and develop stunning, high-performing websites for\nSaaS products to maximize conversions.",
      label: "SaaS",
    },
    {
      headline: "Pixel–Perfect UI/UX Design for a Seamless User Experience",
      // <br/> before and
      text: "We create stunning, user-friendly designs that enhance usability\nand boost conversions.",
      label: "UI/UX",
    },
    {
      headline:
        "Custom WordPress Websites – Flexible, Scalable & SEO-Optimized",
      // <br/> before startups
      text: "We build high-quality WordPress websites tailored for SaaS,\nstartups, and businesses that need a powerful online presence.",
      label: "WordPress",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCx(path[index].x);
      setCy(path[index].y);
      setIndex((prevIndex) => (prevIndex + 1) % path.length);
      setPosition((prev) => (prev + 1) % 4);
      setContentId(contentMap[index + 1]);
    }, 2500);

    return () => clearInterval(interval);
  }, [index, path]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden my-20">
      {/* Arc for Desktop */}
      <div className="absolute inset-0 items-center justify-center top-25 sm:top-210 sm:mt-10 hidden sm:flex">
        <div className="relative w-[1500px] h-[900px] 2xl:w-[1800px] 2xl:h-[1000px]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 -10 400 400"
            preserveAspectRatio="xMidYMid meet"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full scale-150"
          >
            <defs>
              <linearGradient
                id="fadeStroke"
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="200"
                x2="400"
                y2="200"
              >
                <stop offset="0%" stopColor="#274aff" stopOpacity="0" />
                <stop offset="50%" stopColor="#274aff" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#274aff" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path
              d="M 1 200 A 199 199 0 0 1 399 200"
              fill="none"
              stroke="url(#fadeStroke)"
              strokeWidth="2"
              className="opacity-50"
            />

            <motion.circle
              r="4"
              fill="#274aff"
              fillOpacity="0.5"
              animate={{
                cx: cx,
                cy: cy,
              }}
              transition={{ duration: 0.7, ease: "linear" }}
            />

            <circle cx="22" cy="110" r="2.5" fill="#274aff" fillOpacity="0.3" />
            <circle
              cx="378"
              cy="110"
              r="2.5"
              fill="#274aff"
              fillOpacity="0.3"
            />
            <circle cx="200" cy="1" r="2.5" fill="#274aff" fillOpacity="0.3" />

            <motion.text
              x={
                position === 0
                  ? "22"
                  : position === 1
                  ? "200"
                  : position === 2
                  ? "378"
                  : position === 3
                  ? "200"
                  : "22"
              }
              y={position === 1 || position === 3 ? "-4" : "120"}
              textAnchor="middle"
              fill="#274aff"
              className={`text-[5px] ${
                (position === 0 && contentId === 0) ||
                (position === 1 && contentId === 1) ||
                (position === 2 && contentId === 2) ||
                (position === 3 && contentId === 1)
                  ? "font-bold"
                  : "font-medium"
              } opacity-70`}
            >
              {contents[contentId].label}
            </motion.text>
          </svg>
        </div>
      </div>

      {/* Line for Mobile */}
      <div className="absolute top-[215px] left-0 w-full px-6 sm:hidden flex justify-center z-10">
        <div className="relative w-full max-w-[360px] h-12">
          <div className="absolute top-[24px] left-0 w-full h-[3px] bg-gradient-to-r from-[#274aff80] via-[#274aff] to-[#274aff80] rounded-full" />
          <div className="absolute top-[24px] left-0 w-full flex justify-between items-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-[8px] h-[8px] rounded-full bg-[#274aff] opacity-50 -translate-y-[2.5px]"
              />
            ))}
          </div>

          <motion.div
            className="absolute w-[14px] h-[14px] rounded-full bg-[#274aff] border-2 border-white shadow-md"
            style={{ top: "24px", transform: "translate(-50%, -6.5px)" }}
            animate={{
              left: `${
                contentId === 0 ? "0%" : contentId === 1 ? "50%" : "100%"
              }`,
            }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute text-[12px] text-[#274aff] font-semibold"
            style={{ top: "-6px", transform: "translateX(-50%)" }}
            animate={{
              left: `${
                contentId === 0 ? "0%" : contentId === 1 ? "50%" : "100%"
              }`,
            }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
          >
            {contents[contentId].label}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 mt:10 sm:mt-70">
        <div className="w-full max-w-[876px] mx-auto flex flex-col items-center space-y-2">
          <div className="min-h-[140px] sm:min-h-[120px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={contents[contentId].headline}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-[6xl] 2xl:text-[64px] font-bold text-center bg-gradient-to-r from-[#1E2B4D] to-[#274AFF] bg-clip-text text-transparent leading-tight"
              >
                {contents[contentId].headline}
              </motion.h1>
            </AnimatePresence>
          </div>

          <div className="min-h-[70px] sm:min-h-[80px] flex items-center justify-center px-2 sm:px-0 w-full">
            <AnimatePresence mode="wait">
              <motion.p
                key={contents[contentId].text}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm sm:text-base md:text-xl lg:text-[22px] text-[#222222] w-full max-w-[700px] text-center font-medium leading-snug sm:leading-normal break-words whitespace-pre-line"
              >
                <WeavyText text={contents[contentId].text} />
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="pt-8">
            <Button label="Book A Call" Icon={CiCalendar} />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(39,74,255,0.08)_0%,transparent_70%)]" />
    </div>
  );
}
