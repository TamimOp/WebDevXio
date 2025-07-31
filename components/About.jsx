"use client";
import React, { useRef } from "react";
import Image from "next/image";
import AboutUsImage from "@/public/assets/AboutUs.webp";
import { CiCalendar } from "react-icons/ci";
import { motion, useInView } from "framer-motion";
import Button from "@/components/Button";

const stats = [
  { value: "2k+", label: "SaaS Projects Delivered" },
  { value: "10k+", label: "Happy Clients Worldwide" },
  { value: "10+", label: "Industry Awards" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Unique animation variants
  const imageVariant = {
    hidden: { opacity: 0, scale: 0.7, rotate: -15, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 120, damping: 10, duration: 1 },
    },
  };

  const contentVariant = {
    hidden: { opacity: 0, x: 80, scale: 0.95 },
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

  const statVariant = {
    hidden: { opacity: 0, y: 60, scale: 0.7, rotate: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.7,
        duration: 0.7,
        delay: 0.5 + i * 0.18,
      },
    }),
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1.1,
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 8, delay: 1.2 },
    },
  };

  return (
    <section
      ref={ref}
      className="bg-[#f7f7fb] px-6 md:px-10 lg:px-28 py-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden"
      id="about"
    >
      {/* Image Animation */}
      <motion.div
        className="w-full lg:w-[40%] flex justify-center lg:justify-start"
        variants={imageVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Image
          src={AboutUsImage}
          alt="About Us"
          className="w-[229px] h-[210px] md:w-[482px] md:h-[442px]"
          loading="lazy"
        />
      </motion.div>

      {/* Content Animation */}
      <motion.div
        className="flex flex-col gap-4 w-full lg:w-[60%] text-center lg:text-left"
        variants={contentVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.p
          className="text-[#274AFF] font-medium text-base md:text-[22px]"
          variants={contentVariant}
        >
          —About Us
        </motion.p>
        <motion.h2
          className="text-[28px] md:text-4xl lg:text-5xl font-medium"
          variants={contentVariant}
        >
          Who We Are & <span className="text-[#274AFF]">Why Choose Us</span>
        </motion.h2>
        <motion.p
          className="text-[#222222] text-sm md:text-xl lg:text-[22px] font-medium leading-relaxed"
          variants={contentVariant}
        >
          At UX Recharge, we specialize in creating modern, user-friendly
          websites tailored for SaaS companies. Our designs are
          conversion-focused, fast, and fully optimized for mobile and SEO.
        </motion.p>

        <div className="flex gap-6 justify-center lg:justify-start mt-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              className="flex flex-col gap-2 text-center w-[110px] md:w-[141px] h-[96px]"
              variants={statVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <p className="text-3xl md:text-5xl font-semibold text-[#274AFF]">
                {stat.value}
              </p>
              <p className="text-[13px] md:text-sm font-medium text-[#0E0E0E]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-6 flex justify-center lg:justify-start"
          variants={buttonVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Button label="Book A Call" Icon={CiCalendar} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
