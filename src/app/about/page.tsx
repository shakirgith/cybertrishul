// import Image from "next/image";
// import styles from "./about.module.css";

// const stats = [
//   {
//     value: "250+",
//     label: "Happy Clients",
//     icon: "🛡",
//   },
//   {
//     value: "99.9%",
//     label: "Security Uptime",
//     icon: "🛡",
//   },
//   {
//     value: "24×7",
//     label: "SOC Support",
//     icon: "◉",
//   },
//   {
//     value: "12+",
//     label: "Years Experience",
//     icon: "✪",
//   },
// ];

// const values = [
//   {
//     icon: "🛡",
//     title: "Security First",
//     text: "We prioritize the security and privacy of our clients above everything.",
//   },
//   {
//     icon: "💡",
//     title: "Innovation",
//     text: "We embrace innovation to deliver advanced and effective solutions.",
//   },
//   {
//     icon: "♧",
//     title: "Customer Focus",
//     text: "Our clients’ success is our success. We build lasting partnerships.",
//   },
//   {
//     icon: "★",
//     title: "Excellence",
//     text: "We are committed to delivering the highest standards in everything we do.",
//   },
//   {
//     icon: "⟳",
//     title: "Adaptability",
//     text: "We stay ahead by adapting to new threats and evolving technologies.",
//   },
// ];

// const journey = [
//   {
//     year: "2023",
//     title: "The Beginning",
//     text: "Cyber Trishul was established with a mission to provide reliable and innovative cybersecurity solutions.",
//   },
//   {
//     year: "2024",
//     title: "Growth & Achievements",
//     text: "Expanded our team, strengthened our capabilities, and earned the trust of businesses across industries.",
//   },
//   {
//     year: "Today & Beyond",
//     title: "Innovation & Impact",
//     text: "Continuously evolving to stay ahead of threats and empower businesses with future-ready security.",
//   },
// ];

// export default function AboutPage() {
//   return (
//     <main className={styles.aboutPage}>
//       {/* INNER PAGE BANNER */}
//       <section className={styles.hero}>
//         <div className={styles.heroOverlay} />

//         <div className={styles.container}>
//           <div className={styles.breadcrumb}>
//             <span>Home</span>
//             <span>/</span>
//             <strong>About Us</strong>
//           </div>

//           <div className={styles.heroContent}>
//             <p className={styles.heroLabel}>ABOUT CYBER TRISHUL</p>

//             <h1>About Cyber Trishul</h1>

//             <div className={styles.heroLine} />

//             <p>
//               We are a team of cybersecurity experts dedicated to protecting
//               businesses from evolving digital threats with innovative and
//               reliable security solutions.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* STATS */}
//       <section className={styles.statsWrapper}>
//         <div className={`${styles.container} ${styles.statsContainer}`}>
//           {stats.map((stat) => (
//             <div className={styles.statItem} key={stat.label}>
//               <div className={styles.statIcon}>{stat.icon}</div>

//               <div>
//                 <div className={styles.statValue}>{stat.value}</div>
//                 <div className={styles.statLabel}>{stat.label}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* WHO WE ARE */}
//       <section className={styles.whoWeAre}>
//         <div className={styles.container}>
//           <div className={styles.whoGrid}>
//             <div className={styles.aboutImage}>
//               <Image
//                 src="/images/about-security.png"
//                 alt="Cybersecurity Operations Center"
//                 fill
//                 sizes="(max-width: 768px) 100vw, 50vw"
//               />
//             </div>

//             <div className={styles.aboutContent}>
//               <span className={styles.sectionLabel}>WHO WE ARE</span>

//               <h2>Your Security. Our Priority.</h2>

//               <div className={styles.blueLine} />

//               <p>
//                 We are a team of cybersecurity experts passionate about
//                 protecting your digital assets and ensuring your business
//                 stays secure, compliant, and resilient.
//               </p>

