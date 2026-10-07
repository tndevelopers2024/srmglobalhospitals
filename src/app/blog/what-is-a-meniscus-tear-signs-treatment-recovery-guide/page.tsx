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
  title: "What Is a Meniscus Tear? Signs, Treatment & Recovery Guide",
  description:
    "A meniscus tear causes pain, locking, and swelling in the knee joint. Orthopaedic specialists at SRM Global Hospitals explain tear types, diagnosis, and recovery options.",
  path: "/blog/what-is-a-meniscus-tear-signs-treatment-recovery-guide",
  image: "/images/blog/what-is-a-meniscus-tear-signs-treatment-recovery-guide/hero.jpeg",
  author: "Orthopaedic Specialist",
  section: "Orthopaedics",
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

export default function WhatIsAMeniscusTearArticle() {
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
        dotClass="dot-orthopaedics"
        category="Orthopaedics"
        title={article.title}
        specialistTitle="Orthopaedic Specialist"
        department="Centre for Bone, Joint & Spine Care"
        date="April 1, 2026"
        readMinutes={13}
        reads="5,610"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Orthopaedic Specialist"
          department="Centre for Bone, Joint & Spine Care"
          blurb="Our orthopaedic specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "shock-absorber", title: "Meniscus shock absorber" },
            { id: "what-is-meniscus-tear", title: "What is a meniscus tear" },
            { id: "signs-symptoms", title: "Signs & symptoms" },
            { id: "tear-types", title: "Types of tears" },
            { id: "diagnosis", title: "Diagnosis & tests" },
            { id: "when-surgery-needed", title: "Surgical options" },
            { id: "conservative-treatments", title: "Non-surgical treatment" },
            { id: "recovery", title: "Recovery timeline" },
            { id: "risks-untreated", title: "Risks of delay" },
            { id: "prevention", title: "Prevention tips" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/lateral-meniscus-tear-symptoms-causes-and-best-treatment-options",
              image: "/images/blog/lateral-meniscus-tear-symptoms-causes-and-best-treatment-options/hero.jpeg",
              title: "Lateral meniscus tear: symptoms, causes, and best treatment options",
              meta: "12 min · Orthopaedics",
            },
            {
              href: "/blog/what-is-hip-impingement-signs-diagnosis-recovery-tips",
              image: "/images/blog/what-is-hip-impingement-signs-diagnosis-recovery-tips/hero.jpeg",
              title: "What Is Hip Impingement? Signs, Diagnosis & Recovery Tips",
              meta: "11 min · Orthopaedics",
            },
            {
              href: "/blog/labral-tear-shoulder-explained-early-signs-and-how-to-heal-faster",
              image: "/images/blog/labral-tear-shoulder-explained-early-signs-and-how-to-heal-faster/hero.jpeg",
              title: "Labral tear shoulder explained: early signs and how to heal faster",
              meta: "13 min · Orthopaedics",
            },
          ]}
        />
      </div>
      <EndCta />
      <MoreArticles currentSlug={article.path} category={article.section} />
      <MobileActionBar />
      <SiteFooter />
      <BlogInteractions />
    </>
  );
}
