// "use client";

// import { useEffect, useState } from "react";
// import { getAllProducts } from "../services/api";
// import FilterBar from "../components/products/FilterBar";
// import ProductGrid from "../components/products/ProductGrid";

// export default function Products() {

//     // 🧠 MAIN DATA
//     const [products, setProducts] = useState([]);

//     // 🧠 FILTER DATA
//     const [categories, setCategories] = useState([]);
//     const [fragrances, setFragrances] = useState([]);

//     // 🧠 USER SELECTION
//     const [selectedCategory, setSelectedCategory] = useState("All");
//     const [selectedFragrance, setSelectedFragrance] = useState("All");

//     // 🧠 SORT
//     const [sortType, setSortType] = useState("recommended");

//     useEffect(() => {
//         const loadData = async () => {
//             const data = await getAllProducts();

//            const cleanData = data.filter((p) => {
//   return (
//     p &&
//     p.name &&
//     p.image &&
//     p.price &&
//     p.category
//   );
// });

// setProducts(cleanData);

//             // 🔥 AUTO EXTRACT FILTERS
//             const uniqueCategories = ["All", ...new Set(data.map(p => p.category))];
//             const uniqueFragrances = ["All", ...new Set(data.map(p => p.fragrance))];

//             setCategories(uniqueCategories);
//             setFragrances(uniqueFragrances);
//         };

//         loadData();
//     }, []);

//     const filteredProducts = products
//         .filter((p) => {
//             return (
//                 (selectedCategory === "All" || p.category === selectedCategory) &&
//                 (selectedFragrance === "All" || p.fragrance === selectedFragrance)
//             );
//         })
//         .sort((a, b) => {
//             if (sortType === "low-high") {
//                 return a.finalPrice - b.finalPrice;
//             }

//             if (sortType === "high-low") {
//                 return b.finalPrice - a.finalPrice;
//             }

//             if (sortType === "best") {
//                 return (b.sales || 0) - (a.sales || 0); // future safe
//             }

//             return 0; // recommended (default order)
//         });



//     return (

//         <section className="w-full px-6 md:px-16 py-24 bg-[var(--bg-primary)]">
//             <FilterBar
//                 categories={categories}
//                 fragrances={fragrances}
//                 selectedCategory={selectedCategory}
//                 setSelectedCategory={setSelectedCategory}
//                 selectedFragrance={selectedFragrance}
//                 setSelectedFragrance={setSelectedFragrance}
//                 sortType={sortType}
//                 setSortType={setSortType}
//             />
//             <ProductGrid products={filteredProducts} />
            

//         </section>
//     );
// }