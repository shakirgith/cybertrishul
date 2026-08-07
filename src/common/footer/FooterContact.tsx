"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function FooterContact() {
  return (
    <div>
      <h3 className="mb-6 text-lg font-bold text-white">
        Contact Us
      </h3>

      <div className="space-y-5">

        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
            <MapPin size={18} />
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">
              Office Address
            </h4>

            <p className="mt-1 text-sm leading-6 text-slate-400">
              SCO-12, 2nd Floor,<br />
              Sector 17, Gurugram,<br />
              Haryana – 122001
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
            <Phone size={18} />
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">
              Call Us
            </h4>

            <Link
              href="tel:+919812661306"
              className="mt-1 block text-sm text-slate-400 transition hover:text-blue-400"
            >
              +91 98126 61306
            </Link>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
            <Mail size={18} />
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">
              Email
            </h4>

            <Link
              href="mailto:info@cybertrishul.com"
              className="mt-1 block text-sm text-slate-400 transition hover:text-blue-400"
            >
              info@cybertrishul.com
            </Link>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
            <Clock size={18} />
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">
              Working Hours
            </h4>

            <p className="mt-1 text-sm text-slate-400">
              Mon – Sat : 9:00 AM – 7:00 PM
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}