"use client";

import { motion } from "framer-motion";

export default function GiftSetsHero() {
  return (
    <section className="w-full px-6 md:px-16 py-36 bg-[var(--bg-primary)]">

      <div className="max-w-6xl mx-auto">

        <div className="max-w-3xl">

          {/* LABEL */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-[lexend] font-light text-[11px] tracking-[0.45em] uppercase text-[var(--accent)] mb-6"
          >
            Gift Sets
          </motion.p>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-[newsreader] font-thin text-4xl md:text-6xl text-[var(--dark)] leading-[1.1] mb-10"
          >
            Thoughtfully curated
            <br />
            for meaningful gifting.
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-[lexend] font-light text-[15px] text-[var(--text-light)] leading-[2] max-w-md"
          >
            From intimate moments to grand celebrations, each set is designed
            to bring warmth, elegance, and a sense of occasion.
          </motion.p>

        </div>

      </div>

    </section>
  );
}