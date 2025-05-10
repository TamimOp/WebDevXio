"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";

export default function Circle() {
  const [cx, setCx] = useState([22]);
  const [cy, setCy] = useState([110]);
  const [index, setIndex] = useState(0);
  const contentMap = {
    0: 0,
    1: 1,
    2: 2,
    3: 1,
    4: 0,
  };
  const [contentId, setContentId] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCx(path[index].x);
      setCy(path[index].y);
      setIndex((prevIndex) => (prevIndex + 1) % path.length);
      setContentId(contentMap[index + 1]);
    }, 2500);

    return () => clearInterval(interval);
  }, [index, path]);

  const textDivClass = "absolute top-50 w-[876px] h-[288px] z-50";

  const contents = [
    {
      headline: "High-Conversion SaaS Websites That Drive Growth",
      text: "We design and develop stunning, high-performing websites for SaaS products to maximize conversions.",
    },
    {
      headline: "Pixel–Perfect UI/UX Design for a Seamless User Experience",
      text: "We create stunning, user-friendly designs that enhance usability and boost conversions.",
    },
    {
      headline:
        "Custom WordPress Websites – Flexible, Scalable & SEO-Optimized",
      text: "We build high-quality WordPress websites tailored for SaaS, startups, and businesses that need a powerful online presence.",
    },
  ];

  const Button = ({ label, Icon, onClick }) => {
    return (
      <div className="w-[200px] h-[55px] bg-gradient-to-r from-[#0634FF] to-[#B2ACFF] shadow-lg shadow-[#B2ACFF] flex items-center justify-center rounded-4xl">
        <button
          onClick={onClick}
          className="relative overflow-hidden bg-gradient-to-r cursor-pointer 
        flex group justify-center items-center gap-3 text-xl font-semibold text-white 
        w-[195px] h-[50px] from-[#06197d] to-[#274afd] px-4 rounded-4xl 
        hover:from-black hover:to-gray-500 hover:flex-row-reverse 
        transition-all duration-500 ease-in-out"
        >
          <Icon
            className="transition-all duration-500 ease-in-out 
          bg-white group-hover:bg-transparent group-hover:border group-hover:text-white 
          border-white text-[#274afd] p-1.5 rounded-full"
            size={33}
          />
          <span className="transition-all duration-500 ease-in-out group-hover:-translate-x-1 group-hover:text-white">
            {label}
          </span>

          {/* Optional hover-layer background if needed */}
          <div className="absolute inset-0 rounded-4xl bg-gradient-to-r from-black to-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        </button>
      </div>
    );
  };

  const TextComponent = ({ headline, text }) => (
    <>
      <div className={textDivClass}>
        <div className="flex flex-col gap-8 items-start justify-center h-full relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h2
              key={headline}
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-gradient-text font-bold text-5xl"
            >
              {headline}
            </motion.h2>
          </AnimatePresence>

          <motion.p
            key={text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[22px] font-medium text-[#222222]"
          >
            {text}
          </motion.p>
        </div>
      </div>

      <div className="absolute top-105 mx-auto mt-10 z-50">
        <Button label="Book A Call" Icon={CiCalendar} />
      </div>
    </>
  );

  return (
    <div className="absolute top-25 flex items-center justify-center">
      <TextComponent
        headline={contents[contentId].headline}
        text={contents[contentId].text}
      />
      <svg
        width="100%"
        height="100%"
        viewBox="0 -5 400 400"
        className="w-[100rem] h-[100rem]"
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
        />

        {/* Replacing static circle with motion.circle */}
        <motion.circle
          id="bigger-dot"
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

        {/* Left bottom dot */}
        <circle cx="22" cy="110" r="2.5" fill="#274aff" fillOpacity="0.3" />

        {/* Right bottom dot */}
        <circle cx="378" cy="110" r="2.5" fill="#274aff" fillOpacity="0.3" />

        {/* Top center dot */}
        <circle cx="200" cy="1" r="2.5" fill="#274aff" fillOpacity="0.3" />
      </svg>

      <div
        className="absolute top-5 w-full h-full rounded-full"
        style={{
          boxShadow: "0 0 30px 2px rgba(39, 74, 255, 0.4)",
        }}
      ></div>
    </div>
  );
}
