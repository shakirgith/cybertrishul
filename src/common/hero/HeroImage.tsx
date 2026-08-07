"use client";

import Image from "next/image";
import {
  Shield,
  Cloud,
  Target,
  Monitor,
  Mail,
  FileCheck,
} from "lucide-react";

function FloatingCard({
  icon,
  title,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  className: string;
}) {
  return (
    <div
      className={`absolute rounded-2xl border border-white/10 bg-[#0B1426]/90 px-4 py-3 shadow-2xl backdrop-blur ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/20 text-cyan-400">
          {icon}
        </div>

        <span className="text-sm font-semibold text-white">
          {title}
        </span>
      </div>
    </div>
  );
}

export default function HeroImage() {
  return (
    <div className="relative flex justify-center">

      {/* Glow */}
      <div className="absolute top-16 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[120px]" />

      {/* Main Image */}
      <div className="relative z-10">

        <Image
          src="/images/hero/hero-img.jpg"
          alt="Cyber Security"
          width={560}
          height={560}
          priority
          className="relative z-10"
        />

        {/* Floating Cards */}
{/* 
        <FloatingCard
          title="Cloud Security"
          icon={<Cloud size={22} />}
          className="left-1/2 top-0 -translate-x-1/2"
        />

        <FloatingCard
          title="Network Security"
          icon={<Shield size={22} />}
          className="-left-10 top-28"
        />

        <FloatingCard
          title="Threat Detection"
          icon={<Target size={22} />}
          className="-right-8 top-28"
        />

        <FloatingCard
          title="Endpoint Protection"
          icon={<Monitor size={22} />}
          className="-left-12 bottom-36"
        />

        <FloatingCard
          title="Email Security"
          icon={<Mail size={22} />}
          className="-right-10 bottom-36"
        />

        <FloatingCard
          title="Compliance & Risk"
          icon={<FileCheck size={22} />}
          className="bottom-2 left-1/2 -translate-x-1/2"
        /> */}

      </div>

    </div>
  );
}