import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FormAlert from '../components/FormAlert';
import { submitToFormService } from '../utils/formSubmit';

export default function Resources() {
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
      setStatus({ state: 'error', message: 'Please complete all required fields.' });
      return;
    }
    setStatus({ state: 'submitting', message: 'Sending inquiry...' });
    const res = await submitToFormService(
      { ...formData, formType: 'Resources Research Inquiry' },
      'Resources Research Inquiry'
    );
    if (res.ok) {
      setStatus({ state: 'success', message: 'Thank you! Your research inquiry has been sent.' });
      setFormData({ firstName: '', lastName: '', email: '', message: '', website_hp: '' });
    } else {
      setStatus({ state: 'error', message: res.error || 'Submission failed.' });
    }
  };

  const researchTopics = [
    {
      title: 'Gender Based Violence',
      slug: '/gender',
      image: '/assets/images/gender.webp',
      description:
        'Gender-based violence (GBV) refers to harmful acts directed at individuals based on their gender. Rooted in power imbalances, WHO and UN estimates show almost 1 in 3 women globally experience intimate partner or non-partner violence.'
    },
    {
      title: 'Sexual Health & Reproductive Rights',
      slug: '/sexual',
      image: '/assets/images/sexual.webp',
      description:
        'Equipping adolescent girls with evidence-based guidance on family planning, contraceptive choices, pregnancy prevention, and STI awareness to foster body autonomy.'
    },
    {
      title: 'Building Self Esteem',
      slug: '/building',
      image: '/assets/images/self.webp',
      description:
        'Nurturing a healthy self-concept and resilient inner conviction so young girls resist toxic relationships, withstand peer pressure, and aspire for higher goals.'
    },
    {
      title: 'Educational Support & Scholarships',
      slug: '/scholarship',
      image: '/assets/images/research3.webp',
      description:
        'Addressing economic hurdles that force young women out of school through tuition aids, books, and educational supplies that protect academic continuity.'
    },
    {
      title: 'Menstrual Hygiene Management',
      slug: '/menstrual',
      image: '/assets/images/resources-home.webp',
      description:
        'Ending period poverty and school absenteeism through community sanitary pad drives and comprehensive bodily literacy sessions in basic schools.'
    }
  ];

  return (
    <>
      <SEO
        title="FEEM | RESOURCES & RESEARCH"
        description="Access FEEM's research papers, educational toolkits, and community guides on gender-based violence, sexual health, menstrual dignity, and adolescent self-esteem."
        canonicalPath="/pages/ResearchResource.html"
      />

      <main id="main-content">
        <section className="page-header-banner text-center">
          <div className="container">
            <span className="section-badge mb-2">Knowledge Hub</span>
            <h1 className="mb-3">Resources &amp; Research</h1>
            <p>
              Reliable, evidence-backed educational materials to empower women and girls.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-5 bg-white border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-9">
                <span className="section-badge">Welcome</span>
                <h2 className="mb-4">Empowering Through Accessible Knowledge</h2>
                <p className="lead text-muted">
                  Welcome to our resource page. We believe that access to reliable
                  information is key to empowering women and girls, fostering informed
                  decision-making, and transforming communities.
                </p>
                <p className="text-muted">
                  Our materials are compiled in collaboration with community researchers,
                  public health educators, and academic mentors to provide actionable
                  guidance for students, educators, and social workers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Topics Cards */}
        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span className="section-badge">Core Focus</span>
              <h2>Researches &amp; Guides</h2>
              <p className="text-muted">Explore in-depth topics and downloadable resources below</p>
            </div>

            <div className="row g-4">
              {researchTopics.map((topic) => (
                <div key={topic.title} className="col-md-6 col-lg-4">
                  <div className="feem-card h-100 overflow-hidden d-flex flex-column">
                    <img
                      src={topic.image}
                      alt={topic.title}
                      className="w-100"
                      style={{ height: '200px', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div className="p-4 d-flex flex-column flex-grow-1">
                      <h3 className="h5 mb-2">{topic.title}</h3>
                      <p className="text-muted small mb-4 flex-grow-1">
                        {topic.description}
                      </p>
                      <Link to={topic.slug} className="btn btn-feem-outline btn-sm mt-auto">
                        Read In-Depth Guide <i className="bi bi-arrow-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contributor Form */}
        <section className="py-5 bg-white border-top border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <span className="section-badge">Collaborate</span>
                <h2>You can contribute to provide a better life for both mothers &amp; girls</h2>
                <p className="text-muted mb-4">
                  Are you a researcher, educator, or public health practitioner? Share
                  insights, sponsor academic studies, or join our curriculum review team.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/get-involved" className="btn btn-feem-primary">
                    Join As Volunteer
                  </Link>
                  <Link to="/donate" className="btn btn-feem-accent">
                    Donate to Research Fund
                  </Link>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="feem-surface-box">
                  <h3 className="h5 mb-3 fw-bold">Request or Share Research</h3>
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
                        <label className="form-label" htmlFor="resFirstName">First Name *</label>
                        <input
                          id="resFirstName"
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-6">
                        <label className="form-label" htmlFor="resLastName">Last Name *</label>
                        <input
                          id="resLastName"
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
                      <label className="form-label" htmlFor="resEmail">Email Address *</label>
                      <input
                        id="resEmail"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="resMessage">Message / Topic *</label>
                      <textarea
                        id="resMessage"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-control"
                        rows="3"
                        placeholder="Tell us about your research interest or resource request..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-feem-primary w-100"
                      disabled={status.state === 'submitting'}
                    >
                      {status.state === 'submitting' ? 'Submitting...' : 'Send Request'}
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

