"use client";
import React from "react";

const Button = ({ label = "Contact Us", Icon }) => (
  <div className="w-[200px] h-[55px] bg-gradient-to-r from-[#0634FF] to-[#B2ACFF] shadow-lg shadow-[#B2ACFF] flex items-center justify-center rounded-[32px]">
    <button className="relative overflow-hidden bg-gradient-to-r cursor-pointer flex group justify-center items-center gap-3 text-xl font-semibold text-white w-[195px] h-[50px] from-[#06197d] to-[#274afd] px-4 rounded-[30px] hover:from-black hover:to-gray-500 hover:flex-row-reverse transition-all duration-500 ease-in-out">
      {Icon && (
        <div className="w-[33px] h-[33px] flex items-center justify-center rounded-full bg-white border border-white group-hover:bg-transparent group-hover:border-white group-hover:text-white transition-all duration-500 ease-in-out">
          <Icon
            size={18}
            className="text-[#274afd] group-hover:text-white transition-all duration-500 ease-in-out"
          />
        </div>
      )}

      <span className="transition-all duration-500 ease-in-out group-hover:-translate-x-1 group-hover:text-white">
        {label}
      </span>

      <div className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-black to-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </button>
  </div>
);

export default Button;
