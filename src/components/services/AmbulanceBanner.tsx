'use client';
import React from 'react';

export default function AmbulanceBanner() {
    return (
        <section style={{ padding: '100px 0', background: 'var(--mist)', position: 'relative' }}>
            <div className="container">

                <div style={{
                    background: 'var(--paper)',
                    borderRadius: '24px',
                    padding: '64px 50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '40px',
                    flexWrap: 'wrap',
                    boxShadow: '0 20px 60px -15px rgba(26, 31, 92, 0.08)',
                    border: '1px solid var(--rule)'
                }}>

                    <div style={{ maxWidth: '720px' }}>
                        <h2 className="display-2" style={{ color: 'var(--ink)', marginBottom: '16px', fontSize: 'clamp(28px, 3.5vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                            Ambulance
                        </h2>
                        <p className="body-lg" style={{ color: 'var(--ink-soft)', margin: 0, lineHeight: 1.6, fontSize: '17px' }}>
                            Available 24/7. Fully equipped vehicles with trained paramedics. Whether it&apos;s a remote location or the city centre, help is one call away. Our ambulances carry cutting-edge medical equipment for stabilisation during transit.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
                        <a
                            href="tel:+919644496444"
                            className="btn"
                            style={{
                                padding: '16px 40px',
                                fontSize: '16px',
                                fontWeight: 600,
                                borderRadius: '999px',
                                background: 'var(--brand)',
                                color: 'var(--paper)',
                                boxShadow: '0 0 32px rgba(139, 61, 255, 0.35)',
                                border: 'none',
                                transition: 'all 300ms ease',
                                textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 0 45px rgba(139, 61, 255, 0.55)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 0 32px rgba(139, 61, 255, 0.35)';
                            }}
                        >
                            Call: +91 96444 96444
                        </a>
                        <div style={{ color: 'var(--ink-faint)', fontSize: '14px', letterSpacing: '0.01em', fontWeight: 500 }}>
                            Available 24/7
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
