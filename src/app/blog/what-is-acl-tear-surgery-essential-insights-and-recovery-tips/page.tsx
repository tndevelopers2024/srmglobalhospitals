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
  title: "What is ACL Tear Surgery? Essential Insights and Recovery Tips",
  description:
    "ACL reconstruction replaces the torn ligament with a graft in a step-by-step surgical process. Orthopaedic specialists at SRM Global Hospitals explain graft types, the procedure, and the 5-phase recovery timeline.",
  path: "/blog/what-is-acl-tear-surgery-essential-insights-and-recovery-tips",
  image: "/images/blog/what-is-acl-tear-surgery-essential-insights-and-recovery-tips/hero.jpeg",
  author: "Orthopaedic Specialist",
  section: "Orthopaedics",
  publishedTime: "2027-05-26",
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

export default function WhatIsAclTearSurgeryArticle() {
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
        date="May 26, 2027"
        readMinutes={13}
        reads="4,560"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Orthopaedic Specialist"
          department="Centre for Bone, Joint & Spine Care"
          blurb="Our orthopaedic specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-acl-tear-surgery", title: "What is ACL tear surgery" },
            { id: "why-surgery-needed", title: "Why surgery is needed" },
            { id: "surgical-procedure", title: "The surgical procedure" },
            { id: "step-by-step", title: "Step-by-step process" },
            { id: "recovery-timeline", title: "Recovery timeline" },
            { id: "connect-with-srm", title: "Connect with SRM Global" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/what-is-partial-acl-tear-recovery-time-without-surgery",
              image: "/images/blog/what-is-partial-acl-tear-recovery-time-without-surgery/hero.jpeg",
              title: "What is partial ACL tear recovery time without surgery",
              meta: "10 min · Orthopaedics",
            },
            {
              href: "/blog/the-best-complete-acl-tear-treatment-options-for-effective-recovery",
              image: "/images/blog/the-best-complete-acl-tear-treatment-options-for-effective-recovery/hero.jpeg",
              title: "The best complete ACL tear treatment options for effective recovery",
              meta: "12 min · Orthopaedics",
            },
            {
              href: "/blog/effective-acl-tear-treatment-options-for-recovery-and-rehabilitation",
              image: "/images/blog/effective-acl-tear-treatment-options-for-recovery-and-rehabilitation/hero.jpeg",
              title: "Effective ACL tear treatment: options for recovery and rehabilitation",
              meta: "14 min · Orthopaedics",
            },
          ]}
        />
      </div>
      <EndCta />
      <MoreArticles
        items={[
          {
            href: "/blog/multiple-sclerosis-expert-care",
            image: "/images/blog/multiple-sclerosis-expert-care/hero.jpeg",
            category: "Neurology",
            title: "Multiple sclerosis: what expert care at the right time can actually do",
          },
          {
            href: "/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry",
            image: "/images/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry/hero.jpeg",
            category: "Cardiology",
            title: "Chest pain at 40: When is it your heart, and when is it not?",
          },
          {
            href: "/blog/expert-diabetic-foot-care-to-keep-you-moving",
            image: "/images/blog/expert-diabetic-foot-care-to-keep-you-moving/hero.jpeg",
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
