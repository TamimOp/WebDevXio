import Image from "next/image";

const tools = [
  { name: "Figma", desc: "we use figma", icon: "/assets/Figma.png" },
  { name: "Framer", desc: "we use figma", icon: "/assets/FramerMotion.png" },
  { name: "wordpress", desc: "we use figma", icon: "/assets/Wordpress.png" },
  { name: "Adobe XD", desc: "we use figma", icon: "/assets/AdobeXD.png" },
  { name: "Figma", desc: "we use figma", icon: "/assets/Figma.png" },
  { name: "Figma", desc: "we use figma", icon: "/assets/Figma.png" },
  { name: "Figma", desc: "we use figma", icon: "/assets/Figma.png" },
  { name: "Figma", desc: "we use figma", icon: "/assets/Figma.png" },
];

const Toolbox = () => {
  return (
    <section className="bg-[#f7f7fb] py-20 px-4 text-center">
      <div className="flex flex-col gap-2 items-center">
        <h4 className="text-blue-600 font-medium text-[22px] mb-2">Tools</h4>
        <h2 className="text-5xl font-medium mb-4">
          Our <span className="text-blue-600">Toolbox</span> For Excellence
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-[22px]">
          We design and develop stunning, high-performing websites for SaaS
          products to maximize conversions.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="rounded-2xl p-5 flex items-center gap-4 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.054) 0%, rgba(0, 61, 255, 0.0702) 100%)",
            }}
          >
            <div className="min-w-[40px]">
              <Image src={tool.icon} alt={tool.name} width={40} height={40} />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-[22px]">{tool.name}</h3>
              <p className="text-[13px] text-gray-600">{tool.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Toolbox;
