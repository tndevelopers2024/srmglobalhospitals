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
import ArtBody from "./ArticleMain";
import ArtSide from "@/components/blog/article/ArtSide";
import EndCta from "@/components/blog/article/EndCta";
import MoreArticles from "@/components/blog/article/MoreArticles";
import MobileActionBar from "@/components/blog/article/MobileActionBar";
import BlogInteractions from "@/components/blog/shared/BlogInteractions";

const article = {
    title: "Pulmonary Rehabilitation for Effective Respiratory Health",
    description:
        "SRM Global Hospitals in Chennai offers comprehensive pulmonary rehabilitation programs for patients with chronic lung conditions.",
    path: "/blog/pulmonary-rehabilitation-for-effective-respiratory-health",
    image: "/images/blog/srm-blog22-img1.webp",
    author: "Pulmonology Specialist",
    section: "Pulmonology",
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

export default function PulmonaryRehabArticle() {
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
                dotClass="dot-pulmonology"
                category="Pulmonology"
                title={article.title}
                specialistTitle="Pulmonology Specialist"
                department="Institute of Pulmonology"
                date="August 4, 2026"
                readMinutes={6}
                reads="342"
            />
            <div className="art-wrap">
                <ShareRail />
                <ArtBody />
                <ArtSide
                    specialistTitle="Pulmonology Specialist"
                    department="Institute of Pulmonology"
                    blurb="Our respiratory and pulmonary rehabilitation specialists are available for consultation."
                    initialToc={[
                        { id: "what-is", title: "What is Pulmonary Rehabilitation?" },
                        { id: "benefits", title: "Who Benefits?" },
                        { id: "structure", title: "Program Structure" },
                        { id: "services", title: "Comprehensive Services" },
                        { id: "team", title: "Multidisciplinary Team" },
                        { id: "tools", title: "Advanced Techniques & Tools" },
                        { id: "advantages", title: "Benefits of Participation" },
                        { id: "why-choose", title: "Why Choose Us?" },
                        { id: "faqs", title: "FAQs" },
                    ]}
                    relatedReading={[
                        {
                            href: "/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry",
                            image: "/images/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry.jpeg",
                            title: "Chest Pain Due to Gas: When is It Harmless? When You Should Worry?",
                            meta: "9 min · Cardiology",
                        },
                        {
                            href: "/blog/right-side-chest-pain-what-your-symptoms-could-be-telling-you",
                            image: "/images/blog/right-side-chest-pain-what-your-symptoms-could-be-telling-you.jpeg",
                            title: "Right Side Chest Pain: What Your Symptoms Could Be Telling You",
                            meta: "10 min · Cardiology",
                        },
                    ]}
                />
            </div>
            <EndCta />
            <MoreArticles
                items={[
                    {
                        href: "/blog/empowering-independence-advanced-assistive-device-technology",
                        image: "/images/blog/empowering-independence-advanced-assistive-device-technology.jpeg",
                        category: "Orthopaedics",
                        title: "Empowering Independence: Advanced Assistive Device Technology",
                    },
                ]}
            />
            <MobileActionBar />
            <SiteFooter />
            <BlogInteractions />
        </>
    );
}
