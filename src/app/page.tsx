import { Hero } from "@/components/hero";
import { ScienceCafe } from "@/components/science-cafe";
import { Testimonials } from "@/components/testimonials";
import { TrendingTopics } from "@/components/trending-topics";
import { LatestArticle } from "@/components/latest-article";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ScienceCafe />
      <Testimonials />
      <TrendingTopics />
      <LatestArticle />
      <CTA />
    </>
  );
}
