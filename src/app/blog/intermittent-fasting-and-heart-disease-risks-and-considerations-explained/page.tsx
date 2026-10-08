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
  title: "Intermittent Fasting and Heart Disease: Risks and Considerations Explained",
  description:
    "Intermittent fasting can lower blood pressure and cholesterol, but it carries real risks for heart patients on medication. Cardiologists at SRM Global Hospitals explain the benefits, risks, and safe practices by condition.",
  path: "/blog/intermittent-fasting-and-heart-disease-risks-and-considerations-explained",
  image: "/images/blog/intermittent-fasting-and-heart-disease-risks-and-considerations-explained/hero.png",
  author: "Cardiology Specialist",
  section: "Cardiology",
  publishedTime: "2027-10-27",
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

export default function IntermittentFastingHeartDiseaseArticle() {
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
        dotClass="dot-cardiology"
        category="Cardiology"
        title={article.title}
        specialistTitle="Cardiology Specialist"
        department="Institute of Cardiac Sciences"
        readMinutes={15}
        reads="4,870"
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
            { id: "what-is-intermittent-fasting", title: "What is intermittent fasting" },
            { id: "understanding-heart-disease", title: "Understanding heart disease" },
            { id: "how-it-affects-the-heart", title: "How it affects the heart" },
            { id: "potential-risks", title: "Potential risks" },
            { id: "by-heart-condition", title: "By heart condition" },
            { id: "who-should-avoid-it", title: "Who should avoid it" },
            { id: "expert-opinions", title: "Expert opinions and research" },
            { id: "safe-practices", title: "Safe practices" },
            { id: "common-missteps", title: "Common missteps" },
            { id: "comparing-diets", title: "Comparing diets" },
            { id: "final-thoughts", title: "Care at SRM" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/atrial-fibrillation-symptoms-causes-risks-and-treatment",
              image: "/images/blog/atrial-fibrillation-symptoms-causes-risks-and-treatment/hero.jpeg",
              title: "Atrial fibrillation: symptoms, causes, risks, and treatment",
              meta: "13 min · Cardiology",
            },
            {
              href: "/blog/hfpef-diastolic-heart-failure-causes-effects-and-treatment",
              image: "/images/blog/hfpef-diastolic-heart-failure-causes-effects-and-treatment/hero.png",
              title: "HFpEF (diastolic heart failure): causes, effects, and treatment",
              meta: "11 min · Cardiology",
            },
            {
              href: "/blog/effective-arrhythmia-treatment-options-benefits-and-what-to-expect",
              image: "/images/blog/effective-arrhythmia-treatment-options-benefits-and-what-to-expect/hero.jpeg",
              title: "Effective arrhythmia treatment: options, benefits, and what to expect",
              meta: "13 min · Cardiology",
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
