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
  title: "Urinary Incontinence After Childbirth: Causes and Remedies",
  description:
    "Postpartum urinary incontinence is common but treatable. Gynaecologists at SRM Global Hospitals explain the causes, symptoms, remedies, and prevention strategies for bladder control after delivery.",
  path: "/blog/urinary-incontinence-after-childbirth-causes-and-remedies",
  image: "/images/blog/urinary-incontinence-after-childbirth-causes-and-remedies/hero.jpeg",
  author: "Gynaecology Specialist",
  section: "Women's Health",
  publishedTime: "2025-11-04",
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

export default function UrinaryIncontinenceAfterChildbirthPage() {
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
        category="Women’s Health"
        title={article.title}
        specialistTitle="Gynaecology Specialist"
        department="Centre for Women's Health"
        readMinutes={12}
        reads="4,050"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Gynaecology Specialist"
          department="Centre for Women's Health"
          blurb="Our women's health specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-postpartum-urinary-incontinence", title: "What Is Postpartum Urinary Incontinence?" },
            { id: "main-causes-after-childbirth", title: "Main Causes After Childbirth" },
            { id: "symptoms-of-urinary-incontinence-after-childb", title: "Symptoms of Urinary Incontinence After Childbirth" },
            { id: "remedies-&amp;-treatment-options", title: "Remedies & Treatment Options" },
            { id: "prevention-&amp;-self-care-tips", title: "Prevention & Self-Care Tips" },
            { id: "trusted-treatment-for-urinary-incontinence-sr", title: "Trusted Treatment for Urinary Incontinence – SRM Global Hospitals" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/what-is-vaginal-vault-prolapse-symptoms-causes-and-solutions",
              image: "/images/blog/what-is-vaginal-vault-prolapse-symptoms-causes-and-solutions/hero.jpeg",
              title: "What Is Vaginal Vault Prolapse: Symptoms, Causes, and Solutions",
              meta: "10 min · Women's Health",
            },
            {
              href: "/blog/managing-overactive-bladder-effective-solutions-and-relief-options",
              image: "/images/blog/managing-overactive-bladder-effective-solutions-and-relief-options/hero.jpeg",
              title: "Managing Overactive Bladder: Effective Solutions and Relief Options",
              meta: "12 min · Urology",
            },
            {
              href: "/blog/what-is-interstitial-cystitis-symptoms-causes-and-treatments",
              image: "/images/blog/what-is-interstitial-cystitis-symptoms-causes-and-treatments/hero.jpeg",
              title: "What is Interstitial Cystitis: Symptoms, Causes, and Treatments",
              meta: "17 min · Urology",
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
