import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import MarqueeStrip from "./components/common/MarqueeStrip";
import Footer from "./components/common/Footer";
import WhatsAppFloat from "./components/common/WhatsAppFloat";
"use client";




function App() {
  return (
    <BrowserRouter>
    <div className="fixed top-0 w-full z-50">
  <MarqueeStrip />
</div>
    <Navbar/>
    <div className="pt-28">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
      </Routes> 
    </div>
      <WhatsAppFloat/>
      <Footer/>
    
    </BrowserRouter>
   
  );
}

export default App;