import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import MarqueeStrip from "./components/common/MarqueeStrip";
import Footer from "./components/common/Footer";
import WhatsAppFloat from "./components/common/WhatsAppFloat";
import Collections from "./pages/Collections";
import CollectionProducts from "./pages/CollectionProducts";
import ProductDetailPage from "./components/products/ProductDetailPage";
import CartDrawer from "./components/cart/CartDrawer";
import WishlistDrawer from "./components/cart/WishlistDrawer";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import About from "./pages/About";
import Customise from "./pages/Customise";
import Contact from "./pages/Contact";
import PaymentOptions from "./pages/PaymentOptions";
import Story from "./pages/Story";
import Gifting from "./pages/Gifting";
import Wedding from "./pages/Wedding";
import Faqs from "./pages/Faqs";
import ScrollToTop from "./components/common/ScrollToTop";

// import Products from "./pages/Products";
"use client";

function App() {
  
  return (
    <>  
   
    <WishlistProvider>
    <CartProvider>
    <BrowserRouter>

  <ScrollToTop /> {/* 👈 सबसे ऊपर */}

  <div className="fixed top-0 w-full z-50">
    <MarqueeStrip />
  </div>

  <Navbar />

  <CartDrawer />
  <WishlistDrawer />

  <div className="pt-28">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/collections/:slug" element={<CollectionProducts />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/customise" element={<Customise />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/payment-options" element={<PaymentOptions />} />
      <Route path="/story" element={<Story />} />
      <Route path="/gifting" element={<Gifting />} />
      <Route path="/wedding" element={<Wedding />} />
      <Route path="/faqs" element={<Faqs />} />
    </Routes>
  </div>

  <WhatsAppFloat />
  <Footer />

</BrowserRouter>
    </CartProvider>
    </WishlistProvider>
    </>
   
  );
}

export default App;