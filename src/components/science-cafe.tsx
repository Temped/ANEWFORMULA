"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const courses = [
  {
    title: "Explaining CECs",
    description: "An Introduction to Contaminants of Emerging Concern",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675ac0a873066914ca8e8165_closeup-of-blue-translucent-soap-bubbles-floating-2023-11-27-05-25-23-utc.jpg",
    tag: "Beginner",
  },
  {
    title: "PFAS and You",
    description:
      "Sources of PFAS and how to avoid them in your life, and at work",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675ac27d6c208d3b582fb685_PFAS_main.webp",
    tag: "Intermediate",
  },
  {
    title: "Microplastics and Their Impact",
    description: "Where do they come from and why do they matter?",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675ac43c79f1f6a4d4c65c60_microplastics-in-hand-microplastics-air-pollutio-2023-11-27-05-01-14-utc.jpg",
    tag: "Advanced",
  },
];

export function ScienceCafe() {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[13px] font-semibold uppercase tracking-widest text-ocean-500"
          >
            Science Cafe Sessions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-slate-900 tracking-tight"
          >
            Discover the science behind{" "}
            <span className="text-ocean-600">emerging pollutants</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-[16px] text-slate-500 leading-relaxed"
          >
            Explore our curated sessions covering the most pressing
            environmental challenges facing our oceans today.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Link
                href="/courses"
                className="group block rounded-2xl border border-slate-200/80 bg-white overflow-hidden hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-md bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-sm">
                      {course.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-[17px] font-bold text-slate-900 leading-snug">
                      {course.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-slate-400 group-hover:text-ocean-500 transition-colors mt-0.5" />
                  </div>
                  <p className="mt-2 text-[14px] text-slate-500 leading-relaxed">
                    {course.description}
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
