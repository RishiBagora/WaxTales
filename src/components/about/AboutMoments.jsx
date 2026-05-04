"use client";

import { motion } from "framer-motion";

export default function AboutMoments() {
  return (
    <section className="w-full px-6 md:px-16 py-28 bg-[var(--bg-secondary)]">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.4em] uppercase text-[var(--accent)] mb-4"
          >
            Moments
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-[newsreader] font-thin text-[var(--dark)]"
          >
            Moments That Matter
          </motion.h2>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

          {[
            "https://res.cloudinary.com/dpey6erug/image/upload/v1776086116/drzyjlxyoxozehuvyw1x.jpg",
            "https://res.cloudinary.com/dpey6erug/image/upload/v1776087280/ifrancrianptauf82cjo.jpg",
            "https://res.cloudinary.com/dpey6erug/image/upload/v1776088050/xkiuhbgrlhkvlqhujxlw.png",
            "https://res.cloudinary.com/dpey6erug/image/upload/v1776088630/yp6tv3bsb1mq79kdjuox.png",
            "https://res.cloudinary.com/dpey6erug/image/upload/v1776088630/yp6tv3bsb1mq79kdjuox.png",
            "https://res.cloudinary.com/dpey6erug/image/upload/v1776087280/ifrancrianptauf82cjo.jpg",
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group"
            >

              <img
                src={img}
                alt="moment"
                className="w-full h-[180px] md:h-[260px] object-cover 
                           transition duration-[1200ms] ease-out 
                           group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500" />

            </motion.div>
          ))}

        </div>

        {/* TEXT BELOW */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-[var(--text-light)] text-[15px] font-[lexend] font-light max-w-2xl mx-auto mt-16"
        >
          Whether it’s a quiet evening, a celebration, or a thoughtful gift,
          Wax Tales transforms ordinary moments into meaningful rituals.
        </motion.p>

      </div>

    </section>
  );
}