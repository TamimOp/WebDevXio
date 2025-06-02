import Image from "next/image";

// Mock data (you should ideally move this to a shared data file)
const cards = [
  {
    src: "/assets/featuresDetails1.png",
    title: "Digital CRYPTO Wallet",
    tags: "Framer - SaaS",
    slug: "digital-crypto-wallet-1",
    description:
      "This is the first digital crypto wallet project with advanced features and sleek design.",
  },
  {
    src: "/assets/featuresDetails2.png",
    title: "Digital CRYPTO Wallet",
    tags: "Word Press - Fashion",
    slug: "digital-crypto-wallet-2",
    description:
      "This wallet was built for a fashion-oriented client using WordPress.",
  },
  {
    src: "/assets/featuresDetails3.png",
    title: "Digital CRYPTO Wallet",
    tags: "UI/UX Design - SaaS",
    slug: "digital-crypto-wallet-3",
    description: "We focused on UI/UX for this SaaS-based crypto wallet.",
  },
  {
    src: "/assets/Featured1.png",
    title: "Digital CRYPTO Wallet",
    tags: "UI/UX Design - SaaS",
    slug: "digital-crypto-wallet-4",
    description: "Another SaaS product with advanced features and design.",
  },
];

export default function slug({ params }) {
  const { slug } = params;
  const card = cards.find((item) => item.slug === slug);

  if (!card) {
    return (
      <div className="p-12 text-2xl font-semibold text-red-500">
        Work not found!
      </div>
    );
  }

  return (
    <section className="p-6 sm:p-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-[#1F1F1F]">{card.title}</h1>
      <p className="text-[#555] text-lg mb-6">{card.tags}</p>
      <div className="relative w-full h-[400px] mb-6 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover object-center"
        />
      </div>
      <p className="text-gray-700 text-lg leading-relaxed">
        {card.description}
      </p>
    </section>
  );
}
