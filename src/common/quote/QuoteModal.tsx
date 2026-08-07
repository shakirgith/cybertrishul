"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import QuoteForm from "./QuoteForm";
import QuoteBanner from "./QuoteBanner";

type QuoteModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function QuoteModal({
  open,
  onClose,
}: QuoteModalProps) {
  // ESC key close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-5"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition hover:bg-red-100"
        >
          <X size={20} />
        </button>

       
        {/* Form */}

        

        <div className="grid lg:grid-cols-[380px_1fr]">

            

        <QuoteBanner />

        <div className="p-8">
        <QuoteForm onSuccess={onClose} />
        </div>

        

        </div>

        
      </div>
    </div>
  );
}