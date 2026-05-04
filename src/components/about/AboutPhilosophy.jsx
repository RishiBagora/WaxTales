"use client";

import { motion } from "framer-motion";

export default function AboutPhilosophy() {
  const values = [
    {
      title: "Intentional Design",
      desc: "Every product is created with purpose—nothing excess, nothing ordinary.",
    },
    {
      title: "Sensory Experience",
      desc: "Fragrance, light, and atmosphere come together to create a feeling.",
    },
    {
      title: "Quiet Luxury",
      desc: "Understated elegance that speaks without being loud.",
    },
  ];

  return (
    <section className="w-full py-40 bg-[var(--bg-secondary)]">

      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-28 text-center">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[10px] tracking-[0.5em] uppercase text-[var(--accent)] mb-6"
          >
            Our Philosophy
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-thin font-[newsreader] text-[var(--dark)] leading-tight"
          >
            Defined by simplicity.  
            <br />
            Elevated by intention.
          </motion.h2>

        </div>

        {/* VALUES */}
        <div className="space-y-20">

          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-[var(--border-soft)] pb-10"
            >

              {/* LEFT */}
              <div className="flex items-center gap-6">

                <span className="text-[14px] tracking-[0.3em] text-[var(--text-light)]">
                  0{i + 1}
                </span>

                <h3 className="text-[18px] md:text-[20px] font-thin font-[newsreader] text-[var(--dark)]">
                  {item.title}
                </h3>

              </div>

              {/* RIGHT */}
              <p className="text-[var(--text-light)] text-[15px] leading-[1.9] max-w-md">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}