"use client";

import Image from "next/image";

export default function WhyChooseImage() {
  return (
    <div className="relative flex justify-center lg:justify-start">

      {/* Background Glow */}
      <div className="absolute left-10 top-10 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[120px]" />

      {/* Dashboard Image */}
      <div className="relative z-10 w-full max-w-[1000px]">
        <Image
          src="/images/dashboard.png"
          alt="Cyber Trishul Dashboard"
          width={980}
          height={435}
          priority
          className="h-auto w-full rounded-3xl shadow-2xl"
        />
      </div>

    </div>
  );
}