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
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-9 left-0 w-full z-50 
      bg-[var(--dark)]/90 backdrop-blur border-b border-[#7a6853]
      transition-all duration-500"
    >

      <div
        className={`max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between
        transition-all duration-500
        ${scrolled ? "py-4" : "py-6"}`}
      >

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className={`cursor-pointer tracking-[0.35em] text-[#e7dfcf] font-[newsreader] font-light
          ${scrolled ? "text-[16px] transition-all duration-500" : "text-[18px] transition-all duration-500"}`}
        >
          {settings.businessName || "WAX TALES"}
        </div>

        {/* DESKTOP MENU */}
        <div
          className={`hidden md:flex items-center gap-12 uppercase 
          text-[#d6c8b0]
          ${scrolled ? "text-[10px] transition-all duration-500" : " transition-all duration-500 text-[12px]"}`}
        >
       
          
          <Link to="/collections/candles" className="relative group">
            <span className="group-hover:text-white transition">Candles</span>
            <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-white group-hover:w-full transition-all"></span>
          </Link>
          <Link to="/collections" className="relative group">
            <span className="group-hover:text-white transition">Collections</span>
            <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-white group-hover:w-full transition-all"></span>
          </Link>
          
          <Link to="/gifting" className="relative group">
            <span className="group-hover:text-white transition">Gifting</span>
            <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-white group-hover:w-full transition-all"></span>
          </Link>
          <Link to="/about" className="relative group">
            <span className="group-hover:text-white transition">About Us</span>
            <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-white group-hover:w-full transition-all"></span>
          </Link>
          <Link to="/customise" className="relative group">
            <span className="group-hover:text-white transition">Customise</span>
            <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-white group-hover:w-full transition-all"></span>
          </Link>
          <Link to="/contact" className="relative group">
            <span className="group-hover:text-white transition">Contact</span>
            <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-white group-hover:w-full transition-all"></span>
          </Link>

          
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 text-[#e7dfcf]">

          <Heart 
            onClick={() => setWishlistOpen(true)}
            className={`hover:scale-120 cursor-pointer ${scrolled ? "w-4 h-4 transition-all duration-500" : "w-5 h-5 transition-all duration-500"}`} 
          />

          <ShoppingBag
            onClick={() => setCartOpen(true)}
            className={`hover:scale-120 cursor-pointer ${scrolled ? "w-4 h-4 transition-all duration-500" : "w-5 h-5 transition-all duration-500"}`}
          />

          {/* MOBILE MENU */}
          <div className="md:hidden">
            {open ? (
              <X onClick={() => setOpen(false)} className="w-5 h-5 cursor-pointer" />
            ) : (
              <Menu onClick={() => setOpen(true)} className="w-5 h-5 cursor-pointer" />
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
        
        <Link onClick={() => setOpen(false)} to="/collections">Collections</Link>
        <Link onClick={() => setOpen(false)} to="/about">About</Link>
        <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
      </div>

    </nav>
  );
}