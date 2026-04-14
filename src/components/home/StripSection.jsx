"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StripSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 👉 ONLY TEXT MOVE
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section
      ref={ref}
      className="font-[Playfair Display] font-thin w-full bg-[var(--bg-primary)] py-20"
    >

      {/* STRIP 1 */}
      <div className="rotate-[-6deg] mb-6 overflow-hidden">

        <div className="bg-[var(--bg-secondary)] py-3 overflow-hidden">

          <motion.div
            style={{ x: x1 }}
            className="flex w-max"
          >
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="mx-10 text-[var(--dark)] text-[12px] tracking-tight uppercase whitespace-nowrap"
              >
                Limited handcrafted batches available &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; — &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Pan India delivery available  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; — &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Loved by 500+ happy customers 
              </span>
            ))}
          </motion.div>

        </div>
      </div>

      {/* STRIP 2 */}
      <div className="rotate-[4deg] overflow-hidden">

        <div className="bg-[var(--accent)] py-2 overflow-hidden">

          <motion.div
            style={{ x: x2 }}
            className="flex w-max"
          >
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="mx-10 text-[var(--dark)] text-[11px] tracking-tight uppercase whitespace-nowrap"
              >
                Gentle Scents — Crafted Moments — Luxury Living
                
              </span>
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  );
}