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
  title: "What Is an Angiogram? Procedure, Risks & Recovery",
  description:
    "An angiogram is a gold-standard diagnostic imaging test for coronary artery disease. Interventional cardiologists at SRM Global Hospitals explain conventional vs CT angiograms, preparation, procedure steps, risks, and recovery.",
  path: "/blog/what-is-an-angiogram-procedure-risks-and-recovery",
  image:
    "/images/blog/what-is-an-angiogram-procedure-risks-and-recovery/hero.jpeg",
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

export default function AngiogramArticle() {
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
        reads="6,240"
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
            { id: "what-is-an-angiogram", title: "What is an angiogram" },
            { id: "why-ordered", title: "Why the test is ordered" },
            { id: "types-of-angiogram", title: "Types of angiogram" },
            { id: "how-performed", title: "How it is performed" },
            { id: "ct-vs-conventional", title: "CT vs conventional" },
            { id: "risks-and-complications", title: "Risks & complications" },
            { id: "results-and-treatment", title: "Understanding results" },
            { id: "recovery", title: "Recovery timeline" },
            { id: "how-to-prepare", title: "How to prepare" },
            { id: "book-an-appointment", title: "Accurate cardiac diagnosis" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/heart-stent-operation-a-comprehensive-overview-of-the-procedure",
              image:
                "/images/blog/heart-stent-operation-a-comprehensive-overview-of-the-procedure/hero.jpeg",
              title: "Heart stent operation: a comprehensive overview of the procedure",
              meta: "15 min · Cardiology",
            },
            {
              href: "/blog/mastering-the-rotablator-essential-insights-for-effective-atherectomy",
              image:
                "/images/blog/mastering-the-rotablator-essential-insights-for-effective-atherectomy/hero.jpeg",
              title: "Mastering the rotablator: essential insights for effective atherectomy",
              meta: "16 min · Cardiology",
            },
            {
              href: "/blog/effective-arrhythmia-treatment-options-benefits-and-what-to-expect",
              image:
                "/images/blog/effective-arrhythmia-treatment-options-benefits-and-what-to-expect/hero.jpeg",
              title: "Effective arrhythmia treatment options, benefits, and what to expect",
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
