"use client";

import React, { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function FeaturedWork() {
  const params = useParams();
  const slug = params.slug;
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import("@/data").then((mod) => {
      const found = mod.featuresData.find((item) => item.slug === slug);
      setCard(found);
      setLoading(false);
    });
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!card) return notFound();

  const slides = card.slides || [];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showAllIndustries, setShowAllIndustries] = useState(false);
  const [activeSection, setActiveSection] = useState("All industries");

  // Demo sections data
  const sections = [
    {
      id: "saas",
      name: "SaaS",
      content:
        "This is the SaaS section content. Here we showcase software-as-a-service solutions and their implementations in modern web development.",
    },
    {
      id: "b2b",
      name: "B2B",
      content:
        "This is the B2B section content. Business-to-business solutions require different approaches and strategies for effective user engagement.",
    },
    {
      id: "finance",
      name: "Finance",
      content:
        "This is the Finance section content. Financial applications demand high security, reliability, and user trust through exceptional design.",
    },
    {
      id: "education",
      name: "Education",
      content:
        "This is the Education section content. Educational platforms focus on user engagement, accessibility, and knowledge retention.",
    },
    {
      id: "other",
      name: "Other industries",
      content:
        "This is the Other industries section content. We work across various sectors, adapting our approach to meet specific industry needs.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleWebExplorationClick = () => {
    setShowAllIndustries(true);
  };

  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
    setIsDropdownOpen(false);

    // Scroll to the section
    const element = document.getElementById(
      sectionName.toLowerCase().replace(/\s+/g, "-")
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full pt-[100px] bg-white text-black">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[90vh] mb-16 overflow-hidden">
        <Image
          src={card.heroImage}
          alt={card.title}
          fill
          className="object-cover object-center z-0"
          loading="lazy"
        />
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 sm:p-6 md:p-14 text-white">
          <div className="text-lg sm:text-xl font-normal">
            <Link
              href="/featuresDetails"
              className="hover:underline hover:text-blue-300"
            >
              All Project
            </Link>{" "}
            / {card.title}
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
              reflect both the brand's artisanal values and its
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
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <div className="w-full max-w-sm flex flex-col space-y-6 text-sm text-left lg:text-right">
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
        <div className="relative w-full overflow-hidden rounded-none">
          <Image
            src={slides[currentSlide]}
            alt="Coffee slide"
            width={1920}
            height={1080}
            className="w-full h-auto transition-all duration-700 ease-in-out"
            loading="lazy"
          />
        </div>
      </div>

      {/* Quote Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-14 my-20 flex flex-col md:flex-row justify-between items-start gap-8">
        <button className="border border-black px-6 py-2 rounded-full font-medium tracking-widest text-2xl sm:text-3xl">
          CHALLENGE
        </button>
        <p className="text-2xl sm:text-3xl md:text-5xl leading-relaxed font-medium max-w-3xl">
          The site had to reflect both the brand's artisanal values and its
          community-focused mission—all while driving product discovery and
          sales.
        </p>
      </div>

      {/* Bottom Full-Width Image */}
      <div className="w-full my-20">
        <div className="relative w-full overflow-hidden mb-12">
          <Image
            src={card.workFlowImage}
            alt="Workflow image"
            width={1920}
            height={1080}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>

      {/* Final Section: Two Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-14 my-24 flex flex-col lg:flex-row gap-16">
        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col gap-12">
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
              Inspired by real lives, focused <br className="hidden md:block" />
              on real experiences
            </h3>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <p className="text-[#787878] text-base sm:text-xl md:text-[22px] leading-relaxed md:w-[50%]">
              Our creative direction was shaped around the real-world coffee
              rituals of community-driven individuals. Drawing inspiration from
              Half Million Coffee's origin story—rooted in love, warmth, and
              community—we worked to uncover emotional touchpoints that would
              drive connection and loyalty.
            </p>
            <div className="md:w-[50%]">
              <h4 className="text-base text-[#505050] sm:text-[22px] font-semibold mb-3">
                Key Findings:
              </h4>
              <ul className="list-disc pl-5 text-[#787878] text-base sm:text-[22px]">
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

          {/* Demo Sections for Scrolling */}
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.name.toLowerCase().replace(/\s+/g, "-")}
              className="py-16 border-t border-gray-200"
            >
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 text-black">
                {section.name} Solutions
              </h4>
              <p className="text-[#787878] text-base sm:text-xl md:text-[22px] leading-relaxed">
                {section.content}
              </p>
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <p className="text-[#505050] text-lg">
                  This section demonstrates how our expertise in{" "}
                  {section.name.toLowerCase()} helps clients achieve their
                  business objectives through thoughtful design and strategic
                  implementation.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT STICKY DROPDOWN */}
        <div className="w-full lg:w-[250px] sticky top-30 self-start h-fit z-50">
          <div className="border border-gray-300 rounded-2xl px-4 py-3 mb-4 bg-white shadow-sm">
            <div className="flex items-center justify-between text-[15px] text-gray-600 mb-1">
              <span>Half million</span>
              <span>1/7</span>
            </div>
            <div
              className="flex items-center text-base md:text-xl justify-between font-medium cursor-pointer"
              onClick={handleWebExplorationClick}
            >
              <span>Web exploration</span>
              <span className="text-xl">
                <FaAngleDown />
              </span>
            </div>
          </div>

          {showAllIndustries && (
            <div className="relative border border-gray-300 rounded-2xl px-4 py-3 text-[#595959] text-base md:text-xl bg-white shadow-sm">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{activeSection}</span>
                <span className="text-xl transform transition-transform duration-300">
                  {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </div>

              {isDropdownOpen && (
                <div className="absolute left-0 top-full w-full bg-white border border-t-0 rounded-b-2xl shadow-lg mt-1 py-3 space-y-2 z-50">
                  <div
                    className="px-4 hover:text-blue-600 cursor-pointer py-1 transition-colors duration-200"
                    onClick={() => handleSectionClick("SaaS")}
                  >
                    SaaS
                  </div>
                  <div
                    className="px-4 hover:text-blue-600 cursor-pointer py-1 transition-colors duration-200"
                    onClick={() => handleSectionClick("B2B")}
                  >
                    B2B
                  </div>
                  <div
                    className="px-4 hover:text-blue-600 cursor-pointer py-1 transition-colors duration-200"
                    onClick={() => handleSectionClick("Finance")}
                  >
                    Finance
                  </div>
                  <div
                    className="px-4 hover:text-blue-600 cursor-pointer py-1 transition-colors duration-200"
                    onClick={() => handleSectionClick("Education")}
                  >
                    Education
                  </div>
                  <div
                    className="px-4 hover:text-blue-600 cursor-pointer py-1 transition-colors duration-200"
                    onClick={() => handleSectionClick("Other industries")}
                  >
                    Other industries
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
