import React from "react";
import Image from "next/image";

function Company() {
  return (
    <div className="flex justify-between items-center bg-[#E0E6FF] mt-10 px-30 py-10 flex-wrap gap-10">
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
  );
}

export default Company;