//               <p>
//                 Our customer-focused approach and deep industry expertise
//                 allow us to deliver enterprise-grade security solutions
//                 tailored to your unique business needs.
//               </p>

//               <a href="/about" className={styles.outlineButton}>
//                 Learn More About Us
//                 <span>→</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* MISSION + VISION */}
//       <section className={styles.missionVision}>
//         <div className={styles.container}>
//           <div className={styles.mvGrid}>
//             <div className={styles.mvCard}>
//               <div className={styles.mvIcon}>◎</div>

//               <div>
//                 <h3>Our Mission</h3>
//                 <div className={styles.smallLine} />

//                 <p>
//                   To empower businesses with robust cybersecurity solutions
//                   that protect, detect, and respond to threats, enabling them
//                   to operate with confidence in the digital world.
//                 </p>
//               </div>
//             </div>

//             <div className={styles.mvCard}>
//               <div className={styles.mvIcon}>◉</div>

//               <div>
//                 <h3>Our Vision</h3>
//                 <div className={styles.smallLine} />

//                 <p>
//                   To be a leading cybersecurity solutions provider, setting
//                   the standard for excellence, innovation, and trust in the
//                   ever-evolving digital landscape.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CORE VALUES */}
//       <section className={styles.valuesSection}>
//         <div className={styles.container}>
//           <div className={styles.sectionHeading}>
//             <span className={styles.sectionLabel}>OUR CORE VALUES</span>

//             <h2>The Principles That Drive Us</h2>

//             <div className={styles.centerLine} />
//           </div>

//           <div className={styles.valuesGrid}>
//             {values.map((value) => (
//               <div className={styles.valueCard} key={value.title}>
//                 <div className={styles.valueIcon}>{value.icon}</div>

//                 <h3>{value.title}</h3>

//                 <p>{value.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* JOURNEY */}
//       <section className={styles.journeySection}>
//         <div className={styles.container}>
//           <div className={styles.sectionHeading}>
//             <span className={styles.sectionLabel}>OUR JOURNEY</span>

//             <h2>Building a Secure Tomorrow</h2>

//             <div className={styles.centerLine} />
//           </div>

//           <div className={styles.timeline}>
//             <div className={styles.timelineLine} />

//             {journey.map((item) => (
//               <div className={styles.timelineItem} key={item.year}>
//                 <div className={styles.timelineYear}>{item.year}</div>

//                 <div className={styles.timelineDot} />

//                 <div className={styles.timelineContent}>
//                   <h3>{item.title}</h3>
//                   <p>{item.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className={styles.ctaSection}>
//         <div className={styles.container}>
//           <div className={styles.ctaBox}>
//             <div className={styles.ctaIcon}>◉</div>

//             <div className={styles.ctaText}>
//               <h2>Ready to Strengthen Your Security?</h2>

//               <p>
//                 Partner with Cyber Trishul for reliable, innovative and
//                 result-driven cybersecurity solutions.
//               </p>
//             </div>

//             <a href="/contact" className={styles.ctaButton}>
//               Get a Free Consultation
//               <span>→</span>
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

import Image from "next/image";
import Link from "next/link";

import {
  ShieldCheck,
  Headphones,
  Award,
  Target,
  Eye,
  Lightbulb,
  Users,
  Star,
  RefreshCw,
  ArrowRight,
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
    icon: Award,
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Security First",
    text: "We prioritize the security and privacy of our clients above everything.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We embrace innovation to deliver advanced and effective solutions.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    text: "Our clients’ success is our success. We build lasting partnerships.",
  },
  {
    icon: Star,
    title: "Excellence",
    text: "We are committed to delivering the highest standards in everything we do.",
  },
  {
    icon: RefreshCw,
    title: "Adaptability",
    text: "We stay ahead by adapting to new threats and evolving technologies.",
  },
];

