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
  title: "Understanding MICS Surgery: Benefits and Considerations for Patients",
  description: "Minimally Invasive Cardiac Surgery (MICS) offers heart surgery through small chest incisions without splitting the breastbone. Cardiothoracic surgeons at SRM Global Hospitals explain how MICS works, benefits, and key considerations.",
  path: "/blog/understanding-mics-surgery-benefits-and-considerations-for-patients",
  image: "/images/blog/understanding-mics-surgery-benefits-and-considerations-for-patients/hero.png",
  author: "Cardiothoracic Surgery Specialist",
  section: "Cardiology",
  publishedTime: "2025-06-13",
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

export default function MicsSurgeryBenefitsPage() {
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
        specialistTitle="Cardiothoracic Surgery Specialist"
        department="Institute of Cardiac Sciences"
        readMinutes={13}
        reads="3,540"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Cardiothoracic Surgery Specialist"
          department="Institute of Cardiac Sciences"
          blurb="Our cardiac surgery specialists are available across the week, in-person and via tele-consult."
          initialToc={[
          {
                  "id": "what-you-will-learn",
                  "title": "What you will learn"
          },
          {
                  "id": "what-is-mics-surgery",
                  "title": "What Is MICS Surgery?"
          },
          {
                  "id": "how-mics-surgery-is-performed",
                  "title": "How MICS Surgery Is Performed"
          },
          {
                  "id": "key-benefits-of-mics-surgery",
                  "title": "Key Benefits of MICS Surgery"
          },
          {
                  "id": "considerations-and-potential-risks-comparing-mics-with-traditional-open-heart-surgery",
                  "title": "Considerations and Potential Risks"
          },
          {
                  "id": "conclusion-making-an-informed-decision-about-mics-surgery",
                  "title": "Conclusion"
          },
          {
                  "id": "faqs",
                  "title": "FAQs"
          }
]}
          relatedReading={[
          {
                  "href": "/blog/understanding-tevar-a-guide-to-thoracic-endovascular-aneurysm-repair",
                  "image": "/images/blog/understanding-tevar-a-guide-to-thoracic-endovascular-aneurysm-repair/hero.png",
                  "title": "Understanding TEVAR: a guide to thoracic endovascular aneurysm repair",
                  "meta": "17 min · Cardiology"
          },
          {
                  "href": "/blog/understanding-mitral-valve-prolapse-symptoms-risks-and-management",
                  "image": "/images/blog/understanding-mitral-valve-prolapse-symptoms-risks-and-management/hero.png",
                  "title": "Understanding mitral valve prolapse: symptoms, risks, and management",
                  "meta": "15 min · Cardiology"
          },
          {
                  "href": "/blog/understanding-hypertension-symptoms-key-signs-you-shouldnt-ignore",
                  "image": "/images/blog/understanding-hypertension-symptoms-key-signs-you-shouldnt-ignore/hero.png",
                  "title": "Understanding hypertension symptoms: key signs you shouldn't ignore",
                  "meta": "12 min · Cardiology"
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
