"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      q: "How long do your candles burn?",
      a: "Our candles are designed for a clean, long-lasting burn. Depending on size, they can last between 25–60 hours.",
    },
    {
      q: "Do you offer custom or bulk orders?",
      a: "Yes, we specialise in custom candles for weddings, events, and corporate gifting. You can submit your request through our custom order page.",
    },
    {
      q: "What type of wax do you use?",
      a: "We use premium-quality wax blends that ensure a clean burn and excellent fragrance throw.",
    },
    {
      q: "How long does delivery take?",
      a: "Orders are usually processed within 2–3 days and delivered within 5–7 business days across India.",
    },
    {
      q: "Can I personalise candles?",
      a: "Yes, we offer personalised labels and packaging for special occasions.",
    },
    {
      q: "Do you accept returns?",
      a: "Due to the nature of our products, we do not accept returns. However, if there is any issue, feel free to contact us.",
    },
  ];

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="w-full px-6 md:px-16 py-32 bg-[var(--bg-primary)]">

      {/* HEADER */}
      <div className="max-w-4xl mb-20">
        <p className="font-[lexend] font-light text-[11px] tracking-[0.45em] uppercase text-[var(--accent)] mb-6">
          FAQs
        </p>

        <h1 className="font-[newsreader] font-thin text-4xl md:text-6xl text-[var(--dark)] leading-[1.1]">
          Frequently Asked Questions
        </h1>
      </div>

      {/* FAQ LIST */}
      <div className="max-w-4xl space-y-6">

        {faqs.map((item, i) => (
          <div
            key={i}
            className="border-b border-[var(--border-soft)] pb-6 cursor-pointer"
            onClick={() => toggle(i)}
          >

            {/* QUESTION */}
            <div className="flex justify-between items-center">

              <h3 className="font-[newsreader] font-thin text-lg md:text-xl text-[var(--dark)]">
                {item.q}
              </h3>

              <span className="text-[var(--text-light)] text-xl">
                {active === i ? "−" : "+"}
              </span>

            </div>

            {/* ANSWER */}
            <AnimatePresence>
              {active === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-[lexend] font-light text-[14px] text-[var(--text-light)] leading-[1.9] mt-4 pr-8"
                >
                  {item.a}
                </motion.p>
              )}
            </AnimatePresence>

          </div>
        ))}

      </div>

    </section>
  );
}