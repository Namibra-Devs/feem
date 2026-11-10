import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Sexual() {
  return (
    <>
      <SEO
        title="FEEM | SEXUAL HEALTH"
        description="Evidence-based sexual and reproductive health rights (SRHR) education, adolescent literacy, and body autonomy guidance by FEEM."
        canonicalPath="/pages/sexual.html"
      />

      <main id="main-content">
        <section className="page-header-banner text-center">
          <div className="container">
            <span className="section-badge mb-2">Health Literacy</span>
            <h1 className="mb-3">Sexual Health</h1>
            <p>
              Fostering cognitive transformation and bodily autonomy through factual reproductive knowledge.
            </p>
          </div>
        </section>

        <section className="py-5 bg-white border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <img
                  src="/assets/images/sexual.webp"
                  alt="Sexual health guidance and counseling"
                  className="img-fluid rounded border mb-4 w-100"
                  style={{ maxHeight: '420px', objectFit: 'cover' }}
                  loading="lazy"
                />

                <span className="section-badge">Reproductive Autonomy</span>
                <h2 className="mb-4">Cognitive Transformation &amp; Informed Choices</h2>

                <div className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  <p>
                    The organisation is involved in a cognitive transformational process in young women
                    and adolescent girls by providing evidence-based sexual and reproductive health
                    rights (SRHR) knowledge. When young people lack accurate scientific information about
                    their sexuality and development, they are vulnerable to myths, unintended pregnancies,
                    and sexually transmitted infections.
                  </p>

                  <p>
                    Sexual health is not merely the absence of disease, but a state of physical,
                    emotional, mental, and social well-being in relation to sexuality. It requires a
                    positive and respectful approach to sexuality and sexual relationships, free of
                    coercion, discrimination, and violence.
                  </p>

                  <h3 className="h4 text-dark mt-4 mb-3">Key Focus Areas of our SRHR Curriculum</h3>
                  <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item px-0 py-2 bg-transparent">
                      <strong>Age-Appropriate Bodily Literacy:</strong> Teaching adolescent girls how
                      their reproductive anatomy functions and how to monitor their menstrual cycles.
                    </li>
                    <li className="list-group-item px-0 py-2 bg-transparent">
                      <strong>STI &amp; HIV Prevention:</strong> Factual education on transmission,
                      barrier methods, testing availability, and reducing community stigma.
                    </li>
                    <li className="list-group-item px-0 py-2 bg-transparent">
                      <strong>Consent &amp; Healthy Boundaries:</strong> Equipping girls with the assertiveness
                      skills to say no, identify predatory manipulation, and report abuse immediately.
                    </li>
                    <li className="list-group-item px-0 py-2 bg-transparent">
                      <strong>Family Planning &amp; Contraceptive Literacy:</strong> Unbiased guidance
                      on reproductive planning in collaboration with certified public health professionals.
                    </li>
                  </ul>
                </div>

                <div className="mt-5 p-4 rounded feem-surface-box">
                  <h3 className="h5 mb-3 fw-bold">Download SRHR Guidance Toolkits</h3>
                  <div className="d-flex flex-wrap gap-2">
                    <a href="/assets/images/sexual.webp" download className="btn btn-feem-outline btn-sm">
                      <i className="bi bi-file-earmark-pdf me-1"></i> Adolescent SRHR Manual (PDF)
                    </a>
                    <Link to="/contact" className="btn btn-feem-primary btn-sm">
                      Request School Outreach
                    </Link>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top d-flex justify-content-between">
                  <Link to="/resources" className="btn btn-feem-outline">
                    <i className="bi bi-arrow-left me-1"></i> Back to Resources
                  </Link>
                  <Link to="/donate" className="btn btn-feem-accent">
                    Support Health Outreach
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

