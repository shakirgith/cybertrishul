"use client";

import WhyChooseContent from "./WhyChooseContent";
import WhyChooseImage from "./WhyChooseImage";

export default function WhyChoose() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-[1.35fr_.85fr]">

          {/* Left Dashboard */}
          <WhyChooseImage />

          {/* Right Content */}
          <WhyChooseContent />

        </div>

      </div>
    </section>
  );
}