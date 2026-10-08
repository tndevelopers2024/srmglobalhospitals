import "@/styles/appointment.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import {
  AppointmentHero,
  AppointmentBookingForm,
  AppointmentSidebar,
} from "@/components/appointment";

export const metadata = createMetadata({
  title: "Book an Appointment - SRM Global Hospitals Pvt Ltd",
  description:
    "Book an appointment at SRM Global Hospitals Chengalpattu, Chennai. Schedule consultation with specialist doctors across 40+ departments or book master health checkup packages.",
  path: "/book-an-appointment",
});

export default function BookAnAppointmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Book an Appointment", path: "/book-an-appointment" },
          ]),
        )}
      />
      <HeaderTop />
      <SiteHeader activeNav="book-an-appointment" />
      <main className="appointment-page" id="main-content">
        {/* Hero / Header Section */}
        <AppointmentHero />

        {/* Main Appointment Booking Split Interface */}
        <section className="appointment-main-section" id="booking-interface">
          <div className="appointment-container">
            <div className="appointment-split-layout">
              {/* Core Appointment Booking Form Interface */}
              <AppointmentBookingForm />

              {/* Supporting Hospital Details, Emergency, Location & Contact */}
              <AppointmentSidebar />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
