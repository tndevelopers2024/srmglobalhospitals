import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

/**
 * Content Security Policy.
 *
 * `'unsafe-inline'` is required for both scripts and styles: Next.js inlines a
 * bootstrap script into every prerendered page, and the site uses React inline
 * `style` props throughout. Removing it means switching to per-request nonces,
 * which forces dynamic rendering and would give up static generation for a
 * site that is entirely static — a bad trade here.
 *
 * The directives that carry the most weight for a static marketing site are
 * still fully enforced: `object-src`, `base-uri`, `form-action` and
 * `frame-ancestors` shut down the common injection and clickjacking paths.
 *
 * Applied in production only so the dev server's HMR and eval-based tooling
 * keep working.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "media-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://fonts.googleapis.com https://fonts.gstatic.com",
  // Room for maps and video embeds without another config change later.
  "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  {
    // Two years. `includeSubDomains` is deliberately omitted — add it once
    // every subdomain is confirmed to serve HTTPS, since browsers cache this
    // for the full max-age and it cannot be undone quickly.
    key: "Strict-Transport-Security",
    value: "max-age=63072000",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  compress: true,
  // Don't advertise the framework and version to attackers.
  poweredByHeader: false,
  // Type errors must fail the build — never ship a broken deploy silently.
  typescript: { ignoreBuildErrors: false },
  // `<Link href>` is checked against the routes that actually exist, so a
  // typo'd link fails typecheck instead of 404ing in production.
  typedRoutes: true,

  images: {
    formats: ["image/avif", "image/webp"],
    // Next 16 restricts quality to [75] by default; 90 is for hero imagery.
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "srmglobalhospitals.com",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "www.srmglobalhospitals.com",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: isProduction
          ? securityHeaders
          : securityHeaders.filter(
              (header) => header.key !== "Content-Security-Policy",
            ),
      },
      {
        // Font filenames are stable and versioned by name.
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Images can be replaced in place, so revalidate daily but keep
        // serving the cached copy while that happens.
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=2592000",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/clinical-excellence/gastro-and-liver-sciences",
        destination: "/institute-of-gastro-and-liver-sciences",
        permanent: true,
      },
      {
        source: "/clinical-excellence/cardiac-sciences",
        destination: "/institute-of-cardiac-sciences",
        permanent: true,
      },
      {
        source: "/clinical-excellence/womens-health",
        destination: "/centre-for-womens-health-and-wellness",
        permanent: true,
      },
      {
        source: "/clinical-excellence/bone-joint-spine",
        destination: "/centre-for-bone-joint-spine-care",
        permanent: true,
      },
      {
        source: "/clinical-excellence/emergency-and-critical-care",
        destination: "/institute-of-emergency-and-critical-care-unit",
        permanent: true,
      },
      {
        source: "/clinical-excellence/neuro-sciences",
        destination: "/institute-of-neuro-sciences",
        permanent: true,
      },
      {
        source: "/insitute-of-neuro-sciences",
        destination: "/institute-of-neuro-sciences",
        permanent: true,
      },
      {
        source: "/clinical-excellence/renal-sciences",
        destination: "/institute-of-renal-sciences",
        permanent: true,
      },
      {
        source: "/clinical-excellence/solid-organ-transplants",
        destination: "/institute-of-solid-organ-transplants",
        permanent: true,
      },
      {
        source: "/best-doctors/emergency-medicine-critical-care",
        destination: "/department/emergency-medicine-critical-care-unit",
        permanent: true,
      },
      {
        source: "/best-doctor/emergency-medicine-critical-care",
        destination: "/department/emergency-medicine-critical-care-unit",
        permanent: true,
      },
      {
        source: "/department/emergency-medicine-critical-care",
        destination: "/department/emergency-medicine-critical-care-unit",
        permanent: true,
      },
      {
        source: "/best-doctors/emergency-medicine-critical-care-unit",
        destination: "/department/emergency-medicine-critical-care-unit",
        permanent: true,
      },
      {
        source: "/best-doctor/emergency-medicine-critical-care-unit",
        destination: "/department/emergency-medicine-critical-care-unit",
        permanent: true,
      },
      {
        source: "/best-doctors/anaesthesiology",
        destination: "/department/anaesthesiology",
        permanent: true,
      },
      {
        source: "/best-doctor/anaesthesiology",
        destination: "/department/anaesthesiology",
        permanent: true,
      },
      {
        source: "/best-doctors/anaesthesiology-cardiac-anaesthesia",
        destination: "/department/anaesthesiology-cardiac-anaesthesia",
        permanent: true,
      },
      {
        source: "/best-doctor/anaesthesiology-cardiac-anaesthesia",
        destination: "/department/anaesthesiology-cardiac-anaesthesia",
        permanent: true,
      },
      {
        source: "/best-doctors/arthroscopy-sports-medicine",
        destination: "/department/arthroscopy-sports-medicine",
        permanent: true,
      },
      {
        source: "/best-doctor/arthroscopy-sports-medicine",
        destination: "/department/arthroscopy-sports-medicine",
        permanent: true,
      },
      {
        source: "/best-doctors/dental",
        destination: "/department/dental",
        permanent: true,
      },
      {
        source: "/best-doctor/dental",
        destination: "/department/dental",
        permanent: true,
      },
      {
        source: "/best-doctors/dermatology",
        destination: "/department/dermatology",
        permanent: true,
      },
      {
        source: "/best-doctor/dermatology",
        destination: "/department/dermatology",
        permanent: true,
      },
      {
        source: "/best-doctors/diabetology",
        destination: "/department/diabetology",
        permanent: true,
      },
      {
        source: "/best-doctor/diabetology",
        destination: "/department/diabetology",
        permanent: true,
      },
      {
        source: "/best-doctors/ent",
        destination: "/department/ent",
        permanent: true,
      },
      {
        source: "/best-doctor/ent",
        destination: "/department/ent",
        permanent: true,
      },
      {
        source: "/best-doctors/fetal-medicine",
        destination: "/department/fetal-medicine",
        permanent: true,
      },
      {
        source: "/best-doctor/fetal-medicine",
        destination: "/department/fetal-medicine",
        permanent: true,
      },
      {
        source: "/best-doctors/general-medicine",
        destination: "/department/general-medicine",
        permanent: true,
      },
      {
        source: "/best-doctor/general-medicine",
        destination: "/department/general-medicine",
        permanent: true,
      },
      {
        source: "/best-doctors/general-surgery",
        destination: "/department/general-surgery",
        permanent: true,
      },
      {
        source: "/best-doctor/general-surgery",
        destination: "/department/general-surgery",
        permanent: true,
      },
      {
        source: "/best-doctors/hematology",
        destination: "/department/hematology",
        permanent: true,
      },
      {
        source: "/best-doctor/hematology",
        destination: "/department/hematology",
        permanent: true,
      },
      {
        source: "/best-doctors/hepatology",
        destination: "/department/hepatology",
        permanent: true,
      },
      {
        source: "/best-doctor/hepatology",
        destination: "/department/hepatology",
        permanent: true,
      },
      {
        source: "/best-doctors/infectious-disease",
        destination: "/department/infectious-disease",
        permanent: true,
      },
      {
        source: "/best-doctor/infectious-disease",
        destination: "/department/infectious-disease",
        permanent: true,
      },
      {
        source: "/best-doctors/institute-of-cardiac-sciences",
        destination: "/department/institute-of-cardiac-sciences",
        permanent: true,
      },
      {
        source: "/best-doctor/institute-of-cardiac-sciences",
        destination: "/department/institute-of-cardiac-sciences",
        permanent: true,
      },
      {
        source: "/best-doctors/interventional-radiology",
        destination: "/department/interventional-radiology",
        permanent: true,
      },
      {
        source: "/best-doctor/interventional-radiology",
        destination: "/department/interventional-radiology",
        permanent: true,
      },
      {
        source: "/best-doctors/medical-oncology",
        destination: "/department/medical-oncology",
        permanent: true,
      },
      {
        source: "/best-doctor/medical-oncology",
        destination: "/department/medical-oncology",
        permanent: true,
      },
      {
        source: "/best-doctors/neonatology",
        destination: "/department/neonatology",
        permanent: true,
      },
      {
        source: "/best-doctor/neonatology",
        destination: "/department/neonatology",
        permanent: true,
      },
      {
        source: "/best-doctors/nephrology",
        destination: "/department/nephrology",
        permanent: true,
      },
      {
        source: "/best-doctor/nephrology",
        destination: "/department/nephrology",
        permanent: true,
      },
      {
        source: "/best-doctors/neurology",
        destination: "/department/neurology",
        permanent: true,
      },
      {
        source: "/best-doctor/neurology",
        destination: "/department/neurology",
        permanent: true,
      },
      {
        source: "/best-doctors/neurosurgery",
        destination: "/department/neurosurgery",
        permanent: true,
      },
      {
        source: "/best-doctor/neurosurgery",
        destination: "/department/neurosurgery",
        permanent: true,
      },
      {
        source: "/best-doctors/obstetrics-gynecology",
        destination: "/department/obstetrics-gynecology",
        permanent: true,
      },
      {
        source: "/best-doctor/obstetrics-gynecology",
        destination: "/department/obstetrics-gynecology",
        permanent: true,
      },
      {
        source: "/best-doctors/ophthalmology",
        destination: "/department/ophthalmology",
        permanent: true,
      },
      {
        source: "/best-doctor/ophthalmology",
        destination: "/department/ophthalmology",
        permanent: true,
      },
      {
        source: "/best-doctors/orthopaedics",
        destination: "/department/orthopaedics",
        permanent: true,
      },
      {
        source: "/best-doctor/orthopaedics",
        destination: "/department/orthopaedics",
        permanent: true,
      },
      {
        source: "/best-doctors/paediatric-critical-care",
        destination: "/department/paediatric-critical-care",
        permanent: true,
      },
      {
        source: "/best-doctor/paediatric-critical-care",
        destination: "/department/paediatric-critical-care",
        permanent: true,
      },
      {
        source: "/best-doctors/paediatric-endocrinology",
        destination: "/department/paediatric-endocrinology",
        permanent: true,
      },
      {
        source: "/best-doctor/paediatric-endocrinology",
        destination: "/department/paediatric-endocrinology",
        permanent: true,
      },
      {
        source: "/best-doctors/paediatric-surgery",
        destination: "/department/paediatric-surgery",
        permanent: true,
      },
      {
        source: "/best-doctor/paediatric-surgery",
        destination: "/department/paediatric-surgery",
        permanent: true,
      },
      {
        source: "/best-doctors/paediatrics",
        destination: "/department/paediatrics",
        permanent: true,
      },
      {
        source: "/best-doctor/paediatrics",
        destination: "/department/paediatrics",
        permanent: true,
      },
      {
        source: "/best-doctors/physical-medicine-and-rehabilitation",
        destination: "/department/physical-medicine-and-rehabilitation",
        permanent: true,
      },
      {
        source: "/best-doctor/physical-medicine-and-rehabilitation",
        destination: "/department/physical-medicine-and-rehabilitation",
        permanent: true,
      },
      {
        source: "/best-doctors/physiotherapy",
        destination: "/department/physiotherapy",
        permanent: true,
      },
      {
        source: "/best-doctor/physiotherapy",
        destination: "/department/physiotherapy",
        permanent: true,
      },
      {
        source: "/best-doctors/plastic-surgery",
        destination: "/department/plastic-surgery",
        permanent: true,
      },
      {
        source: "/best-doctor/plastic-surgery",
        destination: "/department/plastic-surgery",
        permanent: true,
      },
      {
        source: "/best-doctors/pulmonology",
        destination: "/department/pulmonology",
        permanent: true,
      },
      {
        source: "/best-doctor/pulmonology",
        destination: "/department/pulmonology",
        permanent: true,
      },
      {
        source: "/best-doctors/radiology",
        destination: "/department/radiology",
        permanent: true,
      },
      {
        source: "/best-doctor/radiology",
        destination: "/department/radiology",
        permanent: true,
      },
      {
        source: "/best-doctors/reproductive-medicine",
        destination: "/department/reproductive-medicine",
        permanent: true,
      },
      {
        source: "/best-doctor/reproductive-medicine",
        destination: "/department/reproductive-medicine",
        permanent: true,
      },
      {
        source: "/best-doctors/rheumatology",
        destination: "/department/rheumatology",
        permanent: true,
      },
      {
        source: "/best-doctor/rheumatology",
        destination: "/department/rheumatology",
        permanent: true,
      },
      {
        source: "/best-doctors/spine-care",
        destination: "/department/spine-care",
        permanent: true,
      },
      {
        source: "/best-doctor/spine-care",
        destination: "/department/spine-care",
        permanent: true,
      },
      {
        source: "/best-doctors/surgical-gastroenterology",
        destination: "/department/surgical-gastroenterology",
        permanent: true,
      },
      {
        source: "/best-doctor/surgical-gastroenterology",
        destination: "/department/surgical-gastroenterology",
        permanent: true,
      },
      {
        source: "/best-doctors/surgical-oncology",
        destination: "/department/surgical-oncology",
        permanent: true,
      },
      {
        source: "/best-doctor/surgical-oncology",
        destination: "/department/surgical-oncology",
        permanent: true,
      },
      {
        source: "/best-doctors/trauma-and-acute-care-surgery",
        destination: "/department/trauma-acute-care-surgery",
        permanent: true,
      },
      {
        source: "/best-doctor/trauma-and-acute-care-surgery",
        destination: "/department/trauma-acute-care-surgery",
        permanent: true,
      },
      {
        source: "/best-doctors/trauma-acute-care-surgery",
        destination: "/department/trauma-acute-care-surgery",
        permanent: true,
      },
      {
        source: "/best-doctor/trauma-acute-care-surgery",
        destination: "/department/trauma-acute-care-surgery",
        permanent: true,
      },
      {
        source: "/department/trauma-and-acute-care-surgery",
        destination: "/department/trauma-acute-care-surgery",
        permanent: true,
      },
      {
        source: "/best-doctors/uro-gynaecology",
        destination: "/department/uro-gynaecology",
        permanent: true,
      },
      {
        source: "/best-doctor/uro-gynaecology",
        destination: "/department/uro-gynaecology",
        permanent: true,
      },
      {
        source: "/best-doctors/urology",
        destination: "/department/urology",
        permanent: true,
      },
      {
        source: "/best-doctor/urology",
        destination: "/department/urology",
        permanent: true,
      },
      {
        source: "/best-doctors/vascular-surgery",
        destination: "/department/vascular-surgery",
        permanent: true,
      },
      {
        source: "/best-doctor/vascular-surgery",
        destination: "/department/vascular-surgery",
        permanent: true,
      },
      {
        source: "/department",
        destination: "/best-doctors",
        permanent: true,
      },
      {
        source: "/best-doctor",
        destination: "/best-doctors",
        permanent: true,
      },
      {
        source: "/best-doctor/:slug*",
        destination: "/best-doctors/:slug*",
        permanent: true,
      },
      {
        source: "/international-patients",
        destination: "/international-hospital",
        permanent: true,
      },
      {
        source: "/international-patients/:slug*",
        destination: "/international-hospital/:slug*",
        permanent: true,
      },
      {
        source: "/international-patient",
        destination: "/international-hospital",
        permanent: true,
      },
      {
        source: "/international-patient/:slug*",
        destination: "/international-hospital/:slug*",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/about/:slug*",
        destination: "/about-us/:slug*",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blog/multiple-sclerosis-expert-care",
        destination:
          "/blog/multiple-sclerosis-treatment-what-expert-care-at-the-right-time-can-do",
        permanent: true,
      },
      {
        source: "/specialties/physical-medicine-rehabilitation",
        destination: "/our-specialties/physical-medicine-and-rehabilitation",
        permanent: true,
      },
      {
        source: "/our-specialties/physical-medicine-rehabilitation",
        destination: "/our-specialties/physical-medicine-and-rehabilitation",
        permanent: true,
      },
      {
        source: "/specialties/anaesthesiology",
        destination: "/our-specialties/leading-anaesthesiology-hospital",
        permanent: true,
      },
      {
        source: "/our-specialties/anaesthesiology",
        destination: "/our-specialties/leading-anaesthesiology-hospital",
        permanent: true,
      },
      {
        source: "/specialties/cardiology",
        destination: "/our-specialties/leading-cardiology-hospital",
        permanent: true,
      },
      {
        source: "/our-specialties/cardiology",
        destination: "/our-specialties/leading-cardiology-hospital",
        permanent: true,
      },
      {
        source: "/specialties/dental-omfs",
        destination: "/our-specialties/best-dental-hospital",
        permanent: true,
      },
      {
        source: "/our-specialties/dental-omfs",
        destination: "/our-specialties/best-dental-hospital",
        permanent: true,
      },
      {
        source: "/specialties/dermatology",
        destination: "/our-specialties/best-skin-care-hospital",
        permanent: true,
      },
      {
        source: "/our-specialties/dermatology",
        destination: "/our-specialties/best-skin-care-hospital",
        permanent: true,
      },
      {
        source: "/specialties/diabetology",
        destination: "/our-specialties/leading-diabetic-hospital",
        permanent: true,
      },
      {
        source: "/our-specialties/diabetology",
        destination: "/our-specialties/leading-diabetic-hospital",
        permanent: true,
      },
      {
        source: "/specialties/emergency-medicine-critical-care",
        destination: "/our-specialties/leading-emergency-care-hospital",
        permanent: true,
      },
      {
        source: "/our-specialties/emergency-medicine-critical-care",
        destination: "/our-specialties/leading-emergency-care-hospital",
        permanent: true,
      },
      {
        source: "/specialties/endocrinology",
        destination: "/our-specialties/leading-endocrinology-hospital",
        permanent: true,
      },
      {
        source: "/our-specialties/endocrinology",
        destination: "/our-specialties/leading-endocrinology-hospital",
        permanent: true,
      },
      {
        source: "/specialties/ent",
        destination: "/our-specialties/best-ent-hospital",
        permanent: true,
      },
      {
        source: "/our-specialties/ent",
        destination: "/our-specialties/best-ent-hospital",
        permanent: true,
      },
      {
        source: "/specialties/general-medicine",
        destination: "/our-specialties/leading-general-medicine-hospital",
        permanent: true,
      },
      {
        source: "/our-specialties/general-medicine",
        destination: "/our-specialties/leading-general-medicine-hospital",
        permanent: true,
      },
      {
        source: "/specialties/general-surgery",
        destination: "/our-specialties/leading-general-surgery-hospital",
        permanent: true,
      },
      {
        source: "/our-specialties/general-surgery",
        destination: "/our-specialties/leading-general-surgery-hospital",
        permanent: true,
      },
      {
        source: "/specialties/geriatrics",
        destination: "/our-specialties/best-geriatric-hospital/",
        permanent: true,
      },
      {
        source: "/our-specialties/geriatrics",
        destination: "/our-specialties/best-geriatric-hospital/",
        permanent: true,
      },
      {
        source: "/specialties/hepatology",
        destination: "/our-specialties/leading-hepatology-regenerative-medicine-hospital/",
        permanent: true,
      },
      {
        source: "/our-specialties/hepatology",
        destination: "/our-specialties/leading-hepatology-regenerative-medicine-hospital/",
        permanent: true,
      },
      {
        source: "/specialties/lactation-pre-natal-yoga",
        destination: "/our-specialties/lactation-and-pre-natal-yoga/",
        permanent: true,
      },
      {
        source: "/our-specialties/lactation-pre-natal-yoga",
        destination: "/our-specialties/lactation-and-pre-natal-yoga/",
        permanent: true,
      },
      {
        source: "/specialties/medical-gastroenterology",
        destination: "/our-specialties/best-medical-gastroenterology-hospital/",
        permanent: true,
      },
      {
        source: "/our-specialties/medical-gastroenterology",
        destination: "/our-specialties/best-medical-gastroenterology-hospital/",
        permanent: true,
      },
      {
        source: "/specialties/medical-oncology",
        destination: "/our-specialties/best-medical-surgical-oncology-hospital/",
        permanent: true,
      },
      {
        source: "/our-specialties/medical-oncology",
        destination: "/our-specialties/best-medical-surgical-oncology-hospital/",
        permanent: true,
      },
      {
        source: "/specialties/nephrology",
        destination: "/our-specialties/leading-nephrology-hospital/",
        permanent: true,
      },
      {
        source: "/our-specialties/nephrology",
        destination: "/our-specialties/leading-nephrology-hospital/",
        permanent: true,
      },
      {
        source: "/specialties/neurosurgery",
        destination: "/our-specialties/best-neurosurgery-hospital/",
        permanent: true,
      },
      {
        source: "/our-specialties/neurosurgery",
        destination: "/our-specialties/best-neurosurgery-hospital/",
        permanent: true,
      },
      {
        source: "/specialties/obstetrics-gynecology",
        destination: "/our-specialties/best-gynecology-hospital/",
        permanent: true,
      },
      {
        source: "/our-specialties/obstetrics-gynecology",
        destination: "/our-specialties/best-gynecology-hospital/",
        permanent: true,
      },
      {
        source: "/specialties/ophthalmology",
        destination: "/our-specialties/best-eye-hospital/",
        permanent: true,
      },
      {
        source: "/our-specialties/ophthalmology",
        destination: "/our-specialties/best-eye-hospital/",
        permanent: true,
      },
      {
        source: "/specialties/orthopedics",
        destination: "/our-specialties/leading-orthopedic-hospital/",
        permanent: true,
      },
      {
        source: "/our-specialties/orthopedics",
        destination: "/our-specialties/leading-orthopedic-hospital/",
        permanent: true,
      },
      {
        source: "/specialties/paediatrics",
        destination: "/our-specialties/best-paediatrics-hospital/",
        permanent: true,
      },
      {
        source: "/our-specialties/paediatrics",
        destination: "/our-specialties/best-paediatrics-hospital/",
        permanent: true,
      },
      {
        source: "/specialties/plastic-surgery",
        destination: "/our-specialties/best-plastic-surgery-hospital/",
        permanent: true,
      },
      {
        source: "/our-specialties/plastic-surgery",
        destination: "/our-specialties/best-plastic-surgery-hospital/",
        permanent: true,
      },
      {
        source: "/specialties/psychiatry",
        destination: "/our-specialties/best-psychiatry-hospital/",
        permanent: true,
      },
      {
        source: "/our-specialties/psychiatry",
        destination: "/our-specialties/best-psychiatry-hospital/",
        permanent: true,
      },
      {
        source: "/specialties/pulmonology",
        destination: "/our-specialties/leading-pulmonology-hospital/",
        permanent: true,
      },
      {
        source: "/our-specialties/pulmonology",
        destination: "/our-specialties/leading-pulmonology-hospital/",
        permanent: true,
      },
      {
        source: "/specialties/radiology",
        destination: "/our-specialties/best-radiology-hospital/",
        permanent: true,
      },
      {
        source: "/our-specialties/radiology",
        destination: "/our-specialties/best-radiology-hospital/",
        permanent: true,
      },
      {
        source: "/specialties/rheumatology",
        destination: "/our-specialties/best-rheumatology-hospital/",
        permanent: true,
      },
      {
        source: "/our-specialties/rheumatology",
        destination: "/our-specialties/best-rheumatology-hospital/",
        permanent: true,
      },
      {
        source: "/specialties/surgical-gastroenterology",
        destination: "/our-specialties/leading-surgical-gastroenterology-hospital/",
        permanent: true,
      },
      {
        source: "/our-specialties/surgical-gastroenterology",
        destination: "/our-specialties/leading-surgical-gastroenterology-hospital/",
        permanent: true,
      },
      {
        source: "/specialties/urology",
        destination: "/our-specialties/best-urology-hospital/",
        permanent: true,
      },
      {
        source: "/our-specialties/urology",
        destination: "/our-specialties/best-urology-hospital/",
        permanent: true,
      },
      {
        source: "/specialties",
        destination: "/our-specialties",
        permanent: true,
      },
      {
        source: "/specialties/:slug*",
        destination: "/our-specialties/:slug*",
        permanent: true,
      },
      {
        source: "/centres-of-excellence",
        destination: "/clinical-excellence",
        permanent: true,
      },
      {
        source: "/centres-of-excellence/:slug*",
        destination: "/clinical-excellence/:slug*",
        permanent: true,
      },
      {
        source: "/comprehensive-guide-to-labral-tear-shoulder-symptoms-and-treatments",
        destination: "/blog/comprehensive-guide-to-labral-tear-shoulder-symptoms-and-treatments",
        permanent: true,
      },
      {
        source: "/effective-meniscus-tear-treatment-options-for-relief-and-recovery",
        destination: "/blog/effective-meniscus-tear-treatment-options-for-relief-and-recovery",
        permanent: true,
      },
      {
        source: "/understanding-acl-tear-symptoms-treatment-and-recovery-options",
        destination: "/blog/understanding-acl-tear-symptoms-treatment-and-recovery-options",
        permanent: true,
      },
      {
        source: "/understanding-feeding-on-demand-a-guide-to-your-babys-needs",
        destination: "/blog/understanding-feeding-on-demand-a-guide-to-your-babys-needs",
        permanent: true,
      },
      {
        source: "/the-best-baby-feeding-position-comfort-for-you-and-your-little-one",
        destination: "/blog/the-best-baby-feeding-position-comfort-for-you-and-your-little-one",
        permanent: true,
      },
      {
        source: "/effective-arrhythmia-treatment-options-benefits-and-what-to-expect",
        destination: "/blog/effective-arrhythmia-treatment-options-benefits-and-what-to-expect",
        permanent: true,
      },
      {
        source: "/essential-guide-to-heart-failure-treatment-options-and-considerations",
        destination: "/blog/essential-guide-to-heart-failure-treatment-options-and-considerations",
        permanent: true,
      },
      {
        source: "/heart-stent-operation-a-comprehensive-overview-of-the-procedure",
        destination: "/blog/heart-stent-operation-a-comprehensive-overview-of-the-procedure",
        permanent: true,
      },
      {
        source: "/understanding-carotid-endarterectomy-benefits-and-recovery-insights",
        destination: "/blog/understanding-carotid-endarterectomy-benefits-and-recovery-insights",
        permanent: true,
      },
      {
        source: "/essential-guide-to-the-anomaly-scan-what-to-expect-and-understand",
        destination: "/blog/essential-guide-to-the-anomaly-scan-what-to-expect-and-understand",
        permanent: true,
      },
      {
        source: "/intermittent-fasting-and-heart-disease-risks-and-considerations-explained",
        destination: "/blog/intermittent-fasting-and-heart-disease-risks-and-considerations-explained",
        permanent: true,
      },
      {
        source: "/effective-l5-s1-disc-bulge-treatment-symptoms-causes-and-solutions",
        destination: "/blog/effective-l5-s1-disc-bulge-treatment-symptoms-causes-and-solutions",
        permanent: true,
      },
      {
        source: "/relief-strategies-for-l4-l5-disc-bulge-effective-care-options",
        destination: "/blog/relief-strategies-for-l4-l5-disc-bulge-effective-care-options",
        permanent: true,
      },
      {
        source: "/understanding-esophageal-ulcer-symptoms-causes-and-treatments",
        destination: "/blog/understanding-esophageal-ulcer-symptoms-causes-and-treatments",
        permanent: true,
      },
      {
        source: "/antral-gastritis-causes-best-treatments-and-symptoms-explained",
        destination: "/blog/antral-gastritis-causes-best-treatments-and-symptoms-explained",
        permanent: true,
      },
      {
        source: "/understanding-hypertension-symptoms-key-signs-you-shouldnt-ignore",
        destination: "/blog/understanding-hypertension-symptoms-key-signs-you-shouldnt-ignore",
        permanent: true,
      },
      {
        source: "/understanding-mitral-valve-prolapse-symptoms-risks-and-management",
        destination: "/blog/understanding-mitral-valve-prolapse-symptoms-risks-and-management",
        permanent: true,
      },
      {
        source: "/understanding-2-weeks-pregnant-hcg-levels-what-you-should-know",
        destination: "/blog/understanding-2-weeks-pregnant-hcg-levels-what-you-should-know",
        permanent: true,
      },
      {
        source: "/effective-solutions-for-pimples-from-the-heat-causes-and-prevention",
        destination: "/blog/effective-solutions-for-pimples-from-the-heat-causes-and-prevention",
        permanent: true,
      },
      {
        source: "/what-is-a-urinary-tract-infection-causes-symptoms-and-treatment",
        destination: "/blog/what-is-a-urinary-tract-infection-causes-symptoms-and-treatment",
        permanent: true,
      },
      {
        source: "/urinary-incontinence-after-childbirth-causes-and-remedies",
        destination: "/blog/urinary-incontinence-after-childbirth-causes-and-remedies",
        permanent: true,
      },
      {
        source: "/what-is-vaginal-vault-prolapse-symptoms-causes-and-solutions",
        destination: "/blog/what-is-vaginal-vault-prolapse-symptoms-causes-and-solutions",
        permanent: true,
      },
      {
        source: "/understanding-seronegative-arthritis-symptoms-causes-and-treatments",
        destination: "/blog/understanding-seronegative-arthritis-symptoms-causes-and-treatments",
        permanent: true,
      },
      {
        source: "/effective-tennis-elbow-treatment-relieve-pain-and-restore-mobility",
        destination: "/blog/effective-tennis-elbow-treatment-relieve-pain-and-restore-mobility",
        permanent: true,
      },
      {
        source: "/mastering-the-rotablator-essential-insights-for-effective-atherectomy",
        destination: "/blog/mastering-the-rotablator-essential-insights-for-effective-atherectomy",
        permanent: true,
      },
      {
        source: "/understanding-total-knee-replacement-what-to-expect-and-recovery-tips",
        destination: "/blog/understanding-total-knee-replacement-what-to-expect-and-recovery-tips",
        permanent: true,
      },
      {
        source: "/top-meniscus-tear-exercises-to-strengthen-your-knee-and-alleviate-pain",
        destination: "/blog/top-meniscus-tear-exercises-to-strengthen-your-knee-and-alleviate-pain",
        permanent: true,
      },
      {
        source: "/takotsubo-cardiomyopathy-how-stress-affects-the-heart",
        destination: "/blog/takotsubo-cardiomyopathy-how-stress-affects-the-heart",
        permanent: true,
      },
      {
        source: "/what-are-rheumatoid-arthritis-deformities-causes-and-solutions",
        destination: "/blog/what-are-rheumatoid-arthritis-deformities-causes-and-solutions",
        permanent: true,
      },
      {
        source: "/find-the-best-doctor-for-rheumatoid-arthritis-in-chennai-today",
        destination: "/blog/find-the-best-doctor-for-rheumatoid-arthritis-in-chennai-today",
        permanent: true,
      },
      {
        source: "/what-is-partial-acl-tear-recovery-time-without-surgery",
        destination: "/blog/what-is-partial-acl-tear-recovery-time-without-surgery",
        permanent: true,
      },
      {
        source: "/managing-overactive-bladder-effective-solutions-and-relief-options",
        destination: "/blog/managing-overactive-bladder-effective-solutions-and-relief-options",
        permanent: true,
      },
      {
        source: "/what-is-a-rotator-cuff-tear-symptoms-diagnosis-and-treatment",
        destination: "/blog/what-is-a-rotator-cuff-tear-symptoms-diagnosis-and-treatment",
        permanent: true,
      },
      {
        source: "/press-releases",
        destination: "/press-release",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
