"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const articles = [
  {
    title: "PFAS: How to Identify and Avoid Them in Everyday Life and Work",
    description:
      "Understanding where PFAS hide and taking steps to avoid them.",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/689f5239914755e4ea5d98f4_PFAS_by-products.png",
  },
  {
    title: "Understanding Contaminants of Emerging Concern",
    description:
      "Pollutants which threaten ecosystems, biodiversity and human health.",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/6750c2cd3b21fa1aeb701edb_close-up-view-of-mixing-of-blue-turquoise-yellow-2024-11-09-10-11-38-utc.jpg",
  },
  {
    title: "How to Find Teaching Resources",
    description:
      "A brief guide in how to best navigate and access our resources.",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/6759cc49b513dc7f61530438_Biotechnology%20concept.png",
  },
  {
    title: "An A to Z of Ocean Health",
    description:
      "A to Z of ocean health (and pollution solutions) — a beginners guide.",
    image:
      "https://cdn.prod.website-files.com/67360a59a032f30b5272a3f8/675aba22838843aa3aa4e12a_Oceran%20top%20down.jpg",
  },
];

export default function NewsPage() {
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
            Latest News
          </motion.h1>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href="#"
                  className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-slate mb-2 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-slate-light leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sand">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate">
            Ready to Join?
          </h2>
          <p className="mt-6 text-lg text-slate-light leading-relaxed">
            Join our community and stay up to date with the latest research and
            resources on emerging chemical pollutants.
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
