"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">

      {/* BACKGROUND IMAGE (SCALE + SLOW MOTION) */}
      <motion.img
        src="/images/candle-hero3.png"
        alt="about"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="w-full h-full object-cover"
      />

      {/* DARK DEPTH OVERLAY */}
      <div className="absolute inset-0 bg-[rgba(20,12,5,0.55)]" />

      {/* GRADIENT FADE */}
      <div className="absolute inset-0 
        bg-gradient-to-t 
        from-[rgba(20,12,5,0.85)] 
        via-[rgba(20,12,5,0.3)] 
        to-transparent"
      />

      {/* SOFT LIGHT GLOW */}
      <div className="absolute top-0 left-0 w-full h-full 
        bg-[radial-gradient(circle_at_30%_20%,rgba(255,200,150,0.08),transparent_60%)]"
      />

      {/* CONTENT */}
      <div className="absolute bottom-20 left-6 md:left-20 z-20 max-w-xl">

        {/* LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[10px] tracking-[0.5em] font-[lexend] uppercase text-white/50 mb-6"
        >
          About Wax Tales
        </motion.p>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-4xl md:text-6xl font-[newsreader] font-thin text-white  mb-8"
        >
          Crafted with intention.
          <br />
          <span className="text-white/80">
            Designed to elevate everyday moments.
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white/60 text-[15px] font-thin  max-w-md"
        >
          A world of fragrance, warmth, and quiet luxury—where every detail is
          crafted to create a feeling, not just a product.
        </motion.p>

        {/* SUBTLE LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-[1px] bg-white/40 mt-10"
        />

      </div>

    </section>
  );
}