import Image from "next/image";
import { FiArrowUpRight, FiArrowDownRight, FiPhoneCall } from "react-icons/fi";
import Button from "./Button";

export default function FAQSection() {
  return (
    <section className="w-full min-h-[781.17px] relative py-24 px-6 md:px-20 overflow-hidden">
      {/* Background 3D Image */}
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
        <p className="text-blue-600 text-[20px] md:text-[22px] font-medium mb-2">
          —FAQ
        </p>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left side  */}
          <div>
            {/* Section Heading */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-medium mb-8 leading-snug">
                Got <span className="text-blue-600">question?</span> We’ve got{" "}
                <span className="text-blue-600">answer</span>.
              </h2>
            </div>
            {/* questions */}
            <div className="w-full space-y-4">
              {[
                {
                  id: "01",
                  question: "What services does UX Recharge offer?",
                  answer:
                    "We specialize in designing and developing high-converting websites for SaaS companies.",
                  active: true,
                },
                {
                  id: "02",
                  question: "Do you only work with SaaS companies?",
                },
                {
                  id: "03",
                  question: "How long does it take to build a SaaS website?",
                },
                {
                  id: "04",
                  question: "What tools do you use for development?",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className={`flex justify-between items-center rounded-2xl px-6 py-5 md:py-6 transition-all duration-300 ${
                    item.active
                      ? "bg-white border border-blue-500 shadow-md"
                      : "bg-white hover:shadow-md border border-transparent"
                  }`}
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0.054) 0%, rgba(0, 61, 255, 0.108) 100%)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-blue-600 mr-3 text-4xl font-medium">
                      {item.id}
                    </span>
                    <div>
                      <p className="text-base md:text-[22px] font-medium">
                        {item.question}
                      </p>
                      {item.answer && (
                        <p className="mt-2 text-[#828282] text-[15px] font-medium max-w-xl">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  </div>
                  <div
                    className={`rounded-full p-3 text-xl ${
                      item.active
                        ? "bg-gradient-to-br from-blue-500 to-blue-700 text-white"
                        : "bg-gradient-to-br from-black to-gray-700 text-white"
                    }`}
                  >
                    {item.active ? <FiArrowUpRight /> : <FiArrowDownRight />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side card */}
          <div className="w-full md:w-1/3 space-y-6">
            <div className="relative bg-[#0c1e63] text-white px-6 pt-12 pb-8 rounded-3xl shadow-xl overflow-hidden items-center flex flex-col gap-2 w-full h-full md:w-[453px] md:h-[352px]">
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
              <h3 className="text-[28px] font-bold mb-2 text-center">
                You have different question?
              </h3>
              <p className="text-[15px] text-[#A9ADB5] mb-4 text-center">
                Our team will answer all your question. <br />
                we ensure a quick response
              </p>
              <Button />
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-xl flex items-center gap-8 w-full md:w-[453px] h-full md:h-[149px]">
              <div className="bg-blue-100 p-3 rounded-full">
                <FiPhoneCall className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-[#6B6B6B] text-[15px] font-medium mb-2">
                  Your comfort our priority
                </p>
                <p className="text-[28px] font-bold">24/7 Service</p>
                <p className="text-[15px] text-[#6B6B6B] font-medium">
                  +(000)000000000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
