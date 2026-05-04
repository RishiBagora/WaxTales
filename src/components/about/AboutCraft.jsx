"use client";

import { motion } from "framer-motion";

export default function AboutCraft() {
  return (
    <section className="w-full py-40 bg-[var(--bg-primary)] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="relative"
        >

          {/* IMAGE */}
          <img
            src="https://res.cloudinary.com/dpey6erug/image/upload/v1776087280/ifrancrianptauf82cjo.jpg"
            alt="craft"
            className="w-full h-[520px] object-cover"
          />

          {/* DARK EDGE GRADIENT */}
          <div className="absolute inset-0 
            bg-gradient-to-r 
            from-[rgba(20,12,5,0.4)] 
            via-transparent 
            to-transparent"
          />

          {/* FILM GRAIN (VERY SUBTLE) */}
          <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay 
            bg-[url('/images/grain.png')]"
          />

        </motion.div>

        {/* TEXT SIDE */}
        <div className="max-w-md">

          {/* LABEL */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[10px] tracking-[0.5em] uppercase text-[var(--accent)] mb-8"
          >
            The Craft
          </motion.p>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl font-[newsreader] text-[var(--dark)] font-thin  mb-8"
          >
            Crafted slowly.
            <br />
            Designed with intention.
          </motion.h2>

          {/* LINE */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 1 }}
            className="h-[1px] bg-[var(--dark)] mb-10"
          />

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[var(--text-light)] text-[15px] leading-[2] mb-12"
          >
            Each candle is hand-poured in small batches, ensuring attention to
            detail and consistency in every piece. From selecting premium
            fragrance oils to achieving the perfect finish, every step is
            intentional.
          </motion.p>

          {/* MINIMAL LIST */}
          <div className="space-y-6">

            {[
              "Hand-poured in small batches",
              "Refined fragrance compositions",
              "Timeless minimal design",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className="flex justify-between items-center border-b border-[var(--border-soft)] pb-3"
              >
                <p className="text-[14px] text-[var(--text-light)]">
                  {item}
                </p>

                <span className="text-[11px] text-[var(--text-light)] opacity-40">
                  0{i + 1}
                </span>
              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}