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
  title: "Labral Tear Shoulder Explained: Early Signs and How to Heal Faster",
  description:
    "A labral tear disrupts shoulder stability and causes pain, clicking, and weakness. Orthopaedic specialists at SRM Global Hospitals explain tear types (SLAP, Bankart), diagnosis, and treatment options.",
  path: "/blog/labral-tear-shoulder-explained-early-signs-and-how-to-heal-faster",
  image: "/images/blog/labral-tear-shoulder-explained-early-signs-and-how-to-heal-faster/hero.jpeg",
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

export default function LabralTearShoulderArticle() {
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
        reads="3,470"
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
            { id: "how-labrum-works", title: "How the labrum works" },
            { id: "tear-types", title: "Types of labral tears" },
            { id: "early-signs", title: "Early signs & symptoms" },
            { id: "causes", title: "Causes of tears" },
            { id: "diagnosis", title: "Diagnosis" },
            { id: "treatment-options", title: "Treatment options" },
            { id: "rehab-recovery", title: "Rehabilitation & recovery" },
            { id: "heal-faster", title: "How to heal faster naturally" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/knee-cartilage-damage-explained-early-signs-you-shouldnt-ignore",
              image: "/images/blog/knee-cartilage-damage-explained-early-signs-you-shouldnt-ignore/hero.jpeg",
              title: "Knee cartilage damage explained: early signs you shouldn't ignore",
              meta: "11 min · Orthopaedics",
            },
            {
              href: "/blog/the-silent-shock-absorber-why-a-meniscus-tear-is-more-than-just-knee-pain",
              image: "/images/blog/the-silent-shock-absorber-why-a-meniscus-tear-is-more-than-just-knee-pain/hero.jpeg",
              title: "Lateral meniscus tear: symptoms, causes, and best treatment options",
              meta: "12 min · Orthopaedics",
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
