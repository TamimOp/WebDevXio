"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";

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
      headline: "High-Conversion SaaS Websites That Drive Growth",
      text: "We design and develop stunning, high-performing websites for SaaS products to maximize conversions.",
      label: "SaaS Website",
    },
    {
      headline: "Pixel–Perfect UI/UX Design for a Seamless User Experience",
      text: "We create stunning, user-friendly designs that enhance usability and boost conversions.",
      label: "UI/UX Design",
    },
    {
      headline:
        "Custom WordPress Websites – Flexible, Scalable & SEO-Optimized",
      text: "We build high-quality WordPress websites tailored for SaaS, startups, and businesses that need a powerful online presence.",
      label: "WordPress Website",
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

  const Button = ({ label, Icon }) => (
    <div className="w-[200px] h-[55px] bg-gradient-to-r from-[#0634FF] to-[#B2ACFF] shadow-lg shadow-[#B2ACFF] flex items-center justify-center rounded-[32px]">
      <button className="relative overflow-hidden bg-gradient-to-r cursor-pointer flex group justify-center items-center gap-3 text-xl font-semibold text-white w-[195px] h-[50px] from-[#06197d] to-[#274afd] px-4 rounded-[30px] hover:from-black hover:to-gray-500 hover:flex-row-reverse transition-all duration-500 ease-in-out">
        <Icon
          className="transition-all duration-500 ease-in-out bg-white group-hover:bg-transparent group-hover:border group-hover:text-white border-white text-[#274afd] p-1.5 rounded-full"
          size={33}
        />
        <span className="transition-all duration-500 ease-in-out group-hover:-translate-x-1 group-hover:text-white">
          {label}
        </span>
        <div className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-black to-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </button>
    </div>
  );

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden my-20">
      {/* Arc Container */}
      <div className="absolute inset-0 flex items-center justify-center sm:top-210 sm:mt-10">
        <div className="relative w-[1500px] h-[900px]">
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
              transition={{
                duration: 0.7,
                ease: "linear",
              }}
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
                // Add condition for position 3 to maintain visibility
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

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 mt:10 sm:mt-70">
        <div className="w-full max-w-[876px] mx-auto flex flex-col items-center space-y-2">
          <div className="min-h-[120px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={contents[contentId].headline}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-[#1E2B4D] to-[#274AFF] bg-clip-text text-transparent leading-tight"
              >
                {contents[contentId].headline}
              </motion.h1>
            </AnimatePresence>
          </div>

          <div className="min-h-[80px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={contents[contentId].text}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm md:text-xl lg:text-[22px] text-[#222222] max-w-[700px] text-center font-medium"
              >
                {contents[contentId].text}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="pt-8">
            <Button label="Book A Call" Icon={CiCalendar} />
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(39,74,255,0.08)_0%,transparent_70%)]" />
    </div>
  );
}
