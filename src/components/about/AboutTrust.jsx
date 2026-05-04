"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutTrustMarquee() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // very subtle movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  const text = [
    "Handcrafted in small batches",
    "Premium fragrance blends",
    "Minimal timeless design",
    "Pan India delivery",
    "Handcrafted in small batches",
    "Premium fragrance blends",
    "Minimal timeless design",
    "Pan India delivery",
  ];

  return (
    <section
      ref={ref}
      className="w-full py-32 bg-[var(--bg-primary)] overflow-hidden"
    >

      {/* TOP LINE */}
      <div className="w-full h-[1px] bg-[var(--border-soft)] mb-12"></div>

      {/* MARQUEE */}
      <motion.div
        style={{ x }}
        className="flex items-center whitespace-nowrap gap-16 px-6 md:px-20"
      >

        {text.map((t, i) => (
          <span
            key={i}
            className="text-[14px] md:text-[15px] tracking-[0.35em] uppercase 
                       text-[var(--dark)] opacity-90"
          >
            {t}
          </span>
        ))}

      </motion.div>

      {/* BOTTOM LINE */}
      <div className="w-full h-[1px] bg-[var(--border-soft)] mt-12"></div>

    </section>
  );
}