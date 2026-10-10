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
  title: "Why Is My Pregnant Belly Sometimes Hard and Sometimes Soft?",
  description: "Experiencing fluctuating belly tightness during pregnancy is common. Obstetricians and fetal medicine specialists at SRM Global Hospitals explain what causes belly hardening by trimester, Braxton Hicks contractions, and when to seek care.",
  path: "/blog/why-is-my-pregnant-belly-sometimes-hard-and-sometimes-soft",
  image: "/images/blog/why-is-my-pregnant-belly-sometimes-hard-and-sometimes-soft/hero.png",
  author: "Obstetrics & Fetal Medicine Specialist",
  section: "Women's Health",
  publishedTime: "2025-05-24",
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

export default function PregnantBellyHardSoftGuidePage() {
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
        readMinutes={8}
        reads="6,340"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Obstetrics & Fetal Medicine Specialist"
          department="Centre for Women's Health"
          blurb="Our obstetrics specialists are available across the week, in-person and via tele-consult."
          initialToc={[
          {
                  "id": "what-you-will-learn",
                  "title": "What you will learn"
          },
          {
                  "id": "early-pregnancy-what-causes-belly-hardening",
                  "title": "Early Pregnancy"
          },
          {
                  "id": "first-trimester",
                  "title": "First Trimester"
          },
          {
                  "id": "second-trimester-what-to-expect",
                  "title": "Second Trimester: What to Expect"
          },
          {
                  "id": "third-trimester-when-to-be-concerned",
                  "title": "Third Trimester"
          },
          {
                  "id": "managing-stomach-tightening-during-pregnancy",
                  "title": "Managing Stomach Tightening Duri..."
          },
          {
                  "id": "when-to-call-the-doctor",
                  "title": "When to Call the Doctor"
          },
          {
                  "id": "final-thoughts",
                  "title": "Final Thoughts"
          },
          {
                  "id": "faqs",
                  "title": "FAQs"
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
                  "href": "/blog/pimples-during-pregnancy-causes-solutions-and-effective-treatments",
                  "image": "/images/blog/pimples-during-pregnancy-causes-solutions-and-effective-treatments/hero.png",
                  "title": "Pimples during pregnancy: causes, solutions, and effective treatments",
                  "meta": "16 min · Women's Health"
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
