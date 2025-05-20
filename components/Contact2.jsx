import Image from "next/image";
import Button from "./Button";

const Contact2 = () => {
  return (
    <section className="w-full py-16 bg-[#f7f7fb] flex justify-center items-center px-6 md:px-12">
      <div
        className="w-full max-w-7xl rounded-[32px] p-8 md:p-16 relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/ContactBg.png')",
          boxShadow: "0px 0px 85.9px -7px #00000030",
        }}
      >
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(203, 194, 255, 0.79) -10.29%, rgba(235, 232, 255, 0.79) 8.17%, rgba(248, 246, 255, 0.79) 15.32%, rgba(255, 255, 255, 0.79) 52.25%, rgba(248, 246, 255, 0.79) 85.01%, rgba(203, 194, 255, 0.79) 108.83%)",
          }}
        ></div>

        {/* Content - Stacked above overlay */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 w-full">
          {/* Left - Images */}
          <div className="flex flex-col items-center gap-4 md:gap-6 md:w-1/2">
            <div className="rounded-full border-[3px] border-[#4563ff] overflow-hidden w-[300px] h-[150px] md:w-[350px] md:h-[180px] shadow-md">
              <Image
                src="/assets/ContactBg1.jpg"
                alt="Team Working"
                width={350}
                height={180}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex gap-4 md:gap-6">
              <div className="rounded-l-full border-[3px] border-[#4563ff] overflow-hidden w-[140px] h-[100px] shadow-md">
                <Image
                  src="/assets/ContactBg2.jpg"
                  alt="Team Meeting"
                  width={140}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-r-full border-[3px] border-[#4563ff] overflow-hidden w-[140px] h-[100px] shadow-md">
                <Image
                  src="/assets/ContactBg3.png"
                  alt="Team Planning"
                  width={140}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="flex flex-col gap-4 md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              Transform the Way Your{" "}
              <span className="text-[#4563ff]">SaaS Website</span> Converts
            </h2>
            <p className="text-lg text-gray-600 border-l-4 border-[#4563ff] pl-4 mt-2">
              We craft high-converting, user-friendly SaaS websites that drive
              engagement and growth.
            </p>
            <Button className="w-2/5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact2;
