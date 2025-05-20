import Image from "next/image";

const Contact2 = () => {
  return (
    <section className="w-full py-16 bg-[#f7f7fb] flex justify-center items-center px-6 md:px-12">
      <div className="w-full max-w-7xl bg-gradient-to-r from-[#f1effe] to-[#f5f6ff] rounded-[32px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-xl relative overflow-hidden">
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
          <button className="mt-6 inline-flex items-center gap-2 text-[#4563ff] font-semibold hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-[#4563ff]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16.862 3.487A2.25 2.25 0 0119.5 5.25v13.5A2.25 2.25 0 0117.25 21H6.75A2.25 2.25 0 014.5 18.75V5.25a2.25 2.25 0 012.25-2.25h9.25l.862.487z"
              />
            </svg>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact2;
