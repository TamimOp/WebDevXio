"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useDragControls } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const tagItems = [
  "Saas Website",
  "UX/UI Design",
  "WordPress website",
  "UX/UI Design",
];

const testimonials = [
  {
    id: 1,
    name: "Heftiba",
    title: "CEO, Law firm",
    image: "/assets/heftiba1.webp",
    heading: "A wonderful Experience!",
    review:
      "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work flawlessly on smartphones, desktops, or any other device your users choose.",
  },
  {
    id: 2,
    name: "Heftiba",
    title: "CEO, Law firm",
    image: "/assets/heftiba2.webp",
    heading: "WordPress Website Design",
    review:
      "Their WordPress designs were modern, responsive, and SEO-ready, built with best practices in mind. The results were immediate and measurable, boosting our site's visibility.",
  },
  {
    id: 3,
    name: "Heftiba",
    title: "CEO, Law firm",
    image: "/assets/heftiba1.webp",
    heading: "Fast Turnaround",
    review:
      "Our full-screen site went live within days without a hitch. These developers are incredibly fast, efficient, and detail-oriented.",
  },
  {
    id: 4,
    name: "Heftiba",
    title: "CEO, Law firm",
    image: "/assets/heftiba2.webp",
    heading: "Mobile-First Magic",
    review:
      "Everything is mobile-optimized with top performance scores across tools like Lighthouse. They truly understand modern web design and user experience.",
  },
  {
    id: 5,
    name: "Heftiba",
    title: "CEO, Law firm",
    image: "/assets/heftiba1.webp",
    heading: "Reliable Team!",
    review:
      "Working with them has been a pleasure from start to finish. They are always on time, professional, and ready to help at a moment's notice.",
  },
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

  const charDelay = speed === "fast" ? 0.02 : speed === "slow" ? 0.08 : 0.05;
  const animDuration = speed === "fast" ? 0.5 : speed === "slow" ? 1.0 : 0.7;

  const characterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
      scale: 0.5,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: delay + i * charDelay,
        duration: animDuration,
        ease: [0.23, 1, 0.32, 1],
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    }),
  };

  const hoverVariants = {
    rest: {},
    hover: {
      transition: {
        staggerChildren: 0.02,
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
      scale: 1.1,
      y: -3,
      color: "#4D6BFF",
      transition: {
        duration: 0.2,
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

const TagRow = () => (
  <div className="w-full text-white bg-[#2A40F8] overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide px-4 py-2 md:py-0">
    <div className="flex justify-start gap-6 md:justify-between items-center h-full">
      {tagItems.slice(0, 4).map((item, idx) => (
        <div
          key={idx}
          className={`flex items-center gap-2 md:gap-10 ${
            idx > 2 ? "hidden md:flex" : "flex"
          }`}
        >
          <span className="text-[18px] md:text-6xl leading-none">✴</span>
          <span className="text-[14px] sm:text-base md:text-[30px] leading-none">
            {item}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.92,
    rotate: -8,
    filter: "blur(8px)",
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
      mass: 0.7,
      delay: i * 0.18,
      opacity: { duration: 0.5, delay: i * 0.18 },
      filter: { duration: 0.7, delay: i * 0.18 },
    },
  }),
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const cardsInView = useInView(cardsContainerRef, {
    once: true,
    margin: "-100px",
  });

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Different slide counts for mobile vs desktop
  const totalSlides = isMobile ? testimonials.length : testimonials.length - 1;

  useEffect(() => {
    if (isHovering || isDragging) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovering, isDragging, totalSlides]);

  useEffect(() => {
    const container = scrollRef.current;
    if (container && !isDragging) {
      const cardElement = container.querySelector(".testimonial-card");
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const gap = isMobile ? 16 : 24; // Smaller gap on mobile

        let scrollPosition;
        if (isMobile) {
          // On mobile, show one card at a time
          scrollPosition = activeIndex * (cardWidth + gap);
        } else {
          // On desktop, show two cards at a time
          scrollPosition = activeIndex * (cardWidth + gap);
        }

        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex, isDragging, isMobile]);

  const handlePaginationClick = (index) => {
    setActiveIndex(index);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const container = scrollRef.current;
    if (!container) return;

    const startX = e.pageX - container.offsetLeft;
    const scrollLeft = container.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);

      const cardElement = container.querySelector(".testimonial-card");
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const gap = isMobile ? 16 : 24;
        const currentScroll = container.scrollLeft;
        const newIndex = Math.round(currentScroll / (cardWidth + gap));

        if (isMobile) {
          setActiveIndex(
            Math.min(Math.max(newIndex, 0), testimonials.length - 1)
          );
        } else {
          setActiveIndex(
            Math.min(Math.max(newIndex, 0), testimonials.length - 2)
          );
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    const container = scrollRef.current;
    if (!container) return;

    const startX = e.touches[0].pageX - container.offsetLeft;
    const scrollLeft = container.scrollLeft;

    const handleTouchMove = (e) => {
      e.preventDefault();
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 1;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);

      const cardElement = container.querySelector(".testimonial-card");
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const gap = isMobile ? 16 : 24;
        const currentScroll = container.scrollLeft;
        const newIndex = Math.round(currentScroll / (cardWidth + gap));

        if (isMobile) {
          setActiveIndex(
            Math.min(Math.max(newIndex, 0), testimonials.length - 1)
          );
        } else {
          setActiveIndex(
            Math.min(Math.max(newIndex, 0), testimonials.length - 2)
          );
        }
      }
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <div className="bg-[#0B1C4A] text-white relative overflow-hidden">
      {/* Top Tag Row */}
      <div className="mb-6 sm:mb-10">
        <TagRow />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 md:px-10 py-6">
        <motion.div
          ref={headingRef}
          variants={headingVariants}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          className="w-full max-w-[696px] flex flex-col justify-center items-center mx-auto gap-3 text-center"
        >
          <AnimatedText
            text="—Testimonials"
            className="text-sm md:text-[22px] leading-[116%] font-bold text-[#FDFEFF] mb-2"
            delay={0.2}
            isInView={headingInView}
            speed="normal"
          />

          <div className="mb-4">
            <AnimatedText
              text="Testimonials: "
              className="text-[22px] sm:text-[26px] md:text-5xl font-medium"
              delay={0.4}
              isInView={headingInView}
              speed="normal"
            />
            <AnimatedText
              text="Trusted by Our Clients"
              className="text-[22px] sm:text-[26px] md:text-5xl font-medium text-[#4D6BFF]"
              delay={0.8}
              isInView={headingInView}
              speed="normal"
            />
          </div>

          <AnimatedText
            text="At UX Recharge, we specialize in creating modern, user-friendly websites tailored for SaaS companies. Our designs are conversion-focused, fast, and fully optimized for mobile and SEO."
            className="max-w-2xl text-sm sm:text-[18px] md:text-[22px] mx-auto text-[#E9E9E9] mt-4"
            delay={1.2}
            isInView={headingInView}
            speed="fast"
          />
        </motion.div>

        {/* Testimonial Cards Container */}
        <div className="mt-8 sm:mt-10 overflow-hidden">
          <div
            ref={scrollRef}
            className={`flex gap-4 sm:gap-6 overflow-x-hidden scrollbar-hide ${
              isDragging ? "cursor-grabbing" : ""
            }`}
            style={{
              scrollBehavior: isDragging ? "auto" : "smooth",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div ref={cardsContainerRef} className="flex gap-4 sm:gap-6">
              {testimonials.map((item, index) => (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={cardsInView ? "visible" : "hidden"}
                  className={`testimonial-card bg-[#14275F] relative rounded-xl p-4 sm:p-6 h-auto shadow-xl text-left shrink-0 select-none pointer-events-none ${
                    isMobile
                      ? "w-[calc(100vw-2rem)] max-w-[350px] min-w-[280px]"
                      : "w-full max-w-[490px] min-w-[280px] sm:min-w-[300px]"
                  }`}
                >
                  <div className="absolute top-4 right-4 text-6xl text-[#4D6BFF]/30">
                    <Image
                      src="/assets/quote.webp"
                      alt="Quote Icon"
                      width={48}
                      height={48}
                      className="w-[48px] h-[48px] sm:w-[128.73px] sm:h-[131px] blur-sm"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1 p-2">
                    <div className="flex gap-1 sm:gap-2 text-yellow-400 mb-3">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <FaStar
                            key={i}
                            className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]"
                          />
                        ))}
                    </div>

                    <h3 className="text-[18px] sm:text-[25px] font-semibold mb-2">
                      {item.heading}
                    </h3>
                    <p className="text-[13px] sm:text-[15px] font-medium text-[#E9E9E9] mb-4">
                      {item.review}
                    </p>

                    <div className="flex items-center gap-3">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                        loading="lazy"
                      />
                      <div>
                        <p className="font-medium text-[#FCFCFC] text-[16px] sm:text-[20px]">
                          {item.name}
                        </p>
                        <p className="text-[13px] sm:text-[15px] text-[#E9E9E9]">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dashes - Dynamic based on device */}
        <div
          className="flex justify-center gap-2 mt-6"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {Array(totalSlides)
            .fill(0)
            .map((_, idx) => (
              <button
                key={idx}
                onClick={() => handlePaginationClick(idx)}
                className={`w-8 h-2 rounded-full transition-colors cursor-pointer hover:scale-110 ${
                  idx === activeIndex
                    ? "bg-[#4D6BFF]"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              ></button>
            ))}
        </div>
      </div>

      {/* Bottom Tag Row */}
      <div className="mt-6 sm:mt-10">
        <TagRow />
      </div>

      {/* HIDE SCROLLBAR STYLE */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
