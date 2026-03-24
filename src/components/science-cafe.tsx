"use client";

import Image from "next/image";
import { motion } from "motion/react";

const courses = [
  {
    title: "Explaining CECs",
    description: "An Introduction to Contaminants of Emerging Concern",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675ac0a873066914ca8e8165_closeup-of-blue-translucent-soap-bubbles-floating-2023-11-27-05-25-23-utc.jpg",
  },
  {
    title: "PFAS and You",
    description:
      "Sources of PFAS and how to avoid them in your life, and at work",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675ac27d6c208d3b582fb685_PFAS_main.webp",
  },
  {
    title: "Microplastics and Their Impact",
    description: "Where do they come from and why do they matter?",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675ac43c79f1f6a4d4c65c60_microplastics-in-hand-microplastics-air-pollutio-2023-11-27-05-01-14-utc.jpg",
  },
];

export function ScienceCafe() {
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
            Discover the Science Cafe Sessions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.a
              key={course.title}
              href="/courses"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-slate mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-slate-light leading-relaxed">
                  {course.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
