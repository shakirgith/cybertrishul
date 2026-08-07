"use client";

import {
  ShieldCheck,
  BadgeCheck,
  Headset,
} from "lucide-react";

export default function QuoteBanner() {
  return (
    <div className="hidden lg:flex flex-col justify-between rounded-l-3xl bg-gradient-to-br from-[#081426] via-[#0B1F3B] to-[#1357C5] p-10 text-white">

      <div>
        <p className="text-sm uppercase tracking-[4px] text-blue-300">
          Cyber Trishul
        </p>

        <h2 className="mt-5 text-4xl font-extrabold leading-tight">
          Secure Your Business
          <br />
          Before Attackers Do.
        </h2>

        <p className="mt-6 text-slate-300 leading-8">
          Get a FREE consultation from our cybersecurity
          experts and discover the right security solution
          for your organization.
        </p>
      </div>

      <div className="space-y-5">

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
            <ShieldCheck className="h-6 w-6 text-cyan-300" />
          </div>

          <div>
            <h4 className="font-semibold">
              Enterprise Security
            </h4>

            <p className="text-sm text-slate-300">
              Trusted protection for every business.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
            <BadgeCheck className="h-6 w-6 text-cyan-300" />
          </div>

          <div>
            <h4 className="font-semibold">
              Certified Experts
            </h4>

            <p className="text-sm text-slate-300">
              Experienced cybersecurity professionals.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
            <Headset className="h-6 w-6 text-cyan-300" />
          </div>

          <div>
            <h4 className="font-semibold">
              24×7 Support
            </h4>

            <p className="text-sm text-slate-300">
              Always available when you need us.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}