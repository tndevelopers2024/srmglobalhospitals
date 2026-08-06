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
  title: "Sitting Without Struggle: Reclaiming Your Life from Tailbone Pain",
  description:
    "Tailbone pain (coccydynia) explained by SRM Global Hospitals orthopaedic specialists — causes, symptoms that need a doctor, diagnosis, and the lifestyle changes and physical therapy that resolve most cases without surgery.",
  path: "/blog/sitting-without-struggle-reclaiming-your-life-from-tailbone-pain",
  image: "/images/blog/sitting-without-struggle-reclaiming-your-life-from-tailbone-pain/hero.jpeg",
  author: "Orthopaedic Specialist",
  section: "Orthopaedics",
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

export default function TailbonePainArticle() {
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
        date="January 14, 2026"
        readMinutes={8}
        reads="2,180"
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
            { id: "tb-causes", title: "Causes" },
            { id: "tb-symptoms", title: "Symptoms" },
            { id: "tb-diagnosis", title: "Diagnosis" },
            { id: "tb-treatment", title: "Treatment" },
            { id: "tb-faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/the-silent-shock-absorber-why-a-meniscus-tear-is-more-than-just-knee-pain",
              image: "/images/blog/the-silent-shock-absorber-why-a-meniscus-tear-is-more-than-just-knee-pain/hero.jpeg",
              title: "The silent shock absorber: why a meniscus tear is more than just knee pain",
              meta: "9 min · Orthopaedics",
            },
            {
              href: "/blog/unlocking-your-movement-a-factual-guide-to-overcoming-frozen-shoulder",
              image: "/images/blog/unlocking-your-movement-a-factual-guide-to-overcoming-frozen-shoulder/hero.jpeg",
              title: "Unlocking your movement: a factual guide to overcoming frozen shoulder",
              meta: "11 min · Orthopaedics",
            },
            {
              href: "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
              image: "/images/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief/hero.jpeg",
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
            href: "/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain",
            image: "/images/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain/hero.jpeg",
            category: "Orthopaedics",
            title: "PRP injection knee therapy: an effective non-surgical way to manage knee pain",
          },
          {
            href: "/blog/power-your-comeback-through-sports-rehabilitation",
            image: "/images/blog/power-your-comeback-through-sports-rehabilitation/hero.jpeg",
            category: "Orthopaedics",
            title: "Power your comeback through sports rehabilitation",
          },
          {
            href: "/blog/multiple-sclerosis-expert-care",
            image: "/images/blog/multiple-sclerosis-expert-care/hero.jpeg",
            category: "Neurology",
            title: "Multiple sclerosis: what expert care at the right time can actually do",
          },
        ]}
      />
      <MobileActionBar />
      <SiteFooter />
      <BlogInteractions />
    </>
  );
}
