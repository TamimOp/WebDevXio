"use client";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/Button";

const Contact = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-100px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-100px" });

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section
      className="w-full bg-[#F7F8FC] py-16 px-6 md:px-12 lg:px-20 overflow-x-hidden"
      id="contact"
    >
      <div className="flex flex-col lg:flex-row justify-center gap-20">
        {/* Left Side */}
        <motion.div
          ref={leftRef}
          variants={leftVariants}
          initial="hidden"
          animate={leftInView ? "visible" : "hidden"}
          className="relative w-full max-w-[453px] h-auto rounded-3xl p-8 text-white flex flex-col justify-between"
          style={{
            background: "linear-gradient(180deg, #132663 0%, #000F3F 100%)",
          }}
        >
          <Image
            src="/assets/ContactUsBG.webp"
            alt="Overlay BG"
            fill
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-5"
            priority
          />
          <div className="relative z-10">
            <h3 className="text-[24px] md:text-[28px] font-bold mb-4">
              Address
            </h3>
            <p className="text-[14px] md:text-[15px] font-medium text-[#A9ADB5] mb-6">
              3400 Cottage Way, Suite G2 #26176
              <br />
              Sacramento, CA 95825, USA
            </p>
            <h3 className="text-[24px] md:text-[28px] font-bold mb-4">
              Contact
            </h3>
            <p className="text-[14px] md:text-[15px] font-medium text-[#A9ADB5] mb-1">
              Phone: +(000)000000000
            </p>
            <p className="text-[14px] md:text-[15px] font-medium text-[#A9ADB5]">
              Email: contact@webdevxio.com
            </p>
          </div>

          {/* Quote Box with Floating Image */}
          <Image
            src="/assets/quote.webp"
            alt="Quote Icon"
            width={50}
            height={50}
            className="absolute top-66 left-3 sm:top-73 sm:left-5 z-50"
          />
          <div className="w-full sm:w-[361px] sm:h-[164px] relative mt-10 border border-white rounded-xl overflow-hidden">
            <Image
              src="/assets/ContactBg3.webp"
              alt="Quote Background"
              fill
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
            />

            <div className="relative z-10 p-6">
              <p className="text-[15px] md:text-[16px] font-medium">
                Let’s build something amazing together! 🚀 Whether you need a
                stunning SaaS website or a complete redesign, we’re here to
                help. Drop us a message.
              </p>
            </div>
          </div>

          <div className="mt-10 z-10">
            <h3 className="text-[20px] md:text-[22px] font-medium mb-4">
              Stay Connected
            </h3>
            <div className="flex gap-4 text-xl">
              {[
                { icon: FaFacebookF, hoverColor: "hover:text-blue-500" },
                { icon: FaInstagram, hoverColor: "hover:text-pink-500" },
                { icon: FaTwitter, hoverColor: "hover:text-sky-400" },
                { icon: FaLinkedinIn, hoverColor: "hover:text-blue-700" },
              ].map(({ icon: Icon, hoverColor }, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 cursor-pointer transition duration-300 hover:scale-105 ${hoverColor}`}
                >
                  <Icon size={22} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          ref={rightRef}
          variants={rightVariants}
          initial="hidden"
          animate={rightInView ? "visible" : "hidden"}
          className="flex flex-col gap-5 w-full max-w-[750px]"
        >
          <h4 className="text-[20px] md:text-[22px] font-medium text-blue-600 mb-2">
            —Contact Us
          </h4>
          <h2 className="text-3xl md:text-5xl font-medium mb-8 leading-snug">
            Get Your <span className="text-blue-600">Free Quote</span> Today!
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">Your Name *</label>
              <input
                type="text"
                placeholder="Ex.john doe"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F1F3FF]"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email *</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F1F3FF]"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone Number *</label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F1F3FF]"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Service *</label>
              <select className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F1F3FF]">
                <option>Select Service</option>
                <option>Website Design</option>
                <option>Website Development</option>
                <option>Redesign</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Enter here.."
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F1F3FF]"
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-start">
              <Button label="Send Message" Icon={CiMail} />
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
