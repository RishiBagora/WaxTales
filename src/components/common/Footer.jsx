export default function Footer() {
  return (
    <footer className="relative w-full bg-[var(--dark)] text-[var(--bg-primary)] px-6 md:px-16 pt-32 pb-14 overflow-hidden">

      {/* ✨ SOFT TOP GLOW (VERY SUBTLE) */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-24 relative z-10">

        {/* CONTACT */}
        <div>
          <h3 className="text-[10px] tracking-[0.4em] uppercase text-[var(--accent)] mb-8 font-[newsreader] font-light">
            Contact
          </h3>

          <div className="flex flex-col gap-2 text-[14px] text-[var(--bg-secondary)] font-poppins">

            <p className="transition duration-300 hover:text-white">
              taleswax@gmail.com
            </p>

            <p className="transition duration-300 hover:text-white">
              +91 99220 07656
            </p>

            <p className="transition duration-300 hover:text-white">
              Instagram
            </p>

          </div>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-[10px] tracking-[0.4em] uppercase text-[var(--accent)] mb-8 font-[newsreader] font-light">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2 text-[14px] text-[var(--bg-secondary)] font-poppins">

            {["FAQs", "Delivery & Returns", "Terms & Conditions"].map((item, i) => (
              <p
                key={i}
                className="transition duration-300 hover:text-white"
              >
                {item}
              </p>
            ))}

          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-[10px] tracking-[0.4em] uppercase text-[var(--accent)] mb-8 font-[newsreader] font-light font-poppins">
            Stay Connected
          </h3>

          {/* INPUT */}
          <div className="flex items-center border-b border-[var(--accent)]/30 pb-3 group">

            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent outline-none text-[14px] w-full placeholder:text-[var(--bg-secondary)]"
            />

            <span className="text-[var(--accent)] text-lg ml-2 
                             transition duration-500 ease-out 
                             group-hover:translate-x-2">
              →
            </span>

          </div>

          <p className="text-[12px] text-[var(--bg-secondary)] mt-5 leading-relaxed">
            Receive updates, new launches & quiet inspirations.
          </p>

        </div>

      </div>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto mt-24 border-t border-[var(--accent)]/20"></div>

      {/* BOTTOM */}
      <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-[12px] text-[var(--bg-secondary)] font-[newsreader] font-light">

        <p>© {new Date().getFullYear()} Wax Tales</p>

        <p className="mt-3 md:mt-0 tracking-[0.3em] uppercase text-[var(--accent)] font-[newsreader] font-light">
          Crafted for calm living
        </p>

      </div>

      {/* ✨ HUGE FAINT BRAND TEXT (VERY SUBTLE 😈) */}
      <div className="font-[lexend] font-thin hidden md:block relative top-12 text-center text-[120px] font-[Playfair Display] text-white/5 pointer-events-none select-none">
        WAX TALES
      </div>
      <div className="text-center mt-10 text-[12px] text-[var(--bg-secondary)]">
        <p>Designed and Developed by <a target="_blank" href="https://arcocreativestudio.vercel.app" className="hover:text-white transition duration-300 underline text-[var(--accent)]">Arco Creative Studio</a></p>
      </div>

    </footer>
  );
}