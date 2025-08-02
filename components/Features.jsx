"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const images = [
  { src: "/assets/Featured0.webp" },
  { src: "/assets/Featured1.webp" },
  { src: "/assets/Featured2.webp" },
  { src: "/assets/Featured3.webp" },
];

const title = "Digital Marketing Website";
const tags = ["UI/UX Design", "Web Design", "Wireframe"];

const headerVariants = {
  hidden: {
    y: -120,
    opacity: 0,
    scale: 0.7,
    rotateX: 60,
    filter: "blur(16px) hue-rotate(60deg)",
    perspective: 800,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px) hue-rotate(0deg)",
    perspective: 800,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      bounce: 0.45,
    },
  },
};

const galleryVariants = {
  hidden: {
    y: 120,
    opacity: 0,
    scale: 0.7,
    rotateY: -60,
    filter: "blur(16px) hue-rotate(-60deg)",
    perspective: 800,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px) hue-rotate(0deg)",
    perspective: 800,
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.1,
      type: "spring",
      bounce: 0.45,
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const headerRef = useRef(null);
  const galleryRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" });
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="p-6 sm:p-12 bg-[#F9F8FF]" id="work">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row justify-between items-center sm:items-end gap-10"
        >
          <div className="max-w-2xl space-y-4">
            <p className="text-[#274AFF] text-base md:text-[22px] font-medium">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900">
              Our <span className="text-[#274AFF]">Featured</span> Work
            </h2>
            <p className="text-base sm:text-lg md:text-[22px] text-[#222222] leading-relaxed">
              We design and develop stunning, high-performing websites for SaaS
              products to maximize conversions.
            </p>
          </div>
          <Button
            label="See More"
            Icon={CiSearch}
            onClick={() => router.push("/featuresDetails")}
          />
        </motion.div>

        {/* Gallery */}
        <motion.div
          ref={galleryRef}
          variants={galleryVariants}
          initial="hidden"
          animate={galleryInView ? "visible" : "hidden"}
          className={`${
            isMobile ? "flex-col" : "md:flex-row"
          } flex gap-4 min-h-[400px] md:h-[500px]`}
        >
          {images.map((item, i) => {
            const isActive = activeIndex === i || isMobile;

            return (
              <motion.div
                key={i}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all bg-white shadow-xl w-full ${
                  isMobile ? "" : "md:flex-grow md:basis-0"
                }`}
                animate={
                  isMobile
                    ? {}
                    : {
                        flex: isActive ? 3 : 1,
                        borderRadius: "24px",
                      }
                }
                transition={
                  isMobile
                    ? {}
                    : {
                        flex: { duration: 1.2, ease: [0.25, 0.8, 0.25, 1] },
                        borderRadius: { duration: 0.8, ease: "easeInOut" },
                      }
                }
              >
                <div className="relative w-full aspect-[4/3] md:h-full">
                  <Image
                    src={item.src}
                    alt={`Featured ${i}`}
                    fill
                    sizes="100vw"
                    className="transition-all duration-500 scale-[0.92] rounded-2xl object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end z-10 text-white bg-gradient-to-t from-black/80 via-transparent to-transparent"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : -50,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div className="flex items-start sm:items-end justify-between gap-4 flex-wrap w-full">
                    <div className="flex-1 min-w-0">
                      <motion.h3
                        className="text-base sm:text-[20px] font-light mb-2 sm:mb-4 text-gray-300"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{
                          x: isActive ? 0 : -50,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      >
                        {title}
                      </motion.h3>

                      <motion.div
                        className="flex gap-2 flex-wrap"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{
                          x: isActive ? 0 : -50,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      >
                        {tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className={`text-xs sm:text-sm px-3 py-1 rounded-full font-medium ${
                              isActive
                                ? "border-blue-600 border bg-blue-600/20 text-gray-50"
                                : "border-white border text-gray-50"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>
                    </div>

                    <motion.div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-2 sm:mb-6
    ${isActive ? "bg-[#2e44ff]/60" : "bg-black/40"}
    backdrop-blur-md backdrop-saturate-150 bg-opacity-60`}
                      initial={{ x: 30, opacity: 0 }}
                      animate={{
                        x: isActive ? 0 : 30,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: 0.15,
                      }}
                    >
                      <Image
                        src="/assets/NEW BUTTON/arrow.webp"
                        width={14}
                        height={14}
                        className="sm:w-[18px] sm:h-[18px]"
                        alt="arrow"
                        loading="lazy"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
