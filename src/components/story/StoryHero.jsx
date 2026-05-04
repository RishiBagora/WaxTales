"use client";

export default function StoryHero() {
  return (
    <section className="w-full h-[80vh] md:h-[90vh] relative overflow-hidden">

      {/* IMAGE */}
      <img
        src="/images/candle-hero.png" // 👉 apni image daal
        alt="story"
        className="w-full h-full object-cover"
      />

      {/* SOFT DARK OVERLAY (luxury feel) */}
      <div className="absolute inset-0 bg-[rgba(36,21,7,0.35)]" />

      {/* OPTIONAL TEXT (minimal) */}
      <div className="absolute bottom-12 left-6 md:left-16 max-w-md">

        <p className="font-[lexend] font-light text-[11px] tracking-[0.4em] uppercase text-white/70 mb-4">
          Our Story
        </p>

        <h1 className="font-[newsreader] font-thin text-3xl md:text-5xl text-white leading-[1.2]">
          The Story Behind Our Candles
        </h1>

      </div>

    </section>
  );
}