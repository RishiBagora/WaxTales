"use client";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HomeGiftingSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full px-6 md:px-16 py-44 bg-[var(--bg-primary)] overflow-hidden">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div className="relative">

          {/* HUGE FADED TEXT */}
          <h2 className="absolute -top-10 left-0 font-[newsreader] font-thin 
            text-[90px] md:text-[130px] text-[var(--dark)] opacity-[0.04] leading-none pointer-events-none">
            GIFT
          </h2>

          {/* CONTENT */}
          <div className="relative z-10 max-w-md">

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-[lexend] text-[11px] tracking-[0.4em] uppercase text-[var(--accent)] mb-6"
            >
              Gifting
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-[newsreader] font-thin text-3xl md:text-5xl text-[var(--dark)] leading-[1.2] mb-8"
            >
              Designed to be gifted,
              <br />
              meant to be remembered.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-[lexend] font-light text-[15px] text-[var(--text-light)] leading-[2] mb-10"
            >
              Curated sets that transform simple gestures into meaningful
              experiences—crafted for moments that matter.
            </motion.p>

            <button
              onClick={() => navigate("/gifting")}
              className="group font-[lexend] text-[11px] tracking-[0.4em] uppercase text-[var(--dark)]"
            >
              Explore Gifting

              <span className="block h-[1px] w-full bg-[var(--dark)] mt-3 
                scale-x-100 group-hover:scale-x-0 origin-left 
                transition-transform duration-700"></span>
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE STACK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          {/* MAIN IMAGE */}
          <img
            src="https://res.cloudinary.com/dpey6erug/image/upload/v1776088630/yp6tv3bsb1mq79kdjuox.png"
            alt="gifting"
            className="w-full h-[420px] md:h-[520px] object-cover"
          />

         

        </motion.div>

      </div>

    </section>
  );
}