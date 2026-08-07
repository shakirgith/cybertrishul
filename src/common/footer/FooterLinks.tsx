"use client";

import Link from "next/link";
import { quickLinks } from "./footerData";

export default function FooterLinks() {
  return (
    <div>
      <h3 className="mb-6 text-lg font-bold text-white">
        Quick Links
      </h3>

      <ul className="space-y-4">
      {quickLinks.map((link) => (
        <li key={link.title}>
            <Link
            href={link.href}
            className="group flex items-center text-slate-400 transition hover:text-blue-500"
            >
            <span className="mr-2 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-3" />

            {link.title}
            </Link>
        </li>
        ))}
      </ul>
    </div>
  );
}