import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Scholarship() {
  return (
    <>
      <SEO
        title="FEEM | SCHOLARSHIP"
        description="Educational Support and Scholarships by FEEM. Keeping vulnerable Ghanaian girls enrolled in school through tuition assistance, books, and uniforms."
        canonicalPath="/pages/scholarship.html"
      />

      <main id="main-content">
        <section className="page-header-banner text-center">
          <div className="container">
            <span className="section-badge mb-2">Academic Retention</span>
            <h1 className="mb-3">Educational Support &amp; Scholarships</h1>
            <p>
              Investing in women and girls' education to break generational poverty and build Ghana's future leaders.
            </p>
          </div>
        </section>

        <section className="py-5 bg-white border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <img
                  src="/assets/images/research3.webp"
                  alt="Students engaged in classroom studies"
                  className="img-fluid rounded border mb-4 w-100"
                  style={{ maxHeight: '420px', objectFit: 'cover' }}
                  loading="lazy"
                />

                <span className="section-badge">The Power of Schooling</span>
                <h2 className="mb-4">Why Educational Retention is Non-Negotiable</h2>

                <div className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  <p>
                    According to the United Nations (UNICEF), there are more than 1.1 billion girls
                    under age 18 globally, poised to become the largest generation of female leaders,
                    entrepreneurs, and change-makers the world has ever seen.
                  </p>

                  <p>
                    Yet, millions of girls in developing economies remain out of school. Poverty
                    remains the single most significant barrier to girls' education. When household
                    resources are limited, cultural preferences often prioritize boys' schooling,
                    while adolescent girls are burdened with domestic chores or pushed toward early
                    marriages to generate dowries.
                  </p>

                  <div className="p-4 my-4 rounded feem-surface-box border-start border-4 border-primary">
                    <h3 className="h5 text-dark mb-2">FEEM's Core Philosophy</h3>
                    <p className="m-0 text-muted">
                      Female Empowerment Initiative (FEEM) was founded on the fundamental insight
                      that to solve society's numerous problems—of which poverty is prime—there is
                      an urgent necessity to invest in women, especially in their formal and technical education.
                    </p>
                  </div>

                  <h3 className="h4 text-dark mt-4 mb-3">Our Educational Assistance Packages</h3>
                  <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item px-0 py-2 bg-transparent">
                      <strong>Tuition &amp; Examination Fee Relief:</strong> Covering BECE and WASSCE
                      registration costs so girls do not miss pivotal national qualification exams.
                    </li>
                    <li className="list-group-item px-0 py-2 bg-transparent">
                      <strong>School Essentials Kit:</strong> Backpacks, notebooks, mathematical sets,
                      and prescribed core subject textbooks.
                    </li>
                    <li className="list-group-item px-0 py-2 bg-transparent">
                      <strong>Uniforms &amp; Footwear:</strong> Replacing worn-out school uniforms to
                      shield vulnerable students from social stigma and punitive exclusion.
                    </li>
                    <li className="list-group-item px-0 py-2 bg-transparent">
                      <strong>After-School Academic Mentorship:</strong> Volunteer-led tutoring clinics
                      reinforcing mathematics, science, and English language comprehension.
                    </li>
                  </ul>
                </div>

                <div className="mt-5 p-4 rounded feem-surface-box">
                  <h3 className="h5 mb-3 fw-bold">Download Education &amp; Scholarship Briefs</h3>
                  <div className="d-flex flex-wrap gap-2">
                    <a href="/assets/images/research3.webp" download className="btn btn-feem-outline btn-sm">
                      <i className="bi bi-file-earmark-pdf me-1"></i> Scholarship Program Profile (PDF)
                    </a>
                    <Link to="/donate" className="btn btn-feem-accent btn-sm">
                      Sponsor a Girl's Education
                    </Link>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top d-flex justify-content-between">
                  <Link to="/resources" className="btn btn-feem-outline">
                    <i className="bi bi-arrow-left me-1"></i> Back to Resources
                  </Link>
                  <Link to="/get-involved" className="btn btn-feem-primary">
                    Volunteer as a Tutor
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

