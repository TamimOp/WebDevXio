"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

const sections = [
  {
    id: "saas",
    label: "Saas Website",
    headline: "High-Conversion SaaS Websites That Drive Growth",
    text: "We design and develop stunning, high-performing websites for SaaS products to maximize conversions.",
  },
  {
    id: "uiux",
    label: "UI/UX Design",
    headline: "Pixel–Perfect UI/UX Design for a\nSeamless User Experience",
    text: "We create stunning, user-friendly designs that enhance usability and boost conversions.",
  },
  {
    id: "wordpress",
    label: "WordPress Website",
    headline: "Custom WordPress Websites – Flexible, Scalable & SEO-Optimized",
    text: "We build high-quality WordPress websites tailored for SaaS, startups, and businesses that need a powerful online presence.",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sections.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const activeSection = sections[activeIndex];

  return (
    <div className="relative w-full min-h-screen bg-[#f9f9ff] overflow-hidden flex items-center justify-center">
      <Image
        src="/assets/Hero_bg.jpg"
        layout="fill"
        objectFit="cover"
        alt="Hero Background"
        className="z-0"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        {/* Arc Path with Labels */}
        <svg
          viewBox="0 0 600 200"
          className="w-full max-w-4xl h-40 mb-8"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M 50 150 Q 300 -100 550 150"
            fill="transparent"
            stroke="#0052ff"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {sections.map((section, index) => {
            const positions = [
              { x: 100, y: 100 },
              { x: 300, y: 20 },
              { x: 500, y: 100 },
            ];
            const pos = positions[index];
            const isActive = index === activeIndex;

            return (
              <g
                key={section.id}
                className="cursor-pointer"
                onClick={() => handleDotClick(index)}
              >
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isActive ? 8 : 6}
                  fill={isActive ? "#0052ff" : "#aaa"}
                />
                <text
                  x={pos.x}
                  y={pos.y - 12}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#0052ff"
                  fontWeight={isActive ? "bold" : "normal"}
                >
                  {section.label}
                </text>
              </g>
            );
          })}
        </svg>
        {/* Animate headline and text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0c0c33] whitespace-pre-line">
              {activeSection.headline}
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mt-4 max-w-2xl">
              {activeSection.text}
            </p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-6">
          <Button
            label="Book A Call"
            iconSrc="/assets/NEW BUTTON/calendar.png"
          />
        </div>
        <p className="text-4xl md:text-3xl text-center mt-20 font-medium">
          Already <span className="text-blue-600">Chosen</span> by the{" "}
          <span className="text-blue-600">leaders</span>
        </p>
      </div>
    </div>
  );
}
