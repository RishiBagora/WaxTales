import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartOpen, setCartOpen] = useState(false);

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // 💾 save
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ➕ ADD
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id);

      if (exists) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          image: Array.isArray(product.images)
            ? product.images[0]
            : product.image,
          finalPrice: product.finalPrice ?? product.price,
          qty: 1,
        },
      ];
    });
    setCartOpen(true); // Open drawer on add
  };

  // ❌ REMOVE
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  // 🔁 QTY
  const updateQty = (id, type) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id
          ? {
              ...i,
              qty: type === "inc" ? i.qty + 1 : Math.max(1, i.qty - 1),
            }
          : i
      )
    );
  };

  // 💰 TOTAL
  const subtotal = useMemo(() => {
    return cart.reduce((acc, i) => acc + i.finalPrice * i.qty, 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty, subtotal, cartOpen, setCartOpen }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);