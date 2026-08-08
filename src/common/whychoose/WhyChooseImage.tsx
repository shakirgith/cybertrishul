"use client";

import Image from "next/image";

export default function WhyChooseImage() {
  return (
    <div>
      
    <div className="text-center block mb-30"> 
    <span className="inline-block text-sm font-semibold uppercase tracking-[3px] text-blue-600">
    Why Choose
  </span>

  <h2 className="mt-3 text-4xl font-extrabold leading-tight text-slate-900 mb-10">
    Why Choose
    <br />
    <span className="text-blue-600">
      Cyber Trishul?
    </span>
  </h2>

  <p className="text-[17px] leading-8 text-slate-600">
    We provide enterprise-grade cybersecurity solutions backed by
    certified experts, advanced monitoring and rapid incident response
    to protect your business from evolving cyber threats.
  </p>
  </div>

    <div className="relative flex w-full min-w-0 items-center justify-center overflow-hidden">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/15 blur-[100px] sm:h-[360px] sm:w-[360px]" />



      {/* Dashboard Image */}
      <div className="relative z-10 w-full min-w-0 max-w-[820px]">
        <Image
          src="/images/dashboard.png"
          alt="Cyber Trishul Dashboard"
          width={980}
          height={435}
          priority
         className="block h-auto w-full rounded-3xl object-contain shadow-[0_25px_60px_-20px_rgba(15,23,42,0.35)]"
        />
      </div>
    </div>
    </div>
  );
}