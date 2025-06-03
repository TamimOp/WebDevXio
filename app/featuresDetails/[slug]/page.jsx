"use client";

import React, { useEffect, useState } from "react";
import { featuresData } from "@/data";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import { IoArrowDownCircleOutline } from "react-icons/io5";

export default function FeaturedWork() {
  const params = useParams();
  const slug = params.slug;
  const card = featuresData.find((item) => item.slug === slug);

  if (!card) return notFound();

  const slides = [
    "/assets/HMCslide1.png",
    "/assets/HMCslide2.png",
    "/assets/HMCslide3.png",
    "/assets/HMCslide4.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full pt-[120px] bg-white text-black overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full max-w-7xl mx-auto rounded-3xl overflow-hidden h-[80vh] md:h-[90vh] mb-16">
        <Image
          src={card.heroImage}
          alt={card.title}
          fill
          className="object-cover object-center z-0"
        />
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 sm:p-6 md:p-14 text-white">
          <div className="text-lg sm:text-xl font-normal">
            All Project / {card.title}
          </div>
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-[64px] font-bold leading-tight max-w-2xl">
              {card.title}
            </h1>
            <p className="text-base sm:text-lg mt-4 text-white/90">
              {card.description ||
                "This is a sample description for the selected project. You can replace it with actual content later."}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm border-t border-white pt-4 mt-6 gap-2">
            <div className="flex items-center gap-2 text-xl text-[#E3E3E3]">
              <CiClock2 />
              2023
            </div>
            <span className="flex items-center gap-2 text-xl text-[#E3E3E3] uppercase tracking-widest animate-bounce">
              <IoArrowDownCircleOutline />
              Scroll
            </span>
          </div>
        </div>
      </div>

      {/* Description and Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-14 pt-16 flex flex-col lg:flex-row gap-12">
        {/* LEFT CONTENT */}
        <div className="lg:w-[80%] flex flex-col">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold pb-4 border-b border-[#A9A9A9] mb-8 leading-snug">
            We combined textures of coffee beans, wood, and greenery to form an
            inviting ambiance.
          </h2>
          <div className="flex flex-col md:flex-row gap-6 text-[#787878] leading-relaxed text-lg sm:text-xl font-medium">
            <p className="md:w-1/2">
              Half Million Coffee needed an immersive online experience that
              conveyed their passion for crafting premium coffee while inviting
              users to explore and engage with the brand. The site had to
              reflect both the brand’s artisanal values and its
              community-focused mission—all while driving product discovery and
              sales.
            </p>
            <p className="md:w-1/2">
              The new Half Million Coffee website delivers a warm, premium
              experience that mirrors the love poured into each cup. From casual
              visitors to loyal fans, the site builds an emotional connection
              while driving catalog exploration and product interest.
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:w-1/3 flex justify-end">
          <div className="flex flex-col space-y-4 text-sm text-right">
            <div>
              <p className="text-lg text-[#A1A1A1] font-medium uppercase">
                Industry
              </p>
              <p className="text-lg font-semibold">
                {card.tags.split(" - ")[1]}
              </p>
            </div>
            <div>
              <p className="text-lg text-[#A1A1A1] font-medium uppercase">
                Services
              </p>
              <ul className="space-y-1">
                {card.tags
                  .split(" - ")[0]
                  .split(",")
                  .map((service, i) => (
                    <li key={i} className="text-lg font-semibold">
                      {service.trim()}
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <p className="text-lg text-[#A1A1A1] font-medium uppercase">
                Timeline
              </p>
              <p className="text-lg font-semibold">1.5 months</p>
            </div>
            <div>
              <p className="text-lg text-[#A1A1A1] font-medium uppercase">
                Website
              </p>
              <a
                href="https://halfmillion.store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-[#274AFF] underline"
              >
                halfmillion.store
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slideshow Section */}
      <div className="mt-20 w-full">
        <div className="relative w-full aspect-video overflow-hidden rounded-none">
          <Image
            src={slides[currentSlide]}
            alt="Coffee slide"
            fill
            className="object-cover transition-all duration-700 ease-in-out"
          />
        </div>
      </div>

      {/* Quote Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-14 my-20 flex flex-col md:flex-row justify-between items-start gap-8">
        <button className="border border-black px-6 py-2 rounded-full font-medium tracking-widest text-2xl sm:text-3xl">
          CHALLENGE
        </button>
        <p className="text-2xl sm:text-3xl md:text-5xl leading-relaxed font-medium max-w-3xl">
          The site had to reflect both the brand’s artisanal values and its
          community-focused mission—all while driving product discovery and
          sales.
        </p>
      </div>

      {/* Bottom Full-Width Image */}
      <div className="w-full my-20">
        <div className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] overflow-hidden mb-12">
          <Image
            src="/assets/HMC2.png"
            alt="Workflow image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Final Section: Two Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-14 my-24 flex flex-col lg:flex-row gap-16">
        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col gap-12">
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Inspired by real lives, focused <br className="hidden md:block" />
              on real experiences
            </h3>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <p className="text-[#5C5C5C] text-base sm:text-lg md:text-xl leading-relaxed md:w-2/3">
              Our creative direction was shaped around the real-world coffee
              rituals of community-driven individuals. Drawing inspiration from
              Half Million Coffee’s origin story—rooted in love, warmth, and
              community—we worked to uncover emotional touchpoints that would
              drive connection and loyalty.
            </p>
            <div className="md:w-1/3">
              <h4 className="text-sm sm:text-base font-semibold mb-3">
                Key Findings:
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-800 text-sm sm:text-base">
                <li>
                  Customers associate coffee moments with emotional connection
                  and routine.
                </li>
                <li>A cozy and elegant brand aesthetic is highly appealing.</li>
                <li>
                  Storytelling-first websites generate longer engagement and
                  stronger recall.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT STICKY DROPDOWN */}
        <div className="w-full lg:w-[250px] sticky top-24 self-start">
          <div className="border border-gray-300 rounded-2xl px-4 py-3 mb-4">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
              <span>Half million</span>
              <span>1/7</span>
            </div>
            <div className="flex items-center justify-between font-medium">
              <span>Web exploration</span>
              <span className="text-xl">⌄</span>
            </div>
          </div>

          <div className="relative border border-gray-300 rounded-2xl px-4 py-3 text-gray-700 text-sm">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>All industries</span>
              <span className="text-xl transform transition-transform duration-300">
                {isDropdownOpen ? "⌃" : "⌄"}
              </span>
            </div>

            {isDropdownOpen && (
              <div className="absolute left-0 top-full w-full bg-white border border-t-0 rounded-b-2xl shadow-md mt-1 py-3 space-y-2 z-10">
                <div className="px-4 hover:text-blue-600 cursor-pointer">
                  SaaS
                </div>
                <div className="px-4 hover:text-blue-600 cursor-pointer">
                  B2B
                </div>
                <div className="px-4 hover:text-blue-600 cursor-pointer">
                  Finance
                </div>
                <div className="px-4 hover:text-blue-600 cursor-pointer">
                  Education
                </div>
                <div className="px-4 hover:text-blue-600 cursor-pointer">
                  Other industries
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
