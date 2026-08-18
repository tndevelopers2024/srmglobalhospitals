'use client';
import React from 'react';

export default function EmergencyBanner() {
    return (
        <section style={{ padding: '120px 0', background: 'var(--mist)', position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                <div style={{
                    background: 'var(--paper)',
                    borderRadius: '24px',
                    border: '1px solid var(--rule)',
                    boxShadow: '0 24px 60px -12px rgba(217, 53, 53, 0.08)',
                    overflow: 'hidden',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))'
                }}>

                    {/* Accent Graphic Block */}
                    <div style={{
                        background: 'linear-gradient(135deg, var(--emergency) 0%, #a62020 100%)',
                        padding: '80px 60px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', inset: 0, opacity: 0.15, backgroundImage: 'linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff), linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }}></div>

                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 18px', background: 'rgba(255,255,255,0.15)', borderRadius: '999px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--paper)', backdropFilter: 'blur(8px)', width: 'fit-content', border: '1px solid rgba(255,255,255,0.25)', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--paper)', display: 'block', animation: 'pulse 2s infinite' }}></span>
                            24/7 Emergency
                            <style>{`
                @keyframes pulse {
                  0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
                  70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
                  100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
                }
              `}</style>
                        </div>

                        <h2 className="display-2" style={{ color: 'var(--paper)', margin: 0, position: 'relative', zIndex: 1, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                            Always open.<br />Always staffed.
                        </h2>
                    </div>

                    {/* Content Block */}
                    <div style={{ padding: '80px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--paper)' }}>
                        <p className="body-lg" style={{ color: 'var(--ink-soft)', marginBottom: '32px', lineHeight: 1.7 }}>
                            Our emergency department operates round the clock with specialist doctors, emergency beds, and diagnostic equipment on-site. The right doctor and the right equipment are here when you arrive.
                        </p>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px', listStyle: 'none' }}>
                            {[
                                'Global standard medical aid',
                                'Swift emergency response and triage',
                                'On-site imaging, labs, and critical care'
                            ].map((text, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{ background: 'rgba(217, 53, 53, 0.08)', borderRadius: '50%', padding: '6px' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--emergency)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--ink)' }}>{text}</span>
                                </li>
                            ))}
                        </ul>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                            <a href="tel:+919644496444" className="btn" style={{ padding: '16px 40px', fontSize: '16px', fontWeight: 700, background: 'var(--emergency)', color: 'var(--paper)', borderRadius: '999px', display: 'inline-flex', alignItems: 'center', gap: '10px', border: 'none', transition: 'all 300ms ease' }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 32px rgba(217, 53, 53, 0.35)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                +91 96444 96444
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
