import About from "@/components/About";
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
    </main>
  );
}
