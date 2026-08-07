"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";

type Props = {
  testimonial: {
    name: string;
    company: string;
    designation: string;
    review: string;
    image: string;
  };
};

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="relative h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-[330px]">

      {/* Quote */}
      <div className="absolute right-8 top-8">
        <Quote className="h-10 w-10 text-blue-100" />
      </div>

      {/* Rating */}
      <div className="mb-5 flex gap-1">
        {[1,2,3,4,5].map((item) => (
          <Star
            key={item}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Review */}
      <p className="mb-8 leading-8 text-slate-600">
        "{testimonial.review}"
      </p>

      {/* Client */}
      <div className="flex items-center gap-4">

        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={60}
          height={60}
          className="h-14 w-14 rounded-full object-cover border-2 border-blue-100"
        />

        <div>
          <h3 className="text-lg font-bold text-slate-900">
            {testimonial.name}
          </h3>

          <p className="text-sm font-medium text-blue-600">
            {testimonial.designation}
          </p>

          <p className="text-sm text-slate-500">
            {testimonial.company}
          </p>
        </div>

      </div>

    </div>
  );
}