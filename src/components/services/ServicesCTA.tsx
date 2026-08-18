'use client';
import React from 'react';

export default function ServicesCTA() {
    return (
        <section style={{ padding: '100px 0', background: 'var(--mist)', position: 'relative' }}>
            <div className="container">

                <div style={{
                    background: 'var(--ink-deep)',
                    borderRadius: '24px',
                    padding: '64px 80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '40px',
                    flexWrap: 'wrap',
                    boxShadow: '0 20px 60px -15px rgba(26, 31, 92, 0.4)'
                }}>

                    <div style={{ maxWidth: '580px' }}>
                        <h2 className="display-2" style={{ color: 'var(--paper)', marginBottom: '16px', fontSize: 'clamp(28px, 3.5vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                            Need a service or have a question?
                        </h2>
                        <p className="body-lg" style={{ color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6, fontSize: '17px' }}>
                            Call the hospital directly or book an appointment online. Our front desk can route you to the right department.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
                        <a
                            href="/#book"
                            className="btn"
                            style={{
                                padding: '16px 40px',
                                fontSize: '16px',
                                fontWeight: 600,
                                borderRadius: '999px',
                                background: 'var(--brand)',
                                color: 'var(--paper)',
                                boxShadow: '0 0 32px rgba(139, 61, 255, 0.45)',
                                border: 'none',
                                transition: 'all 300ms ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 0 45px rgba(139, 61, 255, 0.65)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 0 32px rgba(139, 61, 255, 0.45)';
                            }}
                        >
                            Book Appointment &rarr;
                        </a>
                        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', letterSpacing: '0.01em' }}>
                            or call <a href="tel:+919644496444" style={{ color: 'var(--paper)', fontWeight: 700, textDecoration: 'none', marginLeft: '4px' }}>+91 96444 96444</a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
