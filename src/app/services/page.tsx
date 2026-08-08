import Image from "next/image";
import Link from "next/link";

import {
  ShieldCheck,
  Network,
  Cloud,
  Monitor,
  ScanSearch,
  Users,
  FileCheck,
  GraduationCap,
  Database,
  CloudAlert,
  Landmark,
  Settings,
  Headphones,
  ArrowRight,
  Search,
  Shield,
  Radar,
  GitBranch,
  RefreshCw,
} from "lucide-react";

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
    icon: FileCheck,
  },
];

const services = [
  {
    icon: ScanSearch,
    title: "VAPT Services",
    text: "Identify and fix security vulnerabilities in your applications, networks, and systems with our comprehensive Vulnerability Assessment and Penetration Testing.",
  },
  {
    icon: Network,
    title: "Network Security",
    text: "Protect your network infrastructure from unauthorized access, attacks, and data breaches with our advanced network security solutions.",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    text: "Secure your cloud environment with our cloud security assessments, configuration reviews, and compliance management.",
  },
  {
    icon: Monitor,
    title: "Endpoint Security",
    text: "Protect endpoints across your organization from malware, ransomware, and threats with next-gen endpoint security solutions.",
  },
  {
    icon: ScanSearch,
    title: "Application Security",
    text: "Secure your applications throughout the SDLC with code review, security testing, and runtime application protection.",
  },
  {
    icon: Users,
    title: "SOC & SIEM",
    text: "24×7 monitoring, threat detection, and incident response with our Security Operations Center and SIEM solutions.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Risk Management",
    text: "Achieve and maintain compliance with industry standards and manage cybersecurity risks effectively.",
  },
  {
    icon: GraduationCap,
    title: "Security Awareness Training",
    text: "Empower your team with the right knowledge to recognize and respond to cybersecurity threats.",
  },
  {
    icon: Database,
    title: "Data Protection",
    text: "Safeguard your sensitive data with encryption, DLP solutions, and secure backup strategies.",
  },
  {
    icon: CloudAlert,
    title: "Incident Response",
    text: "Minimize the impact of security incidents with our rapid response and digital forensics services.",
  },
  {
    icon: Landmark,
    title: "Governance, Risk & Compliance",
    text: "Build a strong security framework aligned with your business objectives and regulatory requirements.",
  },
  {
    icon: Settings,
    title: "IT Security Consulting",
    text: "Strategic cybersecurity consulting to help you build, optimize, and strengthen your security posture.",
  },
];

