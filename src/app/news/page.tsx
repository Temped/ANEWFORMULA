"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Clock } from "lucide-react";
import { newsArticles } from "@/lib/news-data";

export default function NewsPage() {
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
            News & Articles
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-bold text-white tracking-tight"
          >
            Latest news
          </motion.h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Articles */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {newsArticles.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Link
                  href={`/news/${article.slug}`}
                  className="group block rounded-2xl border border-slate-200/80 bg-white overflow-hidden hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="rounded-md bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-sm">
                        {article.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-heading text-[17px] font-bold text-slate-900 leading-snug">
                        {article.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-slate-400 group-hover:text-ocean-500 transition-colors mt-0.5" />
                    </div>
                    <p className="mt-2 text-[14px] text-slate-500 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-[12px] text-slate-400">
                      <Clock className="h-3 w-3" />
                      {article.readTime} read
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
