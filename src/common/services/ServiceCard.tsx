"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <div
      className="
      group relative overflow-hidden rounded-2xl
      border border-slate-200
      bg-white
      p-8
      shadow-sm
      transition-all duration-500
      hover:-translate-y-2
      hover:border-blue-200
      hover:shadow-2xl
    "
    >
      {/* Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Icon */}

      <div
        className="
        flex h-16 w-16 items-center justify-center
        rounded-2xl
        bg-gradient-to-br
        from-blue-50
        to-cyan-50
        transition-all duration-500
        group-hover:scale-110
        group-hover:rotate-6
      "
      >
        <Icon className="h-8 w-8 text-blue-600" />
      </div>

      {/* Content */}

      <h3 className="mt-7 text-2xl font-bold text-slate-900 transition group-hover:text-blue-600">
        {title}
      </h3>

      <p className="mt-4 leading-normal text-slate-600">
        {description}
      </p>

      {/* Link */}

      <Link
        href="/services"
        className="mt-8  d-none inline-flex items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-4"
      >
        Learn More

        <ArrowRight className="h-4 w-4" />
      </Link>

      {/* Bottom Border Animation */}

      <span
        className="
        absolute bottom-0 left-0
        h-1 w-0
        bg-gradient-to-r from-cyan-400 to-blue-600
        transition-all duration-500
        group-hover:w-full
      "
      />
    </div>
  );
}