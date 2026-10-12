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
  title: "Understanding 2 Weeks Pregnant hCG Levels: What You Should Know",
  description:
    "Curious about your hCG levels at 2 weeks pregnant? Obstetrics & Fetal Medicine specialists at SRM Global Hospitals explain what hCG is, normal ranges, testing methods, and when to consult a doctor.",
  path: "/blog/understanding-2-weeks-pregnant-hcg-levels-what-you-should-know",
  image: "/images/blog/understanding-2-weeks-pregnant-hcg-levels-what-you-should-know/hero.png",
  author: "Obstetrics & Fetal Medicine Specialist",
  section: "Women's Health",
  publishedTime: "2025-07-21",
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

export default function HCGLevelsPage() {
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
        specialistTitle="Obstetrics & Fetal Medicine Specialist"
        department="Centre for Women's Health"
        readMinutes={10}
        reads="5,120"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Obstetrics & Fetal Medicine Specialist"
          department="Centre for Women's Health"
          blurb="Our obstetrics specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "two-weeks-pregnant", title: "Meaning of 2 weeks pregnant" },
            { id: "what-is-hcg", title: "What is hCG" },
            { id: "hcg-levels-at-2-weeks", title: "hCG levels at 2 weeks" },
            { id: "how-detected", title: "How it is detected" },
            { id: "what-affects-hcg", title: "What affects hCG" },
            { id: "when-to-see-doctor", title: "When to see a doctor" },
            { id: "how-to-test", title: "How to test" },
            { id: "treatment-abnormal-hcg", title: "Abnormal hCG treatment" },
            { id: "srm-care", title: "Care at SRM Global" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/essential-guide-to-the-anomaly-scan-what-to-expect-and-understand",
              image: "/images/blog/essential-guide-to-the-anomaly-scan-what-to-expect-and-understand/hero.jpeg",
              title: "Essential guide to the anomaly scan: what to expect and understand",
              meta: "11 min · Women's Health",
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
