"use client";

import Link from "next/link";
import { services } from "./footerData";

export default function FooterServices() {
  return (
    <div>
      <h3 className="mb-6 text-lg font-bold text-white">
        Our Services
      </h3>

      <ul className="space-y-4">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <li key={service.title}>
              <Link
                href="#"
                className="group flex items-center gap-3 text-slate-400 transition hover:text-blue-400"
              >
                <Icon
                  size={16}
                  className="text-blue-500 transition group-hover:scale-110"
                />

                <span>{service.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}