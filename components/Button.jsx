"use client";
import React from "react";

const Button = ({
  label = "Contact Us",
  Icon,
  onClick,
  className = "",
  fullWidth = false,
}) => (
  <div
    className={`${
      fullWidth ? "w-full flex" : "inline-flex"
    } items-center justify-center rounded-[30px] p-[2px] bg-gradient-to-r from-[#0634FF] to-[#B2ACFF] shadow-lg shadow-[#B2ACFF]`}
  >
    <button
      className={`relative overflow-hidden bg-gradient-to-r cursor-pointer flex group justify-center items-center gap-1.5 sm:gap-2 text-xs sm:text-lg font-semibold text-white px-3 sm:px-5 py-[6px] sm:py-2.5 from-[#06197d] to-[#274afd] rounded-[28px] hover:from-black hover:to-gray-500 hover:flex-row-reverse transition-all duration-500 ease-in-out ${className}`}
      onClick={onClick}
    >
      {Icon && (
        <div className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] flex items-center justify-center rounded-full bg-white border border-white group-hover:bg-transparent group-hover:border-white group-hover:text-white transition-all duration-500 ease-in-out">
          <Icon
            size={14}
            className="text-[#274afd] group-hover:text-white transition-all duration-500 ease-in-out"
          />
        </div>
      )}
      <span className="transition-all duration-500 ease-in-out group-hover:-translate-x-1 group-hover:text-white whitespace-nowrap">
        {label}
      </span>
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-black to-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </button>
  </div>
);

export default Button;
