"use client";
import Image from "next/image";
import { FiArrowUpRight, FiArrowDownRight, FiPhoneCall } from "react-icons/fi";
import { motion } from "framer-motion";
import Button from "./Button";

export default function FAQSection() {
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

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto">
        <p className="text-blue-600 text-[18px] sm:text-[20px] md:text-[22px] font-medium mb-4">
          —FAQ
        </p>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* FAQ List */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <div className="mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 leading-snug">
                Got <span className="text-blue-600">question?</span> We’ve got{" "}
                <span className="text-blue-600">answer</span>.
              </h2>
            </div>

            <div className="w-full space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative rounded-2xl overflow-hidden transition-all duration-500"
                >
                  {/* Gradient Border on Hover */}
                  <div className="absolute inset-0 rounded-2xl p-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-[#274AFF] to-[#7389FF]">
                    <div className="w-full h-full rounded-[14px] bg-white bg-opacity-90"></div>
                  </div>

                  {/* Content */}
                  <div
                    className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 px-6 py-5 md:py-6 rounded-2xl transition-all duration-300 bg-white hover:shadow-md"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.054) 0%, rgba(0, 61, 255, 0.108) 100%)",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-blue-600 mr-3 text-3xl sm:text-4xl font-medium">
                        {item.id}
                      </span>
                      <div>
                        <p className="text-base md:text-[22px] font-medium">
                          {item.question}
                        </p>
                        <p className="mt-2 text-[#828282] text-[15px] font-medium max-w-xl block sm:hidden group-hover:block transition-opacity duration-300">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                    <div className="rounded-full p-3 text-xl bg-gradient-to-br from-black to-gray-700 text-white group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300 self-start sm:self-center">
                      <span className="block group-hover:hidden">
                        <FiArrowDownRight />
                      </span>
                      <span className="hidden group-hover:block">
                        <FiArrowUpRight />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Contact Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 space-y-6"
          >
            {/* Message Card */}
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
              <h3 className="text-[24px] sm:text-[28px] font-bold mb-2 text-center">
                You have different question?
              </h3>
              <p className="text-[15px] text-[#A9ADB5] mb-4 text-center">
                Our team will answer all your question. <br />
                We ensure a quick response.
              </p>
              <Button />
            </div>

            {/* Call Card */}
            <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full">
              <div className="bg-blue-100 p-3 rounded-full">
                <FiPhoneCall className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-[#6B6B6B] text-[15px] font-medium mb-1">
                  Your comfort our priority
                </p>
                <p className="text-[22px] sm:text-[28px] font-bold">
                  24/7 Service
                </p>
                <p className="text-[15px] text-[#6B6B6B] font-medium">
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
