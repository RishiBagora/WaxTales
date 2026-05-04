"use client";

import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

export default function WishlistDrawer() {
  const { wishlist, removeFromWishlist, wishlistOpen, setWishlistOpen, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  const onClose = () => setWishlistOpen(false);

  const handleMoveToCart = () => {
    wishlist.forEach((item) => {
      addToCart(item);
    });
    clearWishlist();
    // Keep it open or close it, depending on preference. Closing it might be better since it's empty now.
    onClose();
  };

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition duration-500 
        ${wishlistOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* PANEL */}
      <div
        className={`fixed top-0 right-0 h-full z-50 bg-[var(--bg-primary)] 
        transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        w-full md:w-[420px]
        flex flex-col
        ${wishlistOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border-soft)]">
          <h2 className="text-sm tracking-[0.3em] uppercase text-[var(--dark)]">
            Wishlist
          </h2>

          <button onClick={onClose}>✕</button>
        </div>

        {/* ITEMS */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">

          {wishlist.length === 0 ? (
            <p className="text-center text-[var(--text-light)] text-sm mt-20">
              Your wishlist is empty
            </p>
          ) : (
            wishlist.map((item) => (
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

                </div>

                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-[10px] uppercase tracking-widest text-[var(--text-light)] self-start mt-2"
                >
                  Remove
                </button>

              </div>
            ))
          )}

        </div>

        {/* FOOTER */}
        <div className="border-t border-[var(--border-soft)] px-6 py-6">

          {/* CTA */}
          <button 
            onClick={handleMoveToCart}
            disabled={wishlist.length === 0}
            className="w-full py-4 text-[11px] tracking-[0.3em] uppercase bg-[var(--dark)] text-white mb-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Move all to Cart
          </button>

          <button
            onClick={onClose}
            className="w-full py-3 text-[11px] tracking-[0.3em] uppercase border border-[var(--dark)]"
          >
            Continue Shopping
          </button>

        </div>

      </div>
    </>
  );
}
