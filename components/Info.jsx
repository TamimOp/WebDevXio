"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const infoCards = [
  {
    title: "Website De",
    description:
      "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users’ choice.",
    icon: "/assets/Figma.webp",
    bg: "/assets/FigmaBG.png",
    isMain: false,
  },
  {
    title: "Saas Website Design",
    description:
      "Fully functional, high-performance SaaS websites built with modern technologies.",
    icon: "/assets/SaaS.webp",
    bg: "linear-gradient(to right, #4563ff 0%, #132663 100%)",
    isMain: true,
  },
  {
    title: "Website Development & Maintenance",
    description:
      "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users’ choice.",
    icon: "/assets/FramerMotion.webp",
    bg: "/assets/FramerBG.png",
    isMain: false,
  },
  {
    title: "Wordpress website Design",
    description:
      "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users’ choice.",
    icon: "/assets/Wordpress.webp",
    bg: "/assets/WordpressBG.png",
    isMain: false,
  },
];

const Card = ({ title, description, icon, bg, isMain }) => {
  const baseStyles =
    "flex flex-col justify-between p-8 w-[335px] sm:w-[392.25px] h-[244.66px] sm:h-[258.93px] rounded-3xl shadow-lg overflow-hidden relative";

  const mainCardClasses = isMain ? "text-white" : "bg-white text-black";

  // Check if bg is a gradient or image path
  const isGradient = typeof bg === "string" && bg.startsWith("linear-gradient");

  // Custom glassmorphism for Figma, Framer, Wordpress cards
  const isGlass =
    title === "Website De" ||
    title === "Website Development & Maintenance" ||
    title === "Wordpress website Design";

  return (
    <div
      className={`${baseStyles} ${mainCardClasses}`}
      style={
        isGlass
          ? {
              borderRadius: "18px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(0,61,255,0.07) 100%)",
              boxShadow:
                "0 4px 18.7px 0 rgba(0,0,0,0.25), 21.693px -21.693px 21.693px 0 rgba(194,194,194,0.10) inset, -21.693px 21.693px 21.693px 0 rgba(255,255,255,0.10) inset",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }
          : {}
      }
    >
      {/* Blurred decorative BG image for glass cards */}
      {isGlass && (
        <div
          className="absolute top-4 right-4 z-0 w-24 h-24 pointer-events-none select-none"
          style={{ filter: "blur(8px)" }}
        >
          <Image
            src={bg}
            alt="background"
            fill
            className="object-contain"
            style={{ borderRadius: "12px", opacity: 0.7 }}
            loading="lazy"
          />
        </div>
      )}
      {/* Background for non-glass cards */}
      {!isGlass && !isMain && !isGradient && (
        <Image
          src={bg}
          alt="background"
          fill
          className="object-cover z-0"
          style={{ borderRadius: "18px" }}
          loading="lazy"
        />
      )}
      {/* Gradient background for main card */}
      {isMain && isGradient && (
        <div
          className="absolute inset-0 z-0 rounded-3xl"
          style={{ background: bg }}
        />
      )}

      {/* Content */}
      <div className="flex flex-col items-start gap-2 relative z-10">
        <div className="w-[40.65px] h-[41.44px] md:w-[47.6px] md:h-[43.86px] relative">
          <Image
            src={icon}
            alt="icon"
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="text-xl sm:text-[25px] font-medium mb-2 leading-[106%]">
            {title}
          </h3>
          <p
            className={`text-[13px] sm:text-[15px] font-medium leading-[124%] ${
              isMain ? "text-[#D7D7D7]" : "text-[#6B6B6B]"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Info = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, type: "spring", stiffness: 120, delay: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -8, y: 60, boxShadow: "none" },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      boxShadow: "0 8px 32px 0 rgba(39,74,255,0.12)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
        delay: 0.3 + i * 0.18,
      },
    }),
  };

  const rowLeftVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: 0.2,
        staggerChildren: 0.18,
      },
    },
  };

  const rowRightVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: 0.4,
        staggerChildren: 0.18,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full py-16 bg-[#f7f7fb] flex flex-col items-center px-6 md:px-20"
      id="services"
    >
      {/* Header */}
      <motion.div
        className="flex flex-col items-center mb-6 gap-1"
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-[26px] md:text-5xl font-medium mb-4 text-center">
          What We Do
        </h2>
        <p className="text-sm md:text-[22px] text-gray-700 max-w-2xl text-center mb-12">
          We design and develop stunning, high-performing websites for SaaS
          products to maximize conversions.
        </p>
      </motion.div>

      {/* Responsive layout for mobile & tablet */}
      <div className="flex flex-wrap justify-center gap-10 lg:hidden">
        {infoCards.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
              scale: 1.04,
              rotate: 2,
              boxShadow: "0 12px 40px 0 rgba(39,74,255,0.18)",
            }}
          >
            <Card {...card} />
          </motion.div>
        ))}
      </div>

      {/* Custom staggered layout only on large screens */}
      <div className="hidden lg:flex flex-col gap-10">
        {/* Row 1 */}
        <motion.div
          className="flex flex-row gap-8 justify-between items-start"
          variants={rowLeftVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            custom={0}
            variants={cardVariants}
            whileHover={{ scale: 1.04, rotate: 2 }}
          >
            <Card {...infoCards[0]} />
          </motion.div>
          <motion.div
            custom={1}
            variants={cardVariants}
            whileHover={{ scale: 1.04, rotate: 2 }}
          >
            <Card {...infoCards[1]} />
          </motion.div>
          <div className="hidden xl:block w-[392.25px] h-[258.93px]"></div>
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="flex flex-row gap-8 justify-between items-end"
          variants={rowRightVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="hidden xl:block w-[392.25px] h-[258.93px]"></div>
          <motion.div
            custom={2}
            variants={cardVariants}
            whileHover={{ scale: 1.04, rotate: 2 }}
          >
            <Card {...infoCards[2]} />
          </motion.div>
          <motion.div
            custom={3}
            variants={cardVariants}
            whileHover={{ scale: 1.04, rotate: 2 }}
          >
            <Card {...infoCards[3]} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Info;
