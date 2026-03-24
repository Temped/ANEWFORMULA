"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
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
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 max-w-xl font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-bold text-white tracking-tight"
          >
            The origins of our story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-lg text-[17px] text-ocean-100/80 leading-relaxed"
          >
            A little about what you can expect to discover.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Mission */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[13px] font-semibold uppercase tracking-widest text-ocean-500">
                Our Mission
              </p>
              <h2 className="mt-4 font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-slate-900 tracking-tight">
                Education for a cleaner future
              </h2>
              <div className="mt-8 space-y-5 text-[15px] text-slate-600 leading-[1.75]">
                <p>
                  A New Formula is part of the CONTRAST project, providing
                  educational resources for two age groups (7–11 and 12–15 years)
                  along with teacher materials.
                </p>
                <p>
                  Our focus area covers a broad spectrum of biological effects of
                  chemicals, from boat antifoulants to hormone-disrupting
                  ingredients and pesticides, with emphasis on action and
                  involvement opportunities.
                </p>
                <p>
                  We believe that understanding the science behind emerging
                  chemical pollutants is the first step toward protecting our
                  oceans and our health.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Image
                src="https://cdn.prod.website-files.com/67360a59a032f30b5272a3a0/675ab488006bf28687e4cc54_Firefly%20a%20popart%20young%20robot%20scientist%20swimming%20underwater%2087923.jpg"
                alt="Firefly — a young robot scientist swimming underwater"
                width={560}
                height={560}
                className="rounded-2xl shadow-2xl shadow-slate-300/30"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-ocean-100 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-slate-900 tracking-tight">
            Ready to dive in?
          </h2>
          <p className="mt-5 text-[16px] text-slate-500 leading-relaxed">
            Explore our courses and resources to learn about contaminants of
            emerging concern and discover how you can help.
          </p>
          <div className="mt-9">
            <a
              href="/courses"
              className="group inline-flex items-center gap-2 rounded-full bg-ocean-600 px-8 py-3.5 text-[15px] font-semibold text-white shadow-sm shadow-ocean-600/20 hover:bg-ocean-700 hover:shadow-md transition-all duration-200"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
