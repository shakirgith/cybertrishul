"use client";

import React, { useState } from "react";
import {
    User,
    Building2,
    Mail,
    Phone,
    Briefcase,
    MessageSquare,
    Send,
  } from "lucide-react";
import { serviceOptions } from "./quoteData";



type Props = {
  onSuccess: () => void;
};


/* ===========================
   ADD HERE
=========================== */

type InputProps = {
    icon: React.ReactNode;
    children: React.ReactNode;
  };
  
  function Field({ icon, children }: InputProps) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 transition-all focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">
        <div className="text-slate-400">
          {icon}
        </div>
  
        <div className="flex-1">
          {children}
        </div>
      </div>
    );
  }
  
  /* ===========================
     END
  =========================== */

export default function QuoteForm({ onSuccess }: Props) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form);

    alert("Thank you! We will contact you shortly.");

    onSuccess();
  };

  return (
<>
 <div className="block">
     <div className="border-b px-8 py-7 w-100 text-center">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-600">
            GET FREE CONSULTATION
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Request a Quote
          </h2>

          <p className="mt-3 text-slate-500">
            Fill in your details and our cybersecurity expert
            will contact you shortly.
          </p>
        </div>

 </div>      



    <form
      onSubmit={handleSubmit}
      className="grid gap-5 md:grid-cols-2"
    >



          {/* Header */}

         

      {/* Full Name */}

      <Field icon={<User size={18} />}>
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Full Name *
        </label>

       
        <input
            type="text"
            name="name"
            placeholder="Full Name *"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full bg-transparent outline-none"
        />
      
      </div>
      </Field>

      {/* Company */}
      <Field icon={<Building2 size={18} />}>
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Company Name
        </label>

       
        <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            className="w-full bg-transparent outline-none"
        />
      </div>
      </Field>

      {/* Email */}

      <Field icon={<Mail size={18} />}>
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Email Address *
        </label>

       
        <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full bg-transparent outline-none"
        />
        
      </div>
      </Field>

      {/* Mobile */}
      <Field icon={<Phone size={18} />}>
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Mobile Number *
        </label>

        
        <input
            type="tel"
            name="phone"
            placeholder="Mobile Number *"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-transparent outline-none"
        />
        
      </div>
      </Field>

      {/* Service */}
      <Field icon={<Briefcase size={18} />}>
      <div className="md:col-span-2">
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Service Required
        </label>

{/*        
        <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full bg-transparent outline-none"
        >
            <option value="">Select Service</option>

            {serviceOptions.map((item) => (
            <option key={item} value={item}>
                {item}
            </option>
            ))}
        </select> */}


        <select
  className="w-full bg-white text-slate-900 outline-none"
>
  <option value="">Select Service</option>
  <option value="soc" className="text-slate-900 bg-white">
    SOC Monitoring
  </option>
  <option value="vapt" className="text-slate-900 bg-white">
    VAPT Services
  </option>
  <option value="cloud" className="text-slate-900 bg-white">
    Cloud Security
  </option>
  <option value="firewall" className="text-slate-900 bg-white">
    Firewall Security
  </option>
  <option value="endpoint" className="text-slate-900 bg-white">
    Endpoint Security
  </option>
</select>
        
      </div>
      </Field>

      {/* Message */}

      <div className="md:col-span-2 rounded-xl border border-slate-300 p-4 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">

        <div className="mb-3 flex items-center gap-2 text-slate-400">
        <MessageSquare size={18} />
        <span className="text-sm">
            Message
        </span>
        </div>

        <textarea
        rows={5}
        name="message"
        placeholder="Tell us about your requirement..."
        value={form.message}
        onChange={handleChange}
        className="w-full resize-none bg-transparent outline-none"
        />

        </div>

      {/* Buttons */}

      <div className="flex justify-end gap-4 md:col-span-2">

        <button
          type="button"
          onClick={onSuccess}
          className="rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100"
        >
          Cancel
        </button>

        <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
        <Send size={18} />

        Request Quote
        </button>

      </div>
    </form>
    </>
  );
}