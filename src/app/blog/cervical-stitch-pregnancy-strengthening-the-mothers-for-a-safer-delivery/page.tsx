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
  title: "Cervical Stitch Pregnancy: Strengthening the Mothers for a Safer Delivery",
  description:
    "Cervical cerclage is a stitch placed around the cervix to prevent preterm birth in women with cervical insufficiency. Obstetricians at SRM Global Hospitals explain risk factors, procedure types, timing, and recovery.",
  path: "/blog/cervical-stitch-pregnancy-strengthening-the-mothers-for-a-safer-delivery",
  image: "/images/blog/blog-13/strengthening-the-mothers-for-a-safer-delivery-image-1-by-srm.jpeg",
  author: "Women's Health Specialist",
  section: "Women's Health",
  publishedTime: "2026-07-15",
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

export default function CervicalStitchPregnancyArticle() {
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
        date="July 15, 2026"
        readMinutes={16}
        reads="4,570"
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
            { id: "function-of-cervix", title: "Function of the cervix" },
            { id: "cervical-insufficiency", title: "Cervical insufficiency" },
            { id: "cervical-cerclage", title: "Cervical cerclage" },
            { id: "types-of-cerclage", title: "Types of cerclage" },
            { id: "timing-planned-vs-rescue", title: "Planned vs rescue timing" },
            { id: "what-happens-during-procedure", title: "What happens during the procedure" },
            { id: "recovery-and-monitoring", title: "Recovery and warning signs" },
            { id: "cervical-faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/white-discharge-during-pregnancy-whats-normal-and-whats-not",
              image: "/images/blog/white-discharge-during-pregnancy-whats-normal-and-whats-not.jpeg",
              title: "White discharge during pregnancy: what's normal and what's not",
              meta: "11 min · Women's Health",
            },
            {
              href: "/blog/recovery-after-stroke-the-steps-forward-for-functional-independence",
              image: "/images/blog/recovery-after-stroke-the-steps-forward-for-functional-independence.jpeg",
              title: "Recovery after stroke: the steps forward for functional independence",
              meta: "14 min · Neurology",
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
            href: "/blog/multiple-sclerosis-expert-care",
            image: "/images/blog/multiple-sclerosis-treatment-what-expert-care-at-the-right-time-can-do.jpeg",
            category: "Neurology",
            title: "Multiple sclerosis: what expert care at the right time can actually do",
          },
          {
            href: "/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry",
            image: "/images/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry.jpeg",
            category: "Cardiology",
            title: "Chest pain at 40: When is it your heart, and when is it not?",
          },
          {
            href: "/blog/white-discharge-during-pregnancy-whats-normal-and-whats-not",
            image: "/images/blog/white-discharge-during-pregnancy-whats-normal-and-whats-not.jpeg",
            category: "Women's Health",
            title: "White discharge during pregnancy: what's normal and what's not",
          },
        ]}
      />
      <MobileActionBar />
      <SiteFooter />
      <BlogInteractions />
    </>
  );
}