const journey = [
  {
    year: "2023",
    title: "The Beginning",
    text: "Cyber Trishul was established with a mission to provide reliable and innovative cybersecurity solutions.",
  },
  {
    year: "2024",
    title: "Growth & Achievements",
    text: "Expanded our team, strengthened our capabilities, and earned the trust of businesses across industries.",
  },
  {
    year: "Today & Beyond",
    title: "Innovation & Impact",
    text: "Continuously evolving to stay ahead of threats and empower businesses with future-ready security.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* =====================================================
          INNER PAGE BANNER
          ===================================================== */}

      <section className="relative overflow-hidden bg-[#06152f]">

        {/* Background image */}
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

            <span className="text-blue-300/60">/</span>

            <span className="text-white">About Us</span>
          </div>

          <div className="max-w-2xl">

            <p className="mb-3 text-md font-bold uppercase tracking-[0.18em] text-blue-400">
              ABOUT CYBER TRISHUL
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              About Cyber Trishul
            </h1>

            <div className="mt-4 h-1 w-12 rounded-full bg-blue-500" />

            <p className="mt-5 max-w-xl text-sm text-xl leading-normal text-slate-200 sm:text-base">
              We are a team of cybersecurity experts dedicated to protecting
              businesses from evolving digital threats with innovative and
              reliable security solutions.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          STATS
          ABOUT PAGE ONLY
          ===================================================== */}

      <section className="relative z-10 -mt-7 px-5 sm:px-6 lg:px-8">

        <div className="mx-auto w-full max-w-[1400px] px-6">

          <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)] sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`
                    flex items-center gap-4 px-6 py-6
                    lg:py-7
                    ${
                      index !== stats.length - 1
                        ? "border-b border-slate-200 sm:border-r lg:border-b-0"
                        : ""
                    }
                  `}
                >

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-blue-50">
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
          WHO WE ARE
          ===================================================== */}

      <section className="px-5 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">

        <div className="mx-auto max-w-6xl">

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Image */}

            <div className="relative overflow-hidden rounded-2xl">

              <div className="relative aspect-[4/3] w-full">

                <Image
                  src="/images/about-security.png"
                  alt="Cybersecurity Operations Center"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

              </div>

            </div>


            {/* Content */}

            <div>

              <span className="text-md font-bold uppercase tracking-[0.16em] text-blue-600">
                WHO WE ARE
              </span>

              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Your Security. Our Priority.
              </h2>

              <div className="mt-4 h-1 w-10 rounded-full bg-blue-600" />

              <div className="mt-6 space-y-4 text-sm text-xl text-xl text-xl leading-normal text-slate-600">

                <p>
                  We are a team of cybersecurity experts passionate about
                  protecting your digital assets and ensuring your business
                  stays secure, compliant, and resilient.
                </p>

                <p>
                  Our customer-focused approach and deep industry expertise
                  allow us to deliver enterprise-grade security solutions
                  tailored to your unique business needs.
                </p>

              </div>

              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-5 py-2.5 text-sm text-xl text-xl font-semibold text-blue-600 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Learn More About Us

                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MISSION + VISION
          ===================================================== */}

      <section className="px-5 py-8 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-5 lg:grid-cols-2">

            {/* Mission */}

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(15,23,42,0.07)]">

              <div className="flex gap-5">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-50">

                  <Target
                    className="h-7 w-7 text-blue-600"
                    strokeWidth={1.8}
                  />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-slate-900">
                    Our Mission
                  </h3>

                  <div className="mt-2 h-1 w-8 rounded-full bg-blue-600" />

                  <p className="mt-4 text-sm text-xl text-xl leading-normal text-slate-600">
                    To empower businesses with robust cybersecurity solutions
                    that protect, detect, and respond to threats, enabling them
                    to operate with confidence in the digital world.
                  </p>

                </div>

              </div>

            </div>


            {/* Vision */}

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(15,23,42,0.07)]">

              <div className="flex gap-5">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-50">

                  <Eye
                    className="h-7 w-7 text-blue-600"
                    strokeWidth={1.8}
                  />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-slate-900">
                    Our Vision
                  </h3>

                  <div className="mt-2 h-1 w-8 rounded-full bg-blue-600" />

                  <p className="mt-4 text-sm text-xl text-xl leading-normal text-slate-600">
                    To be a leading cybersecurity solutions provider, setting
                    the standard for excellence, innovation, and trust in the
                    ever-evolving digital landscape.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CORE VALUES
          ===================================================== */}

      <section className="px-5 py-12 sm:px-6 lg:px-8 lg:py-16">

        <div className="mx-auto max-w-6xl">

          {/* Section heading */}

          <div className="text-center">

            <span className="text-md font-bold uppercase tracking-[0.16em] text-blue-600">
              OUR CORE VALUES
            </span>

            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              The Principles That Drive Us
            </h2>

            <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-blue-600" />

          </div>


          {/* Values */}

          <div className="mt-12 grid grid-cols-1 divide-y divide-slate-200 border-y border-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="px-5 py-7 text-center lg:px-4"
                >

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">

                    <Icon
                      className="h-6 w-6 text-blue-600"
                      strokeWidth={1.8}
                    />

                  </div>

                  <h3 className="mt-5 text-sm text-xl text-xl font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[180px] text-md leading-normal text-slate-500">
                    {value.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          JOURNEY
          ===================================================== */}

      <section className="px-5 pb-14 sm:px-6 lg:px-8 lg:pb-20">

        <div className="mx-auto max-w-6xl">

          <div className="border-t border-slate-200 pt-10">

            <div className="text-center">

              <span className="text-md font-bold uppercase tracking-[0.16em] text-blue-600">
                OUR JOURNEY
              </span>

              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Building a Secure Tomorrow
              </h2>

              <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-blue-600" />

            </div>


            {/* Desktop timeline */}

            <div className="relative mt-14 hidden lg:block">

              {/* Line */}

              <div className="absolute left-[16.66%] right-[16.66%] top-4 h-px bg-blue-200" />

              <div className="grid grid-cols-3">

                {journey.map((item) => (
                  <div
                    key={item.year}
                    className="relative px-8 text-center"
                  >

                    {/* Year */}

                    <div className="relative z-10 mx-auto inline-flex rounded-md bg-blue-600 px-3 py-1 text-md font-bold text-white">
                      {item.year}
                    </div>

                    {/* Dot */}

                    <div className="relative z-10 mx-auto mt-2 h-3 w-3 rounded-full border-2 border-white bg-blue-600 ring-2 ring-blue-100" />

                    <h3 className="mt-5 text-sm text-xl text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-xs text-md leading-normal text-slate-500">
                      {item.text}
                    </p>

                  </div>
                ))}

              </div>

            </div>


            {/* Mobile timeline */}

            <div className="mt-10 space-y-8 lg:hidden">

              {journey.map((item, index) => (
                <div
                  key={item.year}
                  className="relative flex gap-5"
                >

                  {index !== journey.length - 1 && (
                    <div className="absolute left-[19px] top-10 h-[calc(100%+32px)] w-px bg-blue-200" />
                  )}

                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                    {item.year === "Today & Beyond"
                      ? "NOW"
                      : item.year}
                  </div>

                  <div className="pt-1">

                    <h3 className="text-sm text-xl text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-md leading-normal text-slate-500">
                      {item.text}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

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

                <p className="mt-2 max-w-xl text-sm text-lg  leading-normal text-blue-100/80">
                  Partner with Cyber Trishul for reliable, innovative and
                  result-driven cybersecurity solutions.
                </p>

              </div>


              {/* Button */}

             <Link
                           href="/contact"
                           className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#126cff] px-6 py-3 text-sm font-bold !text-white shadow-[0_8px_25px_rgba(18,108,255,0.25)] transition hover:bg-[#0870ff]"
                         >
                           Get a Free Consultation
                           <ArrowRight size={17} />
                         </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}