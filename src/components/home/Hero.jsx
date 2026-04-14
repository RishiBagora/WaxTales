"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  const swiperRef = useRef(null);

  const slides = [
    "/images/candle-hero.png",
    "/images/candle-hero2.png",
    "/images/candle-hero3.png",
  ];

  return (
    <div>
    <section className="relative w-full h-[90vh] overflow-hidden">

      {/* SWIPER */}
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        loop
        speed={1200}
        autoplay={{ delay: 800 }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="h-full w-full"
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt="hero"
              className="w-full h-full object-cover transition duration-[2000ms]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* COFFEE OVERLAY */}
      {/* GRADIENT FADE OVERLAY */}
<div className="absolute inset-0 z-10 
  bg-gradient-to-t 
  from-[rgba(36,21,7,0.85)] 
  via-[rgba(36,21,7,0.35)] 
  to-transparent" />

      {/* CONTENT */}
      <div className="absolute bottom-16 left-8 md:left-20 z-20 max-w-lg">

        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--bg-secondary)]/60 mb-4">
          Wax Tales
        </p>

        <h1 className="text-3xl md:text-5xl font-[newsreader] font-thin text-[var(--bg-secondary)] leading-tight mb-6">
          Where Fragrance
          <br />
          Meets Festivity
        </h1>

        <button className="group text-[11px] font-[lexend] tracking-[0.3em] uppercase text-[var(--bg-secondary)]/80 hover:text-white transition">

          Discover Collection

          <span className="block h-[1px] w-full bg-white mt-2 transition-all duration-300 group-hover:w-0"></span>

        </button>

      </div>

      {/* LEFT ARROW */}
      <button
        onClick={() => swiperRef.current.slidePrev()}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 
                   text-white/60 hover:text-white 
                   transition duration-300 hover:scale-110"
      >
        <ChevronLeft size={28} strokeWidth={2} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => swiperRef.current.slideNext()}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 
                   text-white/60 hover:text-white 
                   transition duration-300 hover:scale-110"
      >
        <ChevronRight size={28} strokeWidth={2} />
      </button>

    </section>
    <section className="w-full border-y border-[var(--border-soft)] bg-[var(--bg-primary)] py-5">

  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[12px] tracking-[0.2em] uppercase text-[var(--text-light)]">

    <p>Limited handcrafted batches available</p>
    <p>Pan India delivery available</p>
    <p>Loved by 500+ happy customers</p>

  </div>

</section>
</div>
  );
}