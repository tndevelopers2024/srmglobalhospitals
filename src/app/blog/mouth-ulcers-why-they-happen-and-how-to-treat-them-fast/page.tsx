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
  title: "Mouth Ulcers: Why They Happen & How to Treat Them Fast",
  description:
    "Mouth ulcers (canker sores) are painful sores on the oral mucosa. Learn about types of mouth ulcers, nutritional and systemic causes, fast home remedies, OTC gels, and when to see a doctor at SRM Global Hospitals.",
  path: "/blog/mouth-ulcers-why-they-happen-and-how-to-treat-them-fast",
  image:
    "/images/blog/mouth-ulcers-why-they-happen-and-how-to-treat-them-fast/hero.jpg",
  author: "Dental & Oral Medicine Specialist",
  section: "Dental",
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

export default function MouthUlcersArticle() {
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
        dotClass="dot-dental"
        category="Dental"
        title={article.title}
        specialistTitle="Dental & Oral Medicine Specialist"
        department="Department of Dental & Oral Medicine"
        date="October 22, 2026"
        readMinutes={16}
        reads="4,610"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Dental & Oral Medicine Specialist"
          department="Department of Dental & Oral Medicine"
          blurb="Our dental, oral medicine, and gastroenterology specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-a-mouth-ulcer", title: "What is a mouth ulcer" },
            { id: "types-of-mouth-ulcers", title: "Types of mouth ulcers" },
            { id: "what-causes-mouth-ulcers", title: "Causes of mouth ulcers" },
            { id: "mouth-ulcer-home-remedies", title: "Home remedies & fast relief" },
            { id: "how-to-prevent-mouth-ulcers", title: "How to prevent" },
            { id: "when-to-see-a-doctor", title: "When to see a doctor" },
            { id: "get-expert-care-for-mouth-ulcers", title: "Expert oral care" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/gastroenterologist-what-they-treat-and-when-you-need-one",
              image: "/images/blog/gastroenterologist-what-they-treat-and-when-you-need-one/hero.jpg",
              title: "Gastroenterologist: What They Treat & When You Need One",
              meta: "18 min · Gastro",
            },
            {
              href: "/blog/loose-motion-(diarrhoea)-causes-remedies-and-when-to-visit-a-doctor",
              image: "/images/blog/loose-motion-(diarrhoea)-causes-remedies-and-when-to-visit-a-doctor/hero.jpg",
              title: "Loose Motion (Diarrhoea): Causes, Remedies & When to Visit a Doctor",
              meta: "15 min · Gastro",
            },
            {
              href: "/blog/what-you-must-know-about-gastritis-causes-symptoms-complications-treatment-and-management",
              image: "/images/blog/what-you-must-know-about-gastritis-causes-symptoms-complications-treatment-and-management/hero.jpeg",
              title: "What You Must Know About Gastritis: Causes, Symptoms & Treatment",
              meta: "11 min · Gastro",
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
