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
  title: "Essential Guide to the Anomaly Scan: What to Expect and Understand",
  description:
    "The anomaly scan, performed around 18-22 weeks, is a detailed check of your baby's anatomy and development. Obstetric specialists at SRM Global Hospitals explain what's checked, how to prepare, and what results mean.",
  path: "/blog/essential-guide-to-the-anomaly-scan-what-to-expect-and-understand",
  image: "/images/blog/essential-guide-to-the-anomaly-scan-what-to-expect-and-understand/hero.png",
  author: "Obstetrics & Fetal Medicine Specialist",
  section: "Women's Health",
  publishedTime: "2027-11-03",
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

export default function AnomalyScanArticle() {
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
        specialistTitle="Obstetrics & Fetal Medicine Specialist"
        department="Centre for Women's Health"
        readMinutes={11}
        reads="5,610"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Obstetrics & Fetal Medicine Specialist"
          department="Centre for Women's Health"
          blurb="Our obstetrics specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-anomaly-scan", title: "What is an anomaly scan" },
            { id: "why-important", title: "Why it is important" },
            { id: "what-to-expect", title: "What to expect" },
            { id: "how-to-prepare", title: "How to prepare" },
            { id: "detailed-checklist", title: "What's checked" },
            { id: "understanding-results", title: "Understanding results" },
            { id: "common-myths", title: "Common myths" },
            { id: "managing-anxiety", title: "Managing anxiety" },
            { id: "srm-care", title: "Care at SRM" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/urinary-incontinence-after-childbirth-causes-and-remedies",
              image: "/images/blog/urinary-incontinence-after-childbirth-causes-and-remedies/hero.jpeg",
              title: "Urinary incontinence after childbirth: causes and remedies",
              meta: "12 min · Women's Health",
            },
            {
              href: "/blog/what-is-vaginal-vault-prolapse-symptoms-causes-and-solutions",
              image: "/images/blog/what-is-vaginal-vault-prolapse-symptoms-causes-and-solutions/hero.jpeg",
              title: "What is vaginal vault prolapse? Symptoms, causes, and solutions",
              meta: "10 min · Women's Health",
            },
            {
              href: "/blog/understanding-feeding-on-demand-a-guide-to-your-babys-needs",
              image: "/images/blog/understanding-feeding-on-demand-a-guide-to-your-babys-needs/hero.jpeg",
              title: "Understanding feeding on demand: a guide to your baby's needs",
              meta: "11 min · Paediatrics",
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
