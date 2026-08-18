'use client';
import React, { useState } from 'react';

const servicesData = [
    {
        title: "Pharmacy",
        desc: "In-house pharmacy stocked with all prescribed medications. Fills prescriptions before you leave the hospital — no second trip needed.",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    },
    {
        title: "Dialysis Centre",
        desc: "Dedicated dialysis unit with modern machines and trained nephrology support. Scheduled and emergency dialysis sessions available.",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    },
    {
        title: "Nutrition & Dietetics",
        desc: "Clinical dietitians work with your medical team to build meal plans that support recovery, manage chronic conditions, and improve long-term health.",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    },
    {
        title: "Occupational Therapy",
        desc: "Helps patients regain daily living skills after surgery, injury, or neurological events. Personalised rehabilitation programmes for each patient.",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
        title: "Speech Therapy",
        desc: "For patients recovering from stroke, head injury, or surgery affecting speech and swallowing. Assessment and treatment by certified speech-language pathologists.",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    },
    {
        title: "Physiotherapy",
        desc: "Post-surgical rehab, musculoskeletal recovery, and mobility restoration. In-patient and out-patient programmes with dedicated physiotherapy staff.",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
        title: "Laboratory",
        desc: "NABL-certified diagnostic laboratory on-site. Blood work, pathology, microbiology, and biochemistry. Results delivered directly to your treating doctor.",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3a1 1 0 112 0v4m-3-1-4 14m3-14c1.55 0 2 1.5 2 3s-1.5 3-3 3-3-1.5-3-3 1.5-3 3-3z" />
    },
    {
        title: "Radiology & Imaging",
        desc: "24/7 radio imaging services including X-ray, CT, MRI, ultrasound, and interventional radiology. On-site reporting for faster diagnosis.",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    }
];

export default function ServiceGrid() {
    return (
        <section style={{ padding: '100px 0', background: 'var(--paper)' }}>
            <div className="container">
                <div className="section-head">
                    <div>
                        <span className="eyebrow eyebrow-brand">Medical Support</span>
                        <h2 className="display-2" style={{ marginTop: '12px', letterSpacing: '-0.01em' }}>Comprehensive Care Facilities</h2>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px' }}>
                    {servicesData.map((svc, i) => (
                        <ServiceCard key={i} svc={svc} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ svc }: { svc: { title: string; desc: string; icon: React.ReactNode } }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                padding: '36px',
                background: hovered ? 'var(--paper)' : 'var(--mist)',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: hovered ? 'var(--purple)' : 'var(--rule)',
                transition: 'all 300ms var(--ease)',
                transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hovered ? '0 16px 40px -10px rgba(139, 61, 255, 0.15)' : 'none',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: hovered ? 'var(--gradient-flat)' : 'var(--brand-soft)',
                color: hovered ? 'var(--paper)' : 'var(--purple)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                transition: 'all 300ms var(--ease)'
            }}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '28px', height: '28px' }}>
                    {svc.icon}
                </svg>
            </div>

            <h3 className="h3" style={{ marginBottom: '12px', color: hovered ? 'var(--brand-deep)' : 'var(--ink)', transition: 'color 300ms ease' }}>
                {svc.title}
            </h3>
            <p className="body" style={{ margin: 0, opacity: hovered ? 0.9 : 0.8, transition: 'opacity 300ms ease' }}>
                {svc.desc}
            </p>
        </div>
    );
}
