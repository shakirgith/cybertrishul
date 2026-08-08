"use client";

import WhyChooseContent from "./WhyChooseContent";
import WhyChooseImage from "./WhyChooseImage";

export default function WhyChoose() {
  return (
    <section className="light-bg py-24 bg-slate-50">
     
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
  

      <div className="grid min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          {/* Left Dashboard */}
          <WhyChooseImage />

          {/* Right Content */}
          <WhyChooseContent />

        </div>

      </div>
    </section>
  );
}