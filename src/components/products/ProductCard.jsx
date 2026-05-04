"use client";
  import { Heart, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();
    const navigate = useNavigate();
//     const addToCart = (product) => {
//   setCart((prev) => {
//     const exists = prev.find((item) => item.id === product.id);

//     if (exists) {
//       return prev.map((item) =>
//         item.id === product.id
//           ? { ...item, qty: item.qty + 1 }
//           : item
//       );
//     }

//     return [...prev, { ...product, qty: 1 }];
//   });
// };
  if (!product?.name || !product?.images || !product?.price) return null;

  const price = product.price || 0;
  const discount = product.discount || 0;

  const hasDiscount = discount > 0;

  const finalPrice = hasDiscount
    ? Math.round(price - (price * discount) / 100)
    : price;

  const inWishlist = wishlist.some((i) => i.id === product.id);

  return (
    <div className="group relative">

      {/* ❤️ WISHLIST (ALWAYS VISIBLE) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleWishlist({ ...product, finalPrice });
        }}
        className="absolute top-3 right-3 z-10 
                   w-8 h-8 flex items-center justify-center 
                   bg-white/80 backdrop-blur border border-[var(--border-soft)]"
      >
        <Heart className={`w-4 h-4 text-[var(--dark)] ${inWishlist ? "fill-current" : ""}`} />
      </button>

      {/* BADGES */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">

        {hasDiscount && (
          <span className="text-[9px] px-2 py-1 bg-[var(--dark)] text-white tracking-wider">
            -{discount}%
          </span>
        )}

        {product.isBestSeller && (
          <span className="text-[9px] px-2 py-1 border border-[var(--dark)] text-[var(--dark)] bg-white">
            Best Seller
          </span>
        )}

      </div>

      {/* IMAGE */}
      <div className="overflow-hidden"
      onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={Array.isArray(product.images) && product.images.length > 0
      ? product.images[0]
      : product.image}
          alt={product.name}
          className="w-full h-[260px] md:h-[320px] object-cover 
                     transition duration-700 ease-out 
                     group-hover:scale-[1.05]"
        />
      </div>

      {/* TEXT + ACTION */}
      <div className="mt-4"
      
      >

        <h3 className="text-[11px] uppercase tracking-[0.2em] text-[var(--dark)]">
          {product.name}
        </h3>

        <p className="text-[10px] text-[var(--text-light)] mt-1">
          {product.fragrance}
        </p>

        {/* PRICE */}
        <div className="mt-2 flex items-center gap-2">

          <p className="text-[13px] text-[var(--dark)]">
            Rs. {finalPrice}
          </p>

          {hasDiscount && (
            <p className="text-[11px] text-[var(--text-light)] line-through">
              Rs. {price}
            </p>
          )}

        </div>

        {/* 🛍️ ADD TO CART (ALWAYS VISIBLE) */}
        <button
         onClick={(e) => {
    e.stopPropagation();
    addToCart({ ...product, finalPrice });
  }}
          className="mt-4 w-full py-3 text-[11px] tracking-[0.3em] uppercase 
                     border border-[var(--dark)] text-[var(--dark)] 
                     transition duration-300 hover:bg-[var(--dark)] hover:text-white"
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}