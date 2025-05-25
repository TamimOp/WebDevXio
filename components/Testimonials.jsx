"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
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
      "Their WordPress designs were modern, responsive, and SEO-ready. The results were immediate and measurable.",
  },
  {
    id: 3,
    name: "Heftiba",
    title: "CEO, Law firm",
    image: "/assets/heftiba1.jpg",
    heading: "Fast Turnaround",
    review:
      "Our full-screen site went live within days. These developers are incredibly fast and efficient.",
  },
  {
    id: 4,
    name: "Heftiba",
    title: "CEO, Law firm",
    image: "/assets/heftiba2.jpg",
    heading: "Mobile-First Magic",
    review:
      "Everything is mobile-optimized with top performance scores. They truly understand modern web design.",
  },
  {
    id: 5,
    name: "Heftiba",
    title: "CEO, Law firm",
    image: "/assets/heftiba1.jpg",
    heading: "Reliable Team!",
    review:
      "Working with them has been a pleasure. Always on time and always ready to help.",
  },
];
const TagRow = () => (
  <div className="w-full text-white text-sm bg-[#2A40F8] py-2 flex justify-center items-center gap-4 flex-wrap">
    {tagItems.map((item, idx) => (
      <div
        key={idx}
        className="flex items-center gap-2 px-4 border-x border-white/30"
      >
        <span className="text-xl">✴</span>
        {item}
      </div>
    ))}
  </div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  // Scroll to active index
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
    <div className="bg-[#0B1C4A] text-white py-16 px-4 relative overflow-hidden">
      {/* Top Static Tag Row */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <TagRow />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-center mt-20">
        <p className="text-sm text-white/80 mb-2">—Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Testimonials:{" "}
          <span className="text-[#4D6BFF]">Trusted by Our Clients</span>
        </h2>
        <p className="max-w-2xl mx-auto text-white/70 mt-4">
          At UX Recharge, we specialize in creating modern, user-friendly
          websites tailored for SaaS companies. Our designs are
          conversion-focused, fast, and fully optimized for mobile and SEO.
        </p>

        {/* Cards Container with Scroll */}
        <div
          ref={scrollRef}
          className="mt-12 flex justify-start gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#14275F] relative rounded-xl p-6 w-[300px] min-w-[300px] shadow-xl text-left shrink-0"
            >
              {/* Quotation Blur */}
              <div className="absolute top-4 right-4 text-6xl text-[#4D6BFF]/30">
                <span className="blur-sm">“</span>
              </div>

              <div className="flex gap-1 text-yellow-400 mb-3">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>

              <h3 className="text-lg font-semibold mb-2">{item.heading}</h3>
              <p className="text-sm text-white/80 mb-4">{item.review}</p>

              <div className="flex items-center gap-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-white/60">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dash Pagination */}
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

      {/* Bottom Static Tag Row */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <TagRow />
      </div>
    </div>
  );
};

export default Testimonials;
