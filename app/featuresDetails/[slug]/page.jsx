import React from "react";
import { featuresData } from "@/data";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  return featuresData.map((card) => ({ slug: card.slug }));
}

export default async function FeaturedWork({ params }) {
  const { slug } = await params;
  const card = featuresData.find((item) => item.slug === slug);

  if (!card) return notFound();

  return (
    <div className="w-full pt-[140px] bg-white text-black">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden h-[90vh] mb-16">
        {/* Background Image */}
        <Image
          src={"/assets/hero1.png"}
          alt={card.title}
          fill
          className="object-cover object-center z-0"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-14 text-white">
          <div className="text-sm text-white/70">
            All Project / {card.title}
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
              {card.title}
            </h1>
            <p className="text-base md:text-lg mt-4 text-white/90">
              {card.description ||
                "This is a sample description for the selected project. You can replace it with actual content later."}
            </p>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-white/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
              </svg>
              2023
            </div>
            <span className="uppercase tracking-widest text-xs animate-bounce">
              Scroll
            </span>
          </div>
        </div>
      </div>

      {/* Description and Sidebar */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            We combined textures of coffee beans, wood, and greenery to form an
            inviting ambiance.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <p>
              Half Million Coffee needed an immersive online experience that
              conveyed their passion for crafting premium coffee while inviting
              users to explore and engage with the brand. The site had to
              reflect both the brand’s artisanal values and its
              community-focused mission—all while driving product discovery and
              sales.
            </p>
            <p>
              The new Half Million Coffee website delivers a warm, premium
              experience that mirrors the love poured into each cup. From casual
              visitors to loyal fans, the site builds an emotional connection
              while driving catalog exploration and product interest.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6 text-sm">
          <div>
            <p className="text-gray-500 uppercase text-xs">Industry</p>
            <p className="font-medium text-right">
              {card.tags.split(" - ")[1]}
            </p>
          </div>
          <div>
            <p className="text-gray-500 uppercase text-xs">Services</p>
            {card.tags
              .split(" - ")[0]
              .split(",")
              .map((service, i) => (
                <p key={i} className="font-medium text-right">
                  {service.trim()}
                </p>
              ))}
          </div>
          <div>
            <p className="text-gray-500 uppercase text-xs">Timeline</p>
            <p className="font-medium text-right">1.5 months</p>
          </div>
          <div>
            <p className="text-gray-500 uppercase text-xs">Website</p>
            <a href="#" className="text-blue-600 underline text-right block">
              halfmillion.store
            </a>
          </div>
        </div>
      </div>

      {/* Placeholder for video */}
      <div className="mt-20 w-full h-[500px] bg-black flex items-center justify-center text-white text-lg">
        Autoplay video placeholder
      </div>

      {/* Quote Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 my-20 flex flex-col md:flex-row gap-10 items-start">
        <button className="border border-black px-6 py-2 rounded-full font-medium">
          CHALLENGE
        </button>
        <p className="text-xl md:text-2xl max-w-3xl">
          The site had to reflect both the brand’s artisanal values and its
          community-focused mission—all while driving product discovery and
          sales.
        </p>
      </div>
    </div>
  );
}
