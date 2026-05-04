"use client";

import { motion } from "framer-motion";

export default function StoryStatement() {
  return (
    <section className="w-full px-6 md:px-16 py-32 bg-[var(--bg-secondary)]">

      <div className="max-w-6xl mx-auto">

        <div className="max-w-4xl">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-[newsreader] font-thin text-3xl md:text-5xl text-[var(--dark)] leading-[1.2]"
          >
            Crafted with intention.
            <br />
            Designed to be felt, not just seen.
          </motion.h2>

        </div>

      </div>

    </section>
  );
}