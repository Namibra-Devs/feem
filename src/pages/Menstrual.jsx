import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Menstrual() {
  return (
    <>
      <SEO
        title="FEEM | MENSTRUAL HYGIENE"
        description="Understanding menstrual hygiene, eradicating period poverty in Ghana, and exploring FEEM's Pads for Progress community initiative."
        canonicalPath="/pages/menstrual.html"
      />

      <main id="main-content">
        <section className="page-header-banner text-center">
          <div className="container">
            <span className="section-badge mb-2">Health &amp; Dignity</span>
            <h1 className="mb-3">Menstrual Hygiene</h1>
            <p>
              Ending period stigma, advancing bodily literacy, and providing free menstrual supplies in Ghanaian schools.
            </p>
          </div>
        </section>

        <section className="py-5 bg-white border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <img
                  src="/assets/images/resources-home.webp"
                  alt="Menstrual hygiene health and awareness"
                  className="img-fluid rounded border mb-4 w-100"
                  style={{ maxHeight: '420px', objectFit: 'cover' }}
                  loading="lazy"
                />

                <span className="section-badge">Dignity For Every Girl</span>
                <h2 className="mb-4">Natural Biology, Period Poverty &amp; Educational Continuity</h2>

                <div className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  <p>
                    According to UNICEF, menstruation is the natural bodily process of releasing blood
                    and tissue from the uterus through the vagina. It happens roughly every month from
                    puberty until menopause, except during pregnancy. It is a healthy biological marker
                    of growing up that should never be met with shame, fear, or seclusion.
                  </p>

                  <p>
                    Menstrual health and hygiene (MHH) refers to the access that women and adolescent
                    girls have to clean menstrual management materials to absorb or collect menstrual
                    flow, that can be changed in privacy as often as necessary, using soap and clean water
                    for washing the body as required, and having access to safe, convenient facilities
                    to dispose of used menstrual management materials.
                  </p>

                  <div className="p-4 my-4 rounded feem-surface-box border-start border-4 border-secondary">
                    <h3 className="h5 text-dark mb-2">The Impact of Period Poverty in Ghana</h3>
                    <p className="m-0 text-muted">
                      In many rural communities across Ghana, the high cost of disposable sanitary towels
                      forces girls to use unhygienic rags or stay home during their periods. Missing up to
                      5 days every month causes adolescent girls to fall drastically behind in their
                      examinations, leading to early dropout.
                    </p>
                  </div>

                  <h3 className="h4 text-dark mt-4 mb-3">Pads for Progress: FEEM's Action</h3>
                  <p>
                    Through our signature program <strong>Pads for Progress</strong>, FEEM conducts monthly
                    school outreach distributions, supplying sanitary pads directly to adolescent students,
                    training them on proper hygiene maintenance, and educating boys and teachers to foster
                    supportive classroom environments free of teasing.
                  </p>
                </div>

                <div className="mt-5 p-4 rounded feem-surface-box">
                  <h3 className="h5 mb-3 fw-bold">Download Menstrual Health Toolkits</h3>
                  <div className="d-flex flex-wrap gap-2">
                    <a href="/assets/images/resources-home.webp" download className="btn btn-feem-outline btn-sm">
                      <i className="bi bi-file-earmark-pdf me-1"></i> Menstrual Health Guide (PDF)
                    </a>
                    <Link to="/donate" className="btn btn-feem-accent btn-sm">
                      Donate Sanitary Towels
                    </Link>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top d-flex justify-content-between">
                  <Link to="/resources" className="btn btn-feem-outline">
                    <i className="bi bi-arrow-left me-1"></i> Back to Resources
                  </Link>
                  <Link to="/programs" className="btn btn-feem-primary">
                    View Programs
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

