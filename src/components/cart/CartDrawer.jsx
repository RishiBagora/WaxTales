"use client";

import { useMemo, useState } from "react";
import { useCart } from "../../context/CartContext";
import WhatsAppCheckoutModal from "../common/WhatsAppCheckoutModal";

export default function CartDrawer() {
  const { cart, removeFromCart, updateQty, subtotal, cartOpen, setCartOpen } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const onClose = () => setCartOpen(false);

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition duration-500 
        ${cartOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* PANEL */}
      <div
        className={`fixed top-0 right-0 h-full z-50 bg-[var(--bg-primary)] 
        transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        w-full md:w-[420px]
        flex flex-col
        ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border-soft)]">
          <h2 className="text-sm tracking-[0.3em] uppercase text-[var(--dark)]">
            Cart
          </h2>

          <button onClick={onClose}>✕</button>
        </div>

        {/* ITEMS */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">

          {cart.length === 0 ? (
            <p className="text-center text-[var(--text-light)] text-sm mt-20">
              Your cart is empty
            </p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 border-b pb-4">

                {/* IMAGE */}
                <img
                  src={item.image}
                  className="w-16 h-16 object-cover"
                />

                {/* INFO */}
                <div className="flex-1">

                  <h4 className="text-[12px] uppercase tracking-wide text-[var(--dark)]">
                    {item.name}
                  </h4>

                  <p className="text-[11px] text-[var(--text-light)] mt-1">
                    Rs. {item.finalPrice}
                  </p>

                  {/* QTY */}
                  <div className="flex items-center gap-3 mt-3">

                    <button onClick={() => updateQty(item.id, "dec")}>−</button>

                    <span className="text-sm">{item.qty}</span>

                    <button onClick={() => updateQty(item.id, "inc")}>+</button>

                  </div>

                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-[10px] uppercase tracking-widest text-[var(--text-light)]"
                >
                  Remove
                </button>

              </div>
            ))
          )}

        </div>

        {/* FOOTER */}
        <div className="border-t border-[var(--border-soft)] px-6 py-6">

          {/* TOTAL */}
          <div className="flex justify-between text-sm mb-4">
            <span>Subtotal</span>
            <span>Rs. {subtotal}</span>
          </div>

          {/* CTA */}
          <button 
            onClick={() => {
              if (cart.length > 0) {
                setIsCheckoutOpen(true);
              }
            }}
            className="w-full py-4 text-[11px] tracking-[0.3em] uppercase bg-[#25D366] text-white mb-3 hover:bg-[#1ebe57] transition"
          >
            Checkout Via Whatsapp
          </button>

          <button
            onClick={onClose}
            className="w-full py-3 text-[11px] tracking-[0.3em] uppercase border border-[var(--dark)]"
          >
            Continue Shopping
          </button>

        </div>

      </div>

      <WhatsAppCheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        items={cart} 
        totalAmount={subtotal} 
      />

    </>
  );
}