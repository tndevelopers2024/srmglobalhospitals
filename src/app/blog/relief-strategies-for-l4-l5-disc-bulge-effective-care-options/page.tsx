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
  title: "Relief Strategies for L4-L5 Disc Bulge: Effective Care Options",
  description:
    "An L4-L5 disc bulge can compress nearby spinal nerves, causing sciatica, leg weakness, and back stiffness. Orthopaedic spine specialists at SRM Global Hospitals explain non-surgical, holistic, and surgical relief options.",
  path: "/blog/relief-strategies-for-l4-l5-disc-bulge-effective-care-options",
  image: "/images/blog/relief-strategies-for-l4-l5-disc-bulge-effective-care-options/hero.png",
  author: "Spine Specialist",
  section: "Orthopaedics",
  publishedTime: "2028-01-05",
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

export default function ReliefStrategiesForL4L5DiscBulgeArticle() {
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
        specialistTitle="Spine Specialist"
        department="Centre for Bone, Joint & Spine Care"
        readMinutes={17}
        reads="4,690"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Spine Specialist"
          department="Centre for Bone, Joint & Spine Care"
          blurb="Our spine specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-l4-l5-disc-bulge", title: "What is an L4-L5 disc bulge" },
            { id: "causes-and-symptoms", title: "Causes & symptoms" },
            { id: "bulging-vs-herniated", title: "Bulging vs herniated" },
            { id: "non-surgical-treatment", title: "Non-surgical treatment" },
            { id: "holistic-therapies", title: "Holistic therapies" },
            { id: "lifestyle-changes", title: "Lifestyle changes" },
            { id: "when-surgery-needed", title: "When surgery is needed" },
            { id: "recovery-tips", title: "Recovery tips" },
            { id: "mental-health", title: "Emotional well-being" },
            { id: "srm-care", title: "Care at SRM" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
              image: "/images/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief/hero.jpeg",
              title: "Sciatica pain treatment: understand the cause and find the right relief",
              meta: "11 min · Orthopaedics",
            },
            {
              href: "/blog/effective-l5-s1-disc-bulge-treatment-symptoms-causes-and-solutions",
              image: "/images/blog/effective-l5-s1-disc-bulge-treatment-symptoms-causes-and-solutions/hero.png",
              title: "Effective L5-S1 disc bulge treatment: symptoms, causes, and solutions",
              meta: "15 min · Orthopaedics",
            },
            {
              href: "/blog/sitting-without-struggle-reclaiming-your-life-from-tailbone-pain",
              image: "/images/blog/sitting-without-struggle-reclaiming-your-life-from-tailbone-pain/hero.jpeg",
              title: "Sitting without struggle: reclaiming your life from tailbone pain",
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
