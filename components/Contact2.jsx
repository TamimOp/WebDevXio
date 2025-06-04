"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";
import { SlPencil } from "react-icons/sl";

const Contact2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full py-16 bg-[#f7f7fb] flex justify-center items-center px-6 md:px-12">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1261px] h-auto md:h-[563px] rounded-[19px] p-6 md:p-16 relative overflow-hidden"
        style={{
          boxShadow: "0px 0px 85.9px -7px #00000030",
        }}
      >
        {/* Background Image with 30% opacity */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/ContactBg.png"
            alt="Background"
            fill
            className="opacity-[30%]"
          />
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(203, 194, 255, 0.79) -10.29%, rgba(235, 232, 255, 0.79) 8.17%, rgba(248, 246, 255, 0.79) 15.32%, rgba(255, 255, 255, 0.79) 52.25%, rgba(248, 246, 255, 0.79) 85.01%, rgba(203, 194, 255, 0.79) 108.83%)",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-12 w-full h-full">
          {/* Left - Images */}
          <div className="flex flex-col items-center gap-3 w-full max-w-[430px]">
            <div className="rounded-full border-[3px] md:border-[5px] border-[#274AFF] overflow-hidden w-full aspect-[2.3/1] shadow-xl/30">
              <Image
                src="/assets/ContactBg1.jpg"
                alt="Team Working"
                width={430}
                height={186}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex gap-3 w-[90%] aspect-[3/1]">
              <div className="rounded-l-[163.5px] rounded-r-[17px] border-[2px] md:border-[3px] border-[#274AFF] overflow-hidden w-1/2 shadow-xl/30">
                <Image
                  src="/assets/ContactBg2.jpg"
                  alt="Team Meeting"
                  width={189}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-r-[163.5px] rounded-l-[17px] border-[2px] md:border-[3px] border-[#274AFF] overflow-hidden w-1/2 shadow-xl/30">
                <Image
                  src="/assets/ContactBg3.png"
                  alt="Team Planning"
                  width={189}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="flex flex-col gap-4 w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              Transform the Way Your{" "}
              <span className="gradient-text">SaaS Website</span> Converts
            </h2>
            <p className="text-[18px] md:text-xl lg:text-[22px] text-gray-600 border-l-4 border-blue-700 pl-4 mt-2 font-medium">
              We craft high-converting, user-friendly SaaS websites that drive
              engagement and growth.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button label="Contact Us" Icon={SlPencil} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact2;
