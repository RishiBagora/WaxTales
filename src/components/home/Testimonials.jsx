"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      text: "Absolutely love the fragrance and the calming vibe it brings.",
      name: "Ayesha, Mumbai",
    },
    {
      text: "The packaging and scent feel so premium and thoughtful.",
      name: "Riya, Delhi",
    },
    {
      text: "Perfect for gifting — elegant, minimal and beautiful.",
      name: "Sneha, Jaipur",
    },
    {
      text: "Creates such a warm and peaceful atmosphere at home.",
      name: "Karan, Ahmedabad",
    },
  ];

  return (
    <section className="w-full bg-[#f1eada] py-24 overflow-hidden">

      {/* LABEL */}
      <div className="text-center mb-10">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#b8a999] font-[newsreader]">
          Loved by Customers
        </p>
      </div>

      <div className="relative overflow-hidden">

        <motion.div
          className="flex gap-16"
          animate={{ x: [0, -1500] }}   // 👈 FIXED
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >

          {[...reviews, ...reviews, ...reviews].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 min-w-[300px] flex-shrink-0"
            >

              <div>
                <p className="text-[#6e6256] text-sm italic leading-relaxed font-[newsreader] opacity-80">
                  “{item.text}”
                </p>

                <p className="text-[#b8a999] text-center text-xs mt-2 font-[newsreader]">
                  — {item.name}
                </p>
              </div>

              <span className="w-1 h-1 bg-[#b8a999] rounded-full ml-10"></span>

            </div>
          ))}

        </motion.div>

      </div>

    </section>
  );
}