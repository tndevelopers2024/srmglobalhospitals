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
  title: "Effective Solutions for Pimples from the Heat: Causes and Prevention",
  description:
    "Struggling with summer breakouts? Dermatology specialists at SRM Global Hospitals explain why heat triggers pimples, 6 common causes, effective treatments, and actionable prevention tips.",
  path: "/blog/effective-solutions-for-pimples-from-the-heat-causes-and-prevention",
  image: "/images/blog/effective-solutions-for-pimples-from-the-heat-causes-and-prevention/hero.png",
  author: "Dermatology Specialist",
  section: "Dermatology",
  publishedTime: "2025-07-18",
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

export default function HeatPimplesPage() {
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
            { name: "Health Insights", path: "/blog" },
            { name: article.title, path: article.path },
          ]),
        ])}
      />
      <HeaderTop />
      <SiteHeader />
      <ReadProgress />
      <ArtCover
        image={article.image}
        dotClass="dot-dermatology"
        category="Dermatology"
        title={article.title}
        specialistTitle="Dermatology Specialist"
        department="Department of Dermatology"
        readMinutes={9}
        reads="4,870"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Dermatology Specialist"
          department="Department of Dermatology"
          blurb="Our dermatology specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "why-heat-triggers-pimples", title: "Why heat triggers pimples" },
            { id: "causes", title: "Common causes" },
            { id: "prevention", title: "How to prevent" },
            { id: "when-to-see-dermatologist", title: "When to see a doctor" },
            { id: "treatments", title: "Effective solutions" },
            { id: "lifestyle-tips", title: "Lifestyle tips" },
            { id: "srm-partner", title: "Care at SRM Global" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/the-best-baby-feeding-position-comfort-for-you-and-your-little-one",
              image: "/images/blog/the-best-baby-feeding-position-comfort-for-you-and-your-little-one/hero.jpeg",
              title: "The best baby feeding position: comfort for you and your little one",
              meta: "14 min · Paediatrics",
            },
            {
              href: "/blog/urinary-incontinence-after-childbirth-causes-and-remedies",
              image: "/images/blog/urinary-incontinence-after-childbirth-causes-and-remedies/hero.jpeg",
              title: "Urinary incontinence after childbirth: causes and remedies",
              meta: "12 min · Women's Health",
            },
            {
              href: "/blog/what-is-vaginal-vault-prolapse-symptoms-causes-and-solutions",
              image: "/images/blog/what-is-vaginal-vault-prolapse-symptoms-causes-and-solutions/hero.jpeg",
              title: "What is vaginal vault prolapse? Symptoms, causes, and solutions",
              meta: "10 min · Women's Health",
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
