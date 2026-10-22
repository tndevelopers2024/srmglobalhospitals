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
  title: "SGPT Test: Normal Range, What Elevated Levels Mean & Diet Tips",
  description:
    "An SGPT blood test measures alanine aminotransferase to evaluate liver health. Learn normal ranges for men and women, causes of high SGPT, and practical diet tips to lower elevated levels.",
  path: "/blog/sgpt-test-normal-range-what-elevated-levels-mean-and-diet-tips",
  image:
    "/images/blog/sgpt-test-normal-range-what-elevated-levels-mean-and-diet-tips/hero.webp",
  author: "Gastro Specialist",
  section: "Gastro",
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

export default function SgptTestArticle() {
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
        dotClass="dot-gastro"
        category="Gastro"
        title={article.title}
        specialistTitle="Gastro Specialist"
        department="Institute of Gastro and Liver Sciences"
        date="October 22, 2026"
        readMinutes={15}
        reads="4,260"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Gastro Specialist"
          department="Institute of Gastro and Liver Sciences"
          blurb="Our gastroenterology and hepatology specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-sgpt", title: "What Is SGPT?" },
            { id: "what-sgpt-measures", title: "What It Measures" },
            { id: "sgpt-normal-range", title: "Normal Range" },
            { id: "causes-high-sgpt", title: "Causes of High SGPT" },
            { id: "sgpt-levels-meaning", title: "Interpreting Values" },
            { id: "how-test-performed", title: "How Test is Performed" },
            { id: "diet-tips-reduce-sgpt", title: "Diet & Lifestyle Tips" },
            { id: "when-to-see-doctor", title: "When to See a Doctor" },
            { id: "sgpt-faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/bilirubin-test-normal-range-high-and-low-levels-explained",
              image:
                "/images/blog/bilirubin-test-normal-range-high-and-low-levels-explained/hero.jpg",
              title: "Bilirubin Test: Normal Range, High & Low Levels Explained",
              meta: "14 min · Gastro",
            },
            {
              href: "/blog/jaundice-causes-symptoms-and-when-to-see-a-doctor",
              image:
                "/images/blog/jaundice-causes-symptoms-and-when-to-see-a-doctor/hero.jpg",
              title: "Jaundice: Causes, Symptoms & When to See a Doctor",
              meta: "24 min · Gastro",
            },
            {
              href: "/blog/ascites-what-causes-fluid-in-the-abdomen-and-treatment-options",
              image:
                "/images/blog/ascites-what-causes-fluid-in-the-abdomen-and-treatment-options/hero.jpg",
              title: "Ascites: What Causes Fluid in the Abdomen & Treatment Options",
              meta: "18 min · Gastro",
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
