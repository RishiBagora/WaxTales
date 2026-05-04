"use client";

import { motion } from "framer-motion";

export default function StoryCraft() {
  return (
    <section className="w-full px-6 md:px-16 py-36 bg-[var(--bg-secondary)]">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="overflow-hidden"
        >
          <img
            src="/images/craft.jpg" // replace with your image
            alt="craft process"
            className="w-full h-[420px] md:h-[520px] object-cover"
          />
        </motion.div>

        {/* TEXT */}
        <div className="max-w-md">

          {/* LABEL */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-[lexend] font-light text-[11px] tracking-[0.45em] uppercase text-[var(--accent)] mb-6"
          >
            The Craft
          </motion.p>

          {/* HEADING */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-[newsreader] font-thin text-3xl md:text-4xl text-[var(--dark)] leading-[1.2] mb-6"
          >
            A slower process, a better result.
          </motion.h3>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-[lexend] font-light text-[15px] text-[var(--text-light)] leading-[2]"
          >
            From melting and blending to pouring and finishing, every step is
            done with care. We work in small batches to ensure consistency,
            quality, and a refined final product.
          </motion.p>

        </div>

      </div>

    </section>
  );
}