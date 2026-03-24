"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

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
  {
    title: "Endocrine Disruptors and Marine Life",
    description: "How CECs disrupt hormonal systems in marine organisms",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675ac449c67c0d37087b1f46_the-texture-of-the-serum-or-oil-on-an-emerald-back-2023-11-27-05-24-40-utc.jpg",
    tag: "Advanced",
  },
  {
    title: "Climate Change and CECs",
    description:
      "The impact of a warming climate on marine organisms and chemical pollutants",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675ac460e698d3ab6264a7cd_polar-bear-mask-on-a-glacier-with-a-message-to-hum-2023-11-27-05-36-34-utc.jpg",
    tag: "Intermediate",
  },
  {
    title: "Bio Bots Battle CECs",
    description:
      "Entertainment and educational classroom content exploring bio bots",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675986edf0641e9edf2ffdaf_Bio%20bots.jpg",
    tag: "All Levels",
  },
];

export default function CoursesPage() {
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
            Courses
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-bold text-white tracking-tight"
          >
            What are CECs?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-lg text-[17px] text-ocean-100/80 leading-relaxed"
          >
            A place to learn, teach, and take action.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Course grid */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <Link
                  href="#"
                  className="group block rounded-2xl border border-slate-200/80 bg-white overflow-hidden hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
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

      {/* CTA */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-slate-900 tracking-tight">
            Ready to join?
          </h2>
          <p className="mt-5 text-[16px] text-slate-500 leading-relaxed">
            Join our community of students, educators and parents working
            together to tackle chemical pollution.
          </p>
          <div className="mt-9">
            <a
              href="/join"
              className="group inline-flex items-center gap-2 rounded-full bg-ocean-600 px-8 py-3.5 text-[15px] font-semibold text-white shadow-sm shadow-ocean-600/20 hover:bg-ocean-700 hover:shadow-md transition-all duration-200"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
