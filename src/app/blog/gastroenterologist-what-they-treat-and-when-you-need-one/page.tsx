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
  title: "Gastroenterologist: What They Treat & When You Need One",
  description:
    "A gastroenterologist is a medical specialist who diagnoses and treats digestive tract, liver, pancreas, and biliary disorders. Learn what conditions they treat, endoscopic procedures, and when to visit SRM Global Hospitals.",
  path: "/blog/gastroenterologist-what-they-treat-and-when-you-need-one",
  image:
    "/images/blog/gastroenterologist-what-they-treat-and-when-you-need-one/hero.jpg",
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

export default function GastroenterologistArticle() {
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
        readMinutes={18}
        reads="5,040"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Gastro Specialist"
          department="Institute of Gastro and Liver Sciences"
          blurb="Our medical and surgical gastroenterology specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-a-gastroenterologist", title: "What is a gastroenterologist" },
            { id: "what-does-a-gastroenterologist-treat", title: "Conditions treated" },
            { id: "procedures-performed", title: "Endoscopic procedures" },
            { id: "when-should-you-see-a-gastroenterologist", title: "When to see a specialist" },
            { id: "how-often-should-you-see-a-gastroenterologist", title: "Visit frequency" },
            { id: "what-to-expect-at-your-first-appointment", title: "First appointment guide" },
            { id: "gastroenterologist-vs-other-specialists", title: "Vs. other specialists" },
            { id: "get-expert-gastroenterology-care", title: "Expert gastro care" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/jaundice-causes-symptoms-and-when-to-see-a-doctor",
              image: "/images/blog/jaundice-causes-symptoms-and-when-to-see-a-doctor/hero.jpg",
              title: "Jaundice: Causes, Symptoms & When to See a Doctor",
              meta: "24 min · Gastro",
            },
            {
              href: "/blog/bilirubin-test-normal-range-high-and-low-levels-explained",
              image: "/images/blog/bilirubin-test-normal-range-high-and-low-levels-explained/hero.jpg",
              title: "Bilirubin Test: Normal Range, High & Low Levels Explained",
              meta: "14 min · Gastro",
            },
            {
              href: "/blog/loose-motion-(diarrhoea)-causes-remedies-and-when-to-visit-a-doctor",
              image: "/images/blog/loose-motion-(diarrhoea)-causes-remedies-and-when-to-visit-a-doctor/hero.jpg",
              title: "Loose Motion (Diarrhoea): Causes, Remedies & When to Visit a Doctor",
              meta: "15 min · Gastro",
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
