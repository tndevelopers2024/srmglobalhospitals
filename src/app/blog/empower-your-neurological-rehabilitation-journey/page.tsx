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
import ArtBody from "./Body";
import ArtSide from "@/components/blog/article/ArtSide";
import EndCta from "@/components/blog/article/EndCta";
import MoreArticles from "@/components/blog/article/MoreArticles";
import MobileActionBar from "@/components/blog/article/MobileActionBar";
import BlogInteractions from "@/components/blog/shared/BlogInteractions";

const article = {
    title: "Empower Your Neurological Rehabilitation Journey",
    description:
        "SRM Global Hospitals provides advanced neurological rehabilitation for individuals affected by injuries, diseases, or disorders of the nervous system.",
    path: "/blog/empower-your-neurological-rehabilitation-journey",
    image: "/images/blog/empower-your-neurological-rehabilitation-journey/hero.webp",
    author: "Neurology Specialist",
    section: "Neurology",
    publishedTime: "2026-08-04",
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

export default function NeuroRehabArticle() {
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
                dotClass="dot-neurology"
                category="Neurology"
                title={article.title}
                specialistTitle="Neurology Specialist"
                department="Institute of Neurology"
                date="August 4, 2026"
                readMinutes={6}
                reads="302"
            />
            <div className="art-wrap">
                <ShareRail />
                <ArtBody />
                <ArtSide
                    specialistTitle="Neurology Specialist"
                    department="Institute of Neurology"
                    blurb="Our specialists are available to support neurological patients in regaining mobility, skills, and independence."
                    initialToc={[
                        { id: "conditions", title: "Conditions Managed" },
                        { id: "tools-and-techniques", title: "Core Tools and Techniques" },
                        { id: "services", title: "Services Offered" },
                        { id: "expertise", title: "Expertise of the Centre" },
                        { id: "why-choose", title: "Why Choose SRM Global Hospitals?" },
                        { id: "faqs", title: "FAQs" },
                    ]}
                    relatedReading={[
                        {
                            href: "/blog/types-of-cerebral-palsy-what-it-means-for-your-child",
                            image: "/images/blog/types-of-cerebral-palsy-what-it-means-for-your-child/hero.jpeg",
                            title: "Types of Cerebral Palsy: What It Means for Your Child?",
                            meta: "13 min · Neurology",
                        },
                        {
                            href: "/blog/multiple-sclerosis-expert-care",
                            image: "/images/blog/multiple-sclerosis-expert-care/hero.jpeg",
                            title: "Multiple Sclerosis Treatment: What Expert Care at the Right Time Can Do?",
                            meta: "15 min · Neurology",
                        },
                    ]}
                />
            </div>
            <EndCta />
            <MoreArticles
                items={[
                    {
                        href: "/blog/expert-physiotherapy-for-geriatric-rehabilitation",
                        image: "/images/blog/expert-physiotherapy-for-geriatric-rehabilitation/hero.webp",
                        category: "Orthopaedics",
                        title: "Expert Physiotherapy for Geriatric Rehabilitation",
                    },
                    {
                        href: "/blog/pulmonary-rehabilitation-for-effective-respiratory-health",
                        image: "/images/blog/pulmonary-rehabilitation-for-effective-respiratory-health/hero.webp",
                        category: "Pulmonology",
                        title: "Pulmonary Rehabilitation for Effective Respiratory Health",
                    },
                ]}
            />
            <MobileActionBar />
            <SiteFooter />
            <BlogInteractions />
        </>
    );
}
