"use client";

import { collections } from "../data/collections";
import { useNavigate } from "react-router-dom";

export default function CollectionsPage() {
  const navigate = useNavigate();

  return (
    <section className="w-full px-6 md:px-16 py-28 bg-[var(--bg-primary)]">

      {/* HEADER */}
      <div className="mb-20 text-center">

        <p className="text-[11px] tracking-[0.35em] uppercase text-[var(--accent)] mb-4">
          Discover
        </p>

        <h2 className="text-3xl md:text-5xl font-[newsreader] text-[var(--dark)] font-light">
          Shop by Collection
        </h2>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

        {collections.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/collections/${item.slug}`)}
            className="relative overflow-hidden group cursor-pointer"
          >

            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[220px] md:h-[340px] object-cover 
                         transition duration-[1200ms] ease-out 
                         group-hover:scale-110"
            />

            {/* ✨ GRADIENT OVERLAY (COFFEE LUXURY) */}
            <div className="absolute inset-0 
              bg-gradient-to-t 
              from-[rgba(36,21,7,0.65)] 
              via-[rgba(36,21,7,0.25)] 
              to-transparent 
              opacity-90 group-hover:opacity-100 
              transition duration-500"
            />

            {/* ✨ TEXT */}
            <div className="absolute bottom-6 left-6">

              <h3 className="text-[var(--bg-secondary)] text-sm md:text-lg 
                             tracking-[0.2em] uppercase font-light 
                             transition duration-500 
                             group-hover:translate-y-[-6px]">
                {item.title}
              </h3>

              {/* UNDERLINE */}
              <span className="block mt-2 h-[1px] w-0 bg-[var(--bg-secondary)] 
                               group-hover:w-14 transition-all duration-500"></span>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}