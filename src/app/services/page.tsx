import { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import EmergencyBanner from "../../components/services/EmergencyBanner";
import ServiceGrid from '@/components/services/ServiceGrid';
import AmbulanceBanner from '@/components/services/AmbulanceBanner';
import ServicesCTA from '@/components/services/ServicesCTA';
import { createMetadata } from '@/lib/seo';
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";

export const metadata: Metadata = createMetadata({
    title: 'Hospital Services & Critical Care | SRM Global Hospitals',
    description: 'Everything that supports your care: from the 24/7 emergency and fully equipped ambulances to our in-house pharmacy and NABL-certified laboratory.',
    path: '/services',
});

export default function ServicesPage() {
    return (
        <>
            <HeaderTop />
            <SiteHeader />
            <main className="services-page">
                <ServicesHero />
                <EmergencyBanner />
                <AmbulanceBanner />
                <ServiceGrid />
                <ServicesCTA />
            </main>
            <SiteFooter />
        </>
    );
}
