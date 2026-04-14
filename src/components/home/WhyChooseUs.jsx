"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const points = [
    "Handcrafted with intention",
    "Refined premium fragrances",
    "Bespoke gifting experiences",
    "Designed for quiet luxury",
  ];

  return (
    <section className="w-full bg-[var(--bg-primary)] px-6 md:px-16 py-36">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT */}
        <div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[var(--dark)] text-3xl md:text-[34px] 
                       font-[newsreader] font-light mb-6 leading-tight"
          >
            Why Choose Wax Tales
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[var(--text-light)] lexend text-[14px] leading-tight max-w-sm"
          >
            Every piece is thoughtfully crafted to bring warmth, elegance,
            and a sense of calm into your everyday spaces.
          </motion.p>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-12">

          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >

              <div className="flex items-start gap-5">

                {/* NUMBER */}
                <span className="text-[var(--accent)] text-[14px] font-[newsreader] font-light">
                  {`0${index + 1}`}
                </span>

                {/* TEXT */}
                <p className="text-[var(--dark)] text-[15px] leading-[1.7] 
                              transition duration-300 group-hover:translate-x-1 font-[newsreader] font-light">
                  {item}
                </p>

              </div>

              {/* LINE */}
              <div className="mt-4 h-[1px] w-full bg-[var(--border-soft)] 
                              group-hover:bg-[var(--accent)] 
                              transition duration-300"></div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}