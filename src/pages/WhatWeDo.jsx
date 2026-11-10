import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FormAlert from '../components/FormAlert';
import { submitToFormService } from '../utils/formSubmit';

export default function WhatWeDo() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    website_hp: ''
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatus({ state: 'error', message: 'Please fill in all required fields.' });
      return;
    }
    setStatus({ state: 'submitting', message: 'Submitting...' });
    const res = await submitToFormService(
      { ...formData, formType: 'What We Do Inquiry' },
      'What We Do Inquiry'
    );
    if (res.ok) {
      setStatus({ state: 'success', message: 'Thank you for contacting us! We will be in touch shortly.' });
      setFormData({ firstName: '', lastName: '', email: '', message: '', website_hp: '' });
    } else {
      setStatus({ state: 'error', message: res.error || 'Failed to submit.' });
    }
  };

  return (
    <>
      <SEO
        title="FEEM | WHAT WE DO"
        description="Discover FEEM's key initiatives: informed decision making, community research, educational support, livelihood skills training, and gender advocacy."
        canonicalPath="/pages/what.html"
      />

      <main id="main-content">
        <section className="page-header-banner text-center">
          <div className="container">
            <span className="section-badge mb-2">Our Mission in Action</span>
            <h1 className="mb-3">What We Do</h1>
            <p>
              Impact in society through women both the young and old.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-5 bg-white border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="section-badge">Empowerment</span>
                <h2 className="mb-4">Impact in society through women both the young and old.</h2>
                <p className="lead text-muted">
                  FEEM is an organization with the aim of causing a positive impact in
                  society through women both the young and old.
                </p>
                <p className="text-muted">
                  We have identified that, to solve society's numerous problems of which
                  poverty is one, there is the need to invest in women especially in
                  their education.
                </p>
                <p className="text-muted">
                  By pairing evidence-based community research with direct interventions—such
                  as sanitary pad distribution, self-esteem workshops, and vocational
                  soap and bead craftsmanship—we break cycles of vulnerability.
                </p>
                <div className="mt-4">
                  <Link to="/programs" className="btn btn-feem-primary me-3">
                    Our Programs
                  </Link>
                  <Link to="/donate" className="btn btn-feem-accent">
                    Support Our Work
                  </Link>
                </div>
              </div>

              <div className="col-lg-6">
                <img
                  src="/assets/images/story-2.webp"
                  alt="Young girls learning and smiling together"
                  className="img-fluid rounded border"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span className="section-badge">Interventions</span>
              <h2>What we do — offer the society special needs</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: '640px' }}>
                Holistic programs designed to protect, educate, and equip women and
                girls across diverse communities.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="feem-card h-100 p-4">
                  <div className="mb-3">
                    <img src="/assets/images/pink.webp" alt="Decision making" width="48" height="48" />
                  </div>
                  <h3 className="h5 mb-2">Informed Decision Making</h3>
                  <p className="text-muted small m-0">
                    Equipping young girls with factual sexual and reproductive health
                    education, body literacy, and the confidence to make safe, healthy
                    decisions.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feem-card h-100 p-4">
                  <div className="mb-3">
                    <img src="/assets/images/green.webp" alt="Research" width="48" height="48" />
                  </div>
                  <h3 className="h5 mb-2">Action Research</h3>
                  <p className="text-muted small m-0">
                    Collaborating with public health researchers from University of Cape
                    Coast to examine gender-based violence, adolescent pregnancy, and
                    school retention.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feem-card h-100 p-4">
                  <div className="mb-3">
                    <img src="/assets/images/blue.webp" alt="Education" width="48" height="48" />
                  </div>
                  <h3 className="h5 mb-2">Educational Support</h3>
                  <p className="text-muted small m-0">
                    Providing essential learning materials, books, uniform assistance, and
                    scholarships for underprivileged girls facing drop-out risks.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feem-card h-100 p-4">
                  <div className="mb-3">
                    <img src="/assets/images/orange.webp" alt="Livelihood" width="48" height="48" />
                  </div>
                  <h3 className="h5 mb-2">Livelihood &amp; Vocational Training</h3>
                  <p className="text-muted small m-0">
                    Conducting hands-on workshops in liquid soap making, bead crafting,
                    and micro-enterprise skills that yield independent income for young
                    women.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feem-card h-100 p-4">
                  <div className="mb-3">
                    <img src="/assets/images/yellow.webp" alt="Menstrual Dignity" width="48" height="48" />
                  </div>
                  <h3 className="h5 mb-2">Menstrual Health &amp; Dignity</h3>
                  <p className="text-muted small m-0">
                    Distributing sanitary pads through 'Pads for Progress' to eliminate
                    period absenteeism and fight cultural stigma in rural schools.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feem-card h-100 p-4">
                  <div className="mb-3">
                    <img src="/assets/images/pink.webp" alt="Advocacy" width="48" height="48" />
                  </div>
                  <h3 className="h5 mb-2">Gender-Based Violence Advocacy</h3>
                  <p className="text-muted small m-0">
                    Creating safe community spaces, reporting referral paths, and school
                    clubs that combat domestic abuse, child marriage, and coercive
                    relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Form Section */}
        <section className="py-5 bg-white border-top border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <span className="section-badge">Get Involved</span>
                <h2>You can contribute to provide a better life for both mothers &amp; girls</h2>
                <p className="text-muted mb-4">
                  Join our passionate team of volunteers, peer mentors, and community
                  educators. Every contribution fuels life-changing programs on the
                  ground.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/donate" className="btn btn-feem-accent">
                    Donate Today
                  </Link>
                  <Link to="/partnership" className="btn btn-feem-outline">
                    Partner With Us
                  </Link>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="feem-surface-box">
                  <h3 className="h5 mb-3 fw-bold">Send an Inquiry</h3>
                  <form onSubmit={handleSubmit} noValidate>
                    <input
                      type="text"
                      name="website_hp"
                      value={formData.website_hp}
                      onChange={handleInputChange}
                      className="feem-hp-field"
                      tabIndex="-1"
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    <div className="row g-3 mb-3">
                      <div className="col-6">
                        <label className="form-label" htmlFor="whatFirstName">First Name *</label>
                        <input
                          id="whatFirstName"
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-6">
                        <label className="form-label" htmlFor="whatLastName">Last Name *</label>
                        <input
                          id="whatLastName"
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="whatEmail">Email Address *</label>
                      <input
                        id="whatEmail"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="whatMessage">Your Message *</label>
                      <textarea
                        id="whatMessage"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-control"
                        rows="3"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-feem-primary w-100"
                      disabled={status.state === 'submitting'}
                    >
                      {status.state === 'submitting' ? 'Submitting...' : 'Send Message'}
                    </button>

                    <FormAlert
                      state={status.state}
                      message={status.message}
                      onDismiss={() => setStatus({ state: 'idle', message: '' })}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

