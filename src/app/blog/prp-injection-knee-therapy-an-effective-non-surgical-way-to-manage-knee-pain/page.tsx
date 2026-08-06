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
  title: "PRP Injection Knee Therapy: An Effective Non-surgical Way to Manage Knee Pain",
  description:
    "PRP injection knee therapy at SRM Global Hospitals: how the procedure works, which knee conditions respond best, what recovery looks like, and how many sessions most patients need.",
  path: "/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain",
  image: "/images/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain/hero.jpeg",
  author: "Orthopaedic Specialist",
  section: "Orthopaedics",
  publishedTime: "2026-05-27",
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

export default function PrpInjectionKneeTherapyArticle() {
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
        date="May 27, 2026"
        readMinutes={9}
        reads="3,720"
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
            { id: "prp-what-is", title: "What is PRP knee treatment" },
            { id: "prp-how-works", title: "How PRP works" },
            { id: "prp-conditions", title: "Conditions treated" },
            { id: "prp-recovery", title: "Recovery and sessions needed" },
            { id: "prp-faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
              image: "/images/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief/hero.jpeg",
              title: "Sciatica pain treatment: understand the cause and find the right relief",
              meta: "11 min · Orthopaedics",
            },
            {
              href: "/blog/multiple-sclerosis-expert-care",
              image: "/images/blog/multiple-sclerosis-expert-care/hero.jpeg",
              title: "Multiple sclerosis: what expert care at the right time can actually do",
              meta: "12 min · Neurology",
            },
            {
              href: "/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain",
              image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=120&q=85",
              title: "Chest pain at 40: when is it your heart, and when is it not?",
              meta: "9 min · Cardiology",
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
            href: "/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain",
            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=85",
            category: "Cardiology",
            title: "Chest pain at 40: When is it your heart, and when is it not?",
          },
          {
            href: "/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain",
            image: "https://images.unsplash.com/photo-1616093875092-19208e6c4d35?w=600&q=85",
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
