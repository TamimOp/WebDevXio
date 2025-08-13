"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const infoCards = [
  {
    title: "Website De",
    description:
      "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users' choice.",
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
      "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users' choice.",
    icon: "/assets/FramerMotion.webp",
    bg: "/assets/FramerBG.png",
    isMain: false,
  },
  {
    title: "Wordpress website Design",
    description:
      "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users' choice.",
    icon: "/assets/Wordpress.webp",
    bg: "/assets/WordpressBG.png",
    isMain: false,
  },
];

// Component for typewriter animation
const AnimatedText = ({
  text,
  className,
  delay = 0,
  isInView,
  speed = "normal",
}) => {
  const [displayedText, setDisplayedText] = React.useState("");
  const [isComplete, setIsComplete] = React.useState(false);

  // Faster speeds for typewriter effect
  const typeSpeed = speed === "fast" ? 30 : 60; // milliseconds per character - made faster

  React.useEffect(() => {
    if (!isInView) {
      setDisplayedText("");
      setIsComplete(false);
      return;
    }

    const startTimeout = setTimeout(() => {
      let currentIndex = 0;
      setDisplayedText("");
      setIsComplete(false);

      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsComplete(true);
        }
      }, typeSpeed);

      return () => clearInterval(typeInterval);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [isInView, text, typeSpeed, delay]);

  return (
    <div className={className}>
      <span className="inline-block min-h-[1em]">
        {displayedText}
        {!isComplete && <span className="animate-pulse">_</span>}
      </span>
    </div>
  );
};

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
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const topRowInView = useInView(topRowRef, { once: true, margin: "-100px" });
  const bottomRowInView = useInView(bottomRowRef, {
    once: true,
    margin: "-100px",
  });

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  // Row animations - top row from left, bottom row from right
  const topRowVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const bottomRowVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  // Individual card variants for staggered effect within rows
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const hoverVariants = {
    rest: {
      scale: 1,
      y: 0,
      rotate: 0,
      boxShadow: "0 8px 25px rgba(39, 74, 255, 0.08)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -12,
      rotate: 1,
      boxShadow: "0 25px 50px rgba(39, 74, 255, 0.2)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Floating animation for main card
  const floatingVariants = {
    visible: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="w-full py-16 bg-[#f7f7fb] flex flex-col items-center px-6 md:px-20 overflow-hidden"
      id="services"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Header with unique entrance */}
      <div className="flex flex-col items-center mb-6 gap-1">
        <AnimatedText
          text="What We Do"
          className="text-[26px] md:text-5xl font-medium mb-4 text-center"
          delay={0.3}
          isInView={isInView}
          speed="normal"
        />
        <AnimatedText
          text="We design and develop stunning, high-performing websites for SaaS products to maximize conversions."
          className="text-sm md:text-[22px] text-gray-700 max-w-2xl text-center mb-12"
          delay={1.2} // Reduced delay since typing is faster now
          isInView={isInView}
          speed="fast"
        />
      </div>

      {/* Responsive layout for mobile & tablet */}
      <motion.div
        className="flex flex-wrap justify-center gap-10 lg:hidden"
        variants={topRowVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {infoCards.map((card, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover="hover"
            className="motion-card"
          >
            <motion.div
              variants={hoverVariants}
              animate={card.isMain && isInView ? floatingVariants : undefined}
            >
              <Card {...card} />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Custom staggered layout only on large screens */}
      <div className="hidden lg:flex flex-col gap-10">
        {/* Row 1 - Cards slide in from left */}
        <motion.div
          ref={topRowRef}
          className="flex flex-row gap-8 justify-between items-start"
          variants={topRowVariants}
          initial="hidden"
          animate={topRowInView ? "visible" : "hidden"}
        >
          <motion.div variants={cardVariants} whileHover="hover">
            <motion.div
              variants={hoverVariants}
              animate={
                infoCards[0].isMain && isInView ? floatingVariants : undefined
              }
            >
              <Card {...infoCards[0]} />
            </motion.div>
          </motion.div>
          <motion.div variants={cardVariants} whileHover="hover">
            <motion.div
              variants={hoverVariants}
              animate={
                infoCards[1].isMain && isInView ? floatingVariants : undefined
              }
            >
              <Card {...infoCards[1]} />
            </motion.div>
          </motion.div>
          <div className="hidden xl:block w-[392.25px] h-[258.93px]"></div>
        </motion.div>

        {/* Row 2 - Cards slide in from right */}
        <motion.div
          ref={bottomRowRef}
          className="flex flex-row gap-8 justify-between items-end"
          variants={bottomRowVariants}
          initial="hidden"
          animate={bottomRowInView ? "visible" : "hidden"}
        >
          <div className="hidden xl:block w-[392.25px] h-[258.93px]"></div>
          <motion.div variants={cardVariants} whileHover="hover">
            <motion.div
              variants={hoverVariants}
              animate={
                infoCards[2].isMain && isInView ? floatingVariants : undefined
              }
            >
              <Card {...infoCards[2]} />
            </motion.div>
          </motion.div>
          <motion.div variants={cardVariants} whileHover="hover">
            <motion.div
              variants={hoverVariants}
              animate={
                infoCards[3].isMain && isInView ? floatingVariants : undefined
              }
            >
              <Card {...infoCards[3]} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Info;
