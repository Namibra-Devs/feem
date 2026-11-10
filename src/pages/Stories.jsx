import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Stories() {
  return (
    <>
      <SEO
        title="FEEM | IMPACT STORIES"
        description="Inspiring real-life impact stories of women and girls transformed by FEEM in Feo, Bongo District, and across Ghana."
        canonicalPath="/pages/stories.html"
      />

      <main id="main-content">
        <section className="page-header-banner text-center">
          <div className="container">
            <span className="section-badge mb-2">Voices of Change</span>
            <h1 className="mb-3">Impact Stories</h1>
            <p>
              Real lives, real transformation. Read how education, dignity, and mentorship are changing futures.
            </p>
          </div>
        </section>

        {/* Featured Field Story: Feo, Bongo District */}
        <section className="py-5 bg-white border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <img
                  src="/assets/images/bongo.webp"
                  alt="Field outreach in Feo, Bongo District"
                  className="img-fluid rounded border"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <span className="section-badge">Upper East Region</span>
                <h2>In Feo in the Bongo District of the Upper East Region of Ghana</h2>
                <div className="text-muted small mb-3">
                  <i className="bi bi-calendar3 me-1"></i> Field Mission: January 7th, 2023
                </div>
                <p className="text-muted">
                  Feo is a close-knit rural community in the Bongo District where adolescent girls
                  face persistent challenges including high rates of poverty, limited sanitary facilities,
                  and economic pressures that often push them into early unions.
                </p>
                <p className="text-muted">
                  FEEM travelled to Feo to distribute comprehensive dignity packs, provide direct
                  guidance counselling on sexual and reproductive health rights, and inaugurate peer
                  mentorship circles with local female teachers.
                </p>
                <p className="text-muted">
                  The intervention transformed the community's attitude toward menstrual health,
                  dramatically reducing classroom absenteeism among upper-primary and junior high school girls.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Comparison */}
        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span className="section-badge">Transformation</span>
              <h2>The FEEM Effect: Before &amp; After</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: '640px' }}>
                How holistic intervention reshapes the trajectory of adolescent girls in Ghana.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="feem-card h-100 p-4 p-md-5 border-danger">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <i className="bi bi-x-circle-fill text-danger fs-3"></i>
                    <h3 className="h4 m-0 text-danger">Before FEEM</h3>
                  </div>
                  <ul className="list-unstyled d-flex flex-column gap-3 text-muted">
                    <li className="d-flex align-items-start gap-2">
                      <i className="bi bi-dash-circle text-danger mt-1 flex-shrink-0"></i>
                      <span><strong>Period Poverty:</strong> Girls missing 3–5 school days every month due to lack of sanitary pads and fear of embarrassment.</span>
                    </li>
                    <li className="d-flex align-items-start gap-2">
                      <i className="bi bi-dash-circle text-danger mt-1 flex-shrink-0"></i>
                      <span><strong>Low Self-Esteem:</strong> Vulnerability to coercive relationships and lack of belief in personal capabilities.</span>
                    </li>
                    <li className="d-flex align-items-start gap-2">
                      <i className="bi bi-dash-circle text-danger mt-1 flex-shrink-0"></i>
                      <span><strong>Economic Vulnerability:</strong> Zero vocational skills, leaving girls financially dependent on opportunistic partners.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div className="feem-card h-100 p-4 p-md-5 border-success">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <i className="bi bi-check-circle-fill text-success fs-3"></i>
                    <h3 className="h4 m-0 text-success">After FEEM</h3>
                  </div>
                  <ul className="list-unstyled d-flex flex-column gap-3 text-muted">
                    <li className="d-flex align-items-start gap-2">
                      <i className="bi bi-check2-circle text-success mt-1 flex-shrink-0"></i>
                      <span><strong>Academic Retention:</strong> Reliable sanitary supplies ensure 100% uninterrupted school attendance across the term.</span>
                    </li>
                    <li className="d-flex align-items-start gap-2">
                      <i className="bi bi-check2-circle text-success mt-1 flex-shrink-0"></i>
                      <span><strong>Inner Conviction:</strong> Mentorship clubs foster assertive communication, body literacy, and bold academic aspirations.</span>
                    </li>
                    <li className="d-flex align-items-start gap-2">
                      <i className="bi bi-check2-circle text-success mt-1 flex-shrink-0"></i>
                      <span><strong>Practical Livelihood:</strong> Soap and bead-making expertise produces immediate household income and financial security.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials / More Stories */}
        <section className="py-5 bg-white border-top border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="text-center mb-5">
              <span className="section-badge">Testimonials</span>
              <h2>Read More Stories of Women We Have Empowered</h2>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="feem-surface-box h-100 p-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <img
                      src="/assets/images/story1.webp"
                      alt="Elizabeth Betty"
                      className="rounded-circle border"
                      style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div>
                      <h3 className="h5 mb-0">Elizabeth Betty</h3>
                      <small className="text-muted">Vocational Skills Beneficiary, Central Region</small>
                    </div>
                  </div>
                  <p className="text-muted fst-italic m-0">
                    "Before joining the FEEM soap-making workshop, I had no independent way to afford
                    my secondary school textbooks. Learning the formulation and sales skills changed everything.
                    I now earn enough to support my schooling and assist my younger siblings."
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="feem-surface-box h-100 p-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <img
                      src="/assets/images/story2.webp"
                      alt="Adolescent Club Member"
                      className="rounded-circle border"
                      style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div>
                      <h3 className="h5 mb-0">Mariama K.</h3>
                      <small className="text-muted">Pads for Progress Participant, Bongo</small>
                    </div>
                  </div>
                  <p className="text-muted fst-italic m-0">
                    "I used to stay at home for almost a week every month during my periods because
                    my family could not afford sanitary towels. FEEM provided me with supplies and
                    taught us that menstruation is natural and nothing to feel ashamed about."
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-5">
              <Link to="/impact-stories" className="btn btn-feem-outline me-3">
                In-Depth Impact Reports
              </Link>
              <Link to="/donate" className="btn btn-feem-accent">
                Empower Another Girl Today
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

