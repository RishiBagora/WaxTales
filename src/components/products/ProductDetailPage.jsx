
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/api";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import WhatsAppCheckoutModal from "../common/WhatsAppCheckoutModal";

export default function ProductPage() {
  const { id } = useParams();
   const { addToCart } = useCart();
   const { wishlist, toggleWishlist } = useWishlist();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    const load = async () => {
      const data = await getAllProducts();
      const found = data.find((p) => String(p.id) === id);
      setProduct(found);
    };
    load();
  }, [id]);

  if (!product)
  return (
    <section className="w-full px-6 md:px-16 py-28 bg-[var(--bg-primary)]">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* IMAGE SKELETON */}
        <div>
          <div className="w-full h-[400px] md:h-[520px] relative overflow-hidden bg-gray-300">
            <div className="absolute inset-0 shimmer"></div>
          </div>

          <div className="flex gap-3 mt-4">
            {[1,2,3,4].map((_,i) => (
              <div key={i} className="w-16 h-16 bg-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 shimmer"></div>
              </div>
            ))}
          </div>
        </div>

        {/* DETAILS SKELETON */}
        <div>

          <div className="h-8 w-2/3 bg-gray-300 mb-4 relative overflow-hidden">
            <div className="absolute inset-0 shimmer"></div>
          </div>

          <div className="h-4 w-1/2 bg-gray-300 mb-6 relative overflow-hidden">
            <div className="absolute inset-0 shimmer"></div>
          </div>

          <div className="h-6 w-1/3 bg-gray-300 mb-6 relative overflow-hidden">
            <div className="absolute inset-0 shimmer"></div>
          </div>

          <div className="h-20 w-full bg-gray-300 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 shimmer"></div>
          </div>

          <div className="h-12 w-full bg-gray-300 mb-4 relative overflow-hidden">
            <div className="absolute inset-0 shimmer"></div>
          </div>

          <div className="h-12 w-full bg-gray-300 relative overflow-hidden">
            <div className="absolute inset-0 shimmer"></div>
          </div>

        </div>

      </div>

      {/* SHIMMER STYLE */}
      <style>
        {`
          .shimmer {
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.4),
              transparent
            );
            animation: shimmer 1.4s infinite;
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>

    </section>
  );

  const hasDiscount = product.discount > 0;

  const finalPrice = hasDiscount
    ? Math.round(product.price - (product.price * product.discount) / 100)
    : product.price;

  const inWishlist = product ? wishlist.some((i) => i.id === product.id) : false;

  return (
    <section className="w-full px-6 md:px-16 py-28 bg-[var(--bg-primary)]">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* IMAGE GALLERY */}
        <div>

          {/* MAIN IMAGE */}
          <div className="relative overflow-hidden mb-4">
            {/* LEFT ARROW */}
<button
  onClick={() =>
    setActiveImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    )
  }
  className="absolute left-4 top-1/2 -translate-y-1/2 text-white  px-3 py-2"
>
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
</button>

{/* RIGHT ARROW */}
<button
  onClick={() =>
    setActiveImage((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    )
  }
  className="absolute right-4 top-1/2 -translate-y-1/2 text-white px-3 py-2"
>
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
</button>

            <img
              src={product.images?.[activeImage] || product.image}
              alt={product.name}
              className="w-full h-[400px] md:h-[520px] object-cover"
            />

            {/* DISCOUNT BADGE */}
            {hasDiscount && (
              <div className="absolute top-4 left-4 bg-[var(--dark)] text-white text-[10px] px-3 py-1 tracking-widest">
                {product.discount}% OFF
              </div>
            )}

          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-3">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImage(i)}
                className={`w-16 h-16 object-cover cursor-pointer border 
                  ${activeImage === i ? "border-[var(--dark)]" : "border-transparent"}`}
              />
            ))}
          </div>

        </div>

        {/* DETAILS */}
        <div>

          {/* NAME */}
          <h1 className="text-3xl md:text-4xl font-[newsreader] font-light text-[var(--dark)] mb-4">
            {product.name}
          </h1>

          {/* META */}
          <p className="text-[var(--text-light)] mb-6">
            {product.fragrance} • {product.collectionType}
          </p>

          {/* PRICE */}
          <div className="flex items-center gap-4 mb-6">

            <p className="text-2xl font-[lexend] text-[var(--dark)]">
              Rs. {finalPrice}
            </p>

            {hasDiscount && (
              <p className="text-sm font-[lexend] line-through text-[var(--text-light)]">
                Rs. {product.price}
              </p>
            )}

          </div>

          {/* DESCRIPTION */}
          <p className="text-[var(--text-light)] leading-relaxed mb-8">
            {product.description}
          </p>

          {/* HIGHLIGHTS */}
          <div className="mb-10 space-y-2">
            {product.highlights?.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span>•</span>
                <p>{h}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
       <div className="flex items-center gap-3">

  {/* ADD TO CART */}
  <button
   onClick={() => addToCart({ ...product, finalPrice })}
    className="group relative flex-1 py-4 text-[11px] tracking-[0.35em] uppercase 
               border border-[var(--dark)] overflow-hidden"
  >
    <span className="relative z-10 transition duration-300 group-hover:text-white">
      Add to Cart
    </span>

    {/* FILL ANIMATION */}
    <span className="absolute inset-0 bg-[var(--dark)] 
                     translate-y-full group-hover:translate-y-0 
                     transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></span>
  </button>

  {/* ❤️ WISHLIST */}
  <button
    onClick={(e) => {
      e.stopPropagation();
      toggleWishlist({ ...product, finalPrice });
    }}
    className="group relative w-12 h-12 flex items-center justify-center 
               border border-[var(--dark)] overflow-hidden"
  >

    {/* ICON */}
    <span className="relative z-10 transition duration-300 group-hover:text-white text-xl">
      {inWishlist ? "♥" : "♡"}
    </span>

    {/* HOVER FILL */}
    <span className="absolute inset-0 bg-[var(--dark)] 
                     translate-y-full group-hover:translate-y-0 
                     transition-transform duration-500"></span>

  </button>

</div>

{/* WHATSAPP BUY NOW */}
<button
  onClick={() => setIsCheckoutOpen(true)}
  className="group relative w-full py-4 text-[11px] tracking-[0.35em] uppercase 
             bg-[var(--dark)] text-white hover:text-[var(--dark)] mt-4 overflow-hidden border border-[var(--dark)]"
>
  <span className="relative z-10 transition duration-300">
    Buy Now via WhatsApp
  </span>

  <span className="absolute inset-0 bg-[var(--bg-primary)] 
                   translate-y-full group-hover:translate-y-0 
                   transition-transform duration-500"></span>
</button>

<div className="mt-12 border-t border-[var(--border-soft)] pt-10 grid grid-cols-2 gap-6 text-sm text-[var(--text-light)]">

  {product.burnTime && (
    <div>
      <p className="uppercase tracking-widest text-[10px] mb-2">Burn Time</p>
      <p>{product.burnTime}</p>
    </div>
  )}

  {product.waxType && (
    <div>
      <p className="uppercase tracking-widest text-[10px] mb-2">Wax Type</p>
      <p>{product.waxType}</p>
    </div>
  )}

  {product.weight && (
    <div>
      <p className="uppercase tracking-widest text-[10px] mb-2">Weight</p>
      <p>{product.weight}</p>
    </div>
  )}

  {product.madeIn && (
    <div>
      <p className="uppercase tracking-widest text-[10px] mb-2">Made In</p>
      <p>{product.madeIn}</p>
    </div>
  )}

</div>
{/* TRUST SECTION */}
<div className="mt-16 border-t border-[var(--border-soft)] pt-10 flex flex-col md:flex-row justify-between gap-6 text-[11px] uppercase tracking-[0.2em] text-[var(--text-light)]">

  <p>Handcrafted in small batches</p>
  <p>Premium fragrance oils</p>
  <p>Pan India delivery</p>

</div>



<div className="w-full h-[1px] bg-[var(--border-soft)] my-16"></div>
        </div>

      </div>

      <WhatsAppCheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        items={[{ ...product, qty: 1 }]} 
        totalAmount={finalPrice} 
      />

    </section>
  );
}