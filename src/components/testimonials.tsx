"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jose Vincent",
    role: "Student",
    quote:
      "The Science Cafe Sessions opened my eyes to how everyday chemicals affect our oceans. I now feel empowered to make better choices.",
    initials: "JV",
  },
  {
    name: "Carmen Rivera",
    role: "Educator",
    quote:
      "As a teacher, these resources have transformed how I discuss environmental science with my students. The content is engaging and accessible.",
    initials: "CR",
  },
  {
    name: "Ian Benito",
    role: "Parent",
    quote:
      "Learning about contaminants of emerging concern has inspired me to take action in my community. Everyone should explore these resources.",
    initials: "IB",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <Image
                src="https://cdn.prod.website-files.com/67360a59a032f30b5272a3a0/67360a59a032f30b5272a401_testimonial%20image-min.png"
                alt="Students engaged in learning"
                width={560}
                height={480}
                className="rounded-2xl shadow-2xl shadow-slate-300/30"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-ocean-100 -z-10" />
            </div>
          </motion.div>

          {/* Quotes column */}
          <div className="lg:col-span-7 space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <p className="text-[13px] font-semibold uppercase tracking-widest text-ocean-500">
                What people say
              </p>
              <h2 className="mt-4 font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-slate-900 tracking-tight">
                Trusted by students, educators
                <br className="hidden sm:block" /> and parents worldwide
              </h2>
            </motion.div>

            <div className="space-y-5">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group rounded-xl border border-slate-200/80 bg-white p-6 hover:border-slate-300 hover:shadow-md hover:shadow-slate-200/40 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <Quote className="h-5 w-5 flex-shrink-0 text-ocean-400/60 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-[15px] text-slate-600 leading-relaxed">
                        {t.quote}
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ocean-100 text-[12px] font-bold text-ocean-700">
                          {t.initials}
                        </div>
                        <div>
                          <p className="text-[13px] font-semibold text-slate-800">
                            {t.name}
                          </p>
                          <p className="text-[12px] text-slate-400">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
