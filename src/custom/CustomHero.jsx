"use client";

export default function CustomHero() {
  return (
    <section className="w-full h-[85vh] md:h-[95vh] relative overflow-hidden">

      {/* IMAGE */}
     {/* MOBILE IMAGE */}
<img
  src="/images/candle-hero.png"
  alt="custom"
  className="w-full h-full object-cover md:hidden"
/>

{/* DESKTOP IMAGE */}
<img
  src="/images/customise-hero.png"
  alt="custom"
  className="w-full h-full object-cover hidden md:block"
/>

      {/* LUXURY GRADIENT OVERLAY */}
      <div
        className="absolute inset-0 
        bg-gradient-to-b 
        from-[rgba(36,21,7,0.9)] 
        via-[rgba(36,21,7,0.25)] 
        to-[rgba(36,21,7,0.1)]"
      />

       
      <div className="md:hidden absolute bottom-16 left-6 md:left-16 max-w-xl z-10">

        {/* LABEL */}
        <p className="font-[lexend] font-light text-[11px] tracking-[0.45em] uppercase text-white/70 mb-4">
          Custom Orders
        </p>

        {/* HEADING */}
        <h1 className="font-[newsreader] font-thin text-3xl md:text-5xl text-white leading-[1.15] mb-6">
          Create Your Own
          <br />
          Candle Experience
        </h1>

        {/* TEXT */}
        <p className="font-[lexend] font-light text-[14px] text-white/70 leading-[1.9] max-w-md">
          Thoughtfully crafted candles tailored for your moments,
          events, and gifting needs.
        </p>

      </div> 

    </section>
  );
}