import About from "@/components/About";
import Contact from "@/components/Contact";
import Contact2 from "@/components/Contact2";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Toolbox from "@/components/Toolbox";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Info />
      <Toolbox />
      <Features />
      <Contact />
      <Contact2 />
    </main>
  );
}
