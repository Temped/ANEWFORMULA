"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Clock } from "lucide-react";
import { getSortedPosts } from "@/lib/blog-data";

const categories = [
  {
    ageGroup: "7–11 year-olds",
    tags: ["An Introduction to CECs"],
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675ab0f1e60894e6fc62df21_1000%20excited-schoolgirl-raising-her-hand-in-classroom-2024-06-27-20-50-07-utc.jpg",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    ageGroup: "11–15 year-olds",
    tags: ["Endocrine Disruptors", "Contaminant"],
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/67597ea131cb2a49a62b5264_teenage-students-listening-to-teacher-in-art-class-2024-10-19-09-08-39-utc.jpg",
    color: "bg-ocean-50 text-ocean-700 border-ocean-200",
  },
  {
    ageGroup: "Young Adults 16+",
    tags: ["Microplastics", "In Silico", "In Vitro"],
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675985330d2251f367c96e9f_portrait-of-four-teenage-students-in-vibrant-cloth-2024-09-09-23-51-58-utc.jpg",
    color: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    ageGroup: "University Students",
    tags: ["Chemical Fate", "Carcinogen"],
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675987f60db74c9a9a8fa04d_high-angle-portrait-of-smiling-multiracial-male-an-2023-11-27-05-31-55-utc.jpg",
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    ageGroup: "Parents",
    tags: ["Ecotoxicology", "Biodiversity"],
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675987b7e1ceb649a7137057_father-teaching-children-homework-in-living-room-2023-11-27-05-02-13-utc.jpg",
    color: "bg-rose-50 text-rose-700 border-rose-200",
  },
  {
    ageGroup: "Bio Bots",
    tags: ["Biomarker", "Endocrine Disruptors"],
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675986edf0641e9edf2ffdaf_Bio%20bots.jpg",
    color: "bg-sky-50 text-sky-700 border-sky-200",
  },
];

export default function LearnPage() {
  const blogPosts = getSortedPosts();

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
            Learning Resources
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-bold text-white tracking-tight"
          >
            Who are you? Pick your category
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-lg text-[17px] text-ocean-100/80 leading-relaxed"
          >
            The home of our learning resources.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Categories */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.ageGroup}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <Link
                  href="/courses"
                  className="group block rounded-2xl border border-slate-200/80 bg-white overflow-hidden hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.ageGroup}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <ArrowUpRight className="h-5 w-5 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-[17px] font-bold text-slate-900 mb-3">
                      {cat.ageGroup}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-md border px-2.5 py-1 text-[11px] font-semibold ${cat.color}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explaining CECs — 20-Part Blog Series */}
      <section id="explaining-cecs" className="py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-ocean-500">
              Explaining CECs — 20-Part Series
            </p>
            <h2 className="mt-4 font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-slate-900 tracking-tight">
              The science behind{" "}
              <span className="text-ocean-600">emerging pollutants</span>
            </h2>
            <p className="mt-4 text-[16px] text-slate-500 leading-relaxed">
              A comprehensive blog series exploring Contaminants of Emerging
              Concern — from PFAS and microplastics to policy and citizen
              science.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.07 }}
              >
                <Link
                  href={`/learn/${post.slug}`}
                  className="group block rounded-2xl border border-slate-200/80 bg-white overflow-hidden hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 h-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="rounded-md bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-sm">
                        {post.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-heading text-[17px] font-bold text-slate-900 leading-snug">
                        {post.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-slate-400 group-hover:text-ocean-500 transition-colors mt-0.5" />
                    </div>
                    <p className="mt-2 text-[14px] text-slate-500 leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-[12px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime} read
                      </span>
                      <span>
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
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
