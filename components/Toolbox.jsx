"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const tools = [
  { name: "Figma", desc: "we use figma", icon: "/assets/Figma.png" },
  { name: "Framer", desc: "we use figma", icon: "/assets/FramerMotion.png" },
  { name: "WordPress", desc: "we use figma", icon: "/assets/Wordpress.png" },
  { name: "Adobe XD", desc: "we use figma", icon: "/assets/AdobeXD.png" },
  { name: "Figma", desc: "we use figma", icon: "/assets/Figma.png" },
  { name: "Figma", desc: "we use figma", icon: "/assets/Figma.png" },
  { name: "Figma", desc: "we use figma", icon: "/assets/Figma.png" },
  { name: "Figma", desc: "we use figma", icon: "/assets/Figma.png" },
];

const Toolbox = () => {
  return (
    <section className="bg-[#f7f7fb] py-20 px-4 text-center">
      {/* Header Section Animation */}
      <motion.div
        className="flex flex-col gap-2 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h4 className="text-blue-600 font-medium text-[22px] mb-2">Tools</h4>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4">
          Our <span className="text-blue-600">Toolbox</span> For Excellence
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-[16px] sm:text-[18px] md:text-[22px]">
          We design and develop stunning, high-performing websites for SaaS
          products to maximize conversions.
        </p>
      </motion.div>

      {/* First Row: Left to Right Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-6">
        {tools.slice(0, 4).map((tool, index) => (
          <motion.div
            key={index}
            className="rounded-2xl p-5 flex items-center gap-4 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.054) 0%, rgba(0, 61, 255, 0.0702) 100%)",
            }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="min-w-[40px]">
              <Image src={tool.icon} alt={tool.name} width={40} height={40} />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-[18px] sm:text-[20px] md:text-[22px]">
                {tool.name}
              </h3>
              <p className="text-[12px] sm:text-[13px] text-gray-600">
                {tool.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Second Row: Right to Left Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {tools.slice(4, 8).map((tool, index) => {
          const reversedIndex = 3 - index; // rightmost = delay 0, leftmost = highest delay
          return (
            <motion.div
              key={index + 4}
              className="rounded-2xl p-5 flex items-center gap-4 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.054) 0%, rgba(0, 61, 255, 0.0702) 100%)",
              }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: reversedIndex * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="min-w-[40px]">
                <Image src={tool.icon} alt={tool.name} width={40} height={40} />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-[18px] sm:text-[20px] md:text-[22px]">
                  {tool.name}
                </h3>
                <p className="text-[12px] sm:text-[13px] text-gray-600">
                  {tool.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Toolbox;
