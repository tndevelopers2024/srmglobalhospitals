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
  title: "Sciatica Pain Treatment: Understand the Cause and Find the Right Relief",
  description:
    "Sciatica pain treatment at SRM Global Hospitals covers the causes of sciatic nerve compression, diagnosis, home care, physiotherapy, medical treatment and surgical options guided by orthopaedic spine specialists.",
  path: "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
  image: "/images/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief/hero.jpeg",
  author: "Orthopaedic Specialist",
  section: "Orthopaedics",
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

export default function SciaticaArticle() {
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
        date="April 1, 2026"
        readMinutes={11}
        reads="9,840"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Orthopaedic Specialist"
          department="Centre for Bone, Joint & Spine Care"
          blurb="Our spine specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "sc-causes", title: "What causes sciatic nerve pain" },
            { id: "sc-symptoms", title: "Sciatica symptoms" },
            { id: "sc-diagnosis", title: "How sciatica is diagnosed" },
            { id: "sc-management", title: "Management and treatment" },
            { id: "sc-prevention", title: "Preventing recurrence" },
            { id: "sc-faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/multiple-sclerosis-expert-care",
              image: "/images/blog/multiple-sclerosis-expert-care/hero.jpeg",
              title: "Multiple sclerosis: what expert care at the right time can actually do",
              meta: "12 min · Neurology",
            },
            {
              href: "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
              image: "https://images.unsplash.com/photo-1606206522398-de2884d8c8e1?w=120&q=85",
              title: "Migraine vs tension headache: how a neurologist tells them apart",
              meta: "6 min · Neurology",
            },
            {
              href: "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
              image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=120&q=85",
              title: "Knee pain after 40: when it's arthritis, and when it isn't",
              meta: "8 min · Orthopaedics",
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
            href: "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=85",
            category: "Cardiology",
            title: "Chest pain at 40: When is it your heart, and when is it not?",
          },
          {
            href: "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
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
