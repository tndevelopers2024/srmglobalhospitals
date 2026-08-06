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
  title: "Redefining Life Through Amputation Rehabilitation",
  description:
    "Amputation rehabilitation at SRM Global Hospitals combines pain management, prosthetic training, physical and occupational therapy, and psychosocial support to help patients regain mobility and independence.",
  path: "/blog/redefining-life-through-amputation-rehabilitation",
  image: "/images/blog/redefining-life-through-amputation-rehabilitation/hero.jpeg",
  author: "Orthopaedic Specialist",
  section: "Orthopaedics",
  publishedTime: "2026-03-31",
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

export default function AmputationRehabilitationArticle() {
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
        dotClass="dot-ortho"
        category="Orthopaedics"
        title={article.title}
        specialistTitle="Orthopaedic Specialist"
        department="Centre for Bone, Joint & Spine Care"
        date="March 31, 2026"
        readMinutes={4}
        reads="2,750"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Orthopaedic Specialist"
          department="Centre for Bone, Joint & Spine Care"
          blurb="Our rehabilitation specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "preoperative-preparation", title: "Preoperative preparation" },
            { id: "pain-management", title: "Pain management" },
            { id: "prosthetic-training", title: "Prosthetic training" },
            { id: "emotional-and-vocational-support", title: "Emotional and vocational support" },
            { id: "long-term-recovery", title: "Long-term recovery" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain",
              image: "/images/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain/hero.jpeg",
              title: "PRP injection knee therapy: an effective non-surgical way to manage knee pain",
              meta: "9 min · Orthopaedics",
            },
            {
              href: "/blog/recovery-after-stroke-the-steps-forward-for-functional-independence",
              image: "/images/blog/recovery-after-stroke-the-steps-forward-for-functional-independence/hero.jpeg",
              title: "Recovery after stroke: the steps forward for functional independence",
              meta: "14 min · Neurology",
            },
            {
              href: "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
              image: "/images/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief/hero.jpeg",
              title: "Sciatica pain treatment: understand the cause and find the right relief",
              meta: "11 min · Orthopaedics",
            },
          ]}
        />
      </div>
      <EndCta />
      <MoreArticles
        items={[
          {
            href: "/blog/types-of-cerebral-palsy-what-it-means-for-your-child",
            image: "/images/blog/types-of-cerebral-palsy-what-it-means-for-your-child/hero.jpeg",
            category: "Neurology",
            title: "Types of Cerebral Palsy: What It Means for Your Child?",
          },
          {
            href: "/blog/chest-pain-at-40-when-is-it-your-heart-and-when-is-it-not",
            image: "/images/blog/chest-pain-at-40-when-is-it-your-heart-and-when-is-it-not.jpeg",
            category: "Cardiology",
            title: "Chest pain at 40: When is it your heart, and when is it not?",
          },
          {
            href: "/blog/your-hba1c-stopped-falling-here-is-what-your-doctor-checks-next",
            image: "/images/blog/your-hba1c-stopped-falling-here-is-what-your-doctor-checks-next.jpeg",
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
