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
  title: "Why Do My Knees Hurt? Everything You Need to Know About Knee Osteoarthritis",
  description:
    "Knee osteoarthritis affects over 20% of the Indian population. Orthopaedic specialists at SRM Global Hospitals explain the forms, symptoms, diagnosis, and treatment options from lifestyle changes to surgery.",
  path: "/blog/why-do-my-knees-hurt-everything-you-need-to-know-about-knee-osteoarthritis",
  image: "/images/blog/why-do-my-knees-hurt-everything-you-need-to-know-about-knee-osteoarthritis/hero.jpeg",
  author: "Orthopaedic Specialist",
  section: "Orthopaedics",
  publishedTime: "2027-02-10",
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

export default function KneeOsteoarthritisArticle() {
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
        date="February 10, 2027"
        readMinutes={12}
        reads="5,240"
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
            { id: "forms-of-knee-oa", title: "Forms of Knee OA" },
            { id: "symptoms-risk-factors", title: "Symptoms & risk factors" },
            { id: "imaging-diagnosis", title: "Diagnosis" },
            { id: "machine-learning-diagnosis", title: "Machine learning diagnosis" },
            { id: "non-surgical-treatment", title: "Non-surgical treatment" },
            { id: "surgical-treatments", title: "Surgical treatments" },
            { id: "reclaim-mobility", title: "Reclaim your mobility" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/the-silent-shock-absorber-why-a-meniscus-tear-is-more-than-just-knee-pain",
              image: "/images/blog/the-silent-shock-absorber-why-a-meniscus-tear-is-more-than-just-knee-pain.jpeg",
              title: "The silent shock absorber: why a meniscus tear is more than just knee pain",
              meta: "10 min · Orthopaedics",
            },
            {
              href: "/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain",
              image: "/images/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain.jpeg",
              title: "PRP injection knee therapy: an effective non-surgical way to manage knee pain",
              meta: "9 min · Orthopaedics",
            },
            {
              href: "/blog/power-your-comeback-through-sports-rehabilitation",
              image: "/images/blog/power-your-comeback-through-sports-rehabilitation.jpeg",
              title: "Power your comeback through sports rehabilitation",
              meta: "11 min · Orthopaedics",
            },
          ]}
        />
      </div>
      <EndCta />
      <MoreArticles
        items={[
          {
            href: "/blog/multiple-sclerosis-expert-care",
            image: "/images/blog/articles/ms-hero.jpeg",
            category: "Neurology",
            title: "Multiple sclerosis: what expert care at the right time can actually do",
          },
          {
            href: "/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry",
            image: "/images/blog/articles/chest-pain-hero.jpeg",
            category: "Cardiology",
            title: "Chest pain at 40: When is it your heart, and when is it not?",
          },
          {
            href: "/blog/expert-diabetic-foot-care-to-keep-you-moving",
            image: "/images/blog/articles/diabetic-foot-hero.jpeg",
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
