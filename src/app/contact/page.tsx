"use client";

import {
  ArrowRight,
  Clock3,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Award,
  Zap,
  Send,
  Headphones,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white text-[#0b1730]">

      {/* =====================================================
          INNER PAGE BANNER
          Same banner style as About / Services / Industries
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#03142f] text-white">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(0,102,255,0.22),transparent_35%)]" />

        {/* Network/grid effect */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-40">
          <div className="absolute right-20 top-8 h-48 w-48 rounded-full border border-blue-500/20" />
          <div className="absolute right-32 top-20 h-32 w-32 rounded-full border border-blue-400/20" />
        </div>

         <div className="relative mx-auto w-full max-w-[1400px] px-6 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-[570px]">

            {/* Breadcrumb */}
            <div className="mb-5 flex items-center gap-2 text-sm">
              <span className="font-medium text-[#1683ff]">
                Home
              </span>

              <span className="text-white/40">›</span>

              <span className="text-white/70">
                Contact Us
              </span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Contact Cyber Trishul
            </h1>

            <div className="mt-4 h-[3px] w-10 rounded-full bg-[#1683ff]" />

            <p className="mt-4 max-w-[520px] text-[15px] leading-normal text-white/80">
              We're here to help you strengthen your security posture and
              protect your business from evolving cyber threats.
            </p>
          </div>

          {/* Decorative shield */}
          <div className="absolute right-[8%] top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="flex h-48 w-48 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/5">
              <div className="flex h-32 w-32 items-center justify-center rounded-full border border-blue-400/20">
                <ShieldCheck
                  size={105}
                  strokeWidth={1.2}
                  className="text-[#1683ff]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          STATS
          Same stats used on inner pages
      ===================================================== */}
      <section className="relative z-10 mx-auto -mt-8 max-w-[1400px] px-5">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,35,75,0.10)] sm:grid-cols-2 lg:grid-cols-4">

          <Stat
            icon={<ShieldCheck size={25} />}
            value="250+"
            label="Happy Clients"
          />

          <Stat
            icon={<ShieldCheck size={25} />}
            value="99.9%"
            label="Security Uptime"
          />

          <Stat
            icon={<Headphones size={25} />}
            value="24×7"
            label="SOC Support"
          />

          <Stat
            icon={<Award size={25} />}
            value="12+"
            label="Years Experience"
          />

        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="px-5 pb-10 pt-20">
        <div className="mx-auto max-w-[850px] text-center">

          <p className="text-[17px] font-bold tracking-[0.12em] text-[#1683ff]">
            GET IN TOUCH
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0b1730] sm:text-[34px]">
            We'd Love to Hear From You
          </h2>

          <div className="mx-auto mt-3 h-[3px] w-9 rounded-full bg-[#1683ff]" />

          <p className="mx-auto mt-5 max-w-[700px] text-[14px] leading-normal text-slate-600">
            Have a question, need expert advice, or want to discuss your
            security needs?
            <br className="hidden sm:block" />
            Fill out the form or use our contact details below.
          </p>
        </div>
      </section>


      {/* =====================================================
          CONTACT FORM + CONTACT INFORMATION
      ===================================================== */}
      <section className="px-5 pb-12">
        <div className="mx-auto grid max-w-[1120px] gap-5 lg:grid-cols-[1.65fr_1fr]">

          {/* FORM */}
          <div className="rounded-xl border border-[#dbe6f5] bg-white p-6 shadow-[0_5px_25px_rgba(20,50,100,0.04)] sm:p-8">

            <h2 className="text-[21px] font-extrabold text-[#0b1730]">
              Send Us a Message
            </h2>

            <div className="mt-3 h-[3px] w-7 rounded-full bg-[#1683ff]" />

            <form className="mt-6 space-y-4">

              <div className="grid gap-4 sm:grid-cols-2">

                <FormField
                  label="Full Name"
                  required
                  placeholder="Enter your full name"
                />

                <FormField
                  label="Email Address"
                  required
                  type="email"
                  placeholder="Enter your email"
                />

              </div>

              <FormField
                label="Phone Number"
                required
                placeholder="Enter your phone number"
              />

              <FormField
                label="Company Name"
                placeholder="Enter your company name"
              />

              <div>
                <label className="mb-2 block text-[17px] font-semibold text-[#26364f]">
                  Service You're Interested In
                </label>

                <select className="h-11 w-full rounded-lg border border-[#d7e2f0] bg-white px-3 text-[13px] text-slate-500 outline-none transition focus:border-[#1683ff] focus:ring-2 focus:ring-blue-100">
                  <option>Select a service</option>
                  <option>VAPT Services</option>
                  <option>Network Security</option>
                  <option>Cloud Security</option>
                  <option>Endpoint Security</option>
                  <option>SOC & SIEM</option>
                  <option>Compliance & Risk Management</option>
                  <option>IT Security Consulting</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-[17px] font-semibold text-[#26364f]">
                  Your Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full resize-none rounded-lg border border-[#d7e2f0] px-3 py-3 text-[13px] text-[#0b1730] outline-none placeholder:text-slate-400 transition focus:border-[#1683ff] focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#126ff2] px-5 text-[13px] font-bold text-white shadow-[0_5px_15px_rgba(18,111,242,0.22)] transition hover:bg-[#075fd9]"
              >
                Send Message
                <ArrowRight size={16} />
              </button>

              <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500">
                <LockKeyhole size={13} />
                Your information is secure and will never be shared.
              </div>

            </form>
          </div>


          {/* CONTACT INFORMATION */}
          <div className="rounded-xl border border-[#dbe6f5] bg-[#f7faff] p-6 sm:p-8">

            <h2 className="text-[21px] font-extrabold text-[#0b1730]">
              Contact Information
            </h2>

            <div className="mt-3 h-[3px] w-7 rounded-full bg-[#1683ff]" />

            <div className="mt-7 space-y-8">

              <ContactInfo
                icon={<Phone size={23} />}
                title="Phone"
              >
                <p>+91 9812661306</p>
                <p>24×7 Support</p>
              </ContactInfo>

              <ContactInfo
                icon={<Mail size={23} />}
                title="Email"
              >
                <p>info@cybertrishul.com</p>
                <p>We reply within 24 hours</p>
              </ContactInfo>

              <ContactInfo
                icon={<MapPin size={23} />}
                title="Office Address"
              >
                <p>B-407 Sector 63,</p>
                <p>Noida, Uttar Pradesh 201301</p>
                <p>India</p>
              </ContactInfo>

              <ContactInfo
                icon={<Clock3 size={23} />}
                title="Business Hours"
              >
                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p>Sunday: Closed</p>
              </ContactInfo>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          WHY GET IN TOUCH
      ===================================================== */}
      <section className="px-5 pb-12">
        <div className="mx-auto max-w-[1120px] rounded-xl border border-[#dbe6f5] bg-white px-6 py-8 shadow-[0_5px_25px_rgba(20,50,100,0.03)]">

          <div className="text-center">
            <h2 className="text-[21px] font-extrabold text-[#0b1730]">
              Why Get in Touch With Us?
            </h2>

            <div className="mx-auto mt-3 h-[3px] w-7 rounded-full bg-[#1683ff]" />
          </div>

          <div className="mt-8 grid divide-y divide-[#e4ebf5] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">

            <TrustItem
              icon={<ShieldCheck size={23} />}
              title="Expert Guidance"
              text="Get advice from certified cybersecurity professionals."
            />

            <TrustItem
              icon={<Clock3 size={23} />}
              title="Quick Response"
              text="We respond to all inquiries within 24 hours."
            />

            <TrustItem
              icon={<Award size={23} />}
              title="Tailored Solutions"
              text="Customized security solutions for your unique needs."
            />

            <TrustItem
              icon={<LockKeyhole size={23} />}
              title="Trusted by Many"
              text="Over 250+ businesses trust us with their security."
            />

          </div>
        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="px-5 pb-10">
        <div className="mx-auto max-w-[1120px]">

          <div className="flex flex-col gap-7 rounded-2xl bg-[#03142f] px-7 py-8 text-white shadow-[0_12px_35px_rgba(2,20,47,0.15)] sm:px-12 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-center gap-6">

              <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/5 sm:flex">
                <Headphones
                  size={39}
                  strokeWidth={1.5}
                  className="text-white"
                />
              </div>

              <div>
                <h2 className="text-xl font-extrabold sm:text-[22px]">
                  Need Immediate Assistance?
                </h2>

                <p className="mt-2 max-w-[500px] text-[13px] leading-6 text-white/70">
                  Our security experts are available 24×7 to help you
                  with your urgent security needs.
                </p>
              </div>

            </div>

            <a
              href="tel:+919812661306"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#126ff2] px-6 text-[13px] font-bold text-white transition hover:bg-[#075fd9]"
            >
              Call Us Now
              <ArrowRight size={16} />
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}


