"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function FooterLogo() {
  return (
    <div>
      {/* Logo */}
      <Link href="/" className="inline-block">
        <Image
          src="/images/logo/logo-white.png" // later replace with your white logo
          alt="Cyber Trishul"
          width={220}
          height={60}
          className="h-auto w-auto"
        />
      </Link>

      {/* Description */}
      <p className="mt-6 max-w-[320px] text-[15px] leading-7 text-slate-400">
        Cyber Trishul delivers advanced cybersecurity solutions to
        protect businesses from evolving cyber threats with innovation,
        expertise and 24×7 support.
      </p>

      {/* Social */}
      <div className="mt-7 flex items-center gap-3">
        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-blue-500 hover:bg-blue-600"
        >
          <Facebook size={18} />
        </a>

        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-blue-500 hover:bg-blue-600"
        >
          <Instagram size={18} />
        </a>

        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-blue-500 hover:bg-blue-600"
        >
          <Linkedin size={18} />
        </a>

        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-blue-500 hover:bg-blue-600"
        >
          <Youtube size={18} />
        </a>
      </div>
    </div>
  );
}