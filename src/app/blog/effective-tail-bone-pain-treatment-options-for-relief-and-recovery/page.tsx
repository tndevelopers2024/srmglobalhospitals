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
  title: "Effective Tail Bone Pain Treatment: Options for Relief and Recovery",
  description: "Tailbone pain (coccydynia) can make sitting or everyday movement difficult. Orthopaedic specialists at SRM Global Hospitals discuss common causes, effective home remedies, stretching exercises, and medical treatments for recovery.",
  path: "/blog/effective-tail-bone-pain-treatment-options-for-relief-and-recovery",
  image: "/images/blog/effective-tail-bone-pain-treatment-options-for-relief-and-recovery/hero.png",
  author: "Orthopaedic Specialist",
  section: "Orthopaedics",
  publishedTime: "2025-07-23",
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

export default function TailbonePainTreatmentPage() {
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
        reads="4,150"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Orthopaedic Specialist"
          department="Centre for Bone, Joint & Spine Care"
          blurb="Our spine and joint specialists are available across the week, in-person and via tele-consult."
          initialToc={[
          {
                  "id": "what-you-will-learn",
                  "title": "What you will learn"
          },
          {
                  "id": "what-is-tailbone-pain",
                  "title": "What Is Tailbone Pain?"
          },
          {
                  "id": "common-causes-of-tailbone-pain",
                  "title": "Common Causes of Tailbone Pain"
          },
          {
                  "id": "recognising-common-symptoms-of-tailbone-discomfort",
                  "title": "Recognising Common Symptoms of T..."
          },
          {
                  "id": "effective-home-remedies-for-tailbone-pain-relief",
                  "title": "Effective Home Remedies for Tail..."
          },
          {
                  "id": "tailbone-pain-relief-exercises",
                  "title": "Tailbone Pain Relief Exercises"
          },
          {
                  "id": "signs-its-time-to-see-a-doctor-for-tailbone-pain",
                  "title": "Signs It's Time to See a Doctor..."
          },
          {
                  "id": "tailbone-pain-treatment-options",
                  "title": "Tailbone Pain Treatment Options"
          },
          {
                  "id": "simple-tips-to-prevent-tailbone-pain-in-daily-life",
                  "title": "Simple Tips to Prevent Tailbone..."
          },
          {
                  "id": "faqs",
                  "title": "FAQs"
          }
]}
          relatedReading={[
          {
                  "href": "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
                  "image": "/images/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief/hero.jpeg",
                  "title": "Sciatica pain treatment: understand the cause and find the right relief",
                  "meta": "11 min · Orthopaedics"
          },
          {
                  "href": "/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain",
                  "image": "/images/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain/hero.jpeg",
                  "title": "PRP injection knee therapy: an effective non-surgical way to manage knee pain",
                  "meta": "11 min · Orthopaedics"
          },
          {
                  "href": "/blog/why-do-my-knees-hurt-everything-you-need-to-know-about-knee-osteoarthritis",
                  "image": "/images/blog/why-do-my-knees-hurt-everything-you-need-to-know-about-knee-osteoarthritis/hero.jpeg",
                  "title": "Why do my knees hurt? Everything you need to know about knee osteoarthritis",
                  "meta": "9 min · Orthopaedics"
          }
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
