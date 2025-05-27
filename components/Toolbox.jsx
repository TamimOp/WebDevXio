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
    <section className="bg-[#f7f7fb] sm:py-5 px-4 text-center flex justify-center">
      <div className="w-[343px] h-[710px] sm:w-[1232px] sm:h-[494px] px-4 sm:px-8 flex flex-col justify-center">
        {/* Header Section */}
        <motion.div
          className="flex flex-col gap-2 items-center text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h4 className="text-[#274AFF] font-medium text-[13px] sm:text-[18px] md:text-[22px] mb-2">
            Tools
          </h4>
          <h2 className="text-[26px] sm:text-4xl md:text-5xl font-medium mb-4">
            Our <span className="text-[#274AFF]">Toolbox</span> For Excellence
          </h2>
          <p className="text-[#222222] max-w-2xl mx-auto mb-8 text-[13px] sm:text-[16px] md:text-[22px]">
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
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="w-6 h-5 sm:w-12 sm:h-10 relative">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-[10px] sm:text-[16px] md:text-[20px]">
                  {tool.name}
                </h3>
                <p className="text-[6px] sm:text-[12px] md:text-[14px] text-gray-600">
                  {tool.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {tools.slice(4, 8).map((tool, index) => {
            const reversedIndex = 3 - index;
            return (
              <motion.div
                key={index + 4}
                className="rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 shadow-xl hover:shadow-2xl transition-shadow duration-300"
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
                <div className="w-6 h-5 sm:w-12 sm:h-10 relative">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-[10px] sm:text-[16px] md:text-[20px]">
                    {tool.name}
                  </h3>
                  <p className="text-[6px] sm:text-[12px] md:text-[14px] text-gray-600">
                    {tool.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Toolbox;
