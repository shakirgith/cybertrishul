"use client";
import Image from "next/image";
import {
  Users,
  ShieldCheck,
  Headphones,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    value: "250+",
    title: "Happy Clients",
  },
  {
    icon: ShieldCheck,
    value: "99.9%",
    title: "Security Uptime",
  },
  {
    icon: Headphones,
    value: "24×7",
    title: "SOC Support",
  },
  {
    icon: Award,
    value: "12+",
    title: "Years Experience",
  },
];

// const brands = [
//   "Microsoft",
//   "Fortinet",
//   "Palo Alto",
//   "Cisco",
//   "Sophos",
//   "AWS",
//   "Azure",
// ];

export default function HeroStats() {
  return (
    <div className="relative -mt-2 z-20">

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

        {/* Top */}

        <div className="grid gap-8 px-10 py-8 lg:grid-cols-[260px_1fr]">

          <div className="border-b border-slate-200 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">

            <p className="text-xs font-bold uppercase tracking-[2px] text-blue-600">
              Trusted By Businesses
            </p>

            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              Across India
            </h3>

          </div>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">

            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                    <Icon className="h-7 w-7 text-blue-600" />
                  </div>

                  <div>
                    <h4 className="text-3xl font-extrabold text-slate-900">
                      {item.value}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-200" />

        {/* Brands */}

        <div className="flex brandImages items-center justify-center px-6 py-0 sm:px-10 sm:py-2">
          <Image
            src="/images/brands/brand-img_01.png"
            alt="Trusted cybersecurity technology partners"
            width={220}
            height={82}
            className="h-auto w-full max-w-[1400px] object-contain"
          />

          <Image
            src="/images/brands/brand-img_02.png"
            alt="Trusted cybersecurity technology partners"
            width={224}
            height={82}
            className="h-auto w-full max-w-[1400px] object-contain"
          />

          <Image
            src="/images/brands/brand-img_03.png"
            alt="Trusted cybersecurity technology partners"
            width={232}
            height={82}
            className="h-auto w-full max-w-[1400px] object-contain"
          />
           <Image
            src="/images/brands/brand-img_04.png"
            alt="Trusted cybersecurity technology partners"
            width={172}
            height={82}
            className="h-auto w-full max-w-[1400px] object-contain"
          />
           <Image
            src="/images/brands/brand-img_05.png"
            alt="Trusted cybersecurity technology partners"
            width={209}
            height={82}
            className="h-auto w-full max-w-[1400px] object-contain"
          />
           <Image
            src="/images/brands/brand-img_06.png"
            alt="Trusted cybersecurity technology partners"
            width={155}
            height={82}
            className="h-auto w-full max-w-[1400px] object-contain"
          />
           <Image
            src="/images/brands/brand-img_07.png"
            alt="Trusted cybersecurity technology partners"
            width={188}
            height={82}
            className="h-auto w-full max-w-[1400px] object-contain"
          />
        </div>
      </div>

    </div>
  );
}