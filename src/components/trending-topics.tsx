"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const topics = [
  {
    ageGroup: "7–11",
    label: "Primary",
    title: "Introduction to CECs",
    description:
      "A fun and accessible introduction to Contaminants of Emerging Concern for young learners.",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675ab0f1e60894e6fc62df21_1000%20excited-schoolgirl-raising-her-hand-in-classroom-2024-06-27-20-50-07-utc.jpg",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    ageGroup: "11–15",
    label: "Secondary",
    title: "Endocrine Disruptors",
    description:
      "Understanding how certain chemicals can interfere with our hormonal systems.",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/67597ea131cb2a49a62b5264_teenage-students-listening-to-teacher-in-art-class-2024-10-19-09-08-39-utc.jpg",
    color: "bg-ocean-50 text-ocean-700 border-ocean-200",
  },
  {
    ageGroup: "16+",
    label: "Young Adults",
    title: "Microplastics",
    description:
      "An in-depth look at microplastic pollution and what we can do about it.",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675985330d2251f367c96e9f_portrait-of-four-teenage-students-in-vibrant-cloth-2024-09-09-23-51-58-utc.jpg",
    color: "bg-violet-50 text-violet-700 border-violet-200",
  },
];

export function TrendingTopics() {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-lg">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[13px] font-semibold uppercase tracking-widest text-ocean-500"
            >
              Educator Resources
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-4 font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-slate-900 tracking-tight"
            >
              Trending topics
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-[16px] text-slate-500 leading-relaxed"
            >
              Tailored resources for every age group
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/learn"
              className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-ocean-600 hover:text-ocean-700 transition-colors"
            >
              View all resources
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Link
                href="/learn"
                className="group block rounded-2xl border border-slate-200/80 bg-white overflow-hidden hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span
                      className={`rounded-md border px-2.5 py-1 text-[11px] font-bold backdrop-blur-sm ${topic.color}`}
                    >
                      Ages {topic.ageGroup}
                    </span>
                    <span className="rounded-md bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-slate-600 shadow-sm">
                      {topic.label}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-[17px] font-bold text-slate-900 leading-snug">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-slate-500 leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
