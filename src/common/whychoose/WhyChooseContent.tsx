"use client";

import WhyChooseFeatures from "./WhyChooseFeatures";

export default function WhyChooseContent() {
  return (
    <div>

      <span className="inline-block text-sm font-semibold uppercase tracking-[3px] text-blue-600">
        Why Choose
      </span>

      <h2 className="mt-3 text-4xl font-extrabold leading-tight text-slate-900">
        Why Choose
        <br />
        <span className="text-blue-600">
          Cyber Trishul?
        </span>
      </h2>

      <p className="mt-5 text-[17px] leading-8 text-slate-600">
        We provide enterprise-grade cybersecurity solutions backed by
        certified experts, advanced monitoring and rapid incident response
        to protect your business from evolving cyber threats.
      </p>

      <div className="mt-10">
        <WhyChooseFeatures />
      </div>

    </div>
  );
}