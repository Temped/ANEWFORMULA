"use client";

import Image from "next/image";
import Link from "next/link";
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
  {
    title: "Endocrine Disruptors and Marine Life",
    description:
      "How CECs disrupt hormonal systems in marine organisms",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675ac449c67c0d37087b1f46_the-texture-of-the-serum-or-oil-on-an-emerald-back-2023-11-27-05-24-40-utc.jpg",
  },
  {
    title: "Climate Change and CECs",
    description:
      "The impact of a warming climate on marine organisms and chemical pollutants",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675ac460e698d3ab6264a7cd_polar-bear-mask-on-a-glacier-with-a-message-to-hum-2023-11-27-05-36-34-utc.jpg",
  },
  {
    title: "Bio Bots Battle CECs",
    description:
      "Entertainment and educational classroom content exploring bio bots",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675986edf0641e9edf2ffdaf_Bio%20bots.jpg",
  },
];

export default function CoursesPage() {
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
            What Are CECs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-white/85 leading-relaxed"
          >
            A place to learn, teach, and take action.
          </motion.p>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href="#"
                  className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow"
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

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate">
            Ready to Join?
          </h2>
          <p className="mt-6 text-lg text-slate-light leading-relaxed">
            Join our community of students, educators and parents working
            together to tackle chemical pollution.
          </p>
          <div className="mt-10">
            <a
              href="/courses"
              className="inline-block rounded-full bg-ocean px-10 py-4 text-base font-semibold text-white hover:bg-ocean-dark transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
