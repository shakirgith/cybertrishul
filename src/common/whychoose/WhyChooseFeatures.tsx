"use client";

import {
  ShieldCheck,
  Shield,
  Zap,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "24×7 Security Operations",
    description:
      "Round-the-clock monitoring with our expert SOC team to detect and respond to cyber threats.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Security Experts",
    description:
      "Our team of certified cybersecurity professionals delivers enterprise-grade protection.",
  },
  {
    icon: Zap,
    title: "Rapid Incident Response",
    description:
      "Immediate threat containment and recovery support to minimize business downtime.",
  },
  {
    icon: Shield,
    title: "Enterprise Grade Security",
    description:
      "Advanced security solutions, compliance support and best practices for every business.",
  },
];

export default function WhyChooseFeatures() {
  return (
    <div className="space-y-8">
      {features.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group flex items-start gap-5"
          >
            {/* Icon */}

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
              <Icon className="h-7 w-7" />
            </div>

            {/* Content */}

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}