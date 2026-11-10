import React, { useState } from 'react';
import SEO from '../components/SEO';
import FormAlert from '../components/FormAlert';
import { siteConfig } from '../data/siteData';
import { submitToFormService } from '../utils/formSubmit';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
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

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      setStatus({ state: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ state: 'submitting', message: 'Sending your message...' });

    const result = await submitToFormService(
      { ...formData, formType: 'Contact Us Inquiry' },
      'Contact Us Inquiry'
    );

    if (result.ok) {
      setStatus({
        state: 'success',
        message: 'Thank you for contacting FEEM! We have received your message and will respond promptly.'
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        website_hp: ''
      });
    } else {
      setStatus({ state: 'error', message: result.error || 'Failed to submit form.' });
    }
  };

  return (
    <>
      <SEO
        title="FEEM | CONTACT US"
        description="Contact Female Empowerment Initiative (FEEM). Reach out for inquiries, partnerships, volunteer work, or questions about our programs."
        canonicalPath="/pages/contact.html"
      />

      <main id="main-content">
        <section className="page-header-banner text-center">
          <div className="container">
            <span className="section-badge mb-2">Reach Out</span>
            <h1 className="mb-3">Contact Us</h1>
            <p>
              We’re here to help. Reach out with questions, collaboration ideas, or general inquiries.
            </p>
          </div>
        </section>

        <section className="py-5 bg-white border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            {/* Quick Contact Cards */}
            <div className="row g-4 mb-5">
              <div className="col-md-4">
                <div className="feem-card h-100 p-4 text-center">
                  <i className="bi bi-telephone-fill fs-2 text-primary mb-3"></i>
                  <h2 className="h5 mb-2">Call Us</h2>
                  <p className="text-muted small mb-3">
                    Have questions? Call us to speak directly with our team.
                  </p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="fw-bold text-decoration-none"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feem-card h-100 p-4 text-center">
                  <i className="bi bi-envelope-open-fill fs-2 text-accent mb-3"></i>
                  <h2 className="h5 mb-2">Email Us</h2>
                  <p className="text-muted small mb-3">
                    Send an email and we’ll get back to you promptly.
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="fw-bold text-decoration-none text-break"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feem-card h-100 p-4 text-center">
                  <i className="bi bi-geo-alt-fill fs-2 text-secondary mb-3"></i>
                  <h2 className="h5 mb-2">Location</h2>
                  <p className="text-muted small mb-3">
                    Headquartered and active across Ghana, West Africa.
                  </p>
                  <span className="fw-bold text-dark">{siteConfig.location}</span>
                </div>
              </div>
            </div>

            {/* Contact Form Row */}
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="feem-surface-box p-4 p-md-5">
                  <div className="text-center mb-4">
                    <span className="section-badge">Send a Message</span>
                    <h2 className="h3">Get in Touch</h2>
                    <p className="text-muted">
                      Fill out the form below and our team will get back to you promptly.
                    </p>
                  </div>

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
                        <label className="form-label" htmlFor="contactFirstName">First Name *</label>
                        <input
                          id="contactFirstName"
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="Your First Name"
                          required
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="contactLastName">Last Name *</label>
                        <input
                          id="contactLastName"
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="Your Last Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="contactEmail">Email Address *</label>
                        <input
                          id="contactEmail"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="yourname@domain.com"
                          required
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="contactPhone">Phone Number *</label>
                        <input
                          id="contactPhone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="+233..."
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label" htmlFor="contactMessage">Your Message *</label>
                      <textarea
                        id="contactMessage"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-control"
                        rows="5"
                        placeholder="Write your message here..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-feem-primary btn-lg w-100"
                      disabled={status.state === 'submitting'}
                    >
                      {status.state === 'submitting' ? 'Sending Message...' : 'Submit Message'}
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

