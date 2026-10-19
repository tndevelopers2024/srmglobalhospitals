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
  title: "Takotsubo Cardiomyopathy: How Stress Affects the Heart",
  description:
    "Takotsubo cardiomyopathy, or broken heart syndrome, mimics a heart attack but stems from stress hormones, not blocked arteries. Cardiologists at SRM Global Hospitals explain triggers, diagnosis, and treatment.",
  path: "/blog/takotsubo-cardiomyopathy-how-stress-affects-the-heart",
  image: "/images/blog/takotsubo-cardiomyopathy-how-stress-affects-the-heart/hero.jpeg",
  author: "Cardiology Specialist",
  section: "Cardiology",
  publishedTime: "2025-12-02",
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

export default function TakotsuboCardiomyopathyPage() {
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
        dotClass="dot-cardiology"
        category="Cardiology"
        title={article.title}
        specialistTitle="Cardiology Specialist"
        department="Institute of Cardiac Sciences"
        readMinutes={15}
        reads="3,870"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Cardiology Specialist"
          department="Institute of Cardiac Sciences"
          blurb="Our cardiology specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "takotsubo-cardiomyopathy-understanding-a-heart-under-sudden-stress", title: "Takotsubo Cardiomyopathy: Understanding a Heart Under Sudden Stress" },
            { id: "difference-between-takotsubo-cardiomyopathy-and-acute-coronary-syndrome", title: "Difference Between Takotsubo Cardiomyopathy and Acute Coronary Syndrome" },
            { id: "how-takotsubo-cardiomyopathy-develops-during-intense-stress", title: "How Takotsubo Cardiomyopathy Develops During Intense Stress" },
            { id: "triggers-behind-broken-heart-syndrome", title: "Triggers Behind Broken Heart Syndrome" },
            { id: "clinical-signs-that-doctors-observe-in-patients", title: "Clinical Signs That Doctors Observe in Patients" },
            { id: "diagnostic-pathway-doctors-follow-in-indian-hospitals", title: "Diagnostic Pathway Doctors Follow in Indian Hospitals" },
            { id: "secondary-complications-that-may-occur", title: "Secondary Complications That May Occur" },
            { id: "treatment-approaches-for-broken-heart-syndrome", title: "Treatment Approaches for Broken Heart Syndrome" },
            { id: "recovery-timeline-and-life-after-takotsubo-syndrome", title: "Recovery Timeline and Life After Takotsubo Syndrome" },
            { id: "protect-your-heart-before-stress-breaks-its-rhythm", title: "Protect Your Heart Before Stress Breaks Its Rhythm" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/hfpef-diastolic-heart-failure-causes-effects-and-treatment",
              image: "/images/blog/hfpef-diastolic-heart-failure-causes-effects-and-treatment/hero.png",
              title: "HFpEF (diastolic heart failure): causes, effects, and treatment",
              meta: "11 min · Cardiology",
            },
            {
              href: "/blog/atrial-fibrillation-symptoms-causes-risks-and-treatment",
              image: "/images/blog/atrial-fibrillation-symptoms-causes-risks-and-treatment/hero.jpeg",
              title: "Atrial fibrillation: symptoms, causes, risks, and treatment",
              meta: "13 min · Cardiology",
            },
            {
              href: "/blog/microvascular-disease-guide-symptoms-care-long-term-risks",
              image: "/images/blog/microvascular-disease-guide-symptoms-care-long-term-risks/hero.jpeg",
              title: "Microvascular disease guide: symptoms, care & long-term risks",
              meta: "14 min · Cardiology",
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
