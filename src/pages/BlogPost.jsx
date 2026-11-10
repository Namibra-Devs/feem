import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function BlogPost() {
  return (
    <>
      <SEO
        title="FEEM | BLOG POST"
        description="Read in-depth articles on adolescent sexual and reproductive health, family planning, contraceptive literacy, and women's wellness resources."
        canonicalPath="/pages/blogpost.html"
      />

      <main id="main-content">
        <section className="page-header-banner text-center">
          <div className="container">
            <span className="section-badge mb-2">Article Read</span>
            <h1 className="mb-3">Blog Post Read More</h1>
            <p>
              Evidence-based information on women’s health, reproductive autonomy, and educational rights.
            </p>
          </div>
        </section>

        <section className="py-5 bg-white border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* Article Image */}
                <img
                  src="/assets/images/new-blog1.webp"
                  alt="Women in discussion about health and education"
                  className="img-fluid rounded border mb-4 w-100"
                  style={{ maxHeight: '420px', objectFit: 'cover' }}
                  loading="lazy"
                />

                <div className="d-flex align-items-center gap-3 text-muted small mb-3">
                  <span><i className="bi bi-calendar3 me-1"></i> March 20, 2024</span>
                  <span><i className="bi bi-tag me-1"></i> Reproductive Health &amp; Education</span>
                  <span><i className="bi bi-person me-1"></i> FEEM Advisory</span>
                </div>

                <h2 className="mb-4">
                  Navigating Reproductive Health, Contraceptive Literacy &amp; Educational Empowerment
                </h2>

                <div className="article-body text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  <p>
                    This category includes vital information on family planning, contraceptive options,
                    and sexually transmitted infections (STIs). It also encompasses key guidance on
                    pregnancy, childbirth, and menopause, helping women make empowered, informed decisions
                    for their futures.
                  </p>

                  <h3 className="h4 text-dark mt-4 mb-3">Trusted Health &amp; Guidance Resources</h3>
                  <p>
                    Some of the evidence-based global and regional resources highlighted in our curriculum include:
                  </p>

                  <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item px-0 py-3 bg-transparent">
                      <strong>Planned Parenthood:</strong> A trusted source of information on sexual and
                      reproductive health, with comprehensive educational toolkits on birth control, STIs,
                      and prenatal care.
                    </li>
                    <li className="list-group-item px-0 py-3 bg-transparent">
                      <strong>Bedsider:</strong> A free online birth control support network that offers
                      accessible information, comparison tools, and unbiased resources to help women find
                      the right contraceptive method for their bodies.
                    </li>
                    <li className="list-group-item px-0 py-3 bg-transparent">
                      <strong>Our Bodies, Ourselves:</strong> A globally recognized non-profit organization
                      that provides evidence-based information on women's health, including reproductive
                      rights, sexuality, and healthy relationships.
                    </li>
                  </ul>

                  <h3 className="h4 text-dark mt-4 mb-3">Why Education is Crucial</h3>
                  <p>
                    Female Empowerment Initiative is an organization (FEEM) with the aim of causing a
                    positive impact in society through women both the young and old. We have identified
                    that, to solve society's numerous problems of which poverty is one, there is the
                    need to invest in women especially in their education.
                  </p>

                  <p>
                    When girls understand their biology, recognize symptoms of common reproductive ailments,
                    and have the confidence to negotiate safe boundaries, teenage pregnancies decrease,
                    enabling girls to complete their education and become independent economic contributors.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-top d-flex justify-content-between align-items-center">
                  <Link to="/news-blog" className="btn btn-feem-outline">
                    <i className="bi bi-arrow-left me-1"></i> Back to All Articles
                  </Link>
                  <Link to="/donate" className="btn btn-feem-accent">
                    Support Our Programs
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

