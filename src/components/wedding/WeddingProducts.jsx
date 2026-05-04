"use client";

import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function WeddingProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      const data = await getAllProducts();

      // ✅ FILTER ONLY WEDDING PRODUCTS
      const weddingProducts = data.filter(
        (p) => p.category?.toLowerCase().includes("wedding")
      );

      const formatted = weddingProducts.slice(0, 6).map(p => ({
        ...p,
        finalPrice: p.discount
          ? p.price - (p.price * p.discount) / 100
          : p.price,
        image: Array.isArray(p.images) ? p.images[0] : p.image
      }));

      setProducts(formatted);
      setLoading(false);
    };

    load();
  }, []);

  return (
    <section className="w-full px-6 md:px-16 py-28 bg-[var(--bg-primary)]">

      {/* HEADING */}
      <div className="text-center mb-20">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--accent)] mb-3">
          Wedding
        </p>

        <h2 className="text-[var(--dark)] font-[newsreader] font-thin text-3xl md:text-4xl">
          Wedding Favours
        </h2>
      </div>

      {/* GRID */}
      <div className="grid gap-1 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">

        {(loading ? [...Array(6)] : products).map((p, index) => (
          <div
            key={index}
            className={`text-center ${!loading && "group hover:z-10 cursor-pointer"}`}
            onClick={!loading ? () => navigate(`/product/${p.id}`) : undefined}
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden">

              {loading ? (
                <div className="w-full h-[420px] md:h-[500px] bg-gray-300 animate-pulse" />
              ) : (
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-[420px] md:h-[500px] object-cover 
                             transition duration-[1200ms] ease-out 
                             group-hover:scale-105"
                />
              )}

              {/* OVERLAY */}
              <div className="absolute inset-0 z-10 
                bg-gradient-to-t 
                from-[rgba(36,21,7,0.70)] 
                via-[rgba(36,21,7,0.25)] 
                to-transparent" />

              {!loading && (
                <div className="absolute inset-0 bg-[rgba(88,71,56,0.05)] 
                  opacity-0 group-hover:opacity-100 
                  transition duration-500"></div>
              )}

            </div>

            {/* TEXT */}
            <div className="py-8 px-4">

              {loading ? (
                <>
                  <div className="h-3 w-24 mx-auto bg-gray-300 mb-3 animate-pulse" />
                  <div className="h-2 w-16 mx-auto bg-gray-300 mb-3 animate-pulse" />
                  <div className="h-3 w-12 mx-auto bg-gray-300 animate-pulse" />
                </>
              ) : (
                <>
                  <h3 className="text-[var(--dark)] font-[newsreader] text-xs md:text-sm 
                                 tracking-[0.02em] font-light uppercase mb-2">
                    {p.name}
                  </h3>

                  <p className="text-[var(--text-light)] opacity-80 text-xs mb-3">
                    {p.fragrance}
                  </p>

                  <p className="text-[var(--dark)] font-poppins font-light text-xs">
                    Rs. {Math.round(p.finalPrice)}
                  </p>

                  <div className="mt-4 h-[1px] w-0 mx-auto bg-[var(--dark)] 
                                  group-hover:w-10 transition-all duration-500"></div>
                </>
              )}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}