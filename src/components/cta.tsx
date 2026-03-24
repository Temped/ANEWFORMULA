"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ocean-700 via-ocean-600 to-teal-600"
        >
          {/* Background texture */}
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
          {/* Radial glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-[100px]" />

          <div className="relative px-8 py-20 sm:px-16 sm:py-24 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-[clamp(1.75rem,4vw,3rem)] font-bold text-white tracking-tight"
            >
              Ready to make a difference?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 mx-auto max-w-lg text-[16px] text-ocean-100/80 leading-relaxed"
            >
              Join our community of students, educators and parents working
              together to understand and tackle chemical pollution in our oceans.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10"
            >
              <a
                href="/courses"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-ocean-700 shadow-lg shadow-black/10 hover:bg-ocean-50 hover:shadow-xl hover:shadow-black/15 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
