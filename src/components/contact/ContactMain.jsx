"use client";

import { motion } from "framer-motion";
import { BUSINESS } from "../../data/Business";

export default function ContactMain() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const message = e.target.message.value;

    const text = `Hello, I would like to connect.\n\nName: ${name}\nMessage: ${message}`;

    const url = `https://wa.me/${BUSINESS.phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="w-full px-6 md:px-16 py-32 bg-[var(--bg-primary)]">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

        {/* LEFT — FORM */}
        <div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-[newsreader] font-thin text-3xl md:text-4xl text-[var(--dark)] mb-12"
          >
            Send a message
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-10">

            {/* NAME */}
            <div>
              <label className="font-[lexend] font-light text-[11px] uppercase tracking-[0.35em] text-[var(--text-light)]">
                Name
              </label>
              <input
                name="name"
                type="text"
                required
                className="w-full mt-3 bg-transparent border-b py-2 outline-none font-[lexend] font-light"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="font-[lexend] font-light text-[11px] uppercase tracking-[0.35em] text-[var(--text-light)]">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full mt-3 bg-transparent border-b py-2 outline-none font-[lexend] font-light resize-none"
              />
            </div>

            {/* BUTTON */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              type="submit"
              className="group mt-6 font-[lexend] border px-6 py-3.5 font-light text-[11px] tracking-[0.4em] uppercase text-[var(--dark)]"
            >
              Send on WhatsApp
            </motion.button>

          </form>

        </div>

        {/* RIGHT — CONTACT INFO */}
        <div className="flex flex-col justify-center">

          <div className="max-w-sm space-y-14">

            {/* PHONE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="font-[lexend] font-light text-[11px] tracking-[0.4em] uppercase text-[var(--text-light)] mb-3">
                WhatsApp
              </p>

              <p
                onClick={() => window.open(`https://wa.me/${BUSINESS.phone}`, "_blank")}
                className="font-[newsreader] font-thin text-xl text-[var(--dark)] cursor-pointer"
              >
                +91 {BUSINESS.phone.slice(-10)}
              </p>
            </motion.div>

            {/* EMAIL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="font-[lexend] font-light text-[11px] tracking-[0.4em] uppercase text-[var(--text-light)] mb-3">
                Email
              </p>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${BUSINESS.email}&su=Inquiry&body=Hello`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[newsreader] font-thin text-xl text-[var(--dark)] cursor-pointer relative inline-block group"
              >
                {BUSINESS.email}

                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[var(--dark)] transition-all duration-500 group-hover:w-full"></span>
              </a>
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}