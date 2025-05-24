import Circle from "./Circle";
import Company from "./Company";

export default function HeroNew() {
  return (
    <section className="w-full flex flex-col gap-2">
      <div className="hero h-[70vh] sm:h-[100vh]">
        <Circle />
      </div>
      <Company />
    </section>
  );
}
