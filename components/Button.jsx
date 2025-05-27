import Image from "next/image";

const Button = ({
  label = "Contact Us",
  iconSrc = "/assets/NEW BUTTON/pencil.png",
  className = "",
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`group relative flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-500 ${className}`}
      onClick={onClick}
    >
      <div className="group-hover:opacity-0 transition-all duration-300 bg-gradient-blue rounded-full p-2 flex items-center justify-center">
        <Image src={iconSrc} width={19} height={19} alt="icon" />
      </div>
      <p className="gradient-text text-sm md:text-[22px] font-semibold transition-all duration-500 group-hover:text-white group-hover:translate-x-[-50px]">
        {label}
      </p>
      <div className="absolute right-6 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 border border-white rounded-full p-2">
        <Image src={iconSrc} width={19} height={19} alt="icon-hover" />
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black to-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </button>
  );
};

export default Button;
