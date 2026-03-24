"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const categories = [
  {
    ageGroup: "7–11 year-olds",
    tags: ["An Introduction to CECs"],
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675ab0f1e60894e6fc62df21_1000%20excited-schoolgirl-raising-her-hand-in-classroom-2024-06-27-20-50-07-utc.jpg",
  },
  {
    ageGroup: "11–15 year-olds",
    tags: ["Endocrine Disruptors", "Contaminant"],
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/67597ea131cb2a49a62b5264_teenage-students-listening-to-teacher-in-art-class-2024-10-19-09-08-39-utc.jpg",
  },
  {
    ageGroup: "Young Adults 16+",
    tags: ["Microplastics", "In Silico", "In Vitro"],
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675985330d2251f367c96e9f_portrait-of-four-teenage-students-in-vibrant-cloth-2024-09-09-23-51-58-utc.jpg",
  },
  {
    ageGroup: "University Students",
    tags: ["Chemical Fate", "Carcinogen"],
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675987f60db74c9a9a8fa04d_high-angle-portrait-of-smiling-multiracial-male-an-2023-11-27-05-31-55-utc.jpg",
  },
  {
    ageGroup: "Parents",
    tags: ["Ecotoxicology", "Biodiversity"],
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675987b7e1ceb649a7137057_father-teaching-children-homework-in-living-room-2023-11-27-05-02-13-utc.jpg",
  },
  {
    ageGroup: "Bio Bots",
    tags: ["Biomarker", "Endocrine Disruptors"],
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675986edf0641e9edf2ffdaf_Bio%20bots.jpg",
  },
];

export default function LearnPage() {
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
            Who Are You? Pick Your Category
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-white/85 leading-relaxed"
          >
            The home of our learning resources.
          </motion.p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.ageGroup}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href="/courses"
                  className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.ageGroup}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-slate mb-3">
                      {cat.ageGroup}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-ocean/10 px-3 py-1 text-xs font-medium text-ocean"
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

      {/* Latest Article */}
      <section className="py-24 bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-slate mb-12 text-center">
            Latest Articles
          </h2>
          <Link
            href="/news"
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
                <h3 className="font-heading text-2xl font-bold text-slate leading-snug">
                  PFAS: How to Identify and Avoid Them in Everyday Life and Work
                </h3>
                <p className="mt-4 text-sm text-slate-light leading-relaxed">
                  Understanding where PFAS hide and taking steps to avoid them.
                </p>
                <span className="mt-6 text-sm font-semibold text-ocean group-hover:underline">
                  Explore more →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
