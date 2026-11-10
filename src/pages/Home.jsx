import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FormAlert from '../components/FormAlert';
import HeroSlider from '../components/HeroSlider';
import { submitToFormService } from '../utils/formSubmit';
import { blogPosts, eventsList } from '../data/siteData';

export default function Home() {
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

  const handleVolunteerSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatus({ state: 'error', message: 'Please fill out all required fields.' });
      return;
    }

    setStatus({ state: 'submitting', message: 'Sending message...' });

    const result = await submitToFormService(
      { ...formData, formType: 'Home Quick Volunteer' },
      'Home Volunteer Inquiry'
    );

    if (result.ok) {
      setStatus({
        state: 'success',
        message: 'Thank you! Your message has been received. Our team will contact you soon.'
      });
      setFormData({ firstName: '', lastName: '', email: '', message: '', website_hp: '' });
    } else {
      setStatus({ state: 'error', message: result.error || 'Failed to submit form.' });
    }
  };

  return (
    <>
      <SEO
        title="FEEM | HOME"
        description="Female Empowerment Initiative (FEEM) - For The Good Of All. Advancing empowerment, education, and livelihood for women and girls in Ghana."
        canonicalPath="/"
      />

      <main id="main-content">
        {/* Dynamic Hero Slider Section */}
        <HeroSlider />

        {/* Advancing Empowerment Section */}
        <section className="py-5 bg-white border-top border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <img
                  src="/assets/images/core3.webp"
                  alt="FEEM Community Outreach and training"
                  className="img-fluid rounded border"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <span className="section-badge">Who We Are</span>
                <h2 className="mb-4">Advancing Empowerment For Women & Girls</h2>
                <p className="text-muted">
                  Female Empowerment Initiative is an organization (FEEM) with the aim of
                  causing a positive impact in society through women both the young and
                  old. We have identified that, to solve society's numerous problems of
                  which poverty is one, there is the need to invest in women especially in
                  their education.
                </p>
                <p className="text-muted">
                  We believe that through equal opportunities and non-discriminatory
                  treatments, women could realise their potentials and harness their
                  capabilities.
                </p>
                <div className="mt-4">
                  <Link to="/about" className="btn btn-feem-outline">
                    Learn More About Us <i className="bi bi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars / Our Work */}
        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span className="section-badge">Key Focus Areas</span>
              <h2>Our Core Pillars</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: '640px' }}>
                FEEM convenes events, provides education and core values to women and
                girls to unlock holistic community growth.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="feem-card h-100 p-4 text-center">
                  <div className="mb-3">
                    <img src="/assets/images/work.webp" alt="Our Work" width="64" height="64" />
                  </div>
                  <h3 className="h4 mb-3">What We Do</h3>
                  <p className="text-muted mb-4">
                    Providing specialized support, research, and life skills training that
                    empower women to lead independent and productive lives.
                  </p>
                  <Link to="/what" className="btn btn-feem-outline btn-sm mt-auto">
                    Explore Work
                  </Link>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feem-card h-100 p-4 text-center">
                  <div className="mb-3">
                    <img src="/assets/images/programs.webp" alt="Programs" width="64" height="64" />
                  </div>
                  <h3 className="h4 mb-3">Programs & Activities</h3>
                  <p className="text-muted mb-4">
                    From Pads for Progress to vocational soap and bead crafting, our weekly
                    activities nurture sustainable dignity and economic independence.
                  </p>
                  <Link to="/programs" className="btn btn-feem-outline btn-sm mt-auto">
                    View Programs
                  </Link>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feem-card h-100 p-4 text-center">
                  <div className="mb-3">
                    <img src="/assets/images/gallery.webp" alt="Gallery" width="64" height="64" />
                  </div>
                  <h3 className="h4 mb-3">Media & Gallery</h3>
                  <p className="text-muted mb-4">
                    Explore our visual journey through captivating moments from community
                    fieldwork, classroom sessions, and annual charity distributions.
                  </p>
                  <Link to="/gallery" className="btn btn-feem-outline btn-sm mt-auto">
                    Open Gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-5 bg-white border-top border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="text-center mb-5">
              <span className="section-badge">Know About Us</span>
              <h2>To make the lives of People & the community better.</h2>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="feem-surface-box h-100">
                  <div className="mb-3">
                    <img src="/assets/images/know1.webp" alt="Mission Icon" width="48" height="48" />
                  </div>
                  <h3 className="h5 mb-2">Our Mission</h3>
                  <p className="text-muted m-0">
                    Our aim is that girls become fully immersed in matters of their
                    body, health, and wellbeing to make informed choices. To empower women
                    and girls on leadership, SRHR, and educational support.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feem-surface-box h-100">
                  <div className="mb-3">
                    <img src="/assets/images/know2.webp" alt="Vision Icon" width="48" height="48" />
                  </div>
                  <h3 className="h5 mb-2">Our Vision</h3>
                  <p className="text-muted m-0">
                    To make the lives of people in communities, societies and nations
                    better through sustained investment in women and girls' education,
                    safety, and economic independence.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feem-surface-box h-100">
                  <div className="mb-3">
                    <img src="/assets/images/know3.webp" alt="Slogan Icon" width="48" height="48" />
                  </div>
                  <h3 className="h5 mb-2">Our Slogan</h3>
                  <p className="text-muted m-0">
                    <strong>For The Good Of All.</strong> We believe that an equitable,
                    peaceful, and prosperous society can only be built when every woman and
                    child has the tools to thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Events Section */}
        <section className="py-5">
          <div className="container">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
              <div>
                <span className="section-badge">Community Calendar</span>
                <h2>Upcoming & Recent Events</h2>
              </div>
              <Link to="/events" className="btn btn-feem-outline mt-3 mt-md-0">
                View All Events <i className="bi bi-calendar-event ms-1"></i>
              </Link>
            </div>

            <div className="row g-4">
              {eventsList.slice(0, 3).map((event) => (
                <div key={event.id} className="col-md-4">
                  <div className="feem-card h-100 overflow-hidden d-flex flex-column">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-100"
                      style={{ height: '200px', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div className="p-4 d-flex flex-column flex-grow-1">
                      <div className="d-flex align-items-center text-muted small mb-2 gap-2">
                        <i className="bi bi-geo-alt-fill text-accent"></i>
                        <span>{event.location}</span>
                      </div>
                      <h3 className="h5 mb-2">{event.title}</h3>
                      <p className="text-muted small mb-3 flex-grow-1">
                        {event.description}
                      </p>
                      <Link to="/events" className="fw-bold text-decoration-none mt-auto">
                        Event Details <i className="bi bi-chevron-right small"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Volunteer / Involve CTA Form Section */}
        <section className="py-5 bg-white border-top border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <span className="section-badge">Take Action</span>
                <h2>You can contribute to provide a better life for both mothers & girls</h2>
                <p className="text-muted mb-4">
                  Whether through volunteer mentorship, resource donations, or corporate
                  partnerships, your involvement creates generational transformation.
                  Send us a message to get involved with our field team.
                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-light p-3 rounded border">
                      <i className="bi bi-mortarboard-fill fs-4 text-primary"></i>
                    </div>
                    <div>
                      <h4 className="h6 mb-1">Educational Scholarships</h4>
                      <p className="small text-muted m-0">Sponsor school supplies and tuition for young girls.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-light p-3 rounded border">
                      <i className="bi bi-heart-pulse-fill fs-4 text-accent"></i>
                    </div>
                    <div>
                      <h4 className="h6 mb-1">Pads For Progress</h4>
                      <p className="small text-muted m-0">Provide sanitary towel kits to stop period poverty.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="feem-surface-box">
                  <h3 className="h4 mb-3">Join as a Volunteer</h3>
                  <form onSubmit={handleVolunteerSubmit} noValidate>
                    {/* Honeypot for spam protection */}
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
                        <label className="form-label" htmlFor="homeFirstName">First Name *</label>
                        <input
                          id="homeFirstName"
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
                        <label className="form-label" htmlFor="homeLastName">Last Name *</label>
                        <input
                          id="homeLastName"
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

                    <div className="mb-3">
                      <label className="form-label" htmlFor="homeEmail">Email Address *</label>
                      <input
                        id="homeEmail"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="yourname@domain.com"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="homeMessage">Your Message *</label>
                      <textarea
                        id="homeMessage"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-control"
                        rows="3"
                        placeholder="Tell us how you would like to help..."
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

        {/* Blog Section */}
        <section className="py-5">
          <div className="container">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
              <div>
                <span className="section-badge">News & Articles</span>
                <h2>Our News Blog</h2>
                <p className="text-muted m-0">Checkout our blogs for new updates and insights</p>
              </div>
              <Link to="/news-blog" className="btn btn-feem-outline mt-3 mt-md-0">
                View All Posts <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>

            <div className="row g-4">
              {blogPosts.slice(0, 4).map((post) => (
                <div key={post.id} className="col-md-6">
                  <div className="feem-card h-100 p-3 d-flex flex-column flex-sm-row gap-3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="rounded"
                      style={{ width: '130px', height: '130px', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div className="d-flex flex-column justify-content-between">
                      <div>
                        <span className="badge bg-light text-dark mb-1">{post.date}</span>
                        <h3 className="h6 mb-2">{post.title}</h3>
                        <p className="small text-muted mb-2 line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                      <Link to="/blog-post" className="small fw-bold text-decoration-none">
                        Read More <i className="bi bi-chevron-right small"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

