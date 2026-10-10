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
  title: "Pimples During Pregnancy: Causes, Solutions, and Effective Treatments",
  description: "Hormonal changes during pregnancy frequently trigger acne breakouts. Dermatologists and obstetricians at SRM Global Hospitals explain safe skincare ingredients, natural remedies, prevention tips, and treatments for each trimester.",
  path: "/blog/pimples-during-pregnancy-causes-solutions-and-effective-treatments",
  image: "/images/blog/pimples-during-pregnancy-causes-solutions-and-effective-treatments/hero.png",
  author: "Dermatology & Obstetrics Specialist",
  section: "Women's Health",
  publishedTime: "2025-06-12",
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

export default function PregnancyPimplesGuidePage() {
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
        dotClass="dot-womens-health"
        category="Women's Health"
        title={article.title}
        specialistTitle="Dermatology & Obstetrics Specialist"
        department="Centre for Women's Health"
        readMinutes={16}
        reads="5,780"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Dermatology & Obstetrics Specialist"
          department="Centre for Women's Health"
          blurb="Our women's health specialists are available across the week, in-person and via tele-consult."
          initialToc={[
          {
                  "id": "what-you-will-learn",
                  "title": "What you will learn"
          },
          {
                  "id": "hormonal-acne-in-pregnancy-whats-really-happening",
                  "title": "Hormonal Acne in Pregnancy"
          },
          {
                  "id": "when-do-pimples-typically-appear-in-pregnancy",
                  "title": "When Do Pimples Typically Appear..."
          },
          {
                  "id": "month-by-month-breakdown",
                  "title": "Month-by-Month Breakdown"
          },
          {
                  "id": "are-pregnancy-pimples-harmful",
                  "title": "Are Pregnancy Pimples Harmful?"
          },
          {
                  "id": "natural-ways-to-manage-pimples-during-pregnancy",
                  "title": "Natural Ways to Manage Pimples D..."
          },
          {
                  "id": "pregnancy-safe-skincare-ingredients-for-acne",
                  "title": "Pregnancy-Safe Skincare Ingredie..."
          },
          {
                  "id": "prevention-tips-how-to-minimise-breakouts-during-pregnancy",
                  "title": "Prevention Tips"
          },
          {
                  "id": "when-to-seek-professional-help",
                  "title": "When to Seek Professional Help"
          },
          {
                  "id": "conclusion",
                  "title": "Conclusion"
          }
]}
          relatedReading={[
          {
                  "href": "/blog/understanding-2-weeks-pregnant-hcg-levels-what-you-should-know",
                  "image": "/images/blog/understanding-2-weeks-pregnant-hcg-levels-what-you-should-know/hero.png",
                  "title": "Understanding 2 weeks pregnant hCG levels: what you should know",
                  "meta": "10 min · Women's Health"
          },
          {
                  "href": "/blog/effective-solutions-for-pimples-from-the-heat-causes-and-prevention",
                  "image": "/images/blog/effective-solutions-for-pimples-from-the-heat-causes-and-prevention/hero.png",
                  "title": "Effective solutions for pimples from the heat: causes and prevention",
                  "meta": "9 min · Women's Health"
          },
          {
                  "href": "/blog/essential-guide-to-the-anomaly-scan-what-to-expect-and-understand",
                  "image": "/images/blog/essential-guide-to-the-anomaly-scan-what-to-expect-and-understand/hero.png",
                  "title": "Essential guide to the anomaly scan: what to expect and understand",
                  "meta": "11 min · Women's Health"
          }
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
