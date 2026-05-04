"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { BUSINESS } from "../../data/Business"

export default function WhatsAppCheckoutModal({ isOpen, onClose, items, totalAmount }) {

  // ✅ FORM STATE
  const [form, setForm] = useState({
    name: "",
    contact: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    notes: "",
  });

  // ❌ REMOVE THIS (no need anymore)
  // const [phone, setPhone] = useState(...)
  // useEffect + getSettings ❌

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    if (!form.name || !form.contact || !form.street || !form.city || !form.state || !form.pincode) {
      alert("Please fill in all required details");
      return;
    }

    let orderDetails = items
      .map((item) => ` ${item.name} x${item.qty} (Rs. ${item.finalPrice * item.qty})`)
      .join("\n");

    const message = `
*NEW ORDER REQUEST*
-----------------------------------
*CUSTOMER DETAILS*
Name: ${form.name}
Contact: ${form.contact}

*SHIPPING ADDRESS*
Street: ${form.street}
City: ${form.city}
State: ${form.state}
Pincode: ${form.pincode}
${form.notes ? `Notes: ${form.notes}\n` : ""}

*ORDER SUMMARY*
${orderDetails}
-----------------------------------
TOTAL: Rs. ${totalAmount}
-----------------------------------
    `.trim();

    // ✅ BUSINESS.phone use
    const url = `https://wa.me/${BUSINESS.phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       w-[90%] max-w-md bg-[var(--bg-primary)] z-[70] 
                       shadow-2xl border border-[var(--border-soft)]"
          >

            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border-soft)]">
              <h2 className="font-[newsreader] text-xl text-[var(--dark)]">
                Checkout Details
              </h2>
              <button onClick={onClose} className="text-[var(--text-light)] hover:text-[var(--dark)] transition">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* FORM */}
            <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">

              <div>
                <label className="font-[lexend] text-[11px] uppercase tracking-[0.35em] text-[var(--text-light)]">
                  Full Name *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full mt-2 border-b border-[var(--dark)] bg-transparent py-2 outline-none font-[lexend]"
                />
              </div>

              <div>
                <label className="font-[lexend] text-[11px] uppercase tracking-[0.35em] text-[var(--text-light)]">
                  Contact Number *
                </label>
                <input
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  className="w-full mt-2 border-b border-[var(--dark)] bg-transparent py-2 outline-none font-[lexend]"
                />
              </div>

              <div>
                <label className="font-[lexend] text-[11px] uppercase tracking-[0.35em] text-[var(--text-light)]">
                  Street Address *
                </label>
                <input
                  name="street"
                  value={form.street}
                  onChange={handleChange}
                  className="w-full mt-2 border-b border-[var(--dark)] bg-transparent py-2 outline-none font-[lexend]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-[lexend] text-[11px] uppercase tracking-[0.35em] text-[var(--text-light)]">
                    City *
                  </label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full mt-2 border-b border-[var(--dark)] bg-transparent py-2 outline-none font-[lexend]"
                  />
                </div>

                <div>
                  <label className="font-[lexend] text-[11px] uppercase tracking-[0.35em] text-[var(--text-light)]">
                    State *
                  </label>
                  <input
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    className="w-full mt-2 border-b border-[var(--dark)] bg-transparent py-2 outline-none font-[lexend]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-[lexend] text-[11px] uppercase tracking-[0.35em] text-[var(--text-light)]">
                    Pincode *
                  </label>
                  <input
                    name="pincode"
                    value={form.pincode}
                    onChange={handleChange}
                    className="w-full mt-2 border-b border-[var(--dark)] bg-transparent py-2 outline-none font-[lexend]"
                  />
                </div>

                <div>
                  <label className="font-[lexend] text-[11px] uppercase tracking-[0.35em] text-[var(--text-light)]">
                    Notes
                  </label>
                  <input
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Optional"
                    className="w-full mt-2 border-b border-[var(--dark)] bg-transparent py-2 outline-none font-[lexend] text-[13px] placeholder:text-[var(--text-light)]/50"
                  />
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-4 mt-4 bg-[var(--dark)] text-white font-[lexend] text-[11px] tracking-[0.3em] uppercase transition hover:opacity-90"
              >
                Checkout Via WhatsApp
              </button>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}