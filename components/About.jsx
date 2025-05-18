import React from "react";
import Image from "next/image";
import AboutUsImage from "@/public/assets/AboutUs.svg";
import { CiCalendar } from "react-icons/ci";

const stats = [
  { value: "2k+", label: "SaaS Projects Delivered" },
  { value: "10k+", label: "Happy Clients Worldwide" },
  { value: "10+", label: "Industry Awards" },
];

const About = () => {
  const Button = ({ label, Icon }) => (
    <div className="w-[200px] h-[55px] bg-gradient-to-r from-[#0634FF] to-[#B2ACFF] shadow-lg shadow-[#B2ACFF] flex items-center justify-center rounded-[32px]">
      <button className="relative overflow-hidden bg-gradient-to-r cursor-pointer flex group justify-center items-center gap-3 text-lg md:text-xl font-semibold text-white w-[195px] h-[50px] from-[#06197d] to-[#274afd] px-4 rounded-[30px] hover:from-black hover:to-gray-500 hover:flex-row-reverse transition-all duration-500 ease-in-out">
        <Icon
          className="transition-all duration-500 ease-in-out bg-white group-hover:bg-transparent group-hover:border group-hover:text-white border-white text-[#274afd] p-1.5 rounded-full"
          size={30}
        />
        <span className="transition-all duration-500 ease-in-out group-hover:-translate-x-1 group-hover:text-white">
          {label}
        </span>
        <div className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-black to-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </button>
    </div>
  );

  return (
    <section className="bg-[#f7f7fb] px-6 md:px-10 lg:px-28 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Image */}
      <div className="w-full lg:w-[40%]">
        <Image
          src={AboutUsImage}
          alt="About Us"
          className="object-cover w-full h-auto rounded-tl-[50px]"
          priority
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 w-full lg:w-[60%] text-center lg:text-left">
        <p className="text-blue-600 font-medium text-lg md:text-xl">
          —About Us
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">
          Who We Are & <span className="text-blue-600">Why Choose Us</span>
        </h2>
        <p className="text-gray-700 text-base md:text-lg lg:text-xl font-medium leading-relaxed">
          At UX Recharge, we specialize in creating modern, user-friendly
          websites tailored for SaaS companies. Our designs are
          conversion-focused, fast, and fully optimized for mobile and SEO.
        </p>

        <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 text-center w-[110px] md:w-[141px] h-[96px]"
            >
              <p className="text-3xl md:text-5xl font-semibold text-blue-600">
                {stat.value}
              </p>
              <p className="text-[12px] md:text-[13px] font-medium text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center lg:justify-start">
          <Button label="Book A Call" Icon={CiCalendar} />
        </div>
      </div>
    </section>
  );
};

export default About;
