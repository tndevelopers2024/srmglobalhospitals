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
  title: "Find the Best Doctor for Rheumatoid Arthritis in Chennai Today",
  description:
    "Rheumatoid arthritis needs specialist care, not just pain relief. Learn what to look for in a rheumatologist in Chennai and the treatment options available at SRM Global Hospitals.",
  path: "/blog/find-the-best-doctor-for-rheumatoid-arthritis-in-chennai-today",
  image: "/images/blog/find-the-best-doctor-for-rheumatoid-arthritis-in-chennai-today/hero.jpeg",
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

export default function RaBestDoctorChennaiPage() {
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
        readMinutes={11}
        reads="3,760"
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
            { id: "what-is-rheumatoid-arthritis", title: "What is Rheumatoid Arthritis?" },
            { id: "why-you-need-a-specialist-for-rheumatoid-arthritis", title: "Why You Need a Specialist for Rheumatoid Arthritis" },
            { id: "key-factors-to-consider-when-choosing-the-best-ra-doctor-in-chennai", title: "Key Factors to Consider When Choosing the Best RA Doctor in Chennai" },
            { id: "treatment-options-for-rheumatoid-arthritis-in-chennai", title: "Treatment Options for Rheumatoid Arthritis in Chennai" },
            { id: "how-to-book-an-appointment-with-a-rheumatologist-in-chennai", title: "How to Book an Appointment with a Rheumatologist in Chennai" },
            { id: "final-thoughts", title: "Final Thoughts" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/what-are-rheumatoid-arthritis-deformities-causes-and-solutions",
              image: "/images/blog/what-are-rheumatoid-arthritis-deformities-causes-and-solutions/hero.jpeg",
              title: "What are rheumatoid arthritis deformities? Causes and solutions",
              meta: "14 min · Orthopaedics",
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
