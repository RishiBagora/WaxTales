export default function BrandStory() {
  return (
    <section className="w-full bg-[var(--bg-primary)] py-36">

      <div className="max-w-6xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-24 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">

          {/* LABEL */}
          <p className="text-[11px] lexend tracking-[0.3em] uppercase text-[var(--accent)] mb-6">
            Our Essence
          </p>

          {/* HEADING */}
          <h2 className="text-[var(--dark)] text-3xl md:text-[40px] font-[newsreader] font-thin leading-[0.7] mb-8">
            A Story in Every Candle
          </h2>

          {/* TEXT */}
          <p className="text-[var(--text-light)] text-[14px] leading-[1.9] max-w-md mx-auto md:mx-0 mb-10">
            At Wax Tales, every candle tells a story. Crafted with care, our products 
            bring warmth, luxury, and calm into your space — turning everyday moments 
            into something truly special.
          </p>

          {/* LINK */}
          <button className="relative text-[var(--dark)] text-[12px] tracking-[0.2em] uppercase group">

            <span className="relative z-10 font-[newsreader] font-thin">
              Read Our Story
            </span>

            <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-[var(--dark)] 
              scale-x-100 group-hover:scale-x-0 origin-left 
              transition-transform duration-300"></span>

          </button>

        </div>

        {/* RIGHT */}
        <div className="relative">

          {/* MAIN IMAGE */}
          <div className="overflow-hidden">
            <img
              src="https://res.cloudinary.com/dpey6erug/image/upload/v1776086116/drzyjlxyoxozehuvyw1x.jpg"
              alt="candle"
              className="w-full h-[520px] object-cover 
                         transition duration-[1200ms] ease-out 
                         hover:scale-[1.02]"
            />
          </div>

          {/* FLOATING IMAGE (VERY SUBTLE 😈) */}
          <div className="hidden md:block absolute -bottom-12 -left-12 w-40 h-52 overflow-hidden shadow-sm">
            <img
              src="/images/candle-hero.png"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>

    </section>
  );
}