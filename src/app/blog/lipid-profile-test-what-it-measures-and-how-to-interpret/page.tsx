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
  title: "Lipid Profile Test: What It Measures & How to Interpret Results",
  description:
    "A lipid profile test measures total cholesterol, LDL, HDL, triglycerides, and VLDL. Learn about normal ranges, how to interpret results, fasting preparation, and preventive cardiac care at SRM Global Hospitals.",
  path: "/blog/lipid-profile-test-what-it-measures-and-how-to-interpret",
  image:
    "/images/blog/lipid-profile-test-what-it-measures-and-how-to-interpret/hero.jpeg",
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

export default function LipidProfileArticle() {
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
        reads="5,420"
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
            { id: "what-is-a-lipid-profile-test", title: "What is a lipid profile test" },
            { id: "what-does-a-lipid-profile-test-measure", title: "What it measures" },
            { id: "lipid-profile-test-normal-range", title: "Normal range & values" },
            { id: "why-is-a-lipid-profile-test-done", title: "Why it is done" },
            { id: "how-is-a-lipid-profile-test-performed", title: "Test procedure & preparation" },
            { id: "how-to-interpret-lipid-profile-test-results", title: "Interpreting results" },
            { id: "causes-of-abnormal-lipid-profile-test-results", title: "Causes of abnormal results" },
            { id: "how-to-improve-abnormal-lipid-profile-test-results", title: "How to improve results" },
            { id: "lipid-profile-test-cost-in-india", title: "Cost in India" },
            { id: "get-a-complete-cardiovascular-risk-assessment", title: "Cardiovascular assessment" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/what-is-an-angiogram-procedure-risks-and-recovery",
              image:
                "/images/blog/what-is-an-angiogram-procedure-risks-and-recovery/hero.jpeg",
              title: "What Is an Angiogram? Procedure, Risks & Recovery",
              meta: "14 min · Cardiology",
            },
            {
              href: "/blog/troponin-test-what-it-is-normal-range-and-what-results-mean",
              image:
                "/images/blog/troponin-test-what-it-Is-normal-range-and-what-results-mean/hero.jpeg",
              title: "Troponin Test: What It Is, Normal Range & What Results Mean",
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
