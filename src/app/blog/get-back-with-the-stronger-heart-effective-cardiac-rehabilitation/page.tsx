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
  title: "Get Back With the Stronger Heart: Effective Cardiac Rehabilitation",
  description:
    "Cardiac rehabilitation at SRM Global Hospitals combines supervised exercise, risk factor management, medication support, and emotional care to help patients recover after a heart attack, cardiac surgery, or heart failure.",
  path: "/blog/get-back-with-the-stronger-heart-effective-cardiac-rehabilitation",
  image: "/images/blog/get-back-with-the-stronger-heart-effective-cardiac-rehabilitation.jpeg",
  author: "Cardiology Specialist",
  section: "Cardiology",
  publishedTime: "2026-10-07",
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

export default function CardiacRehabilitationArticle() {
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
        dotClass="dot-cardiology"
        category="Cardiology"
        title={article.title}
        specialistTitle="Cardiology Specialist"
        department="Institute of Cardiac Sciences"
        date="October 7, 2026"
        readMinutes={13}
        reads="4,020"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Cardiology Specialist"
          department="Institute of Cardiac Sciences"
          blurb="Our cardiac rehabilitation specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-cardiac-rehab", title: "What is cardiac rehabilitation" },
            { id: "why-cardiac-rehab-matters", title: "Why it is important" },
            { id: "who-should-consider", title: "Who should consider it" },
            { id: "core-components", title: "Core program components" },
            { id: "phases-of-rehab", title: "Phases of rehabilitation" },
            { id: "health-benefits", title: "Health benefits" },
            { id: "cardiac-rehab-faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry",
              image: "/images/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry.jpeg",
              title: "Chest pain due to gas: when is it harmless, when you should worry",
              meta: "10 min · Cardiology",
            },
            {
              href: "/blog/right-side-chest-pain-what-your-symptoms-could-be-telling-you",
              image: "/images/blog/right-side-chest-pain-what-your-symptoms-could-be-telling-you.jpeg",
              title: "Right side chest pain: what your symptoms could be telling you",
              meta: "11 min · Cardiology",
            },
            {
              href: "/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain",
              image: "/images/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain.jpeg",
              title: "PRP injection knee therapy: an effective non-surgical way to manage knee pain",
              meta: "9 min · Orthopaedics",
            },
          ]}
        />
      </div>
      <EndCta />
      <MoreArticles
        items={[
          {
            href: "/blog/multiple-sclerosis-expert-care",
            image: "/images/blog/multiple-sclerosis-treatment-what-expert-care-at-the-right-time-can-do.jpeg",
            category: "Neurology",
            title: "Multiple sclerosis: what expert care at the right time can actually do",
          },
          {
            href: "/blog/right-side-chest-pain-what-your-symptoms-could-be-telling-you",
            image: "/images/blog/right-side-chest-pain-what-your-symptoms-could-be-telling-you.jpeg",
            category: "Cardiology",
            title: "Right side chest pain: what your symptoms could be telling you",
          },
          {
            href: "/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry",
            image: "/images/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry.jpeg",
            category: "Cardiology",
            title: "Chest pain at 40: When is it your heart, and when is it not?",
          },
        ]}
      />
      <MobileActionBar />
      <SiteFooter />
      <BlogInteractions />
    </>
  );
}
