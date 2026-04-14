// import { useState } from "react";
// import { Menu, X, ShoppingBag, Heart } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--bg-primary)] border-b border-[#e5dfd3]">

//       {/* CONTAINER */}
//       <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">

//         {/* LOGO LEFT */}
//         <div className="text-[18px] md:text-[20px] tracking-[3px] text-[var(--dark)] font-[500]">
//           WAX TALES
//         </div>

//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex items-center gap-10 text-[12px] tracking-[2px] text-[#6b6b6b]">
//           <a href="#" className="hover:text-[var(--dark)] transition">SHOP</a>
//           <a href="#" className="hover:text-[var(--dark)] transition">COLLECTIONS</a>
//           <a href="#" className="hover:text-[var(--dark)] transition">ABOUT</a>
//           <a href="#" className="hover:text-[var(--dark)] transition">CONTACT</a>
//         </div>
// {/* RIGHT ICONS */}
// <div className="flex items-center gap-5 text-[var(--dark)]">

//   {/* WISHLIST */}
//   <Heart className="w-5 h-5 cursor-pointer hover:opacity-70 transition" />

//   {/* CART */}
//   <ShoppingBag className="w-5 h-5 cursor-pointer hover:opacity-70 transition" />

//   {/* MOBILE MENU BUTTON */}
//   <div className="md:hidden">
//     {open ? (
//       <X onClick={() => setOpen(false)} className="w-6 h-6 cursor-pointer" />
//     ) : (
//       <Menu onClick={() => setOpen(true)} className="w-6 h-6 cursor-pointer" />
//     )}
//   </div>

// </div>
//       </div>

//       {/* MOBILE MENU */}
//       <div
//         className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[var(--bg-primary)] flex flex-col items-center justify-center gap-8 text-[14px] tracking-[3px] text-[var(--dark)] transition-all duration-500 ${
//           open ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//       >
//         <a onClick={() => setOpen(false)} href="#">SHOP</a>
//         <a onClick={() => setOpen(false)} href="#">COLLECTIONS</a>
//         <a onClick={() => setOpen(false)} href="#">ABOUT</a>
//         <a onClick={() => setOpen(false)} href="#">CONTACT</a>
//       </div>
//     </nav>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { Menu, X, ShoppingBag, Heart } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // scroll effect (luxury feel)
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
//       ${
//         scrolled
//           ? "bg-[var(--dark)]/80 backdrop-blur-md border-b border-[var(--border-soft)]"
//           : "bg-[var(--dark)]"
//       }`}
//     >

//       {/* CONTAINER */}
//       <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">

//         {/* LOGO */}
//         <div className="text-[16px] md:text-[18px] tracking-[0.35em] text-[var(--bg-secondary)] font-light">
//           WAX TALES
//         </div>

//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex items-center gap-12 text-[11px] tracking-[0.25em] uppercase text-[var(--bg-secondary)]">

//           {["Shop", "Collections", "About", "Contact"].map((item, i) => (
//             <a
//               key={i}
//               href="#"
//               className="relative group"
//             >
//               <span className="group-hover:text-[var(--bg-secondary)] transition duration-300">
//                 {item}
//               </span>

//               {/* subtle underline */}
//               <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-[var(--bg-secondary)] transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           ))}

//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-6 text-[var(--bg-secondary)]">

//           <Heart className="w-4 h-4 cursor-pointer opacity-70 hover:opacity-100 transition" />

//           <ShoppingBag className="w-4 h-4 cursor-pointer opacity-70 hover:opacity-100 transition" />

//           {/* MENU BTN */}
//           <div className="md:hidden">
//             {open ? (
//               <X onClick={() => setOpen(false)} className="w-5 h-5 cursor-pointer" />
//             ) : (
//               <Menu onClick={() => setOpen(true)} className="w-5 h-5 cursor-pointer" />
//             )}
//           </div>

//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <div
//         className={`fixed top-0 left-0 w-full h-screen bg-[var(--bg-primary)] 
//         flex flex-col items-center justify-center gap-10 
//         text-[14px] tracking-[0.3em] uppercase text-[var(--dark)] 
//         transition-all duration-500 ${
//           open ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//       >

//         {["Shop", "Collections", "About", "Contact"].map((item, i) => (
//           <a key={i} onClick={() => setOpen(false)} href="#">
//             {item}
//           </a>
//         ))}

//       </div>
//     </nav>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Heart } from "lucide-react";
import { getSettings } from "../../services/api";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
const [settings, setSettings] = useState({});

useEffect(() => {
  const loadSettings = async () => {
    const data = await getSettings();
    setSettings(data);
  };

  loadSettings();
}, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-9 left-0 w-full z-50 
      bg-[var(--dark)]/90 backdrop-blur border-b border-[#7a6853]
      transition-all duration-500`}
    >

      {/* CONTAINER */}
      <div
        className={`max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between
        transition-all duration-500
        ${scrolled ? "py-4" : "py-6"}`}
      >

        {/* LOGO */}
        <div
          className={`tracking-[0.35em] text-[#e7dfcf] font-[rajdhani] transition-all duration-500
          ${scrolled ? "text-[16px]" : "text-[18px]"}`}
        >
          {settings.businessName || "WAX TALES"}
        </div>

        {/* DESKTOP MENU */}
        <div
          className={`hidden md:flex items-center gap-12 uppercase 
          text-[#d6c8b0] transition-all duration-500
          ${scrolled ? "text-[12px]" : "text-[11px] tracking-[0.25em]"}`}
        >
          {["Shop", "Collections", "About", "Contact"].map((item, i) => (
            <a key={i} href="#" className="relative group">

              <span className="group-hover:text-white transition duration-300 font-[newsreader] font-thin">
                {item}
              </span>

              <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>

            </a>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 text-[#e7dfcf]">

          <Heart className={`transition-all duration-500 ${scrolled ? "w-4 h-4" : "w-5 h-5"} opacity-80 hover:opacity-100`} />

          <ShoppingBag className={`transition-all duration-500 ${scrolled ? "w-4 h-4" : "w-5 h-5"} opacity-80 hover:opacity-100`} />

          {/* MOBILE MENU BTN */}
          <div className="md:hidden">
            {open ? (
              <X onClick={() => setOpen(false)} className="w-5 h-5 cursor-pointer text-white" />
            ) : (
              <Menu onClick={() => setOpen(true)} className="w-5 h-5 cursor-pointer text-white" />
            )}
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[var(--dark)] 
        flex flex-col items-center justify-center gap-10 
        text-[14px] tracking-[0.3em] uppercase text-[#e7dfcf] 
        transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {["Shop", "Collections", "About", "Contact"].map((item, i) => (
          <a key={i} onClick={() => setOpen(false)} href="#">
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}