"use client";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/api";
import ProductCard from "../components/products/ProductCard";

export default function CollectionProducts() {
  const { slug } = useParams();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [fragrances, setFragrances] = useState([]);
  const [collections, setCollections] = useState([]);
  const [sizes, setSizes] = useState([]);

  const [selectedFragrance, setSelectedFragrance] = useState("all");
  const [selectedCollection, setSelectedCollection] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [sortType, setSortType] = useState("recommended");

  const [loading, setLoading] = useState(true);

  // LOAD DATA
  useEffect(() => {
    const load = async () => {
      const data = await getAllProducts();

      const base = data.filter((p) => p.category === slug);

      setProducts(base);

      setFragrances([
        "all",
        ...new Set(base.map((p) => p.fragrance).filter(Boolean)),
      ]);

      setCollections([
        "all",
        ...new Set(base.map((p) => p.collectionType).filter(Boolean)),
      ]);

      setSizes([
        "all",
        ...new Set(
          base.flatMap((p) =>
            p.variants?.map((v) => v.size)
          ).filter(Boolean)
        ),
      ]);

      setLoading(false);
    };

    load();
  }, [slug]);

  // FILTER LOGIC
  useEffect(() => {
    let temp = [...products];

    if (selectedFragrance !== "all") {
      temp = temp.filter((p) => p.fragrance === selectedFragrance);
    }

    if (selectedCollection !== "all") {
      temp = temp.filter((p) => p.collectionType === selectedCollection);
    }

    if (selectedSize !== "all") {
      temp = temp.filter((p) =>
        p.variants?.some((v) => v.size === selectedSize)
      );
    }

    if (sortType === "low-high") {
      temp.sort((a, b) => a.finalPrice - b.finalPrice);
    } else if (sortType === "high-low") {
      temp.sort((a, b) => b.finalPrice - a.finalPrice);
    }

    setFilteredProducts(temp);
  }, [products, selectedFragrance, selectedCollection, selectedSize, sortType]);

  return (
    <section className="w-full px-6 md:px-16 py-28 bg-[var(--bg-primary)]">

      {/* HEADER */}
      <div className="mb-16 md:mb-20">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[var(--accent)] mb-3">
          Collection
        </p>

        <h2 className="text-3xl md:text-5xl font-[newsreader] font-thin text-[var(--dark)] capitalize">
          {slug}
        </h2>
      </div>

      {/* FILTERS */}
      <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between mb-16">

        {/* LEFT FILTERS */}
        <div className="flex flex-wrap gap-4">

          {[1, 2, 3].map((_, i) => (
            <div key={i} className="relative">
              {loading ? (
                <div className="w-[160px] h-[36px] bg-gray-300 animate-pulse border border-[var(--border-soft)]" />
              ) : (
                <select
                  value={
                    i === 0
                      ? selectedFragrance
                      : i === 1
                      ? selectedCollection
                      : selectedSize
                  }
                  onChange={(e) =>
                    i === 0
                      ? setSelectedFragrance(e.target.value)
                      : i === 1
                      ? setSelectedCollection(e.target.value)
                      : setSelectedSize(e.target.value)
                  }
                  className="px-4 py-2 text-[11px] uppercase tracking-[0.2em] border border-[var(--border-soft)] bg-transparent"
                >
                  <option value="all">
                    {i === 0
                      ? "All Fragrances"
                      : i === 1
                      ? "All Collections"
                      : "All Sizes"}
                  </option>

                  {(i === 0 ? fragrances : i === 1 ? collections : sizes)
                    .slice(1)
                    .map((v, idx) => (
                      <option key={idx} value={v}>
                        {v}
                      </option>
                    ))}
                </select>
              )}
            </div>
          ))}

        </div>

        {/* SORT */}
        {loading ? (
          <div className="w-[160px] h-[36px] bg-gray-300 animate-pulse border border-[var(--border-soft)]" />
        ) : (
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="px-4 py-2 text-[11px] uppercase tracking-[0.2em] border border-[var(--border-soft)] bg-transparent"
          >
            <option value="recommended">Recommended</option>
            <option value="low-high">Price ↑</option>
            <option value="high-low">Price ↓</option>
          </select>
        )}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">

        {(loading ? [...Array(6)] : filteredProducts).map((product, i) => (
          loading ? (
            <div key={i}>
              <div className="w-full h-[260px] md:h-[320px] bg-gray-300 animate-pulse mb-4" />
              <div className="h-3 w-20 bg-gray-300 mb-2 animate-pulse" />
              <div className="h-2 w-16 bg-gray-300 animate-pulse" />
            </div>
          ) : (
            <ProductCard key={product.id} product={product} />
          )
        ))}

      </div>

    </section>
  );
}