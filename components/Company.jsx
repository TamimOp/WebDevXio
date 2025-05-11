import Image from "next/image";

function Company() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-5">
      <p className="text-3xl lg:text-5xl text-center font-medium pb-10">
        Already <span className="text-blue-600">Chosen</span> by the{" "}
        <span className="text-blue-600">leaders</span>
      </p>

      {/* Blur effect separator */}
      <div className="relative w-full h-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#E0E6FF] backdrop-blur-md"></div>
      </div>

      {/* Company Logos */}
      <div className="w-full bg-[#E0E6FF] py-12 px-10 sm:px-16 md:px-24 flex flex-col sm:flex-row items-center justify-center md:justify-between gap-10">
        <Image
          src="/assets/Slack.png"
          width={102.1}
          height={25.67}
          alt="SlackLogo"
        />
        <Image
          src="/assets/heap_logo.png"
          width={108.38}
          height={35.5}
          alt="HeapLogo"
        />
        <Image
          src="/assets/AnytimeFitnessLogo.png"
          width={150}
          height={35.5}
          alt="AnytimeFitnessLogo"
        />
        <Image
          src="/assets/leadhuntio_logo.png"
          width={194.44}
          height={35.5}
          alt="LeadHuntioLogo"
        />
      </div>
    </div>
  );
}

export default Company;
