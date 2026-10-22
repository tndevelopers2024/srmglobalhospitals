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
  title: "Ascites: What Causes Fluid in the Abdomen & Treatment Options",
  description:
    "Ascites is the pathological buildup of fluid in the peritoneal cavity, most commonly caused by liver cirrhosis and portal hypertension. Learn about symptoms, SAAG diagnosis, paracentesis, and treatment at SRM Global Hospitals.",
  path: "/blog/ascites-what-causes-fluid-in-the-abdomen-and-treatment-options",
  image:
    "/images/blog/ascites-what-causes-fluid-in-the-abdomen-and-treatment-options/hero.jpg",
  author: "Gastroenterology Specialist",
  section: "Gastroenterology",
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

export default function AscitesArticle() {
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
        dotClass="dot-gastroenterology"
        category="Gastroenterology"
        title={article.title}
        specialistTitle="Gastroenterology Specialist"
        department="Institute of Gastro and Liver Sciences"
        date="October 22, 2026"
        readMinutes={18}
        reads="3,980"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Gastroenterology Specialist"
          department="Institute of Gastro and Liver Sciences"
          blurb="Our hepatology, gastroenterology, and liver transplant specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-ascites", title: "What is ascites" },
            { id: "what-causes-ascites", title: "Causes of ascites" },
            { id: "how-is-ascites-diagnosed", title: "Diagnosis & SAAG" },
            { id: "ascites-treatment-options", title: "Treatment options" },
            { id: "complications-of-ascites", title: "Complications" },
            { id: "prognosis-of-ascites", title: "Prognosis" },
            { id: "get-expert-ascites-evaluation", title: "Expert liver care" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/sgpt-test-normal-range-what-elevated-levels-mean-and-diet-tips",
              image: "/images/blog/sgpt-test-normal-range-what-elevated-levels-mean-and-diet-tips/hero.webp",
              title: "SGPT Test: Normal Range, What Elevated Levels Mean & Diet Tips",
              meta: "15 min · Gastroenterology",
            },
            {
              href: "/blog/jaundice-causes-symptoms-and-when-to-see-a-doctor",
              image: "/images/blog/jaundice-causes-symptoms-and-when-to-see-a-doctor/hero.jpg",
              title: "Jaundice: Causes, Symptoms & When to See a Doctor",
              meta: "24 min · Gastro",
            },
            {
              href: "/blog/esophageal-varices-what-happens-when-blood-flow-is-blocked",
              image: "/images/blog/esophageal-varices-what-happens-when-blood-flow-is-blocked/hero.jpeg",
              title: "Esophageal Varices: What Happens When Blood Flow Is Blocked",
              meta: "12 min · Gastro",
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
