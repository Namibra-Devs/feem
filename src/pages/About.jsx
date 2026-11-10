import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { coreValues, mentors } from '../data/siteData';

export default function About() {
  return (
    <>
      <SEO
        title="ABOUT | FEEM"
        description="Learn about Female Empowerment Initiative (FEEM), our mission, vision, core values, mentors, and the history behind our community impact in Ghana."
        canonicalPath="/pages/about.html"
      />

      <main id="main-content">
        {/* Banner Section */}
        <section className="page-header-banner text-center">
          <div className="container">
            <span className="section-badge mb-2">Know About Us</span>
            <h1 className="mb-3">About FEEM</h1>
            <p>
              To make the lives of People &amp; the community better through investing in
              women and girls.
            </p>
          </div>
        </section>

        {/* Overall Goal & Intro */}
        <section className="py-5 bg-white border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="section-badge">OverAll Goal</span>
                <h2 className="mb-4">OverAll Goal Of Our Organization</h2>
                <p className="lead text-muted mb-3">
                  To make the lives of people in communities, societies and nations
                  better through women both the young and old.
                </p>
                <p className="text-muted">
                  We have identified that, to solve society's numerous problems of which
                  poverty is one, there is the need to invest in women especially in
                  their education.
                </p>
                <p className="text-muted">
                  When women and girls gain the knowledge, emotional resilience, and
                  technical skills needed to navigate economic hurdles, the positive
                  outcomes echo across entire households and generations.
                </p>
                <div className="d-flex gap-3 mt-4">
                  <Link to="/what" className="btn btn-feem-primary">
                    What We Do
                  </Link>
                  <Link to="/get-involved" className="btn btn-feem-outline">
                    Get Involved
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feem-surface-box">
                  <h3 className="h5 mb-3 fw-bold">Watch Our Story</h3>
                  <div className="ratio ratio-16x9 rounded overflow-hidden border">
                    <video
                      controls
                      poster="/assets/videos/UNICEF___for_every_child(720p).webp"
                      preload="metadata"
                      aria-label="FEEM intro video"
                    >
                      <source src="/assets/videos/UNICEF___for_every_child(720p).webm" type="video/webm" />
                      <source src="/assets/videos/UNICEF___for_every_child(720p).mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <p className="small text-muted mt-2 mb-0 fst-italic">
                    Advancing dignity, equality, and protection for every child and mother.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="feem-card h-100 p-4 p-md-5">
                  <span className="section-badge">Purpose</span>
                  <h2 className="h3 mb-3">Our Mission</h2>
                  <p className="lead text-muted mb-3">
                    Provision of livelihood to women and girls.
                  </p>
                  <p className="text-muted">
                    To empower women and girls on leadership, sexual and reproductive
                    health rights (SRHR), educational support, livelihood skills training,
                    and poverty alleviation across Ghana.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="feem-card h-100 p-4 p-md-5">
                  <span className="section-badge">Future</span>
                  <h2 className="h3 mb-3">Our Vision</h2>
                  <p className="lead text-muted mb-3">
                    A society where women and girls live with dignity and opportunity.
                  </p>
                  <p className="text-muted">
                    We envision communities where every girl has full agency over her
                    body, access to quality schooling, and the confidence to take on
                    leadership roles free from coercion, bias, and violence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-5 bg-white border-top border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="text-center mb-5">
              <span className="section-badge">Guiding Principles</span>
              <h2>Our Core Values</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: '640px' }}>
                These fundamental commitments guide our decisions, field operations, and
                partnerships every single day.
              </p>
            </div>

            <div className="row g-4">
              {coreValues.map((val) => (
                <div key={val.title} className="col-md-4 col-sm-6">
                  <div className="feem-surface-box h-100 text-center">
                    <img
                      src={val.image}
                      alt={val.title}
                      width="54"
                      height="54"
                      className="mb-3"
                    />
                    <h3 className="h5 mb-2">{val.title}</h3>
                    <p className="text-muted small m-0">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Focus Section */}
        <section className="py-5 text-center">
          <div className="container" style={{ maxWidth: '840px' }}>
            <span className="section-badge">Strategic Direction</span>
            <h2 className="mb-4">Our Focus</h2>
            <p className="lead text-muted">
              Our focus is on creating a world where every girl has the opportunity to
              realize her full potential. By addressing the key barriers that hinder their
              growth, we aim to inspire lasting change in their lives, families, and
              communities.
            </p>
          </div>
        </section>

        {/* Mentors Section */}
        <section className="py-5 bg-white border-top border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="text-center mb-5">
              <span className="section-badge">Advisory Board</span>
              <h2>Meet Our Mentors</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: '640px' }}>
                Distinguished researchers, academic leaders, and community development
                specialists guiding FEEM's strategic initiatives.
              </p>
            </div>

            <div className="row g-4">
              {mentors.map((mentor) => (
                <div key={mentor.name} className="col-md-4">
                  <div className="feem-card h-100 text-center p-4">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="rounded-circle mx-auto mb-3 border"
                      style={{ width: '130px', height: '130px', objectFit: 'cover', borderColor: 'var(--feem-border)' }}
                      loading="lazy"
                    />
                    <h3 className="h5 mb-1">{mentor.name}</h3>
                    <span className="badge bg-light text-dark mb-3">{mentor.role}</span>
                    <p className="text-muted small m-0">{mentor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <img
                  src="/assets/images/RAPH-PIXELS_98.webp"
                  alt="Founder and early community journey"
                  className="img-fluid rounded border"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <span className="section-badge">Our Journey</span>
                <h2>Our History — How we Started</h2>
                <p className="text-muted">
                  The organisation was inspired by the founder’s life experiences. Having
                  witnessed first-hand the systemic struggles of women and young girls in
                  overcoming socio-economic barriers in rural and peri-urban Ghana, the
                  founder was compelled to act.
                </p>
                <p className="text-muted">
                  What began as small school visits and sanitary towel distributions
                  swiftly evolved into structured mentorship programs, vocational skills
                  training, and community-wide dialogues on gender equality and child
                  protection.
                </p>
                <p className="text-muted">
                  Today, FEEM operates across multiple districts in Ghana, partnering
                  with schools, healthcare educators, and traditional leaders to ensure
                  no girl is left behind.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

