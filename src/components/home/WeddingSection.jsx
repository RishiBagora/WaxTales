"use client";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function WeddingSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full px-6 md:px-16 py-44 bg-[var(--bg-primary)] overflow-hidden">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE STACK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          {/* MAIN IMAGE */}
          <img
            src="https://res.cloudinary.com/dpey6erug/image/upload/v1776088050/xkiuhbgrlhkvlqhujxlw.png"
            alt="wedding"
            className="w-full h-[420px] md:h-[520px] object-cover"
          />

          

        </motion.div>

        {/* RIGHT TEXT */}
        <div className="relative">

          {/* GHOST TEXT */}
          <h2 className="absolute -top-10 right-0 font-[newsreader] font-thin 
            text-[90px] md:text-[130px] text-[var(--dark)] opacity-[0.04] leading-none pointer-events-none">
            LOVE
          </h2>

          <div className="relative z-10 max-w-md">

            {/* LABEL */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-[lexend] text-[11px] tracking-[0.4em] uppercase text-[var(--accent)] mb-6"
            >
              Wedding Favours
            </motion.p>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-[newsreader] font-thin text-3xl md:text-5xl text-[var(--dark)] leading-[1.2] mb-8"
            >
              Crafted for moments
              <br />
              that last forever.
            </motion.h2>

            {/* TEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-[lexend] font-light text-[15px] text-[var(--text-light)] leading-[2] mb-10"
            >
              Thoughtfully designed wedding favours that carry your story,
              your celebration, and a memory your guests will take home.
            </motion.p>

            {/* CTA */}
            <button
              onClick={() => navigate("/wedding")}
              className="group font-[lexend] text-[11px] tracking-[0.4em] uppercase text-[var(--dark)]"
            >
              Explore Wedding

              <span className="block h-[1px] w-full bg-[var(--dark)] mt-3 
                scale-x-100 group-hover:scale-x-0 origin-left 
                transition-transform duration-700"></span>
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}