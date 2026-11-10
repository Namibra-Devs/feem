import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FormAlert from '../components/FormAlert';
import { submitToFormService } from '../utils/formSubmit';

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    interest: 'Mentorship',
    message: '',
    website_hp: ''
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleVolunteerSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatus({ state: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ state: 'submitting', message: 'Submitting volunteer application...' });

    const result = await submitToFormService(
      { ...formData, formType: 'Volunteer Application' },
      'Volunteer Application'
    );

    if (result.ok) {
      setStatus({
        state: 'success',
        message: 'Thank you for stepping up to make a difference! Our coordinator will get in touch shortly.'
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        interest: 'Mentorship',
        message: '',
        website_hp: ''
      });
    } else {
      setStatus({ state: 'error', message: result.error || 'Failed to submit application.' });
    }
  };

  return (
    <>
      <SEO
        title="FEEM | GET INVOLVED"
        description="Join hands with FEEM as a volunteer, mentor, advocate, or partner to create lasting impact for women and girls in Ghana."
        canonicalPath="/pages/getinvolve.html"
      />

      <main id="main-content">
        <section className="page-header-banner text-center">
          <div className="container">
            <span className="section-badge mb-2">Be The Change</span>
            <h1 className="mb-3">Get Involved</h1>
            <p>
              Your skills, voice, and passion can ignite life-changing opportunities for young women.
            </p>
          </div>
        </section>

        {/* What You Can Do */}
        <section className="py-5 bg-white border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="text-center mb-5">
              <span className="section-badge">How You Can Help</span>
              <h2>What You Can Do To Make A Difference</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: '640px' }}>
                There are multiple ways to walk alongside our beneficiaries and support our mission.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="feem-card h-100 p-4 text-center">
                  <div className="mb-3">
                    <i className="bi bi-person-heart fs-1 text-primary"></i>
                  </div>
                  <h3 className="h5 mb-2">Volunteer &amp; Mentor</h3>
                  <p className="text-muted small mb-4">
                    Share your expertise as an academic tutor, vocational trainer, or life-skills
                    mentor for adolescent girls in our weekly club circles.
                  </p>
                  <a href="#volunteer-form" className="btn btn-feem-outline btn-sm mt-auto">
                    Apply to Volunteer
                  </a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feem-card h-100 p-4 text-center">
                  <div className="mb-3">
                    <i className="bi bi-gift-fill fs-1 text-accent"></i>
                  </div>
                  <h3 className="h5 mb-2">Donate Funds &amp; Supplies</h3>
                  <p className="text-muted small mb-4">
                    Directly sponsor sanitary pad packs, tuition materials, or vocational training
                    toolkits through our verified donation channels.
                  </p>
                  <Link to="/donate" className="btn btn-feem-accent btn-sm mt-auto">
                    Give Today
                  </Link>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feem-card h-100 p-4 text-center">
                  <div className="mb-3">
                    <i className="bi bi-megaphone-fill fs-1 text-secondary"></i>
                  </div>
                  <h3 className="h5 mb-2">Advocate &amp; Share</h3>
                  <p className="text-muted small mb-4">
                    Champion menstrual dignity and speak out against early child marriages and
                    gender-based violence within your sphere of influence.
                  </p>
                  <Link to="/resources" className="btn btn-feem-outline btn-sm mt-auto">
                    Explore Toolkits
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Partnership Banner */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <img
                  src="/assets/images/partner2.webp"
                  alt="Corporate and institutional partners"
                  className="img-fluid rounded border"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <span className="section-badge">Alliances</span>
                <h2>Join Hands With Us — Corporate &amp; Institutional Partnerships</h2>
                <p className="text-muted">
                  Your organizational support directly strengthens our programs, bringing in more
                  advantages and resources for adolescent girls in underserved schools.
                </p>
                <p className="text-muted">
                  We collaborate with forward-thinking corporations, donor foundations, and
                  civic organizations that prioritize female empowerment, UN Sustainable
                  Development Goals (SDGs 4, 5, and 10), and community upliftment.
                </p>
                <div className="mt-4">
                  <Link to="/partnership" className="btn btn-feem-primary">
                    Become a Partner <i className="bi bi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Form Section */}
        <section id="volunteer-form" className="py-5 bg-white border-top border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="feem-surface-box p-4 p-md-5">
                  <div className="text-center mb-4">
                    <span className="section-badge">Sign Up</span>
                    <h2>Volunteer Application Form</h2>
                    <p className="text-muted">
                      Tell us about your interests, background, and how you would love to get involved.
                    </p>
                  </div>

                  <form onSubmit={handleVolunteerSubmit} noValidate>
                    {/* Spam Honeypot */}
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
                        <label className="form-label" htmlFor="volFirstName">First Name *</label>
                        <input
                          id="volFirstName"
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="e.g. Ama"
                          required
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="volLastName">Last Name *</label>
                        <input
                          id="volLastName"
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="e.g. Mensah"
                          required
                        />
                      </div>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="volEmail">Email Address *</label>
                        <input
                          id="volEmail"
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
                        <label className="form-label" htmlFor="volInterest">Primary Area of Interest</label>
                        <select
                          id="volInterest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleInputChange}
                          className="form-select"
                        >
                          <option value="Mentorship">Adolescent Mentorship</option>
                          <option value="Vocational Skills">Vocational Skills (Soap/Beads)</option>
                          <option value="Health Education">Health Education &amp; SRHR</option>
                          <option value="Event Organization">Event Planning &amp; Outreach</option>
                          <option value="Media & Photography">Media, Photo &amp; Content</option>
                          <option value="General Support">General Community Support</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label" htmlFor="volMessage">Your Message / Skills &amp; Availability *</label>
                      <textarea
                        id="volMessage"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-control"
                        rows="4"
                        placeholder="Share a short note about why you want to volunteer and your availability..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-feem-primary btn-lg w-100"
                      disabled={status.state === 'submitting'}
                    >
                      {status.state === 'submitting' ? 'Submitting Application...' : 'Send Message'}
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

