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
  title: "TMT Test: What It Detects, How to Prepare & Results",
  description:
    "A TMT test (treadmill stress test) evaluates heart performance under physical exertion. Learn about TMT preparation, Bruce protocol, normal vs abnormal results, safety, and cardiac care at SRM Global Hospitals.",
  path: "/blog/tmt-test-what-it-detects-how-to-prepare-and-results",
  image:
    "/images/blog/tmt-test-what-it-detects-how-to-prepare-and-results/hero.jpeg",
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

export default function TmtTestArticle() {
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
        readMinutes={12}
        reads="4,620"
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
            { id: "what-is-a-tmt-test", title: "What is a TMT test" },
            { id: "why-tmt-done", title: "Why a TMT test is done" },
            { id: "how-performed", title: "How it is performed" },
            { id: "tmt-results", title: "TMT test results" },
            { id: "is-tmt-safe", title: "Is the TMT test safe?" },
            { id: "tmt-vs-other-tests", title: "TMT vs. other tests" },
            { id: "book-an-appointment", title: "Book a TMT test" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
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
            {
              href: "/blog/what-is-an-angiogram-procedure-risks-and-recovery",
              image:
                "/images/blog/what-is-an-angiogram-procedure-risks-and-recovery/hero.jpeg",
              title: "What Is an Angiogram? Procedure, Risks, and Recovery",
              meta: "14 min · Cardiology",
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
