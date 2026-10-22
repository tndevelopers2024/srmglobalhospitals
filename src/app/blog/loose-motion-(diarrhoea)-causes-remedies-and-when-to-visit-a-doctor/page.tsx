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
  title: "Loose Motion (Diarrhoea): Causes, Remedies & When to Visit a Doctor",
  description:
    "Loose motion (diarrhoea) causes frequent watery bowel movements and dehydration risk. Learn about viral and bacterial causes, ORS and BRAT diet home remedies, medical treatment, and when to visit SRM Global Hospitals.",
  path: "/blog/loose-motion-(diarrhoea)-causes-remedies-and-when-to-visit-a-doctor",
  image:
    "/images/blog/loose-motion-(diarrhoea)-causes-remedies-and-when-to-visit-a-doctor/hero.jpg",
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

export default function LooseMotionArticle() {
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
        reads="4,790"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Gastro Specialist"
          department="Institute of Gastro and Liver Sciences"
          blurb="Our gastroenterology and internal medicine specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-loose-motion", title: "What is loose motion" },
            { id: "causes-of-loose-motion", title: "Causes of loose motion" },
            { id: "signs-of-dehydration", title: "Signs of dehydration" },
            { id: "home-remedies-for-loose-motion", title: "Home remedies" },
            { id: "loose-motion-treatment", title: "Medical treatment" },
            { id: "when-to-visit-a-doctor", title: "When to visit a doctor" },
            { id: "how-to-prevent-loose-motion", title: "Prevention" },
            { id: "get-expert-care-for-loose-motion", title: "Expert gastro care" },
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
              href: "/blog/jaundice-causes-symptoms-and-when-to-see-a-doctor",
              image: "/images/blog/jaundice-causes-symptoms-and-when-to-see-a-doctor/hero.jpg",
              title: "Jaundice: Causes, Symptoms & When to See a Doctor",
              meta: "24 min · Gastro",
            },
            {
              href: "/blog/helicobacter-pylori-infection-symptoms-diagnosis-and-treatment",
              image: "/images/blog/helicobacter-pylori-infection-symptoms-diagnosis-and-treatment/hero.jpeg",
              title: "Helicobacter pylori Infection: Symptoms, Diagnosis & Treatment",
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
