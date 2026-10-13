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
  title: "What are Rheumatoid Arthritis Deformities? Causes and Solutions",
  description:
    "Rheumatoid arthritis can cause swan neck, boutonniere, and ulnar deviation deformities in the hands, wrists, and feet. Rheumatology specialists at SRM Global Hospitals explain causes, diagnosis, and treatment.",
  path: "/blog/what-are-rheumatoid-arthritis-deformities-causes-and-solutions",
  image: "/images/blog/what-are-rheumatoid-arthritis-deformities-causes-and-solutions/hero.jpeg",
  author: "Rheumatology Specialist",
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

export default function RaDeformitiesPage() {
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
        specialistTitle="Rheumatology Specialist"
        department="Centre for Bone, Joint & Spine Care"
        readMinutes={14}
        reads="4,240"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Rheumatology Specialist"
          department="Centre for Bone, Joint & Spine Care"
          blurb="Our rheumatology specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-rheumatoid-arthritis-ra", title: "What Is Rheumatoid Arthritis (RA)?" },
            { id: "how-rheumatoid-arthritis-leads-to-deformities", title: "How Rheumatoid Arthritis Leads to Deformities" },
            { id: "common-types-of-rheumatoid-arthritis-deformities", title: "Common Types of Rheumatoid Arthritis Deformities" },
            { id: "causes-behind-ra-deformities", title: "Causes Behind RA Deformities" },
            { id: "symptoms-and-early-warning-signs", title: "Symptoms and Early Warning Signs" },
            { id: "diagnostic-approaches-for-ra-deformities", title: "Diagnostic Approaches for RA Deformities" },
            { id: "non-surgical-solutions-for-ra-deformities", title: "Non-Surgical Solutions for RA Deformities" },
            { id: "surgical-solutions-for-severe-ra-deformities", title: "Surgical Solutions for Severe RA Deformities" },
            { id: "living-with-ra-deformities", title: "Living with RA Deformities" },
            { id: "preventing-or-slowing-ra-deformities", title: "Preventing or Slowing RA Deformities" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/find-the-best-doctor-for-rheumatoid-arthritis-in-chennai-today",
              image: "/images/blog/find-the-best-doctor-for-rheumatoid-arthritis-in-chennai-today/hero.jpeg",
              title: "Find the best doctor for rheumatoid arthritis in Chennai today",
              meta: "11 min · Orthopaedics",
            },
            {
              href: "/blog/what-is-hip-impingement-signs-diagnosis-recovery-tips",
              image: "/images/blog/what-is-hip-impingement-signs-diagnosis-recovery-tips/hero.jpeg",
              title: "What is hip impingement? Signs, diagnosis & recovery tips",
              meta: "11 min · Orthopaedics",
            },
            {
              href: "/blog/why-do-my-knees-hurt-everything-you-need-to-know-about-knee-osteoarthritis",
              image: "/images/blog/why-do-my-knees-hurt-everything-you-need-to-know-about-knee-osteoarthritis/hero.jpeg",
              title: "Why do my knees hurt? Everything about knee osteoarthritis",
              meta: "12 min · Orthopaedics",
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
