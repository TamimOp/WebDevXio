"use client";
import Image from "next/image";
import { FiArrowUpRight, FiArrowDownRight, FiPhoneCall } from "react-icons/fi";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { SlPencil } from "react-icons/sl";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const toggleAnswer = (index) => {
    if (!isMobile) return;
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const faqItems = [
    {
      id: "01",
      question: "What services does UX Recharge offer?",
      answer:
        "We specialize in designing and developing high-converting websites for SaaS companies.",
    },
    {
      id: "02",
      question: "Do you only work with SaaS companies?",
      answer:
        "While our main focus is on SaaS businesses, we also work with startups and digital product companies.",
    },
    {
      id: "03",
      question: "How long does it take to build a SaaS website?",
      answer:
        "Depending on the scope, our projects typically range from 3 to 6 weeks from start to launch.",
    },
    {
      id: "04",
      question: "What tools do you use for development?",
      answer:
        "We use modern tools including Next.js, Tailwind CSS, Framer Motion, and Figma for design collaboration.",
    },
  ];

  return (
    <section className="w-full min-h-screen relative py-24 px-4 sm:px-6 md:px-20 overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute -top-10 -left-10 md:-top-30 md:-left-55 w-52 h-52 md:w-[478px] md:h-93 z-0 opacity-80">
        <Image
          src="/assets/3Dconcrete.png"
          alt="3D Concrete"
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto">
        <p className="text-blue-600 text-base sm:text-[18px] md:text-[22px] font-medium mb-4">
          —FAQ
        </p>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <div className="mb-10">
              <h2 className="text-[26px] sm:text-4xl md:text-5xl font-medium mb-6 leading-snug">
                Got <span className="text-[#274AFF]">question?</span> We’ve got{" "}
                <span className="text-[#274AFF]">answer</span>.
              </h2>
            </div>

            <div className="w-full space-y-4">
              {faqItems.map((item, index) => {
                const isActiveMobile = activeIndex === index;

                return (
                  <div
                    key={item.id}
                    className="group relative rounded-2xl overflow-hidden transition-all duration-500"
                  >
                    {/* Gradient Border */}
                    <div
                      className={`absolute inset-0 rounded-2xl p-[2px] ${
                        isMobile
                          ? isActiveMobile
                            ? "opacity-100"
                            : "opacity-0"
                          : "group-hover:opacity-100 peer-focus-within:opacity-100 opacity-0"
                      } transition-all duration-500 bg-gradient-to-r from-[#274AFF] to-[#7389FF]`}
                    >
                      <div className="w-full h-full rounded-[14px] bg-white bg-opacity-90"></div>
                    </div>

                    {/* FAQ Item */}
                    <div
                      className="relative z-10 flex justify-between items-center gap-4 sm:gap-6 px-6 py-5 md:py-6 rounded-2xl transition-all duration-300 bg-white hover:shadow-md peer"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255, 255, 255, 0.054) 0%, rgba(0, 61, 255, 0.108) 100%)",
                      }}
                      tabIndex={0}
                      onClick={() => toggleAnswer(index)}
                    >
                      <div className="flex items-start gap-4 w-full">
                        <span className="gradient-text mr-3 text-base sm:text-2xl md:text-4xl font-medium pt-1">
                          {item.id}
                        </span>
                        <div className="w-full">
                          <p className="text-base md:text-[22px] font-medium">
                            {item.question}
                          </p>
                          <div
                            className={`overflow-hidden transition-all duration-800 ease-in-out ${
                              isMobile
                                ? isActiveMobile
                                  ? "max-h-30 mt-2"
                                  : "max-h-0"
                                : "group-hover:max-h-15 peer-focus:max-h-15 mt-2 max-h-0"
                            }`}
                          >
                            <p className="text-[#828282] text-[12px] md:text-[15px] font-medium max-w-xl">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`rounded-full p-3 text-[10px] sm:text-xl text-white transition-all duration-800
                        ${
                          isMobile
                            ? isActiveMobile
                              ? "bg-gradient-to-br from-[#274afd] to-[#06197d]"
                              : "bg-gradient-to-br from-black to-[#828282]"
                            : "bg-gradient-to-br from-black to-[#828282] group-hover:from-[#274afd] group-hover:to-[#06197d] peer-focus:from-[#274afd] peer-focus:to-[#06197d]"
                        }
                      `}
                      >
                        {isMobile ? (
                          isActiveMobile ? (
                            <FiArrowUpRight />
                          ) : (
                            <FiArrowDownRight />
                          )
                        ) : (
                          <>
                            <span className="block group-hover:hidden peer-focus:hidden">
                              <FiArrowDownRight />
                            </span>
                            <span className="hidden group-hover:block peer-focus:block">
                              <FiArrowUpRight />
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 space-y-6"
          >
            {/* Message Box */}
            <div className="relative bg-[#0c1e63] text-white px-6 pt-12 pb-8 rounded-3xl shadow-xl overflow-hidden flex flex-col items-center gap-2 w-full">
              <Image
                src="/assets/ContactUsBG.png"
                alt="Overlay BG"
                fill
                className="absolute object-center opacity-5"
                unoptimized
                priority
              />
              <Image
                src="/assets/message.png"
                alt="Message Icon"
                width={88.74}
                height={93.33}
              />
              <h3 className="text-[17.65px] sm:text-[28px] font-bold mb-2 text-center">
                You have different question?
              </h3>
              <p className="text-[9.45px] sm:text-[15px] text-[#A9ADB5] mb-4 text-center">
                Our team will answer all your question. <br />
                We ensure a quick response.
              </p>
              <Button label="Contact Us" Icon={SlPencil} />
            </div>

            {/* Call Box */}
            <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full">
              <div className="bg-blue-100 p-3 rounded-full">
                <FiPhoneCall className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-[#6B6B6B] text-[9.45px] sm:text-[15px] font-medium mb-1">
                  Your comfort our priority
                </p>
                <p className="text-[17.65px] sm:text-[28px] font-bold">
                  24/7 Service
                </p>
                <p className="text-[9.45px] sm:text-[15px] text-[#6B6B6B] font-medium">
                  +(000)000000000
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
