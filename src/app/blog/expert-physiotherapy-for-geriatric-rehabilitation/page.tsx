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
import ArtBody from "./ArticleModule";
import ArtSide from "@/components/blog/article/ArtSide";
import EndCta from "@/components/blog/article/EndCta";
import MoreArticles from "@/components/blog/article/MoreArticles";
import MobileActionBar from "@/components/blog/article/MobileActionBar";
import BlogInteractions from "@/components/blog/shared/BlogInteractions";

const article = {
    title: "Expert Physiotherapy for Geriatric Rehabilitation",
    description:
        "SRM Global Hospitals in Chennai, Tamil Nadu, is a leading superspeciality hospital dedicated to the well-being of elderly patients. Our specialised geriatric rehabilitation assists older patients in achieving functional independence.",
    path: "/blog/expert-physiotherapy-for-geriatric-rehabilitation",
    image: "/images/blog/expert-physiotherapy-for-geriatric-rehabilitation/hero.webp",
    author: "Geriatric Rehabilitation Specialist",
    section: "Orthopaedics",
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

export default function GeriatricPhysiotherapyArticle() {
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
                dotClass="dot-ortho"
                category="Orthopaedics"
                title={article.title}
                specialistTitle="Geriatric Rehabilitation Specialist"
                department="Institute of Physiotherapy"
                date="August 4, 2026"
                readMinutes={6}
                reads="412"
            />
            <div className="art-wrap">
                <ShareRail />
                <ArtBody />
                <ArtSide
                    specialistTitle="Geriatric Rehabilitation Specialist"
                    department="Institute of Physiotherapy"
                    blurb="Our expert physiotherapists and geriatric specialists are available to support older adults in regaining mobility and independence."
                    initialToc={[
                        { id: "geriatric-rehab-goals", title: "The Goal of Geriatric Rehabilitation" },
                        { id: "managing-chronic-conditions", title: "Managing Chronic Conditions" },
                        { id: "role-of-physiotherapy", title: "The Role of Physiotherapy" },
                        { id: "quality-of-life", title: "Enhancing Quality of Life" },
                        { id: "advanced-tools", title: "Advanced Tools and Services" },
                        { id: "why-choose", title: "Why Choose SRM Global Hospitals?" },
                        { id: "faqs", title: "FAQs" },
                    ]}
                    relatedReading={[
                        {
                            href: "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
                            image: "/images/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief/hero.jpeg",
                            title: "Sciatica Pain Treatment: Understand the Cause and Find the Right Relief",
                            meta: "11 min · Orthopaedics",
                        },
                        {
                            href: "/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain",
                            image: "/images/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain/hero.jpeg",
                            title: "PRP Injection Knee Therapy: Effective Non-Surgical Way",
                            meta: "5 min · Orthopaedics",
                        },
                    ]}
                />
            </div>
            <EndCta />
            <MoreArticles
                items={[
                    {
                        href: "/blog/empowering-independence-advanced-assistive-device-technology",
                        image: "/images/blog/empowering-independence-advanced-assistive-device-technology/hero.jpeg",
                        category: "Orthopaedics",
                        title: "Empowering Independence: Advanced Assistive Device Technology",
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
