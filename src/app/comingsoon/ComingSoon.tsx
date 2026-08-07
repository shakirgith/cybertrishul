"use client";

import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

type Props = {
  title: string;
};

export default function ComingSoon({ title }: Props) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#06111F] via-[#0A1D36] to-[#113A6D] px-6">

      <div className="max-w-xl text-center text-white">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-600/20">
          <ShieldCheck className="h-12 w-12 text-blue-400" />
        </div>

        <h1 className="mt-8 text-5xl font-extrabold">
          {title}
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          This page is currently under development.
          <br />
          It will be available very soon.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700"
        >
          <ArrowLeft size={18} />
          Back To Home
        </Link>

      </div>

    </section>
  );
}