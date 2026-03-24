"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function LatestArticle() {
  return (
    <section className="py-24 bg-sand">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate">
            Latest Articles
          </h2>
        </motion.div>

        <motion.a
          href="/news"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group block max-w-4xl mx-auto rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
              <Image
                src="https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/689f5239914755e4ea5d98f4_PFAS_by-products.png"
                alt="PFAS article"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-xs font-semibold text-ocean uppercase tracking-wider">
                Featured Article
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold text-slate leading-snug">
                PFAS: How to Identify and Avoid Them in Everyday Life and Work
              </h3>
              <p className="mt-4 text-sm text-slate-light leading-relaxed">
                Learn about the sources of PFAS in everyday products and
                practical steps you can take to reduce your exposure at home and
                in the workplace.
              </p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-ocean group-hover:underline">
                Read article →
              </span>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
