"use client";

import React, { useEffect, useState } from "react";
import { featuresData } from "@/data";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { CiClock2 } from "react-icons/ci";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full pt-[140px] bg-white text-black">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden h-[90vh] mb-16">
        <Image
          src={card.heroImage}
          alt={card.title}
          fill
          className="object-cover object-center z-0"
        />

        <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-14 text-white">
          <div className="text-sm text-white/70">
            All Project / {card.title}
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
              {card.title}
            </h1>
            <p className="text-base md:text-lg mt-4 text-white/90">
              {card.description ||
                "This is a sample description for the selected project. You can replace it with actual content later."}
            </p>
          </div>

          <div className="flex items-center justify-between text-sm border-t border-white pt-4 mt-6">
            <div className="flex items-center gap-2 text-white/80">
              <CiClock2 />
              2023
            </div>
            <span className="uppercase tracking-widest text-xs animate-bounce">
              Scroll
            </span>
          </div>
        </div>
      </div>

      {/* Description and Sidebar */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 pt-16 flex flex-col lg:flex-row gap-12">
        {/* LEFT CONTENT */}
        <div className="lg:w-2/3 flex flex-col">
          <h2 className="text-2xl md:text-3xl font-medium pb-4 border-b border-gray-300 mb-8">
            We combined textures of coffee beans, wood, and greenery to form an
            inviting ambiance.
          </h2>
          <div className="flex flex-col md:flex-row gap-6 text-gray-700 leading-relaxed text-base">
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
              <p className="text-xs text-gray-500 uppercase">Industry</p>
              <p className="font-medium text-gray-800">
                {card.tags.split(" - ")[1]}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase">Services</p>
              <ul className="space-y-1">
                {card.tags
                  .split(" - ")[0]
                  .split(",")
                  .map((service, i) => (
                    <li key={i} className="font-medium text-gray-800">
                      {service.trim()}
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase">Timeline</p>
              <p className="font-medium text-gray-800">1.5 months</p>
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase">Website</p>
              <a
                href="https://halfmillion.store"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 underline"
              >
                halfmillion.store
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slideshow Section */}
      <div className="mt-20 w-full">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-none">
          <Image
            src={slides[currentSlide]}
            alt="Coffee slide"
            fill
            className="object-cover transition-all duration-700 ease-in-out"
          />
        </div>
      </div>

      {/* Quote Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 my-20 flex flex-col md:flex-row gap-10 items-start">
        <button className="border border-black px-6 py-2 rounded-full font-medium">
          CHALLENGE
        </button>
        <p className="text-xl md:text-2xl max-w-3xl">
          The site had to reflect both the brand’s artisanal values and its
          community-focused mission—all while driving product discovery and
          sales.
        </p>
      </div>

      {/* Bottom Image and Insights */}
      <div className="w-full my-20">
        <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden mb-12">
          <Image
            src="/assets/HMC2.png"
            alt="Workflow image"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-14 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Inspired by real lives, focused on real experiences
            </h3>
            <p className="text-gray-700">
              Our creative direction was shaped around the real-world coffee
              rituals of community-driven individuals. Drawing inspiration from
              Half Million Coffee’s origin story—rooted in love, warmth, and
              community—we worked to uncover emotional touchpoints that would
              drive connection and loyalty.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Key Findings:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Customers associate coffee moments with emotional connection and
                routine.
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
    </div>
  );
}
