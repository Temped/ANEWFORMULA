"use client";

import Image from "next/image";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Jose Vincent",
    quote:
      "The Science Cafe Sessions opened my eyes to how everyday chemicals affect our oceans. I now feel empowered to make better choices.",
  },
  {
    name: "Carmen Rivera",
    quote:
      "As a teacher, these resources have transformed how I discuss environmental science with my students. The content is engaging and accessible.",
  },
  {
    name: "Ian Benito",
    quote:
      "Learning about contaminants of emerging concern has inspired me to take action in my community. Everyone should explore these resources.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-sand">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://cdn.prod.website-files.com/67360a59a032f30b5272a3a0/67360a59a032f30b5272a401_testimonial%20image-min.png"
              alt="Students engaged in learning"
              width={560}
              height={480}
              className="rounded-2xl"
            />
          </motion.div>

          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="border-l-4 border-ocean pl-6"
              >
                <p className="text-base text-slate-light italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-3 text-sm font-semibold text-slate">
                  {t.name}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
