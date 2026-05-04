"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="w-full px-6 md:px-16 py-32 bg-[var(--bg-primary)]">

      <div className="max-w-6xl mx-auto">

        <div className="max-w-3xl">

          {/* LABEL */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-[lexend] font-light text-[11px] tracking-[0.45em] uppercase text-[var(--accent)] mb-6"
          >
            Contact
          </motion.p>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-[newsreader] font-thin text-4xl md:text-6xl text-[var(--dark)] leading-[1.1] mb-8"
          >
            Let’s start a conversation.
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-[lexend] font-light text-[15px] text-[var(--text-light)] leading-[1.9] max-w-md"
          >
            Whether it’s a question, collaboration, or a custom request,
            we’d love to hear from you.
          </motion.p>

        </div>

      </div>

    </section>
  );
}