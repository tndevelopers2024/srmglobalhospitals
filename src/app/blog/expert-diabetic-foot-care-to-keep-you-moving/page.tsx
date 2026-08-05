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
  title: "Expert Diabetic Foot Care to Keep You Moving",
  description:
    "Diabetic foot care at SRM Global Hospitals' Podiatric Care & Diabetic Foot Clinic covers prevention, assessment, advanced wound management, and severe complication care to protect mobility and limb health.",
  path: "/blog/expert-diabetic-foot-care-to-keep-you-moving",
  image: "/images/blog/expert-diabetic-foot-care-to-keep-you-moving.jpeg",
  author: "Diabetes Specialist",
  section: "Diabetes",
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

export default function DiabeticFootCareArticle() {
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
        dotClass="dot-diabetes"
        category="Diabetes"
        title={article.title}
        specialistTitle="Diabetes Specialist"
        department="Podiatric Care & Diabetic Foot Clinic"
        date="March 31, 2026"
        readMinutes={4}
        reads="2,750"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Diabetes Specialist"
          department="Podiatric Care & Diabetic Foot Clinic"
          blurb="Our diabetic foot care specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "how-foot-conditions-occur", title: "How foot conditions occur" },
            { id: "foot-assessment", title: "Foot assessment" },
            { id: "prevention", title: "Prevention" },
            { id: "wound-management", title: "Wound management" },
            { id: "when-to-seek-help", title: "When to seek help" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/redefining-life-through-amputation-rehabilitation",
              image: "/images/blog/redefining-life-through-amputation-rehabilitation.jpeg",
              title: "Redefining life through amputation rehabilitation",
              meta: "13 min · Orthopaedics",
            },
            {
              href: "/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain",
              image: "/images/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain.jpeg",
              title: "PRP injection knee therapy: an effective non-surgical way to manage knee pain",
              meta: "9 min · Orthopaedics",
            },
            {
              href: "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
              image: "/images/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief.jpeg",
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
            image: "/images/blog/types-of-cerebral-palsy-what-it-means-for-your-child.jpeg",
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
