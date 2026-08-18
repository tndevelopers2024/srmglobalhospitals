import React from 'react';

export default function ServicesHero() {
    return (
        <section className="services-hero section-mist" style={{ paddingTop: '120px', paddingBottom: '80px', overflow: 'hidden', position: 'relative' }}>
            <div className="container relative" style={{ zIndex: 2 }}>
                <div style={{ maxWidth: '800px' }}>
                    <span className="eyebrow eyebrow-brand">Hospital Services</span>
                    <h1 className="display-1" style={{ marginTop: '16px', marginBottom: '24px' }}>
                        Everything that supports your care
                    </h1>
                    <p className="body-lg" style={{ maxWidth: '640px', fontSize: '18px' }}>
                        From the ambulance that brings you in to the pharmacy that fills your prescription on the way out. We provide comprehensive, world-class facilities seamlessly integrated on a single campus.
                    </p>
                </div>
            </div>

            {/* Decorative gradient orb for premium rich aesthetics */}
            <div style={{
                position: 'absolute',
                top: '-15%',
                right: '-5%',
                width: '600px',
                height: '600px',
                background: 'var(--gradient-flat)',
                filter: 'blur(120px)',
                opacity: 0.15,
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '10%',
                width: '400px',
                height: '400px',
                background: 'var(--gradient-flat)',
                filter: 'blur(100px)',
                opacity: 0.08,
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 1
            }} />
        </section>
    );
}
