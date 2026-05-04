// "use client";

// import ProductCard from "./ProductCard";

// export default function ProductGrid({ products }) {
//   return (
//     <div className="w-full">

//       {products.length === 0 ? (
//         <div className="text-center text-[var(--text-light)] py-20">
//           No products found
//         </div>
//       ) : (
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}

//         </div>
//       )}

//     </div>
//   );
// }