"use client";

import { motion } from "framer-motion";

export default function PaymentOptions() {
  const methods = [
    { name: "UPI", icon: "/icons/upi.png" },
    { name: "Credit Card", icon: "/icons/credit-card.png" },
    { name: "Debit Card", icon: "/icons/debit-card.png" },
    { name: "Net Banking", icon: "/icons/netbanking.png" },
  ];

  return (
    <section className="w-full px-6 md:px-16 py-32 bg-[var(--bg-primary)]">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">

          <p className="font-[lexend] font-light text-[11px] tracking-[0.45em] uppercase text-[var(--accent)] mb-6">
            Payments
          </p>

          <h1 className="font-[newsreader] font-thin text-4xl md:text-5xl text-[var(--dark)] leading-[1.1] mb-6">
            Secure & Flexible Payment Options
          </h1>

          <p className="font-[lexend] font-light text-[15px] text-[var(--text-light)] leading-[1.9]">
            We offer a range of secure payment methods to ensure a smooth and
            reliable checkout experience.
          </p>

        </div>

        {/* METHODS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-14 items-center mb-24">

          {methods.map((method, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-4 opacity-80 hover:opacity-100 transition"
            >
              <img
                src={method.icon}
                alt={method.name}
                className="w-10 h-10 object-contain grayscale"
              />

              <p className="font-[lexend] font-light text-[13px] text-[var(--dark)]">
                {method.name}
              </p>
            </div>
          ))}

        </div>

        {/* DETAILS */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div className="space-y-6">

            <h3 className="font-[newsreader] font-thin text-2xl text-[var(--dark)]">
              Payment Information
            </h3>

            <p className="font-[lexend] font-light text-[14px] text-[var(--text-light)] leading-[1.9]">
              All transactions are processed through secure and encrypted
              gateways to ensure your personal and payment information remains
              protected at all times.
            </p>

            <p className="font-[lexend] font-light text-[14px] text-[var(--text-light)] leading-[1.9]">
              We do not store your card details on our servers. Payments are
              handled by trusted third-party providers compliant with industry
              standards.
            </p>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            <h3 className="font-[newsreader] font-thin text-2xl text-[var(--dark)]">
              Important Notes
            </h3>

            <ul className="space-y-4">

              <li className="font-[lexend] font-light text-[14px] text-[var(--text-light)]">
                • Orders are processed only after successful payment confirmation.
              </li>

              <li className="font-[lexend] font-light text-[14px] text-[var(--text-light)]">
                • In case of payment failure, the amount (if deducted) is automatically refunded by your bank.
              </li>

              <li className="font-[lexend] font-light text-[14px] text-[var(--text-light)]">
                • For custom or bulk orders, partial advance payment may be required.
              </li>

              <li className="font-[lexend] font-light text-[14px] text-[var(--text-light)]">
                • For assistance, feel free to reach out via our contact page.
              </li>

            </ul>

          </div>

        </div>

        {/* TRUST LINE */}
        <div className="mt-24">

          <div className="w-full h-[1px] bg-[var(--border-soft)] mb-10"></div>

          <p className="font-[newsreader] font-thin text-xl text-[var(--dark)]">
            100% Secure Payments
          </p>

        </div>

      </div>

    </section>
  );
}