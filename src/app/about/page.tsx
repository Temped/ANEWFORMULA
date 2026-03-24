"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ocean py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl font-bold text-white"
          >
            About
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-white/85 leading-relaxed"
          >
            The origins of our story and a little about what you can expect to
            discover.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate">
                Our Mission
              </h2>
              <div className="mt-8 space-y-6 text-slate-light leading-relaxed">
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
                  oceans and our health. Through engaging courses, articles, and
                  interactive resources, we aim to empower the next generation to
                  make informed decisions and take meaningful action.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <Image
                src="https://cdn.prod.website-files.com/67360a59a032f30b5272a3a0/675ab488006bf28687e4cc54_Firefly%20a%20popart%20young%20robot%20scientist%20swimming%20underwater%2087923.jpg"
                alt="Firefly — a young robot scientist swimming underwater"
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sand">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl font-bold text-slate"
          >
            Ready to Join?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-slate-light leading-relaxed"
          >
            Dive into our courses and resources to learn about contaminants of
            emerging concern and discover how you can help protect our oceans.
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
              className="inline-block rounded-full bg-ocean px-10 py-4 text-base font-semibold text-white hover:bg-ocean-dark transition-colors"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
