"use client";

import { motion } from "framer-motion";

export default function WeddingClosing() {
  return (
    <section className="w-full px-6 md:px-16 py-36 bg-[var(--bg-primary)]">

      <div className="max-w-6xl mx-auto">

        {/* SOFT DIVIDER */}
        <div className="w-full h-[1px] bg-[var(--border-soft)] mb-24" />

        {/* TEXT BLOCK */}
        <div className="max-w-2xl">

          {/* MAIN LINE */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-[newsreader] font-thin text-2xl md:text-4xl text-[var(--dark)] leading-[1.3] mb-6"
          >
            Crafted for moments you’ll carry forever.
          </motion.h2>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-[lexend] font-light text-[15px] text-[var(--text-light)] leading-[2]"
          >
            A small detail, a quiet gesture, a lasting memory—
            each piece is made to be part of your story.
          </motion.p>

        </div>

      </div>

    </section>
  );
}