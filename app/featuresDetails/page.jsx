"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { PiChatCenteredTextBold } from "react-icons/pi";
import Link from "next/link";
import { featuresData } from "@/data";

const industries = [
  "All industries",
  "SaaS",
  "B2B",
  "Finance",
  "Education",
  "Other industries",
];

const services = ["UI/UX Design", "Web Design", "Development"];

export default function FeaturesDetailsPage() {
  const [activeIndustry, setActiveIndustry] = useState("All industries");
  const [openIndustry, setOpenIndustry] = useState(true);
  const [openService, setOpenService] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredCards =
    activeIndustry === "All industries"
      ? featuresData
      : featuresData.filter((card) =>
          card.tags.toLowerCase().includes(activeIndustry.toLowerCase())
        );

  return (
    <section className="pt-35 px-4 sm:px-6 lg:px-12 pb-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* LEFT SIDEBAR */}
        <aside className="w-full lg:w-[280px] rounded-xl border-2 border-black p-4 space-y-6 lg:sticky top-10 self-start">
          {/* INDUSTRIES */}
          <div className="border-b border-[#6B6B6B] pb-4">
            <div
              className="flex justify-between items-center cursor-pointer font-semibold text-black text-lg"
              onClick={() => setOpenIndustry(!openIndustry)}
            >
              <span>INDUSTRIES</span>
              <FaChevronDown
                className={`transition-transform duration-200 ${
                  openIndustry ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndustry && (
              <ul className="mt-4 space-y-2 text-sm font-medium text-[#595959]">
                {industries.map((industry) => (
                  <li
                    key={industry}
                    className={`cursor-pointer hover:text-[#274AFF] ${
                      activeIndustry === industry
                        ? "text-[#274AFF] border-l-4 border-[#274AFF] pl-2"
                        : "pl-2"
                    }`}
                    onClick={() => setActiveIndustry(industry)}
                  >
                    {industry}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* SERVICES */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer font-semibold text-black text-lg"
              onClick={() => setOpenService(!openService)}
            >
              <span>SERVICES</span>
              <FaChevronDown
                className={`transition-transform duration-200 ${
                  openService ? "rotate-180" : ""
                }`}
              />
            </div>
            {openService && (
              <ul className="mt-4 space-y-2 text-sm font-medium text-gray-800">
                {services.map((service) => (
                  <li
                    key={service}
                    className="pl-2 hover:text-[#274AFF] cursor-pointer"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Button
            label="Have a Project?"
            Icon={PiChatCenteredTextBold}
            onClick={() => console.log("clicked")}
          />
        </aside>

        {/* RIGHT CONTENT */}
        <div className="flex-1">
          <div className="max-w-[880px] space-y-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black leading-snug">
              We&#39;ve helped over{" "}
              <span className="text-[#274AFF]">350 firms</span> reach their full
              potential, and we&#39;re happy to do the same for you! Find out
              how our skills can contribute to your success.
            </h2>

            <div className="flex flex-wrap justify-center sm:justify-start gap-8 sm:gap-10">
              {filteredCards.map((card, index) => {
                const isHovered = hoveredIndex !== null;
                const isCurrent = hoveredIndex === index;

                return (
                  <div
                    key={index}
                    className={`flex-1 min-w-[280px] max-w-[408px] sm:basis-[calc(50%-20px)] lg:basis-[calc(33.333%-20px)] transition-opacity duration-300 ${
                      isHovered && !isCurrent ? "opacity-40" : "opacity-100"
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Link
                      href={`/featuresDetails/${card.slug}`}
                      className="block group"
                    >
                      <div
                        className={`w-full h-[304px] rounded-2xl border-[3px] border-white shadow-[0px_0px_12.4px_2px_#274AFFB5] overflow-hidden flex items-center justify-center ${card.gradient} transition-transform duration-300 group-hover:scale-[1.01]`}
                      >
                        <div className="relative w-[90%] h-[246px] rounded-[7px] overflow-hidden">
                          <Image
                            src={card.src}
                            alt={card.title}
                            fill
                            className="object-cover object-top rounded-[7px]"
                          />
                        </div>
                      </div>
                      <div className="mt-3 px-1">
                        <p className="text-[13px] text-[#515151] font-medium">
                          {card.tags}
                        </p>
                        <h3 className="text-[22px] sm:text-[24px] md:text-[28px] font-semibold text-[#1F1F1F]">
                          {card.title}
                        </h3>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
