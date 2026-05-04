"use client";

import { motion } from "framer-motion";

export default function ContactSupport() {
  const items = [
    {
      title: "Orders",
      desc: "Questions about your order, delivery, or product details.",
    },
    {
      title: "Collaborations",
      desc: "Brand partnerships, events, or creative collaborations.",
    },
    {
      title: "Bulk & Gifting",
      desc: "Custom orders, corporate gifting, or special requests.",
    },
  ];

  return (
    <section className="w-full px-6 md:px-16 py-32 bg-[var(--bg-primary)]">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="mb-20">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-[newsreader] font-thin text-3xl md:text-4xl text-[var(--dark)] leading-[1.2]"
          >
            How can we help?
          </motion.h2>

        </div>

        {/* LIST */}
        <div className="space-y-14">

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.15 }}
              className="flex flex-col md:flex-row md:justify-between gap-6 border-b border-[var(--border-soft)] pb-8"
            >

              {/* LEFT — TITLE */}
              <h3 className="font-[newsreader] font-thin text-xl text-[var(--dark)]">
                {item.title}
              </h3>

              {/* RIGHT — DESC */}
              <p className="font-[lexend] font-light text-[15px] text-[var(--text-light)] leading-[1.9] max-w-md">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}