const process = [
  {
    number: "01",
    title: "Identify",
    text: "We identify assets, vulnerabilities, and business risks.",
    icon: Search,
  },
  {
    number: "02",
    title: "Protect",
    text: "We implement security controls to protect your business.",
    icon: Shield,
  },
  {
    number: "03",
    title: "Detect",
    text: "We continuously monitor and detect potential threats.",
    icon: Radar,
  },
  {
    number: "04",
    title: "Respond",
    text: "We respond quickly to contain and mitigate incidents.",
    icon: GitBranch,
  },
  {
    number: "05",
    title: "Recover",
    text: "We help you recover faster and strengthen for the future.",
    icon: RefreshCw,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* =====================================================
          INNER PAGE BANNER
          Same banner structure as About page
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
              Services
            </span>

          </div>

          <div className="max-w-2xl">

            <p className="mb-3 text-md font-bold uppercase tracking-[0.18em] text-blue-400">
              OUR SERVICES
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Our Cybersecurity Services
            </h1>

            <div className="mt-4 h-1 w-12 rounded-full bg-blue-500" />

            <p className="mt-5 max-w-xl text-sm leading-normal text-slate-200 sm:text-base">
              Comprehensive security services to protect your business
              from evolving cyber threats and ensure a secure digital
              future.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          STATS
          Same as About page
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
          SERVICES INTRO
      ====================================================== */}

      <section className="px-5 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">

        <div className="mx-auto max-w-6xl text-center">

          <span className="text-md font-bold uppercase tracking-[0.16em] text-blue-600">
            WHAT WE OFFER
          </span>

          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Comprehensive Cybersecurity Services
          </h2>

          <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-blue-600" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-normal text-slate-600">
            We offer a wide range of cybersecurity services designed to
            identify, protect, detect, respond, and recover from cyber
            threats.
          </p>

        </div>

      </section>


      {/* =====================================================
          SERVICE CARDS
      ====================================================== */}

      <section className="px-5 pb-14 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {services.map((service) => {

              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group flex min-h-[300px] flex-col rounded-xl border border-blue-100 bg-white p-5 shadow-[0_4px_20px_rgba(37,99,235,0.03)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(37,99,235,0.09)]"
                >

                  {/* Icon */}

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-600">

                    <Icon
                      className="h-6 w-6 text-blue-600 transition group-hover:text-white"
                      strokeWidth={1.8}
                    />

                  </div>


                  {/* Title */}

                  <h3 className="mt-5 text-base font-bold leading-normal text-slate-900">
                    {service.title}
                  </h3>


                  {/* Description */}

                  <p className="mt-3 text-md leading-normal text-slate-600">
                    {service.text}
                  </p>


                  {/* Learn More */}

                  <Link
                    href="/contact"
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-md font-bold text-blue-600 transition hover:text-blue-700"
                  >
                    Learn More

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

                  </Link>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR APPROACH / PROCESS
      ====================================================== */}

      <section className="px-5 pb-14 sm:px-6 lg:px-8 lg:pb-20">

        <div className="mx-auto max-w-6xl">

          <div className="border-t border-slate-200 pt-12">

            {/* Heading */}

            <div className="text-center">

              <span className="text-md font-bold uppercase tracking-[0.16em] text-blue-600">
                OUR APPROACH
              </span>

              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Our Proven Process
              </h2>

              <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-blue-600" />

            </div>


            {/* Desktop process */}

            <div className="relative mt-14 hidden lg:block">

              {/* Connecting line */}

              <div className="absolute left-[10%] right-[10%] top-6 h-px border-t border-dashed border-blue-200" />

              <div className="grid grid-cols-5">

                {process.map((item) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className="relative px-5 text-center"
                    >

                      {/* Circle */}

                      <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 shadow-md shadow-blue-600/20">

                        <Icon
                          className="h-5 w-5 text-white"
                          strokeWidth={1.8}
                        />

                      </div>


                      {/* Number */}

                      <div className="mt-4 text-md font-bold tracking-wider text-slate-400">
                        {item.number}
                      </div>


                      {/* Title */}

                      <h3 className="mt-1 text-sm font-bold text-slate-900">
                        {item.title}
                      </h3>


                      {/* Text */}

                      <p className="mx-auto mt-2 max-w-[150px] text-[11px] leading-normal text-slate-500">
                        {item.text}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>


            {/* Mobile process */}

            <div className="mt-10 space-y-7 lg:hidden">

              {process.map((item, index) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="relative flex gap-4"
                  >

                    {index !== process.length - 1 && (
                      <div className="absolute left-6 top-12 h-[calc(100%+28px)] w-px bg-blue-200" />
                    )}

                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 shadow-md shadow-blue-600/20">

                      <Icon
                        className="h-5 w-5 text-white"
                        strokeWidth={1.8}
                      />

                    </div>

                    <div className="pt-1">

                      <div className="text-[11px] font-bold tracking-wider text-blue-600">
                        {item.number}
                      </div>

                      <h3 className="mt-1 text-base font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-md leading-normal text-slate-500">
                        {item.text}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
          Same style as About
      ====================================================== */}

      <section className="px-5 pb-12 sm:px-6 lg:px-8 lg:pb-16">

        <div className="mx-auto max-w-6xl">

          <div className="overflow-hidden rounded-2xl bg-[#071b45] px-7 py-9 sm:px-10 lg:px-14 lg:py-11">

            <div className="flex flex-col items-start gap-7 lg:flex-row lg:items-center">

              {/* Icon */}

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">

                <Headphones
                  className="h-8 w-8 text-white"
                  strokeWidth={1.7}
                />

              </div>


              {/* Text */}

              <div className="flex-1">

                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Ready to Strengthen Your Security?
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-blue-100/80">
                  Partner with Cyber Trishul for reliable, innovative and
                  result-driven cybersecurity solutions.
                </p>

              </div>


              {/* Button */}

              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
              >
                Get a Free Consultation

                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}