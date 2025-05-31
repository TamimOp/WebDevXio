import Circle from "./Circle";
import Company from "./Company";

export default function HeroNew() {
  return (
    <section className="w-full flex flex-col gap-2">
      <div className="hero h-[60vh] sm:h-[100vh] mt-20 md:mt-0 ">
        <Circle />
      </div>
      <Company />
    </section>
  );
}
