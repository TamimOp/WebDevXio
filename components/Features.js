import Image from "next/image";
import { FiSearch } from "react-icons/fi";

export default function Features() {
  return (
    <section className="p-30 bg-[#f8f8ff]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-blue-600 text-lg font-medium">Portfolio</p>
          <h2 className="text-5xl font-bold text-gray-900">
            Our <span className="text-blue-600">Featured</span> Work
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We design and develop stunning, high-performing websites for SaaS
            products to maximize conversions.
          </p>
        </div>

        <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#274AFD] to-[#06197D] text-white font-semibold hover:scale-105 transition-transform">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <FiSearch className="text-[#274AFD] text-lg" />
          </div>
          See More
        </button>
      </div>
    </section>
  );
}
