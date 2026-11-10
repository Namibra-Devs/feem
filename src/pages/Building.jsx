import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Building() {
  return (
    <>
      <SEO
        title="FEEM | BUILDING ESTEEM"
        description="Nurturing self-esteem, inner conviction, and mental resilience in young Ghanaian women to shield them from abuse and unlock their full potential."
        canonicalPath="/pages/building.html"
      />

      <main id="main-content">
        <section className="page-header-banner text-center">
          <div className="container">
            <span className="section-badge mb-2">Psychological Resilience</span>
            <h1 className="mb-3">Building Self Esteem</h1>
            <p>
              Instilling in young women high-level self-worth, courage, and inner conviction in their capabilities.
            </p>
          </div>
        </section>

        <section className="py-5 bg-white border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <img
                  src="/assets/images/self.webp"
                  alt="Young woman discovering inner confidence and strength"
                  className="img-fluid rounded border mb-4 w-100"
                  style={{ maxHeight: '420px', objectFit: 'cover' }}
                  loading="lazy"
                />

                <span className="section-badge">Inner Conviction</span>
                <h2 className="mb-4">Why Self-Esteem Protects Young Women</h2>

                <div className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  <p>
                    Self-esteem is having a strong level of confidence and belief in oneself. It is
                    often referred to as wielding a high sense of personal belief and the inner
                    conviction in your abilities, including your intellectual potential and physical
                    outlook.
                  </p>

                  <p>
                    According to the Queensland Government (2024), having healthy self-esteem is when you
                    generally feel good about yourself, respect your accomplishments, and feel confident
                    to try new things and challenge yourself. Conversely, having low self-esteem means
                    that you do not believe you are capable of achieving anything meaningful and that you
                    do not deserve respectful treatment.
                  </p>

                  <div className="p-4 my-4 rounded feem-surface-box border-start border-4 border-accent">
                    <h3 className="h5 text-dark mb-2">The Danger of Low Self-Esteem</h3>
                    <p className="m-0 text-muted">
                      Low self-esteem can be very detrimental to young people, especially girls, as it
                      places them in a vulnerable state of yearning to be validated. For example, girls
                      who believe that they are not physically attractive or intelligent often become prey
                      for abusers who manipulate them into believing that no one else would ever care for
                      them. Girls caught in this cycle conclude their worth depends entirely on their abusers,
                      leaving them trapped in toxic, coercive relationships.
                    </p>
                  </div>

                  <h3 className="h4 text-dark mt-4 mb-3">FEEM's School &amp; Community Mandate</h3>
                  <p>
                    The organisation, as part of its core mandates, instils in young women a high level
                    of self-esteem to believe in themselves, appreciate who they are, and remain filled
                    with the conviction that they can achieve extraordinary milestones.
                  </p>

                  <p>
                    Through our interactive school workshops and peer assertiveness clinics, we hammer
                    home this vital message of self-belief. These interventions deliver many young women
                    out of toxic environments, build emotional immunity against cyberbullying, and protect
                    them from manipulative sexual exploitation.
                  </p>
                </div>

                <div className="mt-5 p-4 rounded feem-surface-box">
                  <h3 className="h5 mb-3 fw-bold">Download Self-Esteem Building Materials</h3>
                  <div className="d-flex flex-wrap gap-2">
                    <a href="/assets/images/self.webp" download className="btn btn-feem-outline btn-sm">
                      <i className="bi bi-file-earmark-pdf me-1"></i> Self-Esteem Workshop Guide (PDF)
                    </a>
                    <Link to="/get-involved" className="btn btn-feem-primary btn-sm">
                      Volunteer as a Mentor
                    </Link>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top d-flex justify-content-between">
                  <Link to="/resources" className="btn btn-feem-outline">
                    <i className="bi bi-arrow-left me-1"></i> Back to Resources
                  </Link>
                  <Link to="/donate" className="btn btn-feem-accent">
                    Fund a School Workshop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

