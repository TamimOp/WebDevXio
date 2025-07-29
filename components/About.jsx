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

  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "linear" },
    },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "linear" },
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
        variants={slideFromLeft}
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
        variants={slideFromRight}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <p className="text-[#274AFF] font-medium text-base md:text-[22px]">
          —About Us
        </p>
        <h2 className="text-[28px] md:text-4xl lg:text-5xl font-medium">
          Who We Are & <span className="text-[#274AFF]">Why Choose Us</span>
        </h2>
        <p className="text-[#222222] text-sm md:text-xl lg:text-[22px] font-medium leading-relaxed">
          At UX Recharge, we specialize in creating modern, user-friendly
          websites tailored for SaaS companies. Our designs are
          conversion-focused, fast, and fully optimized for mobile and SEO.
        </p>

        <div className="flex gap-6 justify-center lg:justify-start mt-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 text-center w-[110px] md:w-[141px] h-[96px]"
            >
              <p className="text-3xl md:text-5xl font-semibold text-[#274AFF]">
                {stat.value}
              </p>
              <p className="text-[13px] md:text-sm font-medium text-[#0E0E0E]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center lg:justify-start">
          <Button label="Book A Call" Icon={CiCalendar} />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
