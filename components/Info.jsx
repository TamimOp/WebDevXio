import Image from "next/image";

const infoCards = [
  {
    title: "Website De",
    description:
      "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users’ choice.",
    icon: "/assets/Figma.png",
    isMain: false,
  },
  {
    title: "Saas Website Design",
    description:
      "Fully functional, high-performance SaaS websites built with modern technologies.",
    icon: "/assets/SaaS.png",
    isMain: true,
  },
  {
    title: "Website Development & Maintenance",
    description:
      "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users’ choice.",
    icon: "/assets/FramerMotion.png",
    isMain: false,
  },
  {
    title: "Wordpress website Design",
    description:
      "Our web developers are experts in building highly interactive and deeply pleasant full-screen websites that work as flawlessly on smartphones as they do on desktops or any other device of your users’ choice.",
    icon: "/assets/Wordpress.png",
    isMain: false,
  },
];

const Info = () => {
  return (
    <section className="w-full py-16 bg-[#f7f7fb] flex flex-col items-center px-6 md:px-20">
      <div className="flex flex-col items-center mb-6 gap-1">
        <h2 className="text-4xl md:text-5xl font-medium mb-4 text-center">
          What We Do
        </h2>
        <p className="text-lg md:text-[22px] text-gray-700 max-w-2xl text-center mb-12">
          We design and develop stunning, high-performing websites for SaaS
          products to maximize conversions.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-start justify-between">
          <div>Figma card</div>
          <div>Saas card</div>
          <div></div>
        </div>
        <div className="flex gap-2 justify-between items-end">
          <div></div>
          <div>Framer card</div>
          <div>wordpress card</div>
        </div>
      </div>
    </section>
  );
};

export default Info;
