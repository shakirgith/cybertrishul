"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

export default function HeroContent() {
  return (
    <div className="max-w-xl">

      {/* Badge */}
      <div className="mb-5 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5">
        <span className="text-[11px] font-bold uppercase tracking-[2px] text-cyan-400 !p-1 !px-2">
          Enterprise Cybersecurity Solutions
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl">
        Protecting Indian
        <br />
        Businesses Against
        <br />
        Modern{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Cyber Threats
        </span>
      </h1>

      {/* Description */}
      <p className="mt-7 text-[18px] leading-normal text-slate-300 mb-20">
        We deliver enterprise-grade cybersecurity solutions, firewall
        deployment, endpoint protection, cloud security and 24×7 SOC
        monitoring to protect your business from modern cyber attacks.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-5">

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-xl transition hover:scale-[1.03] p-10 mb-20"
        >
          Request Security Assessment

          <ArrowRight size={20} />
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-500 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:border-blue-500 hover:bg-white/10 p-10 mb-20"
        >
          Schedule Consultation
          <CalendarDays size={20} />
        </Link>

      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-x-10 gap-y-4">

        <div className="flex items-center gap-2 text-slate-300 text-14">
          <CheckCircle2
            size={18}
            className="text-cyan-400"
          />
          Zero Trust Security
        </div>

        <div className="flex items-center gap-2 text-slate-300 text-14">
          <CheckCircle2
            size={18}
            className="text-cyan-400"
          />
          24×7 SOC Monitoring
        </div>

        <div className="flex items-center gap-2 text-slate-300 text-14">
          <CheckCircle2
            size={18}
            className="text-cyan-400"
          />
          Rapid Response Ready
        </div>

      </div>

    </div>
  );
}