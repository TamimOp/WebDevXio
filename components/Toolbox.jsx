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

const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const cardLeftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, delay: i * 0.25, ease: "easeOut" },
  }),
};

const cardRightVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, delay: i * 0.25, ease: "easeOut" },
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
        {/* Header Section */}
        <motion.div
          className="flex flex-col gap-2 items-center text-center max-w-4xl mx-auto"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h4 className="text-[#274AFF] font-medium text-[15px] sm:text-[18px] md:text-[22px] mb-2">
            Tools
          </h4>
          <h2 className="text-[30px] sm:text-4xl md:text-5xl font-medium mb-4">
            Our <span className="text-[#274AFF]">Toolbox</span> For Excellence
          </h2>
          <p className="text-[#222222] max-w-2xl mx-auto mb-8 text-[15px] sm:text-[16px] md:text-[22px]">
            We design and develop stunning, high-performing websites for SaaS
            products to maximize conversions.
          </p>
        </motion.div>

        {/* First Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {tools.slice(0, 4).map((tool, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.054) 0%, rgba(0, 61, 255, 0.0702) 100%)",
              }}
              custom={index}
              variants={cardLeftVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
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

        {/* Second Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {tools.slice(4, 8).map((tool, index) => (
            <motion.div
              key={index + 4}
              className="rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.054) 0%, rgba(0, 61, 255, 0.0702) 100%)",
              }}
              custom={index}
              variants={cardRightVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
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
