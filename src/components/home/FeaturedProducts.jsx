import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/api";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getAllProducts();

      const formatted = data.slice(0, 6).map(p => ({
        ...p,
        finalPrice: p.discount
          ? p.price - (p.price * p.discount) / 100
          : p.price,
        image: p.image
      }));

      setProducts(formatted);
    };

    load();
  }, []);

  return (
    <section className="w-full px-6 md:px-16 py-28 bg-[var(--bg-primary)]">

      {/* HEADING */}
      <div className="text-center mb-20">
        <p className="text-[11px] lexend tracking-[0.3em] uppercase text-[var(--accent)] mb-3">
          Curated Selection
        </p>

        <h2 className="text-[var(--dark)] font-[newsreader] font-thin text-3xl md:text-4xl">
          Our Bestsellers
        </h2>
      </div>

      {/* GRID */}
      <div className="grid gap-1 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">

        {products.map((p, index) => (
          <div
            key={p.id}
            className="group text-center 
                       hover:z-10 transition duration-500"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden">

              <img
                src={p.image}
                alt={p.name}
                className="w-full h-[420px] md:h-[500px] object-cover 
                           transition duration-[1200ms] ease-out 
                           group-hover:scale-105"
              />
<div className="absolute inset-0 z-10 
  bg-gradient-to-t 
  from-[rgba(36,21,7,0.70)] 
  via-[rgba(36,21,7,0.25)] 
  to-transparent" />
              {/* SOFT OVERLAY */}
              <div className="absolute inset-0 bg-[rgba(88,71,56,0.05)] 
                              opacity-0 group-hover:opacity-100 
                              transition duration-500"></div>

            </div>

            {/* TEXT */}
            <div className="py-8 px-4">

              {/* NAME */}
              <h3 className="text-[var(--dark)] font-[newsreader] text-xs md:text-sm 
                             tracking-[0.02em] font-light uppercase mb-2">
                {p.name}
              </h3>

              {/* FRAGRANCE */}
              <p className="text-[var(--text-light)] opacity-80 text-xs mb-3">
                {p.fragrance}
              </p>

              {/* PRICE */}
              <p className="text-[var(--dark)] font-poppins font-light text-xs">
                Rs. {Math.round(p.finalPrice)}
              </p>

              {/* HOVER LINE */}
              <div className="mt-4 h-[1px] w-0 mx-auto bg-[var(--dark)] 
                              group-hover:w-10 transition-all duration-500"></div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}