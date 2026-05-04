"use client";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AboutCTA() {
  const navigate = useNavigate();

  return (
    <section className="w-full py-40 bg-[var(--bg-primary)]">

      <div className="max-w-6xl mx-auto px-6">

        {/* TOP DIVIDER */}
        <div className="w-full h-[1px] bg-[var(--border-soft)] mb-20"></div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT — BIG STATEMENT */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-[newsreader] font-thin text-[var(--dark)] leading-[1.2]"
          >
            Bring warmth into
            <br />
            your everyday rituals.
          </motion.h2>

          {/* RIGHT — ACTION */}
          <div className="md:pl-20">

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[var(--text-light)] font-[lexend] font-light text-[15px] leading-[2] mb-10 max-w-sm"
            >
              Explore handcrafted candles and fragrances designed to transform
              ordinary moments into something quietly meaningful.
            </motion.p>

            {/* CTA */}
            <motion.button
              onClick={() => navigate("/collections")}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="group text-[11px] tracking-[0.4em] uppercase text-[var(--dark)]"
            >
              Explore Collection

              <span className="block h-[1px] w-full bg-[var(--dark)] mt-3 
                scale-x-0 group-hover:scale-x-100 origin-left 
                transition-transform duration-700"></span>
            </motion.button>

          </div>

        </div>

      </div>

    </section>
  );
}