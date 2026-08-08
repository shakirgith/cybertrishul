"use client";

import Link from "next/link";
import Image from "next/image";
import { PhoneCall, ArrowRight } from "lucide-react";
import { useState } from "react";
import QuoteModal from "@/common/quote";






import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";


export default function Header() {
  const [openQuote, setOpenQuote] = useState(false);


  return (
    <>
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white backdrop-blur-md ">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          {/* <Image
            src="/images/logo/logo-icon1.png"
            alt="Cyber Trishul"
            width={45}
            height={45}
            priority
          /> */}
           <Image
            src="/images/logo/logo.png"
            alt="Cyber Trishul"
            width={220}
            height={45}
            priority
          />
       

          {/* <div className="leading-none">
            <h2 className="text-[20px] font-extrabold tracking-tight text-slate-900">
              CYBER TRISHUL
            </h2>

            <p className="mt-1 text-[13px] text-slate-500">
              Secure. Protect. Defend
            </p>
          </div> */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <Navbar />
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-blue-50">
              <PhoneCall className="h-5 w-5 text-blue-600" />
            </div>

            <div className="leading-tight">
              <a
                href="tel:+919812661306"
                className="block contactnuber text-[16px] font-bold text-slate-900 hover:text-blue-600 transition-colors"
              >
                +91 9812661306
              </a>

              <span className="text-xs text-slate-500">
                24×7 Support
              </span>
            </div>
          </div>

          <button
  onClick={() => setOpenQuote(true)}
  className="inline-flex get-qoutbtn items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-7 text-[15px] font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
>
  Get a Quote

  <ArrowRight size={18} />
  </button>




          {/* <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Get a Quote

            <ArrowRight className="h-4 w-4" />
          </Link> */}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <MobileMenu 
          onQuoteClick={() => setOpenQuote(true)} 
            />
        </div>
      </div>

      

    </header>

    <QuoteModal
  open={openQuote}
  onClose={() => setOpenQuote(false)}
/>

    </>
  );
}