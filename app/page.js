"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Contact2 from "@/components/Contact2";
import FAQSection from "@/components/FAQSection";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Testimonials from "@/components/Testimonials";
import Toolbox from "@/components/Toolbox";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Info />
      <Toolbox />
      <Features />
      <FAQSection />
      <Testimonials />
      <Contact />
      <Contact2 />
    </main>
  );
}
