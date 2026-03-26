"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Clock } from "lucide-react";

const articles = [
  {
    title: "PFAS: How to Identify and Avoid Them in Everyday Life and Work",
    description:
      "Understanding where PFAS hide and taking steps to avoid them.",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/689f5239914755e4ea5d98f4_PFAS_by-products.png",
    tag: "PFAS",
    read: "5 min",
  },
  {
    title: "Understanding Contaminants of Emerging Concern",
    description:
      "Pollutants which threaten ecosystems, biodiversity and human health.",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/6750c2cd3b21fa1aeb701edb_close-up-view-of-mixing-of-blue-turquoise-yellow-2024-11-09-10-11-38-utc.jpg",
    tag: "CECs",
    read: "4 min",
  },
  {
    title: "How to Find Teaching Resources",
    description:
      "A brief guide in how to best navigate and access our resources.",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/6759cc49b513dc7f61530438_Biotechnology%20concept.png",
    tag: "Guide",
    read: "3 min",
  },
  {
    title: "An A to Z of Ocean Health",
    description:
      "A to Z of ocean health (and pollution solutions) — a beginners guide.",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675aba22838843aa3aa4e12a_Oceran%20top%20down.jpg",
    tag: "Ocean Health",
    read: "6 min",
  },
];

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
            {articles.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Link href="#" className="group block rounded-2xl border border-slate-200/80 bg-white overflow-hidden hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
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
                      {article.read} read
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
