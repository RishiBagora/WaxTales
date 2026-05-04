// "use client";

// import { useEffect, useState } from "react";
// import { getCollections } from "../../services/api";
// import { useNavigate } from "react-router-dom";

// export default function Collections() {
//   const [collections, setCollections] = useState([]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     const loadData = async () => {
//       const data = await getCollections();
//       setCollections(data);
//     };

//     loadData();
//   }, []);

//   return (
//     <section className="w-full px-4 md:px-10 lg:px-16 py-24 bg-[var(--bg-primary)]">

//       {/* HEADING */}
//       <div className="mb-16 text-center">
//         <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--accent)] mb-3">
//           Discover
//         </p>

//         <h2 className="text-3xl md:text-4xl font-[newsreader] font-thin text-[var(--dark)]">
//           Explore Collections
//         </h2>
//       </div>

//       {/* GRID */}
//       <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[320px]">

//         {collections.map((item, index) => (
         
//           <div
//           onClick={() => navigate(`/collections/${item.title.toLowerCase().split(' ').join('-')}`)}
//             key={index}
//             className={`relative overflow-hidden group cursor-pointer 
//                         border border-[var(--border-soft)]
//                         ${index === 0 ? "md:row-span-2" : ""}`}
//           >

//             {/* IMAGE WRAPPER */}
//             <div className="absolute inset-0">

//               {/* ORIGINAL IMAGE */}
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="absolute inset-0 w-full h-full object-cover 
//                            transition duration-[1200ms] ease-out 
//                            group-hover:scale-105"
//               />

            

//             </div>


//                {/* GRADIENT FADE OVERLAY */}
// <div className="absolute inset-0 z-10 
//   bg-gradient-to-t 
//   from-[rgba(36,21,7,0.85)] 
//   via-[rgba(36,21,7,0.35)] 
//   to-transparent" />

//             {/* TEXT */}
//             <div className="absolute bottom-6 left-6 z-10">

//               <h3 className="text-[var(--bg-secondary)] text-sm md:text-lg 
//                              tracking-[0.15em] uppercase font-light 
//                              transition duration-500 
//                              group-hover:translate-y-[-4px]">
//                 {item.title}
//               </h3>

//               <span className="block mt-2 h-[1px] w-full bg-[var(--bg-secondary)] 
//                                group-hover:w-0 transition-all duration-500"></span>

//             </div>

//           </div>
         
//         ))}

//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { getCollections } from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Collections() {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      const data = await getCollections();
      setCollections(data);
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <section className="w-full px-4 md:px-10 lg:px-16 py-24 bg-[var(--bg-primary)]">

      {/* HEADING */}
      <div className="mb-16 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--accent)] mb-3">
          Discover
        </p>

        <h2 className="text-3xl md:text-4xl font-[newsreader] font-thin text-[var(--dark)]">
          Explore Collections
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[320px]">

        {(loading ? [...Array(5)] : collections).map((item, index) => (
          <div
            key={index}
            onClick={
              !loading
                ? () =>
                    navigate(
                      `/collections/${item.title
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`
                    )
                : undefined
            }
            className={`relative overflow-hidden 
              ${!loading && "group cursor-pointer"} 
              border border-[var(--border-soft)]
              ${index === 0 ? "md:row-span-2" : ""}`}
          >

            {/* IMAGE / SKELETON */}
            <div className="absolute inset-0">

              {loading ? (
                <div className="w-full h-full bg-gray-300 animate-pulse" />
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover 
                             transition duration-[1200ms] ease-out 
                             group-hover:scale-105"
                />
              )}

            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 z-10 
              bg-gradient-to-t 
              from-[rgba(36,21,7,0.85)] 
              via-[rgba(36,21,7,0.35)] 
              to-transparent" />

            {/* TEXT / SKELETON */}
            <div className="absolute bottom-6 left-6 z-10">

              {loading ? (
                <>
                  <div className="h-3 w-20 bg-gray-200 mb-2 animate-pulse" />
                  <div className="h-[1px] w-16 bg-gray-200 animate-pulse" />
                </>
              ) : (
                <>
                  <h3 className="text-[var(--bg-secondary)] text-sm md:text-lg 
                                 tracking-[0.15em] uppercase font-light 
                                 transition duration-500 
                                 group-hover:translate-y-[-4px]">
                    {item.title}
                  </h3>

                  <span className="block mt-2 h-[1px] w-full bg-[var(--bg-secondary)] 
                                   group-hover:w-0 transition-all duration-500"></span>
                </>
              )}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}