"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const infoCards = [
  {
    title: "Website De",
    description:
      "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users’ choice.",
    icon: "/assets/Figma.png",
    bg: "/assets/FigmaBG.jpg",
    isMain: false,
  },
  {
    title: "Saas Website Design",
    description:
      "Fully functional, high-performance SaaS websites built with modern technologies.",
    icon: "/assets/SaaS.png",
    bg: "linear-gradient(to right, #4563ff 0%, #132663 100%)",
    isMain: true,
  },
  {
    title: "Website Development & Maintenance",
    description:
      "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users’ choice.",
    icon: "/assets/FramerMotion.png",
    bg: "/assets/FramerBG.jpg",
    isMain: false,
  },
  {
    title: "Wordpress website Design",
    description:
      "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users’ choice.",
    icon: "/assets/Wordpress.png",
    bg: "/assets/WordpressBG.jpg",
    isMain: false,
  },
];

const Card = ({ title, description, icon, bg, isMain }) => {
  const baseStyles =
    "flex flex-col justify-between p-8 w-[392.25px] h-[258.93px] rounded-3xl shadow-lg";

  const mainCardClasses = isMain ? "text-white" : "bg-white text-black";

  const customBgStyle = isMain
    ? { background: bg }
    : {
        backgroundImage: `url(${bg})`,
        backgroundSize: "fill",
        backgroundPosition: "center",
      };

  return (
    <div className={`${baseStyles} ${mainCardClasses}`} style={customBgStyle}>
      <div className="flex flex-col items-start gap-2">
        <Image src={icon} alt="icon" width={47.6} height={43.83} />
        <div>
          <h3 className="text-[25px] font-medium mb-2 leading-[106%]">
            {title}
          </h3>
          <p
            className={`text-[15px] font-medium leading-[124%] ${
              isMain ? "text-white" : "text-[#6B6B6B]"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <section className="w-full py-16 bg-[#f7f7fb] flex flex-col items-center px-6 md:px-20">
      {/* Header */}
      <motion.div
        className="flex flex-col items-center mb-6 gap-1"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-medium mb-4 text-center">
          What We Do
        </h2>
        <p className="text-lg md:text-[22px] text-gray-700 max-w-2xl text-center mb-12">
          We design and develop stunning, high-performing websites for SaaS
          products to maximize conversions.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col gap-10 md:gap-8">
        {/* First row from left */}
        <motion.div
          className="flex flex-col md:flex-row gap-10 md:gap-8 justify-between items-start"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card {...infoCards[0]} />
          <Card {...infoCards[1]} />
          <div className="hidden md:block w-[392.25px] h-[258.93px]"></div>
        </motion.div>

        {/* Second row from right */}
        <motion.div
          className="flex flex-col md:flex-row gap-10 md:gap-8 justify-between items-end"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="hidden md:block w-[392.25px] h-[258.93px]"></div>
          <Card {...infoCards[2]} />
          <Card {...infoCards[3]} />
        </motion.div>
      </div>
    </section>
  );
};

export default Info;
