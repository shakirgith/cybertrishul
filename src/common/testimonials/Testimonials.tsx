"use client";

import "swiper/css";
import { Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialsData";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 bg-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-600">
            CLIENT TESTIMONIALS
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
            Trusted by Businesses Across India
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-blue-600" />
        </div>

        {/* Slider */}
        {/* <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={900}
          spaceBetween={24}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <TestimonialCard testimonial={item} />
            </SwiperSlide>
          ))}
        </Swiper> */}


<Swiper
  modules={[Autoplay]}
  centeredSlides={false}
  grabCursor={true}
  slidesPerView={3}
  spaceBetween={30}
  loop={true}
  speed={1000}
  observer={true}
  observeParents={true}
  watchOverflow={false}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
    stopOnLastSlide: false,
  }}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  }}
>
{testimonials.map((item, index) => (
  <SwiperSlide key={`${item.id}-${index}`}>
    <TestimonialCard testimonial={item} />
  </SwiperSlide>
))}
    </Swiper>




        {/* CTA */}
        <div className="mt-20 overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-r from-[#F8FBFF] via-[#FDFEFF] to-[#EEF6FF] shadow-xl">
  <div className="grid items-center gap-10 px-8 py-8 lg:grid-cols-[1.3fr_.8fr_1fr] light-bg">

    {/* Left */}
    <div>
      <h3 className="text-4xl font-extrabold text-slate-900">
        Ready to Secure Your Business?
      </h3>

      <p className="mt-4 max-w-md text-slate-600 leading-7">
        Get a FREE Security Assessment and strengthen your business
        against cyber threats today.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <button className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700">
          Book a FREE Consultation →
        </button>

        {/* <button className="rounded-xl border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600">
          Call Our Expert
        </button> */}
      </div>
    </div>

    {/* Center */}
    <div className="flex justify-center">
      <ul className="space-y-5">
        {[
          "No Obligation",
          "Expert Consultation",
          "Actionable Insights",
          "100% Confidential",
        ].map((item) => (
          <li key={item} className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-blue-600">
            <Check className="h-3.5 w-3.5 text-blue-600 stroke-[3]" />
            </div>

            <span className="font-medium text-slate-700">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>

    {/* Right */}
    <div className="flex justify-center">
      <img
        src="/images/cta-security.png"
        alt="Cyber Security"
        className="max-h-[220px] w-auto object-contain"
      />
    </div>

  </div>
</div>
      </div>
    </section>
  );
}