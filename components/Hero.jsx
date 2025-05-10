"use client";
import Circle from "./Circle";
import Company from "./Company";

export default function HeroNew() {
  return (
    <section className="w-full flex flex-col gap-5">
      <div className="hero">
        <Circle />
      </div>
      <Company />
    </section>
  );
}
