"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

const images = [
  { src: "/assets/Featured0.png" },
  { src: "/assets/Featured1.png" },
  { src: "/assets/Featured2.png" },
  { src: "/assets/Featured3.png" },
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

  const Button = ({ label, Icon, onClick }) => {
    return (
      <div className="w-[200px] h-[55px] bg-gradient-to-r from-[#0634FF] to-[#B2ACFF] shadow-lg shadow-[#B2ACFF] flex items-center justify-center rounded-4xl">
        <button
          onClick={onClick}
          className="relative overflow-hidden bg-gradient-to-r cursor-pointer 
        flex group justify-center items-center gap-3 text-[22px] font-semibold text-white 
        w-[195px] h-[50px] from-[#06197d] to-[#274afd] px-4 rounded-4xl 
        hover:from-black hover:to-gray-500 hover:flex-row-reverse 
        transition-all duration-500 ease-in-out"
        >
          <Icon
            className="transition-all duration-500 ease-in-out 
          bg-white group-hover:bg-transparent group-hover:border group-hover:text-white 
          border-white text-[#274afd] p-1.5 rounded-full"
            size={33}
          />
          <span className="transition-all duration-500 ease-in-out group-hover:-translate-x-1 group-hover:text-white">
            {label}
          </span>

          {/* Optional hover-layer background if needed */}
          <div className="absolute inset-0 rounded-4xl bg-gradient-to-r from-black to-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        </button>
      </div>
    );
  };

  return (
    <section className="p-6 sm:p-10 md:p-20 bg-[#F9F8FF]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="max-w-2xl space-y-4">
            <p className="text-[#274AFF] text-[22px] font-medium">Portfolio</p>
            <h2 className="text-4xl sm:text-5xl font-medium text-gray-900">
              Our <span className="text-blue-600">Featured</span> Work
            </h2>
            <p className="text-[18px] sm:text-[22px] text-[#222222] leading-relaxed">
              We design and develop stunning, high-performing websites for SaaS
              products to maximize conversions.
            </p>
          </div>

          <Button label="See More" Icon={CiSearch} />
        </div>

        {/* Featured Work Gallery */}
        <div className="flex flex-col md:flex-row gap-4 min-h-[400px] md:h-[500px] overflow-hidden">
          {images.map((item, i) => {
            const isActive = activeIndex === i;
            return (
              <motion.div
                key={i}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all bg-white shadow-xl 
                  w-full md:flex-grow md:basis-0
                  ${isActive ? "max-h-[500px]" : "max-h-[80px]"} 
                  md:max-h-full`}
                animate={{
                  flex: isActive ? 3 : 1,
                  borderRadius: "24px",
                }}
                transition={{
                  flex: { duration: 0.5, ease: "linear" },
                  borderRadius: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                <div className="relative w-full h-full min-h-[400px] md:min-h-full">
                  <Image
                    src={item.src}
                    alt={`Featured ${i}`}
                    fill
                    className="transition-all duration-500 scale-[0.92] rounded-2xl object-cover"
                  />
                </div>

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10 text-white bg-gradient-to-t from-black/80 via-transparent to-transparent"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : -50,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="flex items-end justify-between gap-4 flex-wrap">
                    <div>
                      <motion.h3
                        className="text-[20px] sm:text-[22px] font-light mb-4 text-gray-300"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{
                          x: isActive ? 0 : -50,
                          opacity: isActive ? 1 : 0,
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
                        initial={{ x: -50, opacity: 0 }}
                        animate={{
                          x: isActive ? 0 : -50,
                          opacity: isActive ? 1 : 0,
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
                      animate={{
                        x: isActive ? 0 : 30,
                        opacity: isActive ? 1 : 0,
                      }}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
