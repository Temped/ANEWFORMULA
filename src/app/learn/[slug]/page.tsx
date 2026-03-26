import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import {
  getPostBySlug,
  getAllSlugs,
  getAdjacentPosts,
} from "@/lib/blog-data";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} — A New Formula`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(slug);

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
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            href="/learn"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ocean-200 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Learn
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="rounded-md bg-white/15 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[11px] font-bold text-ocean-100">
              {post.tag}
            </span>
            <span className="flex items-center gap-1 text-[12px] text-ocean-200">
              <Clock className="h-3 w-3" />
              {post.readTime} read
            </span>
            <span className="flex items-center gap-1 text-[12px] text-ocean-200">
              <Calendar className="h-3 w-3" />
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-white tracking-tight leading-[1.15]">
            {post.title}
          </h1>
          <p className="mt-5 text-[17px] text-ocean-100/80 leading-relaxed">
            {post.description}
          </p>
          <p className="mt-6 text-[13px] text-ocean-200 font-medium">
            By {post.author}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Featured image */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 -mt-4">
          <div className="relative aspect-[2/1] rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/30">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-heading prose-headings:tracking-tight prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-[1.8] prose-a:text-ocean-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800 prose-li:text-slate-600">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-[clamp(1.25rem,2.5vw,1.5rem)] font-bold mt-12 mb-4"
                  >
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("- ")) {
                const items = block.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i} className="my-6 space-y-2">
                    {items.map((item, j) => (
                      <li key={j} className="text-[16px]">
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.startsWith("**") && block.endsWith("**")) {
                return (
                  <p key={i} className="text-[16px] font-semibold text-slate-800 my-4">
                    {block.replace(/\*\*/g, "")}
                  </p>
                );
              }
              if (block.trim() === "") return null;
              // Handle inline bold
              const parts = block.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} className="text-[16px] my-4">
                  {parts.map((part, j) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={j}>{part.replace(/\*\*/g, "")}</strong>
                    ) : (
                      <span key={j}>{part}</span>
                    )
                  )}
                </p>
              );
            })}
          </div>

          {/* CONTRAST branding */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-4">
              <Image
                src="https://cdn.prod.website-files.com/67360a59a032f30b5272a3a0/675834826aa272ab7d971026_eu.svg"
                alt="EU flag"
                width={36}
                height={24}
                className="flex-shrink-0"
              />
              <p className="text-[12px] text-slate-400 leading-relaxed">
                This article is part of the CONTRAST project, funded by the
                European Union under Horizon Europe. Views expressed are those of
                the author(s) only.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Prev / Next navigation */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prev ? (
              <Link
                href={`/learn/${prev.slug}`}
                className="group flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-5 hover:border-slate-300 hover:shadow-md hover:shadow-slate-200/40 transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4 text-slate-400 group-hover:text-ocean-500 mt-0.5 flex-shrink-0 transition-colors" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Previous
                  </p>
                  <p className="text-[14px] font-semibold text-slate-700 leading-snug line-clamp-2">
                    {prev.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/learn/${next.slug}`}
                className="group flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-5 hover:border-slate-300 hover:shadow-md hover:shadow-slate-200/40 transition-all duration-300 text-right sm:flex-row-reverse"
              >
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-ocean-500 mt-0.5 flex-shrink-0 transition-colors" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Next
                  </p>
                  <p className="text-[14px] font-semibold text-slate-700 leading-snug line-clamp-2">
                    {next.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
