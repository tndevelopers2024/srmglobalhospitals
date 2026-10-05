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
  title: "Comprehensive Guide to Labral Tear Shoulder: Symptoms and Treatments",
  description:
    "A labral tear shoulder can affect athletes, workers, and homemakers alike. Orthopaedic specialists at SRM Global Hospitals explain causes, risk factors, symptoms, and non-surgical and surgical treatment options.",
  path: "/blog/comprehensive-guide-to-labral-tear-shoulder-symptoms-and-treatments",
  image: "/images/blog/comprehensive-guide-to-labral-tear-shoulder-symptoms-and-treatments/hero.jpeg",
  author: "Orthopaedic Specialist",
  section: "Orthopaedics",
  publishedTime: "2025-11-04",
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

export default function ComprehensiveLabralTearArticle() {
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
        readMinutes={11}
        reads="3,650"
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
            { id: "what-is-labral-tear", title: "What is a labral tear" },
            { id: "causes", title: "Causes of labral tears" },
            { id: "risk-factors", title: "Risk factors" },
            { id: "symptoms", title: "Symptoms of a labral tear" },
            { id: "treatment-options", title: "Treatment options" },
            { id: "non-surgical-treatments", title: "Non-surgical treatments" },
            { id: "surgical-treatments", title: "Surgical treatments" },
            { id: "living-with-labral-tear", title: "Living with a labral tear" },
            { id: "final-thoughts", title: "Final thoughts" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/labral-tear-shoulder-explained-early-signs-and-how-to-heal-faster",
              image: "/images/blog/labral-tear-shoulder-explained-early-signs-and-how-to-heal-faster/hero.jpeg",
              title: "Labral tear shoulder explained: early signs and how to heal faster",
              meta: "13 min · Orthopaedics",
            },
            {
              href: "/blog/what-is-a-rotator-cuff-tear-symptoms-diagnosis-and-treatment",
              image: "/images/blog/what-is-a-rotator-cuff-tear-symptoms-diagnosis-and-treatment/hero.jpeg",
              title: "What is a rotator cuff tear? Symptoms, diagnosis, and treatment",
              meta: "13 min · Orthopaedics",
            },
            {
              href: "/blog/what-is-hip-impingement-signs-diagnosis-recovery-tips",
              image: "/images/blog/what-is-hip-impingement-signs-diagnosis-recovery-tips/hero.jpeg",
              title: "What is hip impingement? Signs, diagnosis & recovery tips",
              meta: "11 min · Orthopaedics",
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
