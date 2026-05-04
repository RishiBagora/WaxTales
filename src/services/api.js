const BASE_URL = "https://script.google.com/macros/s/AKfycbyna7HJBKQXWOUWVbFnl8UDk16IbjeYy3LYHVz17XQDxsBVk-RP40wZ5SSm-i7Ti761/exec";

// 🧱 PRODUCTS
export const getProducts = async () => {
  try {
    const res = await fetch(`${BASE_URL}?sheet=PRODUCTS`);
    const data = await res.json();

    return data.map((item) => ({
      id: item.id,
      name: item.name,
      price: Number(item.price),
      discount: Number(item.discount),
      category: item.category,
      fragrance: item.fragrance,
      stock: Number(item.stock),
      image: item.images,
      description: item.description,
      collectionType: item.collectionType,
      images: item.images.split(","),
highlights: item.highlights?.split("\n") || [],
burnTime: item.burnTime,
waxType: item.waxType,
weight: item.weight,
madeIn: item.madeIn,
    }));
  } catch (err) {
    console.error("Products fetch error:", err);
    return [];
  }
};

// 🧩 VARIANTS
export const getVariants = async () => {
  try {
    const res = await fetch(`${BASE_URL}?sheet=VARIANTS`);
    const data = await res.json();

    return data.map((v) => ({
      productId: v.productId,
      size: v.size,
      price: Number(v.price),
      stock: Number(v.stock),
    }));
  } catch (err) {
    console.error("Variants fetch error:", err);
    return [];
  }
};

// ⚙️ SETTINGS (KEY VALUE)
export const getMeta = async () => {
  try {
    const res = await fetch(`${BASE_URL}?sheet=SETTINGS`);
    const data = await res.json();

    const formatted = {};
    data.forEach((item) => {
      formatted[item.key] = item.value;
    });

    return formatted;
  } catch (err) {
    console.error("Meta fetch error:", err);
    return {};
  }
};

// 🧠 FINAL MERGED PRODUCTS (IMPORTANT)
export const getAllProducts = async () => {
  try {
    const [products, variants] = await Promise.all([
      getProducts(),
      getVariants(),
    ]);

    const finalProducts = products.map((product) => {
      const productVariants = variants.filter(
        (v) => v.productId == product.id
      );

      return {
        ...product,
        variants: productVariants,
        finalPrice:
          product.discount > 0
            ? Math.round(product.price - (product.price * product.discount) / 100)
            : product.price,
      };
    });

    return finalProducts;
  } catch (err) {
    console.error("Merge error:", err);
    return [];
  }
};

// 📸 INSTAGRAM IMAGES
export const getInstaImages = async () => {
  try {
    const res = await fetch(`${BASE_URL}?sheet=INSTA`);
    const data = await res.json();

    return data.map((item) => ({
      image: item.images,
    }));
  } catch (err) {
    console.error("Insta fetch error:", err);
    return [];
  }
};

export const getCollections = async () => {
  try {
    const res = await fetch(`${BASE_URL}?sheet=COLLECTIONS`);
    const data = await res.json();

    return data.map((item) => ({
      title: item.category,
      image: item.image, // 👈 yaha "image" hai, "images" nahi
    }));
  } catch (err) {
    console.error("Collections fetch error:", err);
    return [];
  }
};


// ⚙️ SETTINGS (KEY-VALUE CONFIG)
export const getSettings = async () => {
  try {
    const res = await fetch(`${BASE_URL}?sheet=SETTINGS`);
    const data = await res.json();

    const formatted = {};

    data.forEach((item) => {
      if (item.key) {
        formatted[item.key.trim()] = item.value;
      }
    });

    return formatted;
  } catch (err) {
    console.error("Settings fetch error:", err);
    return {};
  }
};