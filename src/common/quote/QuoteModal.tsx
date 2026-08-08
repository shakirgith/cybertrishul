"use client";

import { X } from "lucide-react";
import QuoteForm from "./QuoteForm";

type QuoteModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function QuoteModal({
  open,
  onClose,
}: QuoteModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">

        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 sm:px-7">
          <div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Get Free Security Consultation
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Tell us about your security requirements.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <div className="px-5 py-6 sm:px-7 sm:py-7">
          <QuoteForm onClose={onClose} />
        </div>

      </div>
    </div>
  );
}