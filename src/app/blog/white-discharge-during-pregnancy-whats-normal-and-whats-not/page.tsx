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
  title: "White Discharge During Pregnancy: What's Normal and What's Not",
  description:
    "White vaginal discharge during pregnancy is usually normal, but changes in colour, smell, or texture can signal infection or amniotic fluid leakage. Obstetricians at SRM Global Hospitals explain what's healthy, what's a warning sign, and how it's treated.",
  path: "/blog/white-discharge-during-pregnancy-whats-normal-and-whats-not",
  image: "/images/blog/blog-12/what's-normal-and-what's-not-image-1-by-srm.jpeg",
  author: "Women's Health Specialist",
  section: "Women's Health",
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

export default function WomensHealthWhiteDischargeDirectArticle() {
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
        dotClass="dot-womens-health"
        category="Women's Health"
        title={article.title}
        specialistTitle="Women's Health Specialist"
        department="Centre for Women's Health & Wellness"
        date="July 8, 2026"
        readMinutes={11}
        reads="7,830"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Women's Health Specialist"
          department="Centre for Women's Health & Wellness"
          blurb="Our women's health specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "whats-normal", title: "What's normal" },
            { id: "third-trimester-changes", title: "Third trimester changes" },
            { id: "abnormal-discharge", title: "Abnormal discharge" },
            { id: "risks-and-infections", title: "Risks and infections" },
            { id: "diagnosis-and-treatment", title: "Diagnosis and treatment" },
            { id: "women-faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/cervical-stitch-pregnancy-strengthening-the-mothers-for-a-safer-delivery",
              image: "/images/blog/cervical-stitch-pregnancy-strengthening-the-mothers-for-a-safer-delivery.jpeg",
              title: "Cervical stitch pregnancy: strengthening the mothers for a safer delivery",
              meta: "13 min · Women's Health",
            },
            {
              href: "/blog/recovery-after-stroke-the-steps-forward-for-functional-independence",
              image: "/images/blog/recovery-after-stroke-the-steps-forward-for-functional-independence.jpeg",
              title: "Recovery after stroke: the steps forward for functional independence",
              meta: "14 min · Neurology",
            },
            {
              href: "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
              image: "/images/blog/articles/sc-hero.jpeg",
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
            href: "/blog/multiple-sclerosis-expert-care",
            image: "/images/blog/articles/ms-hero.jpeg",
            category: "Neurology",
            title: "Multiple sclerosis: what expert care at the right time can actually do",
          },
          {
            href: "/blog/recovery-after-stroke-the-steps-forward-for-functional-independence",
            image: "/images/blog/recovery-after-stroke-the-steps-forward-for-functional-independence.jpeg",
            category: "Neurology",
            title: "Recovery after stroke: the steps forward for functional independence",
          },
          {
            href: "/blog/cervical-stitch-pregnancy-strengthening-the-mothers-for-a-safer-delivery",
            image: "/images/blog/cervical-stitch-pregnancy-strengthening-the-mothers-for-a-safer-delivery.jpeg",
            category: "Women's Health",
            title: "Cervical stitch pregnancy: strengthening the mothers for a safer delivery",
          },
        ]}
      />
      <MobileActionBar />
      <SiteFooter />
      <BlogInteractions />
    </>
  );
}
