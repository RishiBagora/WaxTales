"use client";

import { motion } from "framer-motion";

export default function StoryBlocks() {
  const data = [
    {
      title: "Hand-Poured Process",
      desc: "Each candle is carefully hand-poured in small batches, ensuring consistency and a refined finish.",
      image: "/images/candle-hero2.png",
    },
    {
      title: "Premium Wax & Fragrance Oils",
      desc: "High-quality wax blends and curated fragrance oils create a clean, lasting experience.",
      image: "/images/candle-hero.png",
    },
    {
      title: "Design Inspiration",
      desc: "Minimal forms and timeless aesthetics designed for modern, elegant spaces.",
      image: "/images/candle-hero3.png",
    },
    {
      title: "Gifting & Emotions",
      desc: "Crafted to evoke emotion—transforming moments into meaningful memories.",
      image: "https://res.cloudinary.com/dpey6erug/image/upload/v1776088630/yp6tv3bsb1mq79kdjuox.png",
    },
  ];

  return (
    <section className="w-full px-6 md:px-16 py-28 bg-[var(--bg-primary)]">

      <div className="max-w-5xl mx-auto space-y-24">

        {data.map((item, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              i % 2 !== 0 ? "md:grid-flow-dense" : ""
            }`}
          >

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 1.03 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className={`relative overflow-hidden rounded-sm ${
                i % 2 !== 0 ? "md:col-start-2" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[220px] md:h-[260px] object-cover 
                           transition duration-[1200ms] ease-out 
                           hover:scale-105"
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-[rgba(36,21,7,0.08)]" />
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-sm"
            >

              {/* NUMBER */}
              <p className="font-[lexend] font-light text-[10px] tracking-[0.4em] uppercase text-[var(--accent)] mb-3">
                0{i + 1}
              </p>

              {/* TITLE */}
              <h3 className="font-[newsreader] font-thin text-xl md:text-2xl text-[var(--dark)] mb-4 leading-[1.3]">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="font-[lexend] font-light text-[13px] text-[var(--text-light)] leading-[1.9]">
                {item.desc}
              </p>

            </motion.div>

          </div>
        ))}

      </div>

    </section>
  );
}