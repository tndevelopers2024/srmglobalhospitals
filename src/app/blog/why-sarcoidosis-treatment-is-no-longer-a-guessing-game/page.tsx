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
  title: "Why Sarcoidosis Treatment is No Longer a Guessing Game?",
  description:
    "How sarcoidosis is diagnosed and treated at SRM Global Hospitals — from imaging and biopsy through corticosteroid and immunosuppressive therapy, organ-specific complications, and emerging treatments.",
  path: "/blog/why-sarcoidosis-treatment-is-no-longer-a-guessing-game",
  image: "/images/blog/articles/sd-hero.jpeg",
  author: "Pulmonology Specialist",
  section: "Pulmonology",
  publishedTime: "2026-01-14",
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

export default function SarcoidosisTreatmentArticle() {
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
        dotClass="dot-pulmonology"
        category="Pulmonology"
        title={article.title}
        specialistTitle="Pulmonology Specialist"
        department="Centre for Respiratory Rehabilitation"
        date="January 14, 2026"
        readMinutes={12}
        reads="2,670"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Pulmonology Specialist"
          department="Centre for Respiratory Rehabilitation"
          blurb="Our pulmonology specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "sd-diagnosis", title: "Diagnosis" },
            { id: "sd-treatment", title: "Standard treatment" },
            { id: "sd-organs", title: "Organ-specific complications" },
            { id: "sd-lifestyle", title: "Lifestyle and long-term care" },
            { id: "sd-faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/right-side-chest-pain-what-your-symptoms-could-be-telling-you",
              image: "/images/blog/articles/rc-hero.jpeg",
              title: "Right side chest pain: what your symptoms could be telling you",
              meta: "6 min · Cardiology",
            },
            {
              href: "/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry",
              image: "/images/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry.jpeg",
              title: "Chest pain due to gas: when is it harmless, when you should worry",
              meta: "9 min · Cardiology",
            },
            {
              href: "/blog/multiple-sclerosis-expert-care",
              image: "/images/blog/articles/ms-hero.jpeg",
              title: "Multiple sclerosis: what expert care at the right time can actually do",
              meta: "12 min · Neurology",
            },
          ]}
        />
      </div>
      <EndCta />
      <MoreArticles
        items={[
          {
            href: "/blog/types-of-cerebral-palsy-what-it-means-for-your-child",
            image: "/images/blog/articles/cp-hero.jpeg",
            category: "Neurology",
            title: "Types of cerebral palsy: what it means for your child",
          },
          {
            href: "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
            image: "/images/blog/articles/sc-hero.jpeg",
            category: "Orthopaedics",
            title: "Sciatica pain treatment: understand the cause and find the right relief",
          },
          {
            href: "/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain",
            image: "/images/blog/articles/pk-hero.jpeg",
            category: "Orthopaedics",
            title: "PRP injection knee therapy: an effective non-surgical way to manage knee pain",
          },
        ]}
      />
      <MobileActionBar />
      <SiteFooter />
      <BlogInteractions />
    </>
  );
}
