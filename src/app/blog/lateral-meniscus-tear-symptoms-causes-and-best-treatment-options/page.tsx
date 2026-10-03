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
  title: "Lateral Meniscus Tear: Symptoms, Causes, and Best Treatment Options",
  description:
    "A lateral meniscus tear disrupts knee stability, causing pain, swelling, and locking. Orthopaedic specialists at SRM Global Hospitals explain tear types, diagnosis, and treatment options.",
  path: "/blog/lateral-meniscus-tear-symptoms-causes-and-best-treatment-options",
  image: "/images/blog/lateral-meniscus-tear-symptoms-causes-and-best-treatment-options/hero.jpeg",
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

export default function LateralMeniscusTearArticle() {
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
        readMinutes={12}
        reads="3,890"
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
            { id: "what-makes-meniscus-important", title: "Why the meniscus matters" },
            { id: "symptoms", title: "Symptoms to watch for" },
            { id: "causes", title: "Causes of tears" },
            { id: "tear-types", title: "Tear patterns & features" },
            { id: "diagnosis", title: "Diagnosis & tests" },
            { id: "treatment-options", title: "Non-surgical treatment" },
            { id: "surgical-treatment", title: "Surgical options" },
            { id: "recovery", title: "Recovery timeline" },
            { id: "prevention", title: "Prevention tips" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/what-is-hip-impingement-signs-diagnosis-recovery-tips",
              image: "/images/blog/what-is-hip-impingement-signs-diagnosis-recovery-tips/hero.webp",
              title: "What Is Hip Impingement? Signs, Diagnosis & Recovery Tips",
              meta: "11 min · Orthopaedics",
            },
            {
              href: "/blog/labral-tear-shoulder-explained-early-signs-and-how-to-heal-faster",
              image: "/images/blog/labral-tear-shoulder-explained-early-signs-and-how-to-heal-faster/hero.jpeg",
              title: "Labral tear shoulder explained: early signs and how to heal faster",
              meta: "13 min · Orthopaedics",
            },
            {
              href: "/blog/knee-cartilage-damage-explained-early-signs-you-shouldnt-ignore",
              image: "/images/blog/knee-cartilage-damage-explained-early-signs-you-shouldnt-ignore/hero.jpeg",
              title: "Knee cartilage damage explained: early signs you shouldn't ignore",
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
