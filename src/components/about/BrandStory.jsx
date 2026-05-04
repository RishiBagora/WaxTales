"use client";

import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section className="w-full px-6 md:px-16 py-32 bg-[var(--bg-primary)]">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT — BIG STATEMENT */}
        <div className="sticky top-32">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] tracking-[0.5em] uppercase text-[var(--accent)] mb-6"
          >
            Our Story
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-[newsreader] font-thin text-[var(--dark)]"
          >
            Where fragrance <br />
            becomes a feeling.
          </motion.h2>

          {/* SUB LINE */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 1 }}
            className="h-[1px] bg-[var(--dark)] mt-10"
          />

        </div>

        {/* RIGHT — FLOWING TEXT */}
        <div className="space-y-12 text-[var(--text-light)] font-[lexend] font-light text-[16px]">

          {[
            "At Wax Tales, every candle tells a story. What began as a simple love for fragrances and aesthetics has grown into a brand that celebrates warmth, luxury, and thoughtful gifting.",

            "We believe a candle is more than just wax and a wick—it’s a mood, a memory, and a moment. Each piece is carefully handcrafted to bring elegance and calm into everyday spaces.",

            "From soothing scents to minimal yet luxurious designs, our candles are made to elevate your home and your experiences.",

            "Wax Tales was created with the idea of turning small moments into beautiful rituals. Whether it’s a quiet evening, a celebration, or a thoughtful gift, our candles are designed to make every moment feel special.",

            "Along with our signature candles, we are expanding into luxury home fragrances like diffusers, helping you create a serene and sophisticated ambiance effortlessly.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {text}
            </motion.p>
          ))}

          {/* FINAL LINE — EMPHASIS */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-[var(--dark)] text-[18px] font-[newsreader] italic font-[500]"
          >
            At Wax Tales, we don’t just make candles—we craft stories in wax,
            light, and fragrance.
          </motion.p>

        </div>

      </div>

    </section>
  );
}