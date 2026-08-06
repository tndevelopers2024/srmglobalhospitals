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
  title: "Multiple Sclerosis Treatment: What Expert Care at the Right Time Can Do?",
  description:
    "Multiple sclerosis treatment at SRM Global Hospitals covers diagnosis, disease-modifying therapies, acute attack management, symptom control, physical therapy and lifestyle support guided by experienced neurologists.",
  path: "/blog/multiple-sclerosis-expert-care",
  image: "/images/blog/multiple-sclerosis-expert-care/hero.jpeg",
  author: "Neurology Specialist",
  section: "Neurology",
  publishedTime: "2026-05-14",
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

export default function MultipleSclerosisArticle() {
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
        date="May 14, 2026"
        readMinutes={15}
        reads="5,940"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Neurology Specialist"
          department="Institute of Neuro Sciences"
          blurb="Our neurology specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "ms-impact-cns", title: "Impact on the nervous system" },
            { id: "ms-types", title: "Types of MS" },
            { id: "ms-diagnosis", title: "Diagnosis" },
            { id: "ms-dmt", title: "Disease-modifying therapies" },
            { id: "ms-acute-attack", title: "Managing an acute attack" },
            { id: "ms-symptom-management", title: "Symptom management" },
            { id: "ms-physical-therapy", title: "Physical therapy" },
            { id: "ms-lifestyle-choices", title: "Lifestyle choices" },
            { id: "ms-faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/types-of-cerebral-palsy-what-it-means-for-your-child",
              image: "/images/blog/types-of-cerebral-palsy-what-it-means-for-your-child/hero.jpeg",
              title: "Types of cerebral palsy: what it means for your child",
              meta: "13 min · Neurology",
            },
            {
              href: "/blog/multiple-sclerosis-expert-care",
              image: "https://images.unsplash.com/photo-1606206522398-de2884d8c8e1?w=120&q=85",
              title: "Migraine vs tension headache: how a neurologist tells them apart",
              meta: "6 min · Neurology",
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
            href: "/blog/types-of-cerebral-palsy-what-it-means-for-your-child",
            image: "/images/blog/types-of-cerebral-palsy-what-it-means-for-your-child/hero.jpeg",
            category: "Neurology",
            title: "Types of cerebral palsy: what it means for your child",
          },
          {
            href: "/blog/multiple-sclerosis-expert-care",
            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=85",
            category: "Cardiology",
            title: "Chest pain at 40: When is it your heart, and when is it not?",
          },
          {
            href: "/blog/multiple-sclerosis-expert-care",
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
