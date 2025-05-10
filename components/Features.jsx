"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import Button from "./Button";

const images = [
  {
    src: "/assets/Featured0.png",
  },
  {
    src: "/assets/Featured1.png",
  },
  {
    src: "/assets/Featured2.png",
  },
  {
    src: "/assets/Featured3.png",
  },
];

const title = "Digital Marketing Website";
const tags = ["UI/UX Design", "Web Design", "Wireframe"];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="p-20 ">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="max-w-2xl space-y-4">
            <p className="text-blue-600 text-lg font-medium">Portfolio</p>
            <h2 className="text-5xl font-bold text-gray-900">
              Our <span className="text-blue-600">Featured</span> Work
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We design and develop stunning, high-performing websites for SaaS
              products to maximize conversions.
            </p>
          </div>

          <Button
            label="See More"
            iconSrc="/assets/NEW BUTTON/search.png"
            className=""
          />
        </div>

        {/* Featured Work Gallery */}
        <div className="flex gap-4 h-[500px] overflow-hidden">
          {images.map((item, i) => (
            <motion.div
              key={i}
              className="relative rounded-3xl overflow-hidden cursor-pointer transition-all bg-white shadow-xl"
              animate={{
                flex: activeIndex === i ? 3 : 1,
                borderRadius: "24px",
              }}
              transition={{
                flex: { duration: 0.3, ease: "linear" }, // Linear easing for flex
                borderRadius: { duration: 0.3, ease: "easeInOut" }, // EaseInOut for borderRadius
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={`Featured ${i}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-500 scale-[0.92] rounded-2xl"
                />
              </div>

              {/* Active Text, Tags, and Arrow Combined */}
              <motion.div
                className="absolute inset-0 p-8 flex flex-col justify-end z-10 text-white bg-gradient-to-t from-black/80 via-transparent to-transparent"
                initial={{ opacity: 0, x: -30 }}
                animate={{
                  opacity: activeIndex === i ? 1 : 0,
                  x: activeIndex === i ? 0 : -30,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <motion.h3
                      className="text-[22px] font-light mb-4 text-gray-300"
                      initial={{ x: -30, opacity: 0 }}
                      animate={{
                        x: activeIndex === i ? 0 : -30,
                        opacity: activeIndex === i ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.05,
                      }}
                    >
                      {title}
                    </motion.h3>
                    <motion.div
                      className="flex gap-3 flex-wrap"
                      initial={{ x: -30, opacity: 0 }}
                      animate={{
                        x: activeIndex === i ? 0 : -30,
                        opacity: activeIndex === i ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.1,
                      }}
                    >
                      {tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`text-[13px] px-4 py-1.5 rounded-full font-medium ${
                            i === 0
                              ? "border-blue-600 border-2 bg-blue-600/20 text-gray-50"
                              : "border-white border-2 text-gray-50"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-6
    ${i === 0 ? "bg-[#2e44ff]/60" : "bg-black/40"}
    backdrop-blur-md backdrop-saturate-150 bg-opacity-60`}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.15,
                    }}
                  >
                    <Image
                      src="/assets/NEW BUTTON/arrow.png"
                      width={18}
                      height={18}
                      alt="arrow"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
