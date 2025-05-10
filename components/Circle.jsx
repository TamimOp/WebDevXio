"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "./Button";

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
    }, 1500);

    return () => clearInterval(interval);
  }, [index, path]);

  const textDivClass = "absolute top-60 w-[876px] h-[288px]";

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

  const TextComponent = ({ headline, text }) => (
    <>
      <div className={textDivClass}>
        <div className="flex flex-col gap-8 items-start justify-center">
          <h2 className="hero-gradient-text font-bold text-5xl">
            {contents[contentId].headline}
          </h2>
          <p className="text-[22px] font-medium text-[#222222]">
            {contents[contentId].text}
          </p>
        </div>
      </div>
      <div className="absolute top-105 left-175 w-[50rem] h-[100rem] mt-10 z-50">
        <Button label="Book A Call" iconSrc="/assets/NEW BUTTON/calendar.png" />
      </div>
    </>
  );

  return (
    <div className="absolute top-20 flex items-center justify-center">
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
