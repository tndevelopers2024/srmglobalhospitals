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
  title: "The Best Baby Feeding Position: Comfort for You and Your Little One",
  description:
    "From cradle hold to football hold, the right feeding position affects digestion, bonding, and comfort. Paediatric specialists at SRM Global Hospitals cover positions for every situation, from newborns to twins to reflux.",
  path: "/blog/the-best-baby-feeding-position-comfort-for-you-and-your-little-one",
  image: "/images/blog/the-best-baby-feeding-position-comfort-for-you-and-your-little-one/hero.jpeg",
  author: "Paediatric & Lactation Specialist",
  section: "Paediatrics",
  publishedTime: "2027-10-06",
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

export default function BestBabyFeedingPositionArticle() {
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
        dotClass="dot-paediatrics"
        category="Paediatrics"
        title={article.title}
        specialistTitle="Paediatric & Lactation Specialist"
        department="Department of Paediatrics"
        readMinutes={14}
        reads="5,020"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Paediatric & Lactation Specialist"
          department="Department of Paediatrics"
          blurb="Our paediatric and lactation specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "why-position-matters", title: "Why position matters" },
            { id: "digestion-bonding-comfort", title: "Digestion, bonding & comfort" },
            { id: "breastfeeding-vs-bottle", title: "Breastfeeding vs bottle feeding" },
            { id: "the-6-positions", title: "The 6 positions" },
            { id: "newborn-vs-older", title: "Newborn vs older baby" },
            { id: "common-mistakes", title: "Common mistakes" },
            { id: "special-situations", title: "Special situations" },
            { id: "reflux-colic-latch", title: "Reflux, colic & latch" },
            { id: "when-to-seek-help", title: "When to seek help" },
            { id: "srm-global-support", title: "Support at SRM Global" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/understanding-feeding-on-demand-a-guide-to-your-babys-needs",
              image: "/images/blog/understanding-feeding-on-demand-a-guide-to-your-babys-needs/hero.jpeg",
              title: "Understanding feeding on demand: a guide to your baby's needs",
              meta: "12 min · Paediatrics",
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
