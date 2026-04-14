"use client";

export default function MarqueeStrip() {
  const items = [
    "Limited handcrafted batches available",
    "Pan India delivery available",
    "Loved by 500+ happy customers",
  ];

  return (
    <div className="fixed top-0 w-full z-50 bg-[var(--bg-secondary)]/80 backdrop-blur-md border-b border-[var(--border-soft)]">

      <div className="marquee relative">

        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 
                        bg-gradient-to-r from-[var(--bg-secondary)] to-transparent z-10" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 
                        bg-gradient-to-l from-[var(--bg-secondary)] to-transparent z-10" />

        <div className="marquee-track">

          {[...items, ...items].map((text, i) => (
            <span key={i} className="marquee-text">
              {text}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
}