"use client";

import Image from "next/image";
import { motion } from "motion/react";

const topics = [
  {
    ageGroup: "7–11 year-olds",
    title: "Introduction to CECs",
    description:
      "A fun and accessible introduction to Contaminants of Emerging Concern for young learners.",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675ab0f1e60894e6fc62df21_1000%20excited-schoolgirl-raising-her-hand-in-classroom-2024-06-27-20-50-07-utc.jpg",
  },
  {
    ageGroup: "11–15 year-olds",
    title: "Endocrine Disruptors",
    description:
      "Understanding how certain chemicals can interfere with our hormonal systems.",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/67597ea131cb2a49a62b5264_teenage-students-listening-to-teacher-in-art-class-2024-10-19-09-08-39-utc.jpg",
  },
  {
    ageGroup: "Young Adults 16+",
    title: "Microplastics",
    description:
      "An in-depth look at microplastic pollution and what we can do about it.",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675985330d2251f367c96e9f_portrait-of-four-teenage-students-in-vibrant-cloth-2024-09-09-23-51-58-utc.jpg",
  },
];

export function TrendingTopics() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate">
            Trending Topics
          </h2>
          <p className="mt-4 text-lg text-slate-light">
            Educator resources tailored by age group
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topics.map((topic, i) => (
            <motion.a
              key={topic.title}
              href="/learn"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 rounded-full bg-ocean px-4 py-1.5 text-xs font-semibold text-white">
                  {topic.ageGroup}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-slate mb-2">
                  {topic.title}
                </h3>
                <p className="text-sm text-slate-light leading-relaxed">
                  {topic.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
