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
  title: "What is Knee Cartilage Damage? Causes, Symptoms, and Treatments",
  description:
    "Cartilage has very little blood supply, so knee cartilage damage rarely heals on its own. Orthopaedic specialists at SRM Global Hospitals explain causes, symptoms, diagnosis, and treatment including microfracture and ACI.",
  path: "/blog/what-is-knee-cartilage-damage-causes-symptoms-and-treatments",
  image: "/images/blog/what-is-knee-cartilage-damage-causes-symptoms-and-treatments/hero.jpeg",
  author: "Orthopaedic Specialist",
  section: "Orthopaedics",
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

export default function KneeCartilageDamageArticle() {
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
        dotClass="dot-orthopaedics"
        category="Orthopaedics"
        title={article.title}
        specialistTitle="Orthopaedic Specialist"
        department="Centre for Bone, Joint & Spine Care"
        readMinutes={13}
        reads="4,450"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Orthopaedic Specialist"
          department="Centre for Bone, Joint & Spine Care"
          blurb="Our orthopaedic specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-knee-cartilage", title: "What is knee cartilage" },
            { id: "causes", title: "Causes of damage" },
            { id: "symptoms", title: "Symptoms to watch for" },
            { id: "diagnosis", title: "Diagnosis" },
            { id: "treatment-options", title: "Treatment options" },
            { id: "prevention", title: "Prevention" },
            { id: "living-with-cartilage-damage", title: "Living with damage" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/knee-cartilage-damage-explained-early-signs-you-shouldnt-ignore",
              image: "/images/blog/knee-cartilage-damage-explained-early-signs-you-shouldnt-ignore/hero.jpeg",
              title: "Knee cartilage damage explained: early signs you shouldn't ignore",
              meta: "11 min · Orthopaedics",
            },
            {
              href: "/blog/lateral-meniscus-tear-symptoms-causes-and-best-treatment-options",
              image: "/images/blog/lateral-meniscus-tear-symptoms-causes-and-best-treatment-options/hero.jpeg",
              title: "Lateral meniscus tear: symptoms, causes, and best treatment options",
              meta: "12 min · Orthopaedics",
            },
            {
              href: "/blog/why-do-my-knees-hurt-everything-you-need-to-know-about-knee-osteoarthritis",
              image: "/images/blog/why-do-my-knees-hurt-everything-you-need-to-know-about-knee-osteoarthritis/hero.jpeg",
              title: "Why do my knees hurt? Everything about knee osteoarthritis",
              meta: "12 min · Orthopaedics",
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
            href: "/blog/expert-diabetic-foot-care-to-keep-you-moving",
            image: "/images/blog/expert-diabetic-foot-care-to-keep-you-moving/hero.jpeg",
            category: "Diabetes",
            title: "Your HbA1c stopped falling. Here is what your doctor checks next.",
          },
        ]}
      />
      <MobileActionBar />
      <SiteFooter />
      <BlogInteractions />
    </>
  );
}
