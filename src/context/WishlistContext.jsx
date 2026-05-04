import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistOpen, setWishlistOpen] = useState(false);

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  // 💾 save
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // ➕ TOGGLE
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((i) => i.id === product.id);

      if (exists) {
        // If it exists, remove it
        return prev.filter((i) => i.id !== product.id);
      }

      // If it doesn't exist, add it
      const newProduct = {
        id: product.id,
        name: product.name,
        image: Array.isArray(product.images)
          ? product.images[0]
          : product.image,
        finalPrice: product.finalPrice ?? product.price,
        // Optional properties we might want to display
        fragrance: product.fragrance,
      };

      setWishlistOpen(true); // Open drawer on add
      return [...prev, newProduct];
    });
  };

  // ❌ REMOVE
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((i) => i.id !== id));
  };

  // 🧹 CLEAR ALL
  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        removeFromWishlist,
        clearWishlist,
        wishlistOpen,
        setWishlistOpen,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);
