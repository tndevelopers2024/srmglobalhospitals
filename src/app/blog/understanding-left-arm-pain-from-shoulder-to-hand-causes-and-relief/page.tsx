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
  title: "Understanding Left Arm Pain from Shoulder to Hand: Causes and Relief",
  description: "Left arm pain from shoulder to hand can stem from nerve compression, muscle strain, or cardiac emergencies. Orthopaedic and cardiology specialists at SRM Global Hospitals explain warning signs, causes, and relief options.",
  path: "/blog/understanding-left-arm-pain-from-shoulder-to-hand-causes-and-relief",
  image: "/images/blog/understanding-left-arm-pain-from-shoulder-to-hand-causes-and-relief/hero.png",
  author: "Orthopaedic Specialist",
  section: "Orthopaedics",
  publishedTime: "2025-07-18",
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

export default function LeftArmPainCausesPage() {
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
        readMinutes={14}
        reads="5,760"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Orthopaedic Specialist"
          department="Centre for Bone, Joint & Spine Care"
          blurb="Our orthopaedic and joint specialists are available across the week, in-person and via tele-consult."
          initialToc={[
          {
                  "id": "what-you-will-learn",
                  "title": "What you will learn"
          },
          {
                  "id": "whats-connected-between-shoulder-and-hand",
                  "title": "What's Connected Between Shoulde..."
          },
          {
                  "id": "common-causes-of-left-arm-pain-from-shoulder-to-hand",
                  "title": "Common Causes of Left Arm Pain f..."
          },
          {
                  "id": "recognising-serious-symptoms-when-to-seek-immediate-medical-help",
                  "title": "Recognising Serious Symptoms"
          },
          {
                  "id": "comparison-of-pain-causes",
                  "title": "Comparison of Pain Causes"
          },
          {
                  "id": "treatment-and-relief-options",
                  "title": "Treatment and Relief Options"
          },
          {
                  "id": "management-strategies-for-left-arm-pain",
                  "title": "Management Strategies for Left A..."
          },
          {
                  "id": "preventing-future-left-arm-pain",
                  "title": "Preventing Future Left Arm Pain"
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
                  "href": "/blog/effective-tail-bone-pain-treatment-options-for-relief-and-recovery",
                  "image": "/images/blog/effective-tail-bone-pain-treatment-options-for-relief-and-recovery/hero.png",
                  "title": "Effective tail bone pain treatment: options for relief and recovery",
                  "meta": "11 min · Orthopaedics"
          },
          {
                  "href": "/blog/understanding-knee-replacement-recovery-benefits-and-what-to-expect",
                  "image": "/images/blog/understanding-knee-replacement-recovery-benefits-and-what-to-expect/hero.png",
                  "title": "Understanding knee replacement: recovery, benefits, and what to expect",
                  "meta": "16 min · Orthopaedics"
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
