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
  title: "Types of Cerebral Palsy: What It Means for Your Child?",
  description:
    "Cerebral palsy is classified into spastic, dyskinetic, ataxic, hypotonic and mixed types. Pediatric neurologists at SRM Global Hospitals explain the causes, classification, symptoms, diagnosis and multidisciplinary treatment.",
  path: "/blog/types-of-cerebral-palsy-what-it-means-for-your-child",
  image: "/images/blog/articles/cp-hero.jpeg",
  author: "Neurology Specialist",
  section: "Neurology",
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

export default function CerebralPalsyArticle() {
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
        dotClass="dot-neurology"
        category="Neurology"
        title={article.title}
        specialistTitle="Neurology Specialist"
        department="Institute of Neuro Sciences"
        date="April 1, 2026"
        readMinutes={13}
        reads="7,260"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Neurology Specialist"
          department="Institute of Neuro Sciences"
          blurb="Our pediatric neurology specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "cp-impact", title: "Impact of cerebral palsy" },
            { id: "cp-risk-factors", title: "Risk factors" },
            { id: "cp-classification", title: "Classification" },
            { id: "cp-types", title: "Types of cerebral palsy" },
            { id: "cp-symptoms", title: "Common symptoms" },
            { id: "cp-gmfcs", title: "Diagnosis with GMFCS" },
            { id: "cp-multidisciplinary", title: "Multidisciplinary treatment" },
            { id: "cp-faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/multiple-sclerosis-expert-care",
              image: "/images/blog/articles/ms-hero.jpeg",
              title: "Multiple sclerosis: what expert care at the right time can actually do",
              meta: "12 min · Neurology",
            },
            {
              href: "/blog/types-of-cerebral-palsy-what-it-means-for-your-child",
              image: "https://images.unsplash.com/photo-1606206522398-de2884d8c8e1?w=120&q=85",
              title: "Migraine vs tension headache: how a neurologist tells them apart",
              meta: "6 min · Neurology",
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
            href: "/blog/types-of-cerebral-palsy-what-it-means-for-your-child",
            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=85",
            category: "Cardiology",
            title: "Chest pain at 40: When is it your heart, and when is it not?",
          },
          {
            href: "/blog/types-of-cerebral-palsy-what-it-means-for-your-child",
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
