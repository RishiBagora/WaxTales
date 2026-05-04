"use client";

import { useState } from "react";

export default function CustomForm() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    requirement: "",
    quantity: "",
    budget: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const message = `
Custom Order Inquiry:

Name: ${form.name}
Contact: ${form.contact}
Requirement: ${form.requirement}
Quantity: ${form.quantity}
Budget: ${form.budget}
    `;

    const url = `https://wa.me/919922007656?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    setForm({
      name: "",
      contact: "",
      requirement: "",
      quantity: "",
      budget: "",
    });
    alert("Inquiry sent successfully!");
  };

  return (
    <section className="w-full px-6 md:px-16 py-32 bg-[var(--bg-primary)]">

      <div className="max-w-4xl mx-auto">

        <div className="space-y-10">

          {[
            { name: "name", label: "Name" },
            { name: "contact", label: "Contact" },
            { name: "requirement", label: "Requirement" },
            { name: "quantity", label: "Quantity" },
            { name: "budget", label: "Budget" },
          ].map((field, i) => (
            <div key={i}>
              <label className="font-[lexend] text-[11px] uppercase tracking-[0.35em] text-[var(--text-light)]">
                {field.label}
              </label>

              <input
                name={field.name}
                onChange={handleChange}
                required
                className="w-full mt-3 border-b border-[var(--dark)] bg-transparent py-2 outline-none font-[lexend]"
              />
            </div>
          ))}

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            type="submit"
            onSubmit={handleSubmit}
            className="group mt-10 font-[lexend] text-[11px] tracking-[0.4em] uppercase text-[var(--dark)]"
          >
            Submit Inquiry

            <span className="block h-[1px] w-full bg-[var(--dark)] mt-3 
              scale-x-100 group-hover:scale-x-0 origin-left 
              transition-transform duration-700"></span>
          </button>

        </div>

      </div>

    </section>
  );
}