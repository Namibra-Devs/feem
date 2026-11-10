import React, { useState } from 'react';
import SEO from '../components/SEO';
import FormAlert from '../components/FormAlert';
import { submitToFormService } from '../utils/formSubmit';

export default function Partnership() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    message: '',
    termsCheck: false,
    website_hp: ''
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatus({ state: 'error', message: 'Please complete all required fields.' });
      return;
    }

    if (!formData.termsCheck) {
      setStatus({
        state: 'error',
        message: 'Please accept the terms and conditions before submitting.'
      });
      return;
    }

    setStatus({ state: 'submitting', message: 'Submitting partnership inquiry...' });

    const result = await submitToFormService(
      {
        ...formData,
        formType: 'Partnership Inquiry'
      },
      'Partnership Inquiry'
    );

    if (result.ok) {
      setStatus({
        state: 'success',
        message:
          'Thank you for your interest in partnering with FEEM! Our executive team will review your message and contact you promptly.'
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        message: '',
        termsCheck: false,
        website_hp: ''
      });
    } else {
      setStatus({ state: 'error', message: result.error || 'Submission failed.' });
    }
  };

  return (
    <>
      <SEO
        title="FEEM | PARTNERSHIP"
        description="Partner with Female Empowerment Initiative (FEEM). Corporate, foundation, and civic partnerships to expand education and dignity for girls in Ghana."
        canonicalPath="/pages/partnership.html"
      />

      <main id="main-content">
        <section className="page-header-banner text-center">
          <div className="container">
            <span className="section-badge mb-2">Collaborative Impact</span>
            <h1 className="mb-3">Become a Partner</h1>
            <p>
              Join us in making a difference. Partner with us to scale life-changing opportunities for young women.
            </p>
          </div>
        </section>

        <section className="py-5 bg-white border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <img
                  src="/assets/images/part-img.webp"
                  alt="Partners working together for female empowerment"
                  className="img-fluid rounded border mb-4"
                  loading="lazy"
                />
                <span className="section-badge">Why Partner</span>
                <h2 className="h3 mb-3">Creating Synergies for Lasting Change</h2>
                <p className="text-muted">
                  Partnership is one of our fundamental core values. By aligning our grass-roots
                  operational reach with institutional donors, corporate CSR initiatives, and
                  academic researchers, we maximize sustainable social return on investment.
                </p>
                <ul className="list-unstyled text-muted d-flex flex-column gap-2 mb-0">
                  <li><i className="bi bi-check-circle-fill text-accent me-2"></i> Targeted, high-accountability rural outreach.</li>
                  <li><i className="bi bi-check-circle-fill text-accent me-2"></i> Transparent field impact reporting and donor metrics.</li>
                  <li><i className="bi bi-check-circle-fill text-accent me-2"></i> Direct alignment with UN SDGs 4, 5, and 10.</li>
                </ul>
              </div>

              <div className="col-lg-6">
                <div className="feem-surface-box p-4 p-md-5">
                  <h3 className="h4 mb-3 fw-bold">Partnership Inquiry Form</h3>
                  <p className="text-muted small mb-4">
                    Fill out the form below to initiate a strategic partnership discussion.
                  </p>

                  <form onSubmit={handleSubmit} noValidate>
                    {/* Honeypot */}
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
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="partFirstName">First Name *</label>
                        <input
                          id="partFirstName"
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="partLastName">Last Name *</label>
                        <input
                          id="partLastName"
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="partEmail">Email Address *</label>
                        <input
                          id="partEmail"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="corporate@org.com"
                          required
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="partOrg">Company / Institution</label>
                        <input
                          id="partOrg"
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="Organization Name"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="partMessage">Your Message / Partnership Vision *</label>
                      <textarea
                        id="partMessage"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-control"
                        rows="4"
                        placeholder="Tell us about your organization and how you'd like to collaborate..."
                        required
                      ></textarea>
                    </div>

                    <div className="form-check mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="partTermsCheck"
                        name="termsCheck"
                        checked={formData.termsCheck}
                        onChange={handleInputChange}
                        required
                      />
                      <label className="form-check-label small text-muted" htmlFor="partTermsCheck">
                        I agree to the terms, privacy guidelines, and organizational principles of FEEM.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-feem-primary btn-lg w-100"
                      disabled={status.state === 'submitting'}
                    >
                      {status.state === 'submitting' ? 'Submitting...' : 'Submit Partnership Request'}
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

