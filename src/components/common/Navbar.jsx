"use client";

import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Heart } from "lucide-react";
import { getSettings } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [settings, setSettings] = useState({});
  const { setCartOpen } = useCart();
  const { setWishlistOpen } = useWishlist();

  const navigate = useNavigate();

  useEffect(() => {
    const loadSettings = async () => {
      const data = await getSettings();
      setSettings(data);
    };
    loadSettings();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-9 left-0 w-full z-50 bg-[var(--dark)]/90 backdrop-blur border-b border-[#7a6853] transition-all duration-500">

      {/* MAIN BAR */}
      <div
        className={`max-w-[1200px] mx-auto px-4 md:px-12 
        ${scrolled ? "h-[56px]" : "h-[72px]"} 
        flex items-center justify-between 
        transition-all duration-500 ease-out`}
      >

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className={`cursor-pointer tracking-[0.25em] text-[#e7dfcf] font-[newsreader]
          ${scrolled ? "text-[14px]" : "text-[17px]"}
          transition-all duration-500`}
        >
          {settings.businessName || "WAX TALES"}
        </div>

        {/* DESKTOP MENU */}
        <div className={`hidden md:flex items-center gap-12 uppercase text-[#d6c8b0]
          ${scrolled ? "text-[11px]" : "text-[12px]"}
          transition-all duration-500`}>

          <Link to="/collections/candles" className="relative group">
            <span className="group-hover:text-white transition">Candles</span>
          </Link>

          <Link to="/collections" className="relative group">
            <span className="group-hover:text-white transition">Collections</span>
          </Link>

          <Link to="/gifting" className="relative group">
            <span className="group-hover:text-white transition">Gifting</span>
          </Link>

          <Link to="/wedding" className="relative group">
            <span className="group-hover:text-white transition">Wedding</span>
          </Link>

          <Link to="/about" className="relative group">
            <span className="group-hover:text-white transition">About</span>
          </Link>

          <Link to="/customise" className="relative group">
            <span className="group-hover:text-white transition">Customise</span>
          </Link>

          <Link to="/contact" className="relative group">
            <span className="group-hover:text-white transition">Contact</span>
          </Link>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 text-[#e7dfcf]">

          <Heart
            onClick={() => setWishlistOpen(true)}
            className={`cursor-pointer transition-all duration-500 
            ${scrolled ? "w-4 h-4" : "w-5 h-5"}`}
          />

          <ShoppingBag
            onClick={() => setCartOpen(true)}
            className={`cursor-pointer transition-all duration-500 
            ${scrolled ? "w-4 h-4" : "w-5 h-5"}`}
          />

          {/* MOBILE MENU BTN */}
          <div className="md:hidden">
            {open ? (
              <X onClick={() => setOpen(false)} className="w-6 h-6" />
            ) : (
              <Menu onClick={() => setOpen(true)} className="w-6 h-6" />
            )}
          </div>

        </div>
      </div>

      {/* 🔥 MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[var(--dark)] z-50
        flex flex-col justify-between px-6 py-10
        transition-all duration-500 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >

        {/* TOP */}
        <div className="flex justify-between items-center">

          <div className="text-[#e7dfcf] tracking-[0.25em] text-sm font-[newsreader]">
            {settings.businessName || "WAX TALES"}
          </div>

          <X onClick={() => setOpen(false)} className="w-6 h-6 text-[#e7dfcf]" />
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-8 mt-16">

          {[
            { name: "Candles", path: "/collections/candles" },
            { name: "Collections", path: "/collections" },
            { name: "Gifting", path: "/gifting" },
            { name: "Wedding", path: "/wedding" },
            { name: "About", path: "/about" },
            { name: "Customise", path: "/customise" },
            { name: "Contact", path: "/contact" },
          ].map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={() => setOpen(false)}
              className="text-[#e7dfcf] font-[newsreader] text-2xl font-thin tracking-[0.08em]"
            >
              {item.name}
            </Link>
          ))}

        </div>

        {/* FOOTER */}
        <div className="text-[#a89b84] text-xs tracking-[0.3em] uppercase">
          © Wax Tales
        </div>

      </div>

    </nav>
  );
}