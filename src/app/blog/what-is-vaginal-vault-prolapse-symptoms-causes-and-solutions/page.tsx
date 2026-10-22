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
  title: "What Is Vaginal Vault Prolapse: Symptoms, Causes, and Solutions",
  description:
    "Vaginal vault prolapse often develops after hysterectomy when the top of the vagina loses support. Gynaecologists at SRM Global Hospitals explain symptoms, causes, diagnosis, and treatment options.",
  path: "/blog/what-is-vaginal-vault-prolapse-symptoms-causes-and-solutions",
  image: "/images/blog/what-is-vaginal-vault-prolapse-symptoms-causes-and-solutions/hero.jpeg",
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

export default function VaginalVaultProlapsePage() {
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
        dotClass="dot-womens-health"
        category="Women’s Health"
        title={article.title}
        specialistTitle="Gynaecology Specialist"
        department="Centre for Women's Health"
        readMinutes={10}
        reads="3,290"
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
            { id: "what-is-vaginal-vault-prolapse", title: "What is Vaginal Vault Prolapse?" },
            { id: "recognizing-the-symptoms", title: "Recognizing the Symptoms" },
            { id: "causes-and-risk-factors", title: "Causes and Risk Factors" },
            { id: "diagnosis-and-medical-evaluation", title: "Diagnosis and Medical Evaluation" },
            { id: "treatment-options-and-solutions", title: "Treatment Options and Solutions" },
            { id: "prevention-and-long-term-care", title: "Prevention and Long-Term Care" },
            { id: "living-with-vaginal-vault-prolapse", title: "Living with Vaginal Vault Prolapse" },
            { id: "srm-global-hospitals-book-your-appointment-to", title: "SRM Global Hospitals – Book Your Appointment Today" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/urinary-incontinence-after-childbirth-causes-and-remedies",
              image: "/images/blog/urinary-incontinence-after-childbirth-causes-and-remedies/hero.jpeg",
              title: "Urinary Incontinence After Childbirth: Causes and Remedies",
              meta: "12 min · Women's Health",
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
