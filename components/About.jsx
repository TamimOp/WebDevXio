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
      <button className="relative overflow-hidden bg-gradient-to-r cursor-pointer flex group justify-center items-center gap-3 text-xl font-semibold text-white w-[195px] h-[50px] from-[#06197d] to-[#274afd] px-4 rounded-[30px] hover:from-black hover:to-gray-500 hover:flex-row-reverse transition-all duration-500 ease-in-out">
        <Icon
          className="transition-all duration-500 ease-in-out bg-white group-hover:bg-transparent group-hover:border group-hover:text-white border-white text-[#274afd] p-1.5 rounded-full"
          size={33}
        />
        <span className="transition-all duration-500 ease-in-out group-hover:-translate-x-1 group-hover:text-white">
          {label}
        </span>
        <div className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-black to-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </button>
    </div>
  );

  return (
    <section className="bg-[#f7f7fb] px-6 lg:px-28 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left: Single Image */}
      <div className="relative max-w-[500px] w-full rounded-tl-[50px] overflow-hidden border-l-[10px] border-blue-600">
        <Image
          src={AboutUsImage}
          alt="About Us Collage"
          className="object-cover w-full h-auto rounded-tl-[50px]"
          priority
        />
      </div>

      {/* Right: Text + Stats + CTA */}
      <div className="max-w-xl text-center lg:text-left">
        <p className="text-blue-600 font-medium mb-2">—About Us</p>
        <h2 className="text-4xl font-bold mb-4">
          Who We Are & <span className="text-blue-600">Why Choose Us</span>
        </h2>
        <p className="text-gray-700 mb-8">
          At UX Recharge, we specialize in creating modern, user-friendly
          websites tailored for SaaS companies. Our designs are
          conversion-focused, fast, and fully optimized for mobile and SEO.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        <Button label="Get Started" Icon={CiCalendar} />
      </div>
    </section>
  );
};

export default About;
