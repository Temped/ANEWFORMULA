"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://cdn.prod.website-files.com/67360a59a032f30b5272a3a0/675869a806115ac8204c4354_Asset%204small.svg)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ocean/90 to-ocean-dark/70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Discover the Science.
            <br />
            Protect Our Oceans.
            <br />
            <span className="text-sand">Turn Off the Tap.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg sm:text-xl text-white/90 leading-relaxed"
          >
            A New Formula provides resources, news and videos for students,
            educators and parents. Dive in to learn about emerging chemical
            pollutants, their impacts and how you can help.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="/courses"
              className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-ocean hover:bg-sand transition-colors"
            >
              Get Started
            </a>
            <a
              href="/about"
              className="rounded-full border-2 border-white/40 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
