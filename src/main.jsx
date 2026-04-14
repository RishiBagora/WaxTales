import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
export default function SmoothScroll({ children }) {
   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // 🔥 smooth time
      easing: (t) => 1 - Math.pow(1 - t, 4), // 🔥 luxury easing
      smoothWheel: true,
      smoothTouch: false, // mobile pe natural rehne de
      wheelMultiplier: 0.9, // speed control
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 👉 SCROLL EVENT (important for sync)
    lenis.on("scroll", () => {});

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScroll>
    <App />
    </SmoothScroll>
  </StrictMode>,
)
