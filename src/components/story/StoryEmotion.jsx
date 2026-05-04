"use client";

import { motion } from "framer-motion";

export default function StoryEmotion() {
  return (
    <section className="w-full px-6 md:px-16 py-40 bg-[var(--bg-primary)]">

      <div className="max-w-6xl mx-auto">

        <div className="max-w-3xl">

          {/* LABEL */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-[lexend] font-light text-[11px] tracking-[0.5em] uppercase text-[var(--accent)] mb-8"
          >
            Beyond the Product
          </motion.p>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-[newsreader] font-thin text-3xl md:text-5xl text-[var(--dark)] leading-[1.2] mb-10"
          >
            More than a candle, it’s a moment shared.
          </motion.h2>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-[lexend] font-light text-[15px] text-[var(--text-light)] leading-[2] max-w-md"
          >
            Whether it’s a quiet evening, a celebration, or a thoughtful gift,
            each piece is designed to create a sense of warmth, presence, and
            connection.
          </motion.p>

        </div>

      </div>

    </section>
  );
}