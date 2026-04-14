"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getInstaImages } from "../../services/api";


export default function InstagramGrid() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getInstaImages();
      setImages(data);
    };
    load();
  }, []);

  return (
    <section className="w-full bg-[#f1eada] px-6 md:px-16 py-32">

     <div className="text-center mb-20">

  {/* SMALL LABEL */}
  <div className="flex items-center justify-center gap-2 mb-3">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-3.5 h-3.5 text-[#6e6256] opacity-70"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>

    <span className="text-[11px] tracking-[0.3em] uppercase text-[#6e6256] opacity-70 font-[lexend] font-light">
      Instagram
    </span>

  </div>

  {/* MAIN HEADING */}
  <h2 className="text-[#2d2a26] text-3xl md:text-4xl font-[newsreader] font-thin">
    From Our World
  </h2>

</div>

      {/* GRID */}
      <a href="https://instagram.com/waxtales.co" target="_blank" rel="noopener noreferrer">
      <div className="grid grid-cols-3 md:grid-cols-4 auto-rows-[120px] md:auto-rows-[250px] gap-[2px] md:gap-0">

        {images.map((item, index) => (
          
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className={`relative overflow-hidden group 
                        border border-[#e5dfd3] 
                        ${
                          index === 0 || index === 3
                            ? "md:row-span-2"
                            : ""
                        }`}
          >

            {/* IMAGE */}
            <img
              src={item.image}
              alt="insta"
              className="w-full h-full object-cover 
                         transition duration-700 ease-out 
                         group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500 flex items-center justify-center">
             {/* INSTAGRAM ICON */}
  <div className="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition duration-500">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
      className="w-6 h-6"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>

  </div></div>

          </motion.div>
        ))}

      </div>
</a>
    </section>
  );
}