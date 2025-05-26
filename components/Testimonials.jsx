"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

// Tag list
const tagItems = [
  "Saas Website",
  "UX/UI Design",
  "WordPress website",
  "UX/UI Design",
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Heftiba",
    title: "CEO, Law firm",
    image: "/assets/heftiba1.jpg",
    heading: "A wonderful Experience!",
    review:
      "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work flawlessly on smartphones, desktops, or any other device your users choose.",
  },
  {
    id: 2,
    name: "Heftiba",
    title: "CEO, Law firm",
    image: "/assets/heftiba2.jpg",
    heading: "WordPress Website Design",
    review:
      "Their WordPress designs were modern, responsive, and SEO-ready, built with best practices in mind. The results were immediate and measurable, boosting our site's visibility.",
  },
  {
    id: 3,
    name: "Heftiba",
    title: "CEO, Law firm",
    image: "/assets/heftiba1.jpg",
    heading: "Fast Turnaround",
    review:
      "Our full-screen site went live within days without a hitch. These developers are incredibly fast, efficient, and detail-oriented.",
  },
  {
    id: 4,
    name: "Heftiba",
    title: "CEO, Law firm",
    image: "/assets/heftiba2.jpg",
    heading: "Mobile-First Magic",
    review:
      "Everything is mobile-optimized with top performance scores across tools like Lighthouse. They truly understand modern web design and user experience.",
  },
  {
    id: 5,
    name: "Heftiba",
    title: "CEO, Law firm",
    image: "/assets/heftiba1.jpg",
    heading: "Reliable Team!",
    review:
      "Working with them has been a pleasure from start to finish. They are always on time, professional, and ready to help at a moment’s notice.",
  },
];

const TagRow = () => (
  <div className="w-full text-white text-sm bg-[#2A40F8] py-2 flex justify-center items-center flex-wrap gap-4 md:gap-50">
    {tagItems.map((item, idx) => {
      const isHiddenOnMobile = idx > 1;
      return (
        <div
          key={idx}
          className={`flex items-center gap-2 px-4 border-x border-white/30 ${
            isHiddenOnMobile ? "hidden sm:flex" : "flex"
          }`}
        >
          <span className="text-xl">✴</span>
          {item}
        </div>
      );
    })}
  </div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.firstChild?.offsetWidth || 300;
      container.scrollTo({
        left: cardWidth * activeIndex,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <div className="bg-[#0B1C4A] text-white relative overflow-hidden">
      {/* Top Tag Row */}
      <div className="mb-10">
        <TagRow />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 md:px-10 py-6">
        <div className="w-full max-w-[696px] text-center flex flex-col justify-center items-center mx-auto gap-3">
          <p className="text-[22px] leading-[116%] font-medium text-[#FDFEFF] mb-2">
            —Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-medium">
            Testimonials:{" "}
            <span className="text-[#4D6BFF]">Trusted by Our Clients</span>
          </h2>
          <p className="max-w-2xl text-[18px] md:text-[22px] mx-auto text-[#E9E9E9] mt-4">
            At UX Recharge, we specialize in creating modern, user-friendly
            websites tailored for SaaS companies. Our designs are
            conversion-focused, fast, and fully optimized for mobile and SEO.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div
          ref={scrollRef}
          className="mt-10 flex justify-start gap-6 overflow-x-auto px-1 scroll-smooth scrollbar-hide"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#14275F] relative rounded-xl p-6 w-full max-w-[490px] min-w-[300px] h-auto shadow-xl text-left shrink-0"
            >
              <div className="absolute top-4 right-4 text-6xl text-[#4D6BFF]/30">
                <span className="blur-sm">“</span>
              </div>
              <div className="flex flex-col items-start gap-1 p-2">
                <div className="flex gap-2 text-yellow-400 mb-3">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar
                        key={i}
                        className="w-[22px] h-[22px] sm:w-[33px] sm:h-[33px]"
                      />
                    ))}
                </div>

                <h3 className="text-[20px] sm:text-[25px] font-medium mb-2">
                  {item.heading}
                </h3>
                <p className="text-[14px] sm:text-[15px] font-medium text-[#E9E9E9] mb-4">
                  {item.review}
                </p>

                <div className="flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium text-[#FCFCFC] text-[18px] sm:text-[22px]">
                      {item.name}
                    </p>
                    <p className="text-[14px] sm:text-[15px] text-[#E9E9E9]">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dashes */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`text-2xl transition-colors ${
                idx === activeIndex ? "text-[#4D6BFF]" : "text-white/30"
              }`}
            >
              &ndash;
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Tag Row */}
      <div className="mt-10">
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
