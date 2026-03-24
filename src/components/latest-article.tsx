"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Clock } from "lucide-react";

export function LatestArticle() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[13px] font-semibold uppercase tracking-widest text-ocean-500"
            >
              Latest from the blog
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-4 font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-slate-900 tracking-tight"
            >
              Featured article
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/news"
              className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-ocean-600 hover:text-ocean-700 transition-colors"
            >
              All articles
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Featured card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/news"
            className="group block max-w-5xl rounded-2xl border border-slate-200/80 bg-white overflow-hidden hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[360px] overflow-hidden">
                <Image
                  src="https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/689f5239914755e4ea5d98f4_PFAS_by-products.png"
                  alt="PFAS article"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <span className="rounded-md bg-ocean-50 border border-ocean-200 px-2.5 py-1 text-[11px] font-bold text-ocean-700">
                    Featured
                  </span>
                  <span className="flex items-center gap-1 text-[12px] text-slate-400">
                    <Clock className="h-3 w-3" />5 min read
                  </span>
                </div>
                <h3 className="font-heading text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-slate-900 leading-snug tracking-tight">
                  PFAS: How to Identify and Avoid Them in Everyday Life and Work
                </h3>
                <p className="mt-4 text-[15px] text-slate-500 leading-relaxed">
                  Learn about the sources of PFAS in everyday products and
                  practical steps you can take to reduce your exposure at home
                  and in the workplace.
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ocean-600 group-hover:text-ocean-700 transition-colors">
                    Read article
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
