"use client";

import { useNavigate } from "react-router-dom";

export default function CustomCTA() {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[var(--bg-primary)] py-40">

      <div className="max-w-6xl mx-auto px-6 md:px-16">

        {/* TOP THIN LINE */}
        <div className="w-full h-[1px] bg-[var(--border-soft)] mb-16"></div>

        {/* MAIN TEXT (CENTER BUT NOT BORING) */}
        <div className="text-center">

          <h2 className="text-[var(--dark)] text-[42px] md:text-[52px] 
                         font-[newsreader] font-thin leading-[0.9] max-w-2xl mx-auto mb-8">
            Crafted for moments <br />
            that deserve more
          </h2>

          <p className="text-[var(--text-light)] text-[14px] leading-[2] mb-12">
            Personalized candles designed to elevate your everyday rituals.
          </p>

          <button 
          onClick={()=>navigate("/customise")}
          className="relative px-8 py-3 text-[11px] tracking-[0.35em] uppercase 
                   text-[var(--dark)] border border-[var(--dark)] overflow-hidden group">

  {/* TEXT */}
  <span
  className="relative font-[newsreader] font-light z-10 transition duration-300 group-hover:text-[var(--bg-primary)]">
    Customize Yours
  </span>

  {/* FILL FROM BOTTOM */}
  <span className="absolute left-0 bottom-0 w-full h-0 
                   bg-[var(--dark)] 
                   group-hover:h-full 
                   transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"></span>

</button>

        </div>

        {/* BOTTOM THIN LINE */}
        <div className="w-full h-[1px] bg-[var(--border-soft)] mt-16"></div>

      </div>

    </section>
  );
}