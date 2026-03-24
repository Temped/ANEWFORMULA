"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ocean-700 via-ocean-600 to-teal-600 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "url(https://cdn.prod.website-files.com/67360a59a032f30b5272a3a0/675869a806115ac8204c4354_Asset%204small.svg)",
              backgroundSize: "300px",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[13px] font-semibold uppercase tracking-widest text-ocean-200"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-bold text-white tracking-tight"
          >
            Contact us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-lg text-[17px] text-ocean-100/80 leading-relaxed"
          >
            We would love to hear your feedback or suggestions for content or
            connection.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Form */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Image
                src="https://cdn.prod.website-files.com/67360a59a032f30b5272a3a0/67360a59a032f30b5272a404_contact-image-min.png"
                alt="Contact us"
                width={400}
                height={400}
                className="rounded-2xl shadow-lg shadow-slate-200/40"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center"
                >
                  <CheckCircle2 className="h-10 w-10 text-emerald-500 mx-auto" />
                  <p className="mt-4 text-[17px] font-semibold text-emerald-800">
                    Thank you! Your submission has been received.
                  </p>
                  <p className="mt-2 text-[14px] text-emerald-600">
                    We&apos;ll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[13px] font-medium text-slate-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-[15px] text-slate-800 placeholder:text-slate-400 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-400/20 focus:bg-white outline-none transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[13px] font-medium text-slate-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-[15px] text-slate-800 placeholder:text-slate-400 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-400/20 focus:bg-white outline-none transition-all duration-200"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[13px] font-medium text-slate-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-[15px] text-slate-800 placeholder:text-slate-400 focus:border-ocean-400 focus:ring-2 focus:ring-ocean-400/20 focus:bg-white outline-none transition-all duration-200 resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full bg-ocean-600 px-8 py-3.5 text-[15px] font-semibold text-white shadow-sm shadow-ocean-600/20 hover:bg-ocean-700 hover:shadow-md transition-all duration-200"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
