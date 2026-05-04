"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function CustomUses() {
  const [active, setActive] = useState(null);

  const items = [
    {
      title: "Wedding favours",
      desc: "Elegant, personalized candles crafted to complement your wedding aesthetic and create lasting memories for your guests.",
    },
    {
      title: "Event gifting",
      desc: "Thoughtful, design-led pieces curated for events, celebrations, and special occasions.",
    },
    {
      title: "Corporate hampers",
      desc: "Premium gifting solutions tailored for brands, teams, and corporate experiences.",
    },
    {
      title: "Personalized labels",
      desc: "Custom labeling options designed to reflect your story, message, or brand identity.",
    },
  ];

  return (
    <section className="w-full px-6 md:px-16 py-32 bg-[var(--bg-primary)]">

      <div className="max-w-4xl mx-auto">

        {items.map((item, i) => {
          const isOpen = active === i;

          return (
            <div
              key={i}
              className={`group border-b border-[var(--border-soft)] transition duration-500 
              ${isOpen ? "bg-[rgba(0,0,0,0.02)]" : ""}`}
              onClick={() => setActive(isOpen ? null : i)}
            >

              {/* TOP ROW */}
              <div className="flex justify-between items-center py-7 cursor-pointer">

                {/* TITLE */}
                <div className="relative">

                  <p className="font-[newsreader] font-thin text-lg md:text-xl text-[var(--dark)]">
                    {item.title}
                  </p>

                  {/* HOVER LINE */}
                  <span
                    className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[var(--dark)]
                    group-hover:w-full transition-all duration-500"
                  ></span>

                </div>

                {/* ICON */}
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ChevronDown className="w-4 h-4 text-[var(--dark)] opacity-70" />
                </motion.div>

              </div>

              {/* DROPDOWN */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.45, ease: [0.22,1,0.36,1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-7 pr-10 font-[lexend] font-light text-[14px] text-[var(--text-light)] leading-[1.9] max-w-md">
                      {item.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          );
        })}

      </div>

    </section>
  );
}