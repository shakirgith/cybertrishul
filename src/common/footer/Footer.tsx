"use client";

import Image from "next/image";
import Link from "next/link";
// import {
//     Shield,
//     Monitor,
//     Cloud,
//     Search,
//     ClipboardCheck,
//     Phone,
//     Mail,
//     MapPin,
//     FacebookIcon,
//     LinkedinIcon,
//     InstagramIcon,
//   } from "lucide-react";
import {
    Phone,
    Mail,
    MapPin,
  } from "lucide-react";

import { quickLinks, services } from "./footerData";

export default function Footer() {
  return (
    <footer className="bg-[#07111F] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          {/* Logo */}
          <div>

            <Image
              src="/images/logo/logo-white.png"
              alt="Cyber Trishul"
              width={220}
              height={60}
            />

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Cyber Trishul delivers advanced cybersecurity solutions
              to protect businesses from evolving cyber threats with
              innovation, expertise and 24×7 support.
            </p>

            <div className="mt-6 flex gap-3">

              {/* <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition"
              >
               <FacebookIcon size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition"
              >
               <LinkedinIcon size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition"
              >
               <InstagramIcon size={18} />
              </a> */}

<div className="h-10 w-10 rounded-full bg-white/10" />
  <div className="h-10 w-10 rounded-full bg-white/10" />
  <div className="h-10 w-10 rounded-full bg-white/10" />

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-lg font-semibold">
              Quick Links
            </h3>

            <div className="space-y-3">

              {quickLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block text-slate-400 hover:text-blue-400 transition"
                >
                  {item.title}
                </Link>
              ))}

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-6 text-lg font-semibold">
              Our Services
            </h3>

            <div className="space-y-4">

              {services.map((service) => {

                const Icon = service.icon;

                return (

                  <Link
                    key={service.title}
                    href={service.href}
                    className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition"
                  >

                    <Icon size={17} />

                    {service.title}

                  </Link>

                );

              })}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-lg font-semibold">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <Phone
                  className="mt-1 text-blue-400"
                  size={18}
                />

                <div>

                  <p className="text-sm text-slate-400">
                    +91 98126 61306
                  </p>

                  <span className="text-xs text-slate-500">
                    24×7 Support
                  </span>

                </div>

              </div>

              <div className="flex gap-3">

                <Mail
                  className="mt-1 text-blue-400"
                  size={18}
                />

                <p className="text-sm text-slate-400">
                  info@cybertrishul.com
                </p>

              </div>

              <div className="flex gap-3">

                <MapPin
                  className="mt-1 text-blue-400"
                  size={18}
                />

                <p className="text-sm leading-6 text-slate-400">
                  B-407 Sector 63,<br />
                  Noida, Uttar Pradesh 201301
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col items-center justify-between gap-4 md:flex-row">

          <p className="text-sm text-slate-400">
            © 2026 Cyber Trishul. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">

            <Link href="#">
              Privacy Policy
            </Link>

            <Link href="#">
              Terms & Conditions
            </Link>

           
          </div>

        </div>

      </div>
    </footer>
  );
}