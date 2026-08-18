import { HeaderTop, SiteFooter, SiteHeader } from "@/components/layout";
import CallToAction from "@/components/leadership-team/CallToAction";
import ChiefOperatingOfficer from "@/components/leadership-team/ChiefOperatingOfficer";
import ExecutiveDirector from "@/components/leadership-team/ExecutiveDirector";
import Hero from "@/components/leadership-team/Hero";
import ManagingDirector from "@/components/leadership-team/ManagingDirector";
import President from "@/components/leadership-team/President";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
    title: "Leadership Team",
    description:
        "The people responsible for how SRM Global Hospitals runs, what it prioritises, and where it's headed.",
    path: "/leadership-team",
});

export default function LeadershipTeamPage() {
    return (
        <>
            <HeaderTop />
            <SiteHeader />
            <main>
                <Hero />
                <President />
                <ManagingDirector />
                <ExecutiveDirector />
                <ChiefOperatingOfficer />
                <CallToAction />
            </main>
            <SiteFooter />
        </>
    );
}
