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
  title: "Understanding Hypertension Symptoms: Key Signs You Shouldn't Ignore",
  description:
    "Hypertension is often symptomless, earning it the name silent killer. Cardiologists at SRM Global Hospitals explain the 10 warning signs, how symptoms differ by age and sex, and how to manage your blood pressure.",
  path: "/blog/understanding-hypertension-symptoms-key-signs-you-shouldnt-ignore",
  image: "/images/blog/understanding-hypertension-symptoms-key-signs-you-shouldnt-ignore/hero.png",
  author: "Cardiology Specialist",
  section: "Cardiology",
  publishedTime: "2026-12-08",
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

export default function HypertensionSymptomsPage() {
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
        readMinutes={12}
        reads="6,120"
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
            { id: "what-is-hypertension", title: "What is hypertension" },
            { id: "why-symptoms-matter", title: "Why symptoms matter" },
            { id: "warning-signs", title: "10 warning signs" },
            { id: "special-populations", title: "Special populations" },
            { id: "when-to-seek-help", title: "When to seek medical help" },
            { id: "diagnosis", title: "Diagnosis" },
            { id: "management", title: "Managing symptoms" },
            { id: "myths", title: "Myths about hypertension" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/hfpef-diastolic-heart-failure-causes-effects-and-treatment",
              image: "/images/blog/hfpef-diastolic-heart-failure-causes-effects-and-treatment/hero.jpeg",
              title: "HFpEF (diastolic heart failure): causes, effects, and treatment",
              meta: "11 min · Cardiology",
            },
            {
              href: "/blog/essential-guide-to-heart-failure-treatment-options-and-considerations",
              image: "/images/blog/essential-guide-to-heart-failure-treatment-options-and-considerations/hero.jpeg",
              title: "Essential guide to heart failure treatment options and considerations",
              meta: "16 min · Cardiology",
            },
            {
              href: "/blog/effective-arrhythmia-treatment-options-benefits-and-what-to-expect",
              image: "/images/blog/effective-arrhythmia-treatment-options-benefits-and-what-to-expect/hero.jpeg",
              title: "Effective arrhythmia treatment: options, benefits, and what to expect",
              meta: "13 min · Cardiology",
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
