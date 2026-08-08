import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  HeartPulse,
  ShoppingCart,
  Factory,
  GraduationCap,
  ShieldCheck,
  Plane,
  Truck,
  Zap,
  Umbrella,
  Clapperboard,
  Code2,
  Target,
  Clock3,
  UsersRound,
  Headphones,
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Banking & Financial Services",
    text: "Protect sensitive financial data, ensure regulatory compliance, and prevent fraud with our advanced security solutions.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Life Sciences",
    text: "Secure patient data, medical devices, and critical systems while ensuring HIPAA compliance and business continuity.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    text: "Safeguard customer data, payment systems, and online transactions from cyber threats and fraud.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    text: "Protect industrial systems, OT/IT networks, and intellectual property from targeted cyber attacks.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "Secure digital learning environments, student data, and institutional systems from evolving threats.",
  },
  {
    icon: ShieldCheck,
    title: "Government & Public Sector",
    text: "Strengthen cybersecurity posture, protect citizen data, and ensure compliance with government regulations.",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    text: "Protect customer information, booking systems, and ensure seamless operations across digital platforms.",
  },
  {
    icon: Truck,
    title: "Logistics & Transportation",
    text: "Secure supply chains, fleet operations, and critical logistics data from cyber disruptions.",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    text: "Protect critical infrastructure, SCADA systems, and ensure uninterrupted services with robust security.",
  },
  {
    icon: Umbrella,
    title: "Insurance",
    text: "Secure policyholder data, claims systems, and ensure compliance with industry standards.",
  },
  {
    icon: Clapperboard,
    title: "Media & Entertainment",
    text: "Protect digital content, intellectual property, and platforms from cyber threats.",
  },
  {
    icon: Code2,
    title: "Technology & IT Services",
    text: "Secure software, applications, and infrastructure while ensuring business resilience.",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Industry Expertise",
    text: "Deep understanding of industry-specific risks and compliance requirements.",
  },
  {
    icon: Target,
    title: "Customized Solutions",
    text: "Tailored cybersecurity strategies designed to address your unique business challenges.",
  },
  {
    icon: Clock3,
    title: "24×7 Protection",
    text: "Round-the-clock monitoring and support to ensure continuous security and peace of mind.",
  },
  {
    icon: UsersRound,
    title: "Proven Track Record",
    text: "Trusted by organizations across industries to deliver measurable security outcomes.",
  },
];

