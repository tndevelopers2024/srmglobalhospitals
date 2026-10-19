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
  title: "What is a Rotator Cuff Tear? Symptoms, Diagnosis, and Treatment",
  description:
    "A rotator cuff tear can range from a partial fray to a complete tendon separation. Orthopaedic specialists at SRM Global Hospitals explain causes, types, symptoms, diagnosis, and treatment options.",
  path: "/blog/what-is-a-rotator-cuff-tear-symptoms-diagnosis-and-treatment",
  image: "/images/blog/what-is-a-rotator-cuff-tear-symptoms-diagnosis-and-treatment/hero.jpeg",
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

export default function RotatorCuffTearPage() {
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
            { name: "Health Insights", path: "/blogs" },
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
        readMinutes={13}
        reads="4,970"
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
            { id: "what-is-the-rotator-cuff", title: "What is the Rotator Cuff?" },
            { id: "causes-of-rotator-cuff-tears", title: "Causes of Rotator Cuff Tears" },
            { id: "types-of-rotator-cuff-tears", title: "Types of Rotator Cuff Tears" },
            { id: "symptoms-of-a-rotator-cuff-tear", title: "Symptoms of a Rotator Cuff Tear" },
            { id: "when-to-see-a-doctor", title: "When to See a Doctor" },
            { id: "diagnosis-of-rotator-cuff-tear", title: "Diagnosis of Rotator Cuff Tear" },
            { id: "non-surgical-treatment-options", title: "Non-Surgical Treatment Options" },
            { id: "surgical-treatment-options", title: "Surgical Treatment Options" },
            { id: "rehabilitation-and-recovery", title: "Rehabilitation and Recovery" },
            { id: "prevention-of-rotator-cuff-tears", title: "Prevention of Rotator Cuff Tears" },
            { id: "living-with-a-rotator-cuff-tear", title: "Living with a Rotator Cuff Tear" },
            { id: "final-thoughts", title: "Final Thoughts" },
            { id: "srm-global-hospitals---book-your-appointment-today", title: "SRM Global Hospitals - Book Your Appointment Today" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/comprehensive-guide-to-labral-tear-shoulder-symptoms-and-treatments",
              image: "/images/blog/comprehensive-guide-to-labral-tear-shoulder-symptoms-and-treatments/hero.jpeg",
              title: "Comprehensive guide to labral tear shoulder: symptoms and treatments",
              meta: "11 min · Orthopaedics",
            },
            {
              href: "/blog/labral-tear-shoulder-explained-early-signs-and-how-to-heal-faster",
              image: "/images/blog/labral-tear-shoulder-explained-early-signs-and-how-to-heal-faster/hero.jpeg",
              title: "Labral tear shoulder explained: early signs and how to heal faster",
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
      <MoreArticles currentSlug={article.path} category={article.section} />
      <MobileActionBar />
      <SiteFooter />
      <BlogInteractions />
    </>
  );
}
