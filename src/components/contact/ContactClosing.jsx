"use client";

import { motion } from "framer-motion";

export default function ContactClosing() {
  return (
    <section className="w-full px-6 md:px-16 py-32 bg-[var(--bg-primary)]">

      <div className="max-w-6xl mx-auto">

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-[var(--dark)] mb-20"></div>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-[newsreader] font-thin text-2xl md:text-3xl text-[var(--dark)] leading-[1.4] max-w-2xl"
        >
          We’ll get back to you, thoughtfully.
        </motion.p>

      </div>

    </section>
  );
}