const stats = [
  {
    value: "250+",
    label: "Happy Clients",
    icon: ShieldCheck,
  },
  {
    value: "99.9%",
    label: "Security Uptime",
    icon: ShieldCheck,
  },
  {
    value: "24×7",
    label: "SOC Support",
    icon: Headphones,
  },
  {
    value: "12+",
    label: "Years Experience",
    icon: Target,
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* =====================================================
          INNER PAGE BANNER
          Same banner design as About / Services
      ====================================================== */}

  
          <section className="relative overflow-hidden bg-[#06152f]">
      
              <div className="absolute inset-0">
                <Image
                  src="/images/inner-banner.jpg"
                  alt=""
                  fill
                  priority
                  className="object-cover"
                />
      
                <div className="absolute inset-0 bg-[#06152f]/85" />
              </div>
      
              <div className="relative mx-auto w-full max-w-[1400px] px-6 py-12 sm:px-6 lg:px-8 lg:py-16">
      
                {/* Breadcrumb */}
      
                <div className="mb-5 flex items-center gap-2 text-md font-medium text-blue-200">
      
                  <Link
                    href="/"
                    className="transition hover:text-white"
                  >
                    Home
                  </Link>
      
                  <span className="text-blue-300/60">
                    ›
                  </span>
      
                  <span className="text-white">
                    Industries
                  </span>
      
                </div>
      
                <div className="max-w-2xl">
      
                  <p className="mb-3 text-md font-bold uppercase tracking-[0.18em] text-blue-400">
                    All Industries
                  </p>
      
                  <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                     Industries We Protect
                  </h1>
      
                  <div className="mt-4 h-1 w-12 rounded-full bg-blue-500" />
      
                  <p className="mt-5 max-w-xl text-sm leading-normal text-slate-200 sm:text-base">
                    We deliver industry-specific cybersecurity solutions to help
              organizations secure their critical assets, ensure compliance,
              and stay resilient against evolving threats.
                  </p>
      
                </div>
      
              </div>
            </section>
      

      {/* =====================================================
          STATS
          Same design as About / Services
      ====================================================== */}

      <section className="relative z-10 -mt-7 px-5 sm:px-6 lg:px-8">

        <div className="mx-auto w-full max-w-[1400px] px-6">

          <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)] sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((stat, index) => {

              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`
                    flex items-center gap-4 px-6 py-6 lg:py-7
                    ${
                      index !== stats.length - 1
                        ? "border-b border-slate-200 sm:border-r lg:border-b-0"
                        : ""
                    }
                  `}
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">

                    <Icon
                      className="h-6 w-6 text-blue-600"
                      strokeWidth={2}
                    />

                  </div>

                  <div>

                    <div className="text-2xl font-extrabold leading-none text-slate-900">
                      {stat.value}
                    </div>

                    <div className="mt-1 text-md font-medium text-slate-500">
                      {stat.label}
                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          INDUSTRIES INTRO
      ====================================================== */}

      <section className="px-5 pb-8 pt-20 sm:px-8 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-[850px] text-center">
          <span className="text-md font-bold tracking-[0.12em] text-[#1677ff] sm:text-sm">
            INDUSTRIES WE SERVE
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#071a38] sm:text-4xl">
            Tailored Security for Every Industry
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-10 rounded-full bg-[#1677ff]" />

          <p className="mx-auto mt-5 max-w-[760px] text-sm leading-normal text-slate-600 sm:text-base">
            Every industry faces unique challenges. Our deep domain expertise
            enables us to deliver customized cybersecurity solutions that
            protect what matters most to your business.
          </p>
        </div>
      </section>

      {/* =====================================================
          INDUSTRY CARDS
      ====================================================== */}

      <section className="px-5 pb-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.title}
                className="group flex min-h-[205px] flex-col rounded-xl border border-[#dce8f8] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#a9cfff] hover:shadow-[0_12px_30px_rgba(22,119,255,0.10)]"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef5ff]">
                  <Icon
                    size={24}
                    strokeWidth={1.8}
                    className="text-[#126cff]"
                  />
                </div>

                <h3 className="text-[17px] font-bold leading-6 text-[#071a38]">
                  {industry.title}
                </h3>

                <p className="mt-2 text-[13px] leading-normal text-slate-600">
                  {industry.text}
                </p>

                <Link
                  href="/contact"
                  className="mt-auto flex items-center gap-2 pt-4 text-md font-bold text-[#126cff] transition group-hover:gap-3"
                >
                  Learn More
                  <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          WHY BUSINESSES TRUST US
      ====================================================== */}

      <section className="px-5 pb-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1120px] rounded-2xl border border-[#dce8f8] bg-white px-6 py-9 shadow-[0_4px_20px_rgba(15,23,42,0.03)] sm:px-10 lg:px-14">
          <div className="text-center">
            <span className="text-md font-bold tracking-[0.12em] text-[#1677ff]">
              WHY BUSINESSES TRUST US
            </span>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#071a38] sm:text-3xl">
              Built for Your Industry. Secured for the Future.
            </h2>

            <div className="mx-auto mt-4 h-[3px] w-10 rounded-full bg-[#1677ff]" />
          </div>

          <div className="mt-9 grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {trustPoints.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.title}
                  className="px-5 py-6 text-center first:pt-0 last:pb-0 sm:py-2 lg:px-7"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#eef5ff]">
                    <Icon
                      size={23}
                      strokeWidth={1.8}
                      className="text-[#126cff]"
                    />
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-[#071a38]">
                    {point.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[190px] text-md leading-normal text-slate-600">
                    {point.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
          Same CTA style as Services / About
      ====================================================== */}

      <section className="px-5 pb-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1120px]">
          <div className="flex flex-col gap-7 rounded-2xl bg-[#031638] px-7 py-8 text-white sm:px-10 lg:flex-row lg:items-center lg:px-12 lg:py-9">
            {/* Icon */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Headphones
                size={34}
                strokeWidth={1.5}
                className="text-white"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h2 className="text-xl font-bold sm:text-2xl">
                Protect Your Industry. Protect Your Future.
              </h2>

              <p className="mt-2 max-w-[560px] text-sm leading-6 text-white/70">
                Partner with Cyber Trishul for industry-focused cybersecurity
                solutions that keep you ahead of threats.
              </p>
            </div>

            {/* Button */}
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#126cff] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_25px_rgba(18,108,255,0.25)] transition hover:bg-[#0870ff]"
            >
              Get a Free Consultation
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}