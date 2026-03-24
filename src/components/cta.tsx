"use client";

import { motion } from "motion/react";

export function CTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ocean to-ocean-dark" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full bg-repeat"
          style={{
            backgroundImage:
              "url(https://cdn.prod.website-files.com/67360a59a032f30b5272a3a0/675869a806115ac8204c4354_Asset%204small.svg)",
            backgroundSize: "400px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
        >
          Ready to Join?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg text-white/85 leading-relaxed"
        >
          Join our community of students, educators and parents working together
          to understand and tackle chemical pollution in our oceans.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <a
            href="/courses"
            className="inline-block rounded-full bg-white px-10 py-4 text-base font-semibold text-ocean hover:bg-sand transition-colors"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
