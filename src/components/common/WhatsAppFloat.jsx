"use client";
import { BUSINESS } from "../../data/Business";


export default function WhatsAppFloat() {

  const message = "Hi, I'm interested in your candles. Can you help me?";

  const url = `https://wa.me/${BUSINESS.phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="w-12 h-12 rounded-full bg-[var(--dark)] 
                      flex items-center justify-center 
                      shadow-lg hover:scale-110 transition duration-300">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="var(--bg-secondary)"
          className="w-6 h-6"
        >
          <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.2c2.3 1.2 4.9 1.8 7.7 1.8 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.6c-2.5 0-4.9-.7-7-2l-.5-.3-4.9 1.3 1.3-4.8-.3-.5c-1.3-2.1-2-4.5-2-7 0-7.4 6-13.4 13.4-13.4s13.4 6 13.4 13.4-6 13.4-13.4 13.4zm7.4-10.1c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.9.2s-1 1.2-1.2 1.4c-.2.2-.4.2-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.1-.8.1-.1.4-.4.5-.6.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.9-2.1-1.2-2.8-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .5-.3.4-1.4 1.4-1.4 3.4s1.4 3.9 1.6 4.2c.2.3 2.7 4.2 6.5 5.8.9.4 1.6.6 2.2.8.9.3 1.8.2 2.5.1.8-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5z" />
        </svg>

      </div>
    </a>
  );
}