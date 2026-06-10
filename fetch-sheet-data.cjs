const fs = require("fs");

const BASE_URL = "https://script.google.com/macros/s/AKfycbyna7HJBKQXWOUWVbFnl8UDk16IbjeYy3LYHVz17XQDxsBVk-RP40wZ5SSm-i7Ti761/exec";

async function fetchSheet(sheetName) {
  const res = await fetch(`${BASE_URL}?sheet=${sheetName}`);
  return await res.json();
}

async function buildData() {
  console.log("🔄 Fetching data from Google Sheets...");

  // Sab sheets ek saath fetch karo
  const [products, variants, settings, insta, collections] = await Promise.all([
    fetchSheet("PRODUCTS"),
    fetchSheet("VARIANTS"),
    fetchSheet("SETTINGS"),
    fetchSheet("INSTA"),
    fetchSheet("COLLECTIONS"),
  ]);

  // PRODUCTS format
  const formattedProducts = products.map((item) => ({
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

  // VARIANTS format
  const formattedVariants = variants.map((v) => ({
    productId: v.productId,
    size: v.size,
    price: Number(v.price),
    stock: Number(v.stock),
  }));

  // MERGED PRODUCTS (getAllProducts wala logic)
  const allProducts = formattedProducts.map((product) => {
    const productVariants = formattedVariants.filter(
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



  // INSTA format
  const formattedInsta = insta.map((item) => ({
    image: item.images,
  }));

  // COLLECTIONS format
  const formattedCollections = collections.map((item) => ({
    title: item.category,
    image: item.image,
  }));

  // src/data folder banana agar nahi hai
  if (!fs.existsSync("./src/data")) {
    fs.mkdirSync("./src/data", { recursive: true });
  }

  // JSON files save karna
  fs.writeFileSync("./src/data/products.json", JSON.stringify(formattedProducts, null, 2));
  fs.writeFileSync("./src/data/variants.json", JSON.stringify(formattedVariants, null, 2));
  fs.writeFileSync("./src/data/allProducts.json", JSON.stringify(allProducts, null, 2));
  fs.writeFileSync("./src/data/settings.json", JSON.stringify(formattedSettings, null, 2));
  fs.writeFileSync("./src/data/insta.json", JSON.stringify(formattedInsta, null, 2));
  fs.writeFileSync("./src/data/collections.json", JSON.stringify(formattedCollections, null, 2));

  console.log("✅ Products:", formattedProducts.length);
  console.log("✅ Variants:", formattedVariants.length);
  console.log("✅ All Products (merged):", allProducts.length);
  console.log("✅ Settings keys:", Object.keys(formattedSettings).length);
  console.log("✅ Insta images:", formattedInsta.length);
  console.log("✅ Collections:", formattedCollections.length);
  console.log("🎉 All data saved to src/data/");
}

buildData();