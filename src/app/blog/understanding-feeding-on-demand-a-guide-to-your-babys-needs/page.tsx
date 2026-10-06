import "@/styles/blog.css";

import { createMetadata } from "@/lib/seo";
import {
  articleSchema,
  breadcrumbSchema,
  jsonLdScriptProps,
} from "@/lib/structured-data";

import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ReadProgress from "@/components/blog/article/ReadProgress";
import ArtCover from "@/components/blog/article/ArtCover";
import ShareRail from "@/components/blog/article/ShareRail";
import ArtBody from "./ArtBody";
import ArtSide from "@/components/blog/article/ArtSide";
import EndCta from "@/components/blog/article/EndCta";
import MoreArticles from "@/components/blog/article/MoreArticles";
import MobileActionBar from "@/components/blog/article/MobileActionBar";
import BlogInteractions from "@/components/blog/shared/BlogInteractions";

const article = {
  title: "Understanding Feeding on Demand: A Guide to Your Baby's Needs",
  description:
    "Feeding on demand means responding to your baby's hunger cues rather than a strict clock. Paediatric specialists at SRM Global Hospitals explain hunger cues, feeding patterns, benefits, and common concerns.",
  path: "/blog/understanding-feeding-on-demand-a-guide-to-your-babys-needs",
  image: "/images/blog/understanding-feeding-on-demand-a-guide-to-your-babys-needs/hero.jpeg",
  author: "Paediatric & Lactation Specialist",
  section: "Paediatrics",
  publishedTime: "2027-10-13",
};

export const metadata = createMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  image: article.image,
  type: "article",
  authors: [article.author],
  section: article.section,
  publishedTime: article.publishedTime,
});

export default function UnderstandingFeedingOnDemandArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps([
          articleSchema({
            headline: article.title,
            description: article.description,
            path: article.path,
            image: article.image,
            datePublished: article.publishedTime,
            author: article.author,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Health Insights", path: "/blog" },
            { name: article.title, path: article.path },
          ]),
        ])}
      />
      <HeaderTop />
      <SiteHeader />
      <ReadProgress />
      <ArtCover
        image={article.image}
        dotClass="dot-paediatrics"
        category="Paediatrics"
        title={article.title}
        specialistTitle="Paediatric & Lactation Specialist"
        department="Department of Paediatrics"
        readMinutes={11}
        reads="4,240"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Paediatric & Lactation Specialist"
          department="Department of Paediatrics"
          blurb="Our paediatric and lactation specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-feeding-on-demand", title: "What is feeding on demand" },
            { id: "importance-for-growth", title: "Importance for growth" },
            { id: "hunger-cues", title: "Hunger cues" },
            { id: "breastfeeding-vs-bottle", title: "Breastfeeding vs bottle feeding" },
            { id: "feeding-frequency", title: "Feeding frequency" },
            { id: "benefits", title: "Benefits" },
            { id: "common-concerns", title: "Common concerns" },
            { id: "practical-tips", title: "Practical tips" },
            { id: "srm-global-support", title: "Support at SRM Global" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/the-best-baby-feeding-position-comfort-for-you-and-your-little-one",
              image: "/images/blog/the-best-baby-feeding-position-comfort-for-you-and-your-little-one/hero.jpeg",
              title: "The best baby feeding position: comfort for you and your little one",
              meta: "14 min · Paediatrics",
            },
            {
              href: "/blog/urinary-incontinence-after-childbirth-causes-and-remedies",
              image: "/images/blog/urinary-incontinence-after-childbirth-causes-and-remedies/hero.jpeg",
              title: "Urinary incontinence after childbirth: causes and remedies",
              meta: "12 min · Women's Health",
            },
            {
              href: "/blog/what-is-vaginal-vault-prolapse-symptoms-causes-and-solutions",
              image: "/images/blog/what-is-vaginal-vault-prolapse-symptoms-causes-and-solutions/hero.jpeg",
              title: "What is vaginal vault prolapse? Symptoms, causes, and solutions",
              meta: "10 min · Women's Health",
            },
          ]}
        />
      </div>
      <EndCta />
      <MoreArticles
        items={[
          {
            href: "/blog/multiple-sclerosis-expert-care",
            image: "/images/blog/multiple-sclerosis-expert-care/hero.jpeg",
            category: "Neurology",
            title: "Multiple sclerosis: what expert care at the right time can actually do",
          },
          {
            href: "/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry",
            image: "/images/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry/hero.jpeg",
            category: "Cardiology",
            title: "Chest pain at 40: When is it your heart, and when is it not?",
          },
          {
            href: "/blog/expert-diabetic-foot-care-to-keep-you-moving",
            image: "/images/blog/expert-diabetic-foot-care-to-keep-you-moving/hero.jpeg",
            category: "Diabetes",
            title: "Your HbA1c stopped falling. Here is what your doctor checks next.",
          },
        ]}
      />
      <MobileActionBar />
      <SiteFooter />
      <BlogInteractions />
    </>
  );
}
