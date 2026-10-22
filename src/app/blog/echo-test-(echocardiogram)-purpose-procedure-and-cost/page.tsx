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
  title: "Echo Test (Echocardiogram): Purpose, Procedure & Cost",
  description:
    "An echo test (echocardiogram) is a non-invasive cardiac ultrasound evaluating heart chambers, valves, ejection fraction, and blood flow. Learn about 2D echo test price, procedure, results, and cardiac care at SRM Global Hospitals.",
  path: "/blog/echo-test-(echocardiogram)-purpose-procedure-and-cost",
  image:
    "/images/blog/echo-test-(echocardiogram)-purpose-procedure-and-cost/hero.jpeg",
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

export default function EchoTestArticle() {
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
        reads="4,850"
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
            { id: "what-is-an-echo-test", title: "What is an echo test" },
            { id: "what-is-a-2d-echo-test", title: "What is a 2D echo test" },
            { id: "why-echo-done", title: "Why an echo test is done" },
            { id: "types-of-echo-tests", title: "Types of echo tests" },
            { id: "how-performed", title: "How it is performed" },
            { id: "understanding-results", title: "Understanding results" },
            { id: "echo-vs-ecg", title: "Echo vs. ECG test" },
            { id: "book-an-appointment", title: "Get cardiac assessment" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/ecg-test-what-it-is-how-it-works-and-what-results-mean",
              image:
                "/images/blog/ecg-test-what-it-is-how-it-works-and-what-results-mean/hero.jpeg",
              title:
                "ECG Test: What It Is, How It Works, Cost & What Results Mean",
              meta: "12 min · Cardiology",
            },
            {
              href: "/blog/what-is-an-angiogram-procedure-risks-and-recovery",
              image:
                "/images/blog/what-is-an-angiogram-procedure-risks-and-recovery/hero.jpeg",
              title: "What Is an Angiogram? Procedure, Risks, and Recovery",
              meta: "14 min · Cardiology",
            },
            {
              href: "/blog/heart-stent-operation-a-comprehensive-overview-of-the-procedure",
              image:
                "/images/blog/heart-stent-operation-a-comprehensive-overview-of-the-procedure/hero.jpeg",
              title:
                "Heart stent operation: a comprehensive overview of the procedure",
              meta: "15 min · Cardiology",
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
