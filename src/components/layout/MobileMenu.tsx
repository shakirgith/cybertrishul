"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall, ArrowRight } from "lucide-react";

import { navigation } from "@/data/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200"
      >
        <Menu className="h-6 w-6 text-slate-800" />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          open ? "visible bg-black/50 opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b p-5">
            <h3 className="text-lg font-bold text-slate-900">
              Cyber Trishul
            </h3>

            <button onClick={() => setOpen(false)}>
              <X className="h-6 w-6 text-slate-700" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="px-5 py-6">
            <ul className="space-y-5">
              {navigation.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block text-base font-medium text-slate-800 hover:text-blue-600"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact */}
            <div className="mt-10 rounded-xl border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-blue-600" />

                <div>
                  <a
                    href="tel:+919812661306"
                    className="font-semibold text-slate-900"
                  >
                    +91 9812661306
                  </a>

                  <p className="text-xs text-slate-500">
                    24×7 Support
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                onClick={() => setOpenQuote(true)}
                className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white"
              >
                Get a Quote

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}