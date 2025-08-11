"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tools = [
  { name: "Figma", desc: "we use figma", icon: "/assets/Figma.webp" },
  { name: "Framer", desc: "we use figma", icon: "/assets/FramerMotion.webp" },
  { name: "WordPress", desc: "we use figma", icon: "/assets/Wordpress.webp" },
  { name: "Adobe XD", desc: "we use figma", icon: "/assets/AdobeXD.webp" },
  { name: "Figma", desc: "we use figma", icon: "/assets/Figma.webp" },
  { name: "Figma", desc: "we use figma", icon: "/assets/Figma.webp" },
  { name: "Figma", desc: "we use figma", icon: "/assets/Figma.webp" },
  { name: "Figma", desc: "we use figma", icon: "/assets/Figma.webp" },
];

// Component for animating individual characters
const AnimatedText = ({
  text,
  className,
  delay = 0,
  isInView,
  speed = "normal",
}) => {
  const characters = text.split("");

  const charDelay = speed === "fast" ? 0.015 : speed === "slow" ? 0.08 : 0.04;
  const animDuration = speed === "fast" ? 0.4 : speed === "slow" ? 1.0 : 0.6;

  const characterVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: -90,
      scale: 0.3,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: delay + i * charDelay,
        duration: animDuration,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 180,
        damping: 15,
      },
    }),
  };

  const hoverVariants = {
    rest: {},
    hover: {
      transition: {
        staggerChildren: 0.015,
      },
    },
  };

  const characterHover = {
    rest: {
      scale: 1,
      y: 0,
      color: "inherit",
    },
    hover: {
      scale: 1.15,
      y: -5,
      color: "#274AFF",
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={`${className} inline-block cursor-default`}
      variants={hoverVariants}
      initial="rest"
      whileHover="hover"
    >
      {characters.map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={characterVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="inline-block"
          style={{
            transformOrigin: "center bottom",
            display: char === " " ? "inline" : "inline-block",
            minWidth: char === " " ? "0.3em" : "auto",
          }}
        >
          <motion.span variants={characterHover} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </motion.span>
      ))}
    </motion.div>
  );
};

const headerVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.1,
      type: "spring",
      stiffness: 36,
      damping: 22,
      delay: 0.1,
    },
  },
};

const cardLeftVariants = {
  hidden: { opacity: 0, scale: 0.92, rotate: -6, x: -60 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 32,
      damping: 18,
      duration: 0.9,
      delay: 0.2 + i * 0.16,
    },
  }),
};

const cardRightVariants = {
  hidden: { opacity: 0, scale: 0.92, rotate: 6, x: 60 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 32,
      damping: 18,
      duration: 0.9,
      delay: 0.4 + i * 0.16,
    },
  }),
};

const Toolbox = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-[#f7f7fb] sm:py-5 px-4 text-center flex justify-center overflow-x-hidden"
    >
      <div className="w-[343px] h-[710px] sm:w-[1232px] sm:h-[494px] px-4 sm:px-8 flex flex-col justify-center">
        {/* Header Section with animated text */}
        <motion.div
          className="flex flex-col gap-2 items-center text-center max-w-4xl mx-auto"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatedText
            text="Tools"
            className="text-[#274AFF] font-medium text-[15px] sm:text-[18px] md:text-[22px] mb-2"
            delay={0.2}
            isInView={isInView}
            speed="normal"
          />

          <div className="mb-4">
            <AnimatedText
              text="Our "
              className="text-[30px] sm:text-4xl md:text-5xl font-medium"
              delay={0.4}
              isInView={isInView}
              speed="normal"
            />
            <AnimatedText
              text="Toolbox"
              className="text-[30px] sm:text-4xl md:text-5xl font-medium text-[#274AFF]"
              delay={0.6}
              isInView={isInView}
              speed="normal"
            />
            <AnimatedText
              text=" For Excellence"
              className="text-[30px] sm:text-4xl md:text-5xl font-medium"
              delay={0.8}
              isInView={isInView}
              speed="normal"
            />
          </div>

          <AnimatedText
            text="We design and develop stunning, high-performing websites for SaaS products to maximize conversions."
            className="text-[#222222] max-w-2xl mx-auto mb-8 pb-4 text-[15px] sm:text-[16px] md:text-[22px]"
            delay={1.0}
            isInView={isInView}
            speed="fast"
          />
        </motion.div>

        {/* First Row - Your original cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {tools.slice(0, 4).map((tool, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 transition-shadow duration-300"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.054) 0%, rgba(0, 61, 255, 0.0702) 100%)",
                boxShadow: `
      0px 4px 18.7px 0px #00000040,
      -21.69px 21.69px 21.69px 0px #FFFFFF1A inset,
      21.69px -21.69px 21.69px 0px #C2C2C21A inset
    `,
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
              custom={index}
              variants={cardLeftVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.05,
                y: -12,
                rotate: 0,
                boxShadow: `
    0px 4px 18.7px 0px #00000040,
    -21.69px 21.69px 21.69px 0px #FFFFFF1A inset,
    21.69px -21.69px 21.69px 0px #C2C2C21A inset,
    0 20px 40px rgba(39,74,255,0.14)
  `,
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            >
              <div className="w-8 h-6 sm:w-12 sm:h-10 relative">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-[13px] sm:text-[16px] md:text-[20px]">
                  {tool.name}
                </h3>
                <p className="text-[10px] sm:text-[12px] md:text-[14px] text-gray-600">
                  {tool.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second Row - Your original cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {tools.slice(4, 8).map((tool, index) => (
            <motion.div
              key={index + 4}
              className="rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 transition-shadow duration-300"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.054) 0%, rgba(0, 61, 255, 0.0702) 100%)",
                boxShadow: `
      0px 4px 18.7px 0px #00000040,
      -21.69px 21.69px 21.69px 0px #FFFFFF1A inset,
      21.69px -21.69px 21.69px 0px #C2C2C21A inset
    `,
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
              custom={index}
              variants={cardRightVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.05,
                y: -12,
                rotate: 0,
                boxShadow: `
    0px 4px 18.7px 0px #00000040,
    -21.69px 21.69px 21.69px 0px #FFFFFF1A inset,
    21.69px -21.69px 21.69px 0px #C2C2C21A inset,
    0 20px 40px rgba(39,74,255,0.14)
  `,
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            >
              <div className="w-8 h-6 sm:w-12 sm:h-10 relative">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-[13px] sm:text-[16px] md:text-[20px]">
                  {tool.name}
                </h3>
                <p className="text-[10px] sm:text-[12px] md:text-[14px] text-gray-600">
                  {tool.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolbox;
