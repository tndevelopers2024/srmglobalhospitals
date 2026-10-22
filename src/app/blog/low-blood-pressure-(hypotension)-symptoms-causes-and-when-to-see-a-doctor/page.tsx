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
  title: "Low Blood Pressure (Hypotension): Symptoms, Causes & When to See a Doctor",
  description:
    "Low blood pressure (hypotension) is a reading below 90/60 mmHg. Learn about low BP symptoms, orthostatic and postprandial hypotension, natural remedies, and when to see a cardiologist at SRM Global Hospitals.",
  path: "/blog/low-blood-pressure-(hypotension)-symptoms-causes-and-when-to-see-a-doctor",
  image:
    "/images/blog/low-blood-pressure-(hypotension)-symptoms-causes-and-when-to-see-a-doctor/hero.jpg",
  author: "Cardiology Specialist",
  section: "Cardiology",
  publishedTime: "2026-10-22",
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

export default function LowBloodPressureArticle() {
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
        date="October 22, 2026"
        readMinutes={15}
        reads="4,320"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Cardiology Specialist"
          department="Institute of Cardiac Sciences"
          blurb="Our cardiology and internal medicine specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-low-blood-pressure-hypotension", title: "What is low blood pressure" },
            { id: "low-bp-symptoms", title: "Low BP symptoms" },
            { id: "types-of-low-blood-pressure", title: "Types of low BP" },
            { id: "what-causes-low-blood-pressure", title: "Causes of low BP" },
            { id: "natural-remedies-and-lifestyle-changes", title: "Natural remedies & lifestyle" },
            { id: "when-to-see-a-doctor", title: "When to see a doctor" },
            { id: "get-expert-care-for-low-blood-pressure", title: "Expert care" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/heart-palpitations-causes-when-to-worry-and-treatment",
              image: "/images/blog/heart-palpitations-causes-when-to-worry-and-treatment/hero.jpeg",
              title: "Heart Palpitations: Causes, When to Worry & Treatment",
              meta: "10 min · Cardiology",
            },
            {
              href: "/blog/ecg-test-what-it-is-how-it-works-and-what-results-mean",
              image: "/images/blog/ecg-test-what-it-is-how-it-works-and-what-results-mean/hero.jpeg",
              title: "ECG Test: What It Is, How It Works, Cost & What Results Mean",
              meta: "12 min · Cardiology",
            },
            {
              href: "/blog/echo-test-(echocardiogram)-purpose-procedure-and-cost",
              image: "/images/blog/echo-test-(echocardiogram)-purpose-procedure-and-cost/hero.jpeg",
              title: "Echo Test (Echocardiogram): Purpose, Procedure & Cost",
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
