import Image from "next/image";
import Button from "./Button";

const Contact2 = () => {
  return (
    <section className="w-full py-16 bg-[#f7f7fb] flex justify-center items-center px-6 md:px-12">
      <div
        className="w-[1261px] h-[563px] max-w-7xl rounded-[19px] p-8 md:p-16 relative overflow-hidden"
        style={{
          boxShadow: "0px 0px 85.9px -7px #00000030",
        }}
      >
        {/* Background Image with 35% opacity */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/ContactBg.png"
            alt="Background"
            fill
            className="opacity-[35%]"
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
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 w-full h-full">
          {/* Left - Images */}
          <div className="flex flex-col items-center gap-3 w-[430px] h-[326px]">
            <div className="rounded-full border-[5px] border-[#274AFF] overflow-hidden w-[430px] h-[186px] shadow-md">
              <Image
                src="/assets/ContactBg1.jpg"
                alt="Team Working"
                width={350}
                height={180}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex gap-3 w-[390px] h-[128px]">
              <div className="rounded-l-[163.5px] rounded-r-[17px] border-[3px] border-[#274AFF] overflow-hidden w-[189px] h-[128px] shadow-md">
                <Image
                  src="/assets/ContactBg2.jpg"
                  alt="Team Meeting"
                  width={140}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-r-[163.5px] rounded-l-[17px] border-[3px] border-[#274AFF] overflow-hidden w-[189px] h-[128px] shadow-md">
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
            <h2 className="text-3xl md:text-5xl font-medium leading-tight">
              Transform the Way Your{" "}
              <span className="gradient-text">SaaS Website</span> Converts
            </h2>
            <p className="text-[22px] text-gray-600 border-l-4 border-blue-700 pl-4 mt-2 font-medium">
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