/* ============================================================
   STAT COMPONENT
============================================================ */

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-slate-100 px-6 py-6 last:border-0 sm:border-r lg:border-b-0">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf4ff] text-[#126ff2]">
        {icon}
      </div>

      <div>
        <div className="text-[25px] font-extrabold leading-none text-[#0b1730]">
          {value}
        </div>

        <div className="mt-1 text-[11px] font-medium text-slate-500">
          {label}
        </div>
      </div>
    </div>
  );
}


/* ============================================================
   FORM FIELD
============================================================ */

function FormField({
  label,
  required,
  placeholder,
  type = "text",
}: {
  label: string;
  required?: boolean;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-[17px] font-semibold text-[#26364f]">
        {label}{" "}
        {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 w-full rounded-lg border border-[#d7e2f0] px-3 text-[13px] text-[#0b1730] outline-none placeholder:text-slate-400 transition focus:border-[#1683ff] focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}


/* ============================================================
   CONTACT INFORMATION ITEM
============================================================ */

function ContactInfo({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf4ff] text-[#126ff2]">
        {icon}
      </div>

      <div>
        <h3 className="text-[16px] font-extrabold text-[#0b1730]">
          {title}
        </h3>

        <div className="mt-2 space-y-1 text-[14px] leading-normal text-slate-600">
          {children}
        </div>
      </div>

    </div>
  );
}


/* ============================================================
   TRUST ITEM
============================================================ */

function TrustItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="px-5 py-5 text-center">

      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#edf4ff] text-[#126ff2]">
        {icon}
      </div>

      <h3 className="mt-3 text-[16px] font-extrabold text-[#0b1730]">
        {title}
      </h3>

      <p className="mx-auto mt-2 max-w-[190px] text-[14px] leading-normal text-slate-500">
        {text}
      </p>

    </div>
  );
}