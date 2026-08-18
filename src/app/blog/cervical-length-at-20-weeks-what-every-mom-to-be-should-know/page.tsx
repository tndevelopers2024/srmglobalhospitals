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
  title: "Cervical Length at 20 Weeks: What Every Mom-to-Be Should Know",
  description:
    "Cervical length screening at 20 weeks helps identify preterm birth risk early. Obstetricians at SRM Global Hospitals explain normal ranges, when evaluation is needed, and management options for a short cervix.",
  path: "/blog/cervical-length-at-20-weeks-what-every-mom-to-be-should-know",
  image: "/images/blog/cervical-length-at-20-weeks-what-every-mom-to-be-should-know/hero.jpeg",
  author: "Women's Health Specialist",
  section: "Women's Health",
  publishedTime: "2026-08-26",
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

export default function CervicalLengthAt20WeeksArticle() {
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
        specialistTitle="Women's Health Specialist"
        department="Centre for Women's Health & Wellness"
        date="August 26, 2026"
        readMinutes={12}
        reads="4,910"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Women's Health Specialist"
          department="Centre for Women's Health & Wellness"
          blurb="Our women's health specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "cervical-length-structure", title: "Cervical length & structure" },
            { id: "why-20-weeks-matters", title: "Why 20 weeks matters" },
            { id: "ultrasound-methods", title: "Ultrasound methods" },
            { id: "normal-vs-short-cervix", title: "Normal vs short cervix" },
            { id: "who-needs-evaluation", title: "Who needs evaluation" },
            { id: "management-options", title: "Management options" },
            { id: "cervical-length-faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/cervical-stitch-pregnancy-strengthening-the-mothers-for-a-safer-delivery",
              image: "/images/blog/cervical-stitch-pregnancy-strengthening-the-mothers-for-a-safer-delivery/hero.jpeg",
              title: "Cervical stitch pregnancy: strengthening the mothers for a safer delivery",
              meta: "16 min · Women's Health",
            },
            {
              href: "/blog/white-discharge-during-pregnancy-whats-normal-and-whats-not",
              image: "/images/blog/white-discharge-during-pregnancy-whats-normal-and-whats-not/hero.jpeg",
              title: "White discharge during pregnancy: what's normal and what's not",
              meta: "11 min · Women's Health",
            },
            {
              href: "/blog/cervical-mucus-your-bodys-fertility-guide-explained",
              image: "/images/blog/cervical-mucus-your-bodys-fertility-guide-explained/hero.jpeg",
              title: "Cervical mucus: your body's fertility guide explained",
              meta: "8 min · Women's Health",
            },
          ]}
        />
      </div>
      <EndCta />
      <MoreArticles
        items={[
          {
            href: "/blog/multiple-sclerosis-expert-care",
            image: "/images/blog/multiple-sclerosis-expert-care/hero.jpeg",
            category: "Neurology",
            title: "Multiple sclerosis: what expert care at the right time can actually do",
          },
          {
            href: "/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry",
            image: "/images/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry/hero.jpeg",
            category: "Cardiology",
            title: "Chest pain at 40: When is it your heart, and when is it not?",
          },
          {
            href: "/blog/cervical-stitch-pregnancy-strengthening-the-mothers-for-a-safer-delivery",
            image: "/images/blog/cervical-stitch-pregnancy-strengthening-the-mothers-for-a-safer-delivery/hero.jpeg",
            category: "Women's Health",
            title: "Cervical stitch pregnancy: strengthening the mothers for a safer delivery",
          },
        ]}
      />
      <MobileActionBar />
      <SiteFooter />
      <BlogInteractions />
    </>
  );
}
