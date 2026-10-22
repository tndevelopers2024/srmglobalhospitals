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
  title: "Troponin Test: What It Is, Normal Range & What Results Mean",
  description:
    "A troponin test is the gold-standard cardiac biomarker for heart attacks. Learn about normal troponin levels, high-sensitivity troponin (hs-cTn), causes of elevated troponin, and emergency care at SRM Global Hospitals.",
  path: "/blog/troponin-test-what-it-is-normal-range-and-what-results-mean",
  image:
    "/images/blog/troponin-test-what-it-Is-normal-range-and-what-results-mean/hero.jpeg",
  author: "Cardiology Specialist",
  section: "Cardiology",
  publishedTime: "2026-10-21",
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

export default function TroponinTestArticle() {
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
            { name: "Health Insights", path: "/blogs" },
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
        date="October 21, 2026"
        readMinutes={14}
        reads="5,180"
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
            { id: "what-is-a-troponin-test", title: "What is a troponin test" },
            { id: "why-troponin-done", title: "Why a troponin test is done" },
            { id: "types-of-troponin-tests", title: "Types of troponin tests" },
            { id: "normal-range", title: "Normal range & levels" },
            { id: "understanding-results", title: "Understanding results" },
            { id: "causes-of-elevated-troponin", title: "Causes of elevated levels" },
            { id: "test-procedure", title: "Test procedure" },
            { id: "results-and-treatment", title: "Results and treatment" },
            { id: "book-an-appointment", title: "Book a cardiac test" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/tmt-test-what-it-detects-how-to-prepare-and-results",
              image:
                "/images/blog/tmt-test-what-it-detects-how-to-prepare-and-results/hero.jpeg",
              title: "TMT Test: What It Detects, How to Prepare & Results",
              meta: "12 min · Cardiology",
            },
            {
              href: "/blog/echo-test-(echocardiogram)-purpose-procedure-and-cost",
              image:
                "/images/blog/echo-test-(echocardiogram)-purpose-procedure-and-cost/hero.jpeg",
              title: "Echo Test (Echocardiogram): Purpose, Procedure & Cost",
              meta: "14 min · Cardiology",
            },
            {
              href: "/blog/ecg-test-what-it-is-how-it-works-and-what-results-mean",
              image:
                "/images/blog/ecg-test-what-it-is-how-it-works-and-what-results-mean/hero.jpeg",
              title:
                "ECG Test: What It Is, How It Works, Cost & What Results Mean",
              meta: "12 min · Cardiology",
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
