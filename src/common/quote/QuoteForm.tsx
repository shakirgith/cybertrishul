"use client";

import {
  User,
  Building2,
  Mail,
  Phone,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";

type QuoteFormProps = {
  onClose: () => void;
};

export default function QuoteForm({ onClose }: QuoteFormProps) {
  return (
    <form className="space-y-5">

      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Full Name <span className="text-red-500">*</span>
        </label>

        <div className="relative">
          <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            required
            className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Company Name */}
      <div>
        <label
          htmlFor="companyName"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Company Name
        </label>

        <div className="relative">
          <Building2 className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            id="companyName"
            name="companyName"
            type="text"
            placeholder="Enter your company name"
            className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Email Address <span className="text-red-500">*</span>
        </label>

        <div className="relative">
          <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
            className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Mobile Number */}
      <div>
        <label
          htmlFor="mobile"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Mobile Number <span className="text-red-500">*</span>
        </label>

        <div className="relative">
          <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            id="mobile"
            name="mobile"
            type="tel"
            placeholder="Enter your mobile number"
            required
            className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label
          htmlFor="service"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Service Required
        </label>

        <div className="relative">
          <ShieldCheck className="pointer-events-none absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <select
            id="service"
            name="service"
            defaultValue=""
            className="w-full appearance-none rounded-lg border border-slate-300 bg-white py-3 pl-12 pr-10 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="firewall">Firewall Security</option>
            <option value="endpoint">Endpoint Security</option>
            <option value="cloud">Cloud Security</option>
            <option value="vapt">VAPT Services</option>
            <option value="compliance">Compliance</option>
            <option value="soc">SOC Monitoring</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Message
        </label>

        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your security requirements..."
            className="w-full resize-none rounded-lg border border-slate-300 bg-white py-3 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onClose}
          className="w-full rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
        >
          Request Quote
        </button>
      </div>

    </form>
  );
}