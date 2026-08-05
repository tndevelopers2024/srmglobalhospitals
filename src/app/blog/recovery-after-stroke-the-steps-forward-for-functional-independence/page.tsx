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
  title: "Recovery After Stroke: The Steps Forward for Functional Independence",
  description:
    "Stroke recovery unfolds in stages, from the first week to 18 months and beyond. Neurologists and rehabilitation specialists at SRM Global Hospitals explain warning signs, recovery timelines, core therapies, and emotional health support.",
  path: "/blog/recovery-after-stroke-the-steps-forward-for-functional-independence",
  image: "/images/blog/blog-11/the-steps-forward-for-functional-independence-image-1-by-srm.jpeg",
  author: "Neurology Specialist",
  section: "Neurology",
  publishedTime: "2026-04-01",
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

export default function RecoveryAfterStrokeArticle() {
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
        dotClass="dot-neurology"
        category="Neurology"
        title={article.title}
        specialistTitle="Neurology Specialist"
        department="Institute of Neuro Sciences"
        date="April 1, 2026"
        readMinutes={14}
        reads="4,250"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Neurology Specialist"
          department="Institute of Neuro Sciences"
          blurb="Our neurology specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-happens-during-stroke", title: "What happens during a stroke" },
            { id: "stages-of-stroke-recovery", title: "Stages of stroke recovery" },
            { id: "early-rehabilitation", title: "Early rehabilitation" },
            { id: "core-therapies", title: "Core therapies" },
            { id: "emotional-health", title: "Emotional health" },
            { id: "schedule-consultation", title: "Schedule consultation" },
            { id: "stroke-faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/multiple-sclerosis-expert-care",
              image: "/images/blog/articles/ms-hero.jpeg",
              title: "Multiple sclerosis: what expert care at the right time can actually do",
              meta: "15 min · Neurology",
            },
            {
              href: "/blog/speech-therapy-techniques-for-real-life-communication-challenges",
              image: "/images/blog/articles/st-hero.jpeg",
              title: "Speech therapy techniques for real-life communication challenges",
              meta: "12 min · Neurology",
            },
            {
              href: "/blog/occupational-therapy-for-children-expert-support-for-real-life-development",
              image: "/images/blog/occupational-therapy-for-children-expert-support-for-real-life-development.jpeg",
              title: "Occupational therapy for children: expert support for real-life development",
              meta: "9 min · Paediatrics",
            },
          ]}
        />
      </div>
      <EndCta />
      <MoreArticles
        items={[
          {
            href: "/blog/multiple-sclerosis-expert-care",
            image: "/images/blog/articles/ms-hero.jpeg",
            category: "Neurology",
            title: "Multiple sclerosis: what expert care at the right time can actually do",
          },
          {
            href: "/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry",
            image: "/images/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry.jpeg",
            category: "Cardiology",
            title: "Chest pain at 40: When is it your heart, and when is it not?",
          },
          {
            href: "/blog/multiple-sclerosis-expert-care",
            image: "https://images.unsplash.com/photo-1616093875092-19208e6c4d35?w=600&q=85",
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
