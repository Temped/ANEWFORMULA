import { Hero } from "@/components/hero";
import { ScienceCafe } from "@/components/science-cafe";
import { TrendingTopics } from "@/components/trending-topics";
import { LatestArticle } from "@/components/latest-article";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ScienceCafe />
      <TrendingTopics />
      <LatestArticle />
      <CTA />
    </>
  );
}
