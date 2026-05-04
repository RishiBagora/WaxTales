// "use client";

// export default function FilterBar({
//   categories,
//   fragrances,
//   selectedCategory,
//   setSelectedCategory,
//   selectedFragrance,
//   setSelectedFragrance,
//   sortType,
//   setSortType,
// }) {
//   return (
//     <div className="w-full mb-16">

//       {/* CATEGORY FILTER */}
//       <div className="flex gap-3 overflow-x-auto pb-3">

//         {categories.map((cat, i) => (
//           <button
//             key={i}
//             onClick={() => setSelectedCategory(cat)}
//             className={`px-4 py-2 text-[11px] uppercase tracking-[0.25em] whitespace-nowrap
//               border transition duration-300
//               ${
//                 selectedCategory === cat
//                   ? "bg-[var(--dark)] text-white border-[var(--dark)]"
//                   : "border-[var(--border-soft)] text-[var(--text-light)] hover:text-[var(--dark)]"
//               }`}
//           >
//             {cat}
//           </button>
//         ))}

//       </div>

//       {/* FRAGRANCE FILTER */}
//       <div className="flex gap-3 overflow-x-auto mt-6 pb-3">

//         {fragrances.map((f, i) => (
//           <button
//             key={i}
//             onClick={() => setSelectedFragrance(f)}
//             className={`px-4 py-2 text-[10px] uppercase tracking-[0.25em] whitespace-nowrap
//               border transition duration-300
//               ${
//                 selectedFragrance === f
//                   ? "bg-[var(--dark)] text-white border-[var(--dark)]"
//                   : "border-[var(--border-soft)] text-[var(--text-light)] hover:text-[var(--dark)]"
//               }`}
//           >
//             {f}
//           </button>
//         ))}

//       </div>

//       {/* SORT */}
//       <div className="mt-8 flex justify-end">

//         <select
//           value={sortType}
//           onChange={(e) => setSortType(e.target.value)}
//           className="text-[11px] uppercase tracking-[0.2em] 
//                      border border-[var(--border-soft)] px-4 py-2 
//                      bg-transparent outline-none"
//         >
//           <option value="recommended">Recommended</option>
//           <option value="best">Best Selling</option>
//           <option value="low-high">Price: Low to High</option>
//           <option value="high-low">Price: High to Low</option>
//         </select>

//       </div>

//     </div>
//   );
// }