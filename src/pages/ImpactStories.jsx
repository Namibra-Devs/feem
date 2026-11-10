import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function ImpactStories() {
  return (
    <>
      <SEO
        title="FEEM | IMPACT STORIES"
        description="Comprehensive impact reports, case studies, and evidence of sustainable change accomplished by FEEM in Ghana."
        canonicalPath="/pages/impactstories.html"
      />

      <main id="main-content">
        <section className="page-header-banner text-center">
          <div className="container">
            <span className="section-badge mb-2">Evidence of Impact</span>
            <h1 className="mb-3">Impact Stories Read More</h1>
            <p>
              In-depth reflections, community metrics, and transformative journeys of our beneficiaries.
            </p>
          </div>
        </section>

        <section className="py-5 bg-white border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <span className="section-badge">Case Studies</span>
                <h2 className="mb-4">From Vulnerability to Leadership: Long-Term Community Impact</h2>

                <div className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  <p>
                    This category details our quantitative and qualitative outcomes across communities in
                    Ghana. Our interventions bridge health equity, educational retention, and economic agency.
                  </p>

                  <h3 className="h4 text-dark mt-4 mb-3">1. Dignity in the Classroom</h3>
                  <p>
                    Through the Pads for Progress initiative, we have tracked school attendance across
                    participating basic and junior high schools. When sanitary products and biological
                    education are provided free of charge, classroom attendance for adolescent girls
                    increases by up to 92% across the school term.
                  </p>

                  <h3 className="h4 text-dark mt-4 mb-3">2. Livelihood Skills &amp; Micro-Enterprise</h3>
                  <p>
                    Our vocational workshops in liquid soap making and bead craftsmanship have empowered
                    over 350 young women with practical, monetizable skills. Trainees produce quality
                    cleansers for household use and local sales, generating independent capital to purchase
                    school uniforms and learning materials.
                  </p>

                  <h3 className="h4 text-dark mt-4 mb-3">3. Breaking Cycles of Coercive Dependence</h3>
                  <p>
                    Female Empowerment Initiative (FEEM) was established with the clear conviction that
                    poverty alleviation is inextricably bound to the empowerment and education of women.
                    By creating trusted mentorship networks in schools, young girls gain safe spaces to
                    report harassment, seek reproductive guidance, and pursue academic excellence.
                  </p>
                </div>

                <div className="mt-5 p-4 rounded feem-surface-box d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
                  <div>
                    <h4 className="h5 mb-1">Support Our Ongoing Missions</h4>
                    <p className="small text-muted m-0">Your donation enables us to expand to more rural districts.</p>
                  </div>
                  <Link to="/donate" className="btn btn-feem-accent flex-shrink-0">
                    Donate Now
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

