"use client";

import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url(https://cdn.prod.website-files.com/67360a59a032f30b5272a3a0/675869a806115ac8204c4354_Asset%204small.svg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-800/95 via-ocean-700/90 to-teal-600/80" />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIi8+PC9zdmc+')]" />
        {/* Subtle radial glow */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-ocean-400/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-32 pt-40">
        <div className="max-w-[680px]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1.5 text-[13px] font-medium text-ocean-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Part of the CONTRAST Project
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="mt-8 font-heading text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold text-white tracking-[-0.03em] leading-[1.08]"
          >
            Discover the Science.
            <br />
            Protect Our Oceans.
            <br />
            <span className="bg-gradient-to-r from-ocean-200 to-teal-500 bg-clip-text text-transparent">
              Turn Off the Tap.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mt-7 max-w-[520px] text-[17px] leading-[1.7] text-ocean-100/80 font-light"
          >
            Resources, news and videos for students, educators and parents.
            Learn about emerging chemical pollutants, their impacts and how you
            can help.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="/courses"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-[15px] font-semibold text-ocean-800 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 hover:bg-ocean-50 transition-all duration-200"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-7 py-3 text-[15px] font-medium text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              Watch Video
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
