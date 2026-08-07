"use client";

import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 our-service-section">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-100 blur-[140px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span
            className="
            inline-flex rounded-full
            bg-blue-100
            px-5 py-2
            text-xs
            font-bold
            uppercase
            tracking-[3px]
            text-blue-700
          "
          >
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 lg:text-5xl">
            Comprehensive
            <span className="text-blue-600">
              {" "}
              Cybersecurity{" "}
            </span>
            Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-slate-600">
            We provide enterprise-grade cybersecurity solutions designed
            to protect businesses against evolving digital threats while
            ensuring compliance, availability and operational continuity.
          </p>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />

        </div>

        {/* Services Grid */}

        <div
          className="
          grid
          gap-8
          sm:grid-cols-2
          xl:grid-cols-4
        "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

      </div>

    </section>
  );
}