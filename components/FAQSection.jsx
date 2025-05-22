import Image from "next/image";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

export default function FAQSection() {
  return (
    <section className="w-full relative bg-[#f9f9fb] py-24 px-6 md:px-20 overflow-hidden">
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
      <div className="relative z-10">
        {/* Section Heading */}
        <div className="mb-12">
          <p className="text-blue-600 text-[20px] md:text-[22px] font-medium mb-2">
            —FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-medium mb-8 leading-snug">
            Got <span className="text-blue-600">question?</span> We’ve got{" "}
            <span className="text-blue-600">answer</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* Left side questions */}
          <div className="md:col-span-2 space-y-4">
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
              >
                <div>
                  <p className="text-base md:text-lg font-semibold">
                    <span className="text-blue-600 mr-3">{item.id}</span>
                    {item.question}
                  </p>
                  {item.answer && (
                    <p className="mt-2 text-gray-500 text-sm max-w-xl">
                      {item.answer}
                    </p>
                  )}
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

          {/* Right side card */}
          <div className="space-y-6">
            <div className="relative bg-[#0c1e63] text-white px-6 pt-16 pb-8 rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="/assets/message.png"
                alt="Message Icon"
                width={48}
                height={48}
                className="absolute top-6 left-6"
              />
              <h3 className="text-xl font-semibold mb-2">
                You have different question?
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Our team will answer all your question. <br />
                we ensure a quick response
              </p>
              <button className="text-blue-400 font-medium flex items-center">
                <FiArrowDownRight className="mr-1" /> Contact Us
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75C2.25 6.33579 2.58579 6 3 6h1.25c.41421 0 .75.33579.75.75v.75A3.75 3.75 0 008.75 11.25h.75c.41421 0 .75.33579.75.75V13a6 6 0 006 6h.75c.4142 0 .75.3358.75.75V21c0 .4142-.3358.75-.75.75H3a.75.75 0 01-.75-.75V6.75z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">
                  Your comfort our priority
                </p>
                <p className="text-xl font-semibold">24/7 Service</p>
                <p className="text-sm text-gray-400">+(000)000000000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
