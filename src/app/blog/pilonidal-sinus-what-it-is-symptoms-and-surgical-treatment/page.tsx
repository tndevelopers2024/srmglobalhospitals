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
  title: "Pilonidal Sinus: What It Is, Symptoms & Surgical Treatment",
  description:
    "A pilonidal sinus is a small tunnel or cyst in the skin near the tailbone (natal cleft) that can become infected. Learn about causes, symptoms, flap and laser surgical treatments, and recovery at SRM Global Hospitals.",
  path: "/blog/pilonidal-sinus-what-it-is-symptoms-and-surgical-treatment",
  image:
    "/images/blog/pilonidal-sinus-what-it-is-symptoms-and-surgical-treatment/hero.jpg",
  author: "General Surgery Specialist",
  section: "Gastro",
  publishedTime: "2026-10-22",
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

export default function PilonidalSinusArticle() {
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
        dotClass="dot-gastro"
        category="Gastro"
        title={article.title}
        specialistTitle="General Surgery Specialist"
        department="Department of General & Laparoscopic Surgery"
        date="October 22, 2026"
        readMinutes={15}
        reads="4,150"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="General Surgery Specialist"
          department="Department of General & Laparoscopic Surgery"
          blurb="Our general, laparoscopic, and colorectal surgeons are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-a-pilonidal-sinus", title: "What is a pilonidal sinus" },
            { id: "what-causes-a-pilonidal-sinus", title: "Causes & risk factors" },
            { id: "pilonidal-sinus-symptoms", title: "Symptoms" },
            { id: "how-is-a-pilonidal-sinus-diagnosed", title: "Diagnosis" },
            { id: "pilonidal-sinus-treatment-options", title: "Treatment & surgical options" },
            { id: "pilonidal-sinus-surgery-recovery", title: "Recovery & aftercare" },
            { id: "complications-of-untreated-pilonidal-sinus", title: "Complications" },
            { id: "get-expert-surgical-care-for-pilonidal-sinus", title: "Expert surgical care" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/sitting-without-struggle-reclaiming-your-life-from-tailbone-pain",
              image: "/images/blog/sitting-without-struggle-reclaiming-your-life-from-tailbone-pain/hero.jpeg",
              title: "Sitting Without Struggle: Reclaiming Your Life from Tailbone Pain",
              meta: "10 min · Orthopaedics",
            },
            {
              href: "/blog/effective-tail-bone-pain-treatment-options-for-relief-and-recovery",
              image: "/images/blog/effective-tail-bone-pain-treatment-options-for-relief-and-recovery/hero.jpeg",
              title: "Effective Tail Bone Pain Treatment: Options for Relief and Recovery",
              meta: "10 min · Orthopaedics",
            },
            {
              href: "/blog/gastroenterologist-what-they-treat-and-when-you-need-one",
              image: "/images/blog/gastroenterologist-what-they-treat-and-when-you-need-one/hero.jpg",
              title: "Gastroenterologist: What They Treat & When You Need One",
              meta: "18 min · Gastro",
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
