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
  title: "What is Hip Impingement: Causes, Symptoms, and Treatment Options",
  description:
    "Hip impingement occurs when abnormal bone growth causes friction inside the hip joint. Orthopaedic specialists at SRM Global Hospitals explain the three types, symptoms, diagnosis, and treatment options.",
  path: "/blog/what-is-hip-impingement-causes-symptoms-and-treatment-options",
  image: "/images/blog/what-is-hip-impingement-causes-symptoms-and-treatment-options/hero.jpeg",
  author: "Orthopaedic Specialist",
  section: "Orthopaedics",
  publishedTime: "2027-07-28",
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

export default function HipImpingementCausesSymptomsTreatmentArticle() {
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
        readMinutes={12}
        reads="3,820"
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
            { id: "what-is-hip-impingement", title: "What is hip impingement" },
            { id: "causes", title: "Causes of hip impingement" },
            { id: "symptoms", title: "Symptoms of hip impingement" },
            { id: "diagnosing-hip-impingement", title: "Diagnosing hip impingement" },
            { id: "treatment-options", title: "Treatment options" },
            { id: "preventing-hip-impingement", title: "Preventing hip impingement" },
            { id: "living-with-hip-impingement", title: "Living with hip impingement" },
            { id: "book-appointment", title: "Book an appointment" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
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
            {
              href: "/blog/what-is-a-meniscus-tear-signs-treatment-recovery-guide",
              image: "/images/blog/what-is-a-meniscus-tear-signs-treatment-recovery-guide/hero.jpeg",
              title: "What is a meniscus tear? Signs, treatment & recovery guide",
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
