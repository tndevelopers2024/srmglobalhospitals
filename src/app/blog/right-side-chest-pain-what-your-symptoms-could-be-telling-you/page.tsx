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
  title: "Right Side Chest Pain: What Your Symptoms Could Be Telling You?",
  description:
    "Right side chest pain explained by SRM Global Hospitals specialists — the musculoskeletal, lung, digestive and cardiac causes, warning signs that need emergency care, and how it is diagnosed and treated.",
  path: "/blog/right-side-chest-pain-what-your-symptoms-could-be-telling-you",
  image: "/images/blog/articles/rc-hero.jpeg",
  author: "Cardiology Specialist",
  section: "Cardiology",
  publishedTime: "2026-06-10",
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

export default function RightSideChestPainArticle() {
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
        date="June 10, 2026"
        readMinutes={11}
        reads="5,020"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Cardiology Specialist"
          department="Institute of Cardiac Sciences"
          blurb="Our cardiology specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "rc-what-is", title: "What is right-sided chest pain" },
            { id: "rc-musculoskeletal", title: "Musculoskeletal causes" },
            { id: "rc-lung", title: "Lung conditions" },
            { id: "rc-digestive", title: "Digestive causes" },
            { id: "rc-cardiac", title: "Cardiac causes" },
            { id: "rc-warning", title: "Warning signs" },
            { id: "rc-diagnosis", title: "Diagnosis and treatment" },
            { id: "rc-faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/right-side-chest-pain-what-your-symptoms-could-be-telling-you",
              image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=120&q=85",
              title: "Chest pain due to gas: when is it harmless, when you should worry",
              meta: "10 min · Cardiology",
            },
            {
              href: "/blog/types-of-cerebral-palsy-what-it-means-for-your-child",
              image: "/images/blog/articles/cp-hero.jpeg",
              title: "Types of cerebral palsy: what it means for your child",
              meta: "13 min · Neurology",
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
            href: "/blog/right-side-chest-pain-what-your-symptoms-could-be-telling-you",
            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=85",
            category: "Cardiology",
            title: "Chest pain at 40: When is it your heart, and when is it not?",
          },
          {
            href: "/blog/right-side-chest-pain-what-your-symptoms-could-be-telling-you",
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
