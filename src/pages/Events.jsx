import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { eventsList, blogPosts } from '../data/siteData';

export default function Events() {
  return (
    <>
      <SEO
        title="FEEM | EVENTS & NEWS"
        description="Discover FEEM's impactful events dedicated to uplifting and empowering girls in Ghana through workshops, charity outreaches, and health forums."
        canonicalPath="/pages/events.html"
      />

      <main id="main-content">
        <section className="page-header-banner text-center">
          <div className="container">
            <span className="section-badge mb-2">Calendar &amp; Activities</span>
            <h1 className="mb-3">Events</h1>
            <p>
              Discover our impactful events dedicated to uplifting and empowering girls across Ghana.
            </p>
          </div>
        </section>

        {/* Featured Hero Event */}
        <section className="py-5 bg-white border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <img
                  src="/assets/images/act1.webp"
                  alt="Soap and bead making session in Ekon"
                  className="img-fluid rounded border"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <span className="section-badge">Featured Event</span>
                <h2 className="mb-3">Sparking creativity and skills through soap and bead-making sessions—crafting opportunities, one masterpiece at a time! 🧼📿</h2>
                <div className="d-flex flex-wrap gap-4 text-muted small mb-3">
                  <div>
                    <i className="bi bi-geo-alt-fill text-accent me-1"></i>
                    <strong>Location:</strong> Ekon, Central Region
                  </div>
                  <div>
                    <i className="bi bi-mic-fill text-primary me-1"></i>
                    <strong>Speaker:</strong> Akos
                  </div>
                </div>
                <p className="text-muted">
                  Join our hands-on vocational session where adolescent girls learn the practical craft
                  of liquid soap, disinfectant, and traditional jewelry bead crafting. These skills
                  unlock direct micro-enterprise livelihoods and confidence.
                </p>
                <div className="mt-4">
                  <Link to="/get-involved" className="btn btn-feem-primary me-3">
                    Register as Volunteer
                  </Link>
                  <Link to="/donate" className="btn btn-feem-accent">
                    Sponsor Event Supplies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Events Grid */}
        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span className="section-badge">Outreach Schedule</span>
              <h2>Featured Events</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: '640px' }}>
                Explore our recurring charity drives, school visits, and health education circles.
              </p>
            </div>

            <div className="row g-4">
              {eventsList.map((ev) => (
                <div key={ev.id} className="col-md-6 col-lg-4">
                  <div className="feem-card h-100 overflow-hidden d-flex flex-column">
                    <img
                      src={ev.image}
                      alt={ev.title}
                      className="w-100"
                      style={{ height: '220px', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div className="p-4 d-flex flex-column flex-grow-1">
                      <div className="d-flex justify-content-between text-muted small mb-2">
                        <span><i className="bi bi-calendar3 me-1"></i> {ev.date}</span>
                        <span><i className="bi bi-geo-alt me-1"></i> {ev.location}</span>
                      </div>
                      <h3 className="h5 mb-2">{ev.title}</h3>
                      <p className="text-muted small mb-3 flex-grow-1">{ev.description}</p>
                      <div className="pt-2 border-top d-flex justify-content-between align-items-center mt-auto">
                        <span className="small text-muted">{ev.speaker}</span>
                        <Link to="/contact" className="small fw-bold text-decoration-none">
                          Inquire <i className="bi bi-chevron-right small"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Post Preview Section from old events page */}
        <section className="py-5 bg-white border-top border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
              <div>
                <span className="section-badge">From The Field</span>
                <h2>Our News Blog</h2>
                <p className="text-muted m-0">Stories and articles from our community events</p>
              </div>
              <Link to="/news-blog" className="btn btn-feem-outline mt-3 mt-md-0">
                View All Posts
              </Link>
            </div>

            <div className="row g-4">
              {blogPosts.slice(0, 2).map((post) => (
                <div key={post.id} className="col-md-6">
                  <div className="feem-card h-100 p-4 d-flex flex-column flex-sm-row gap-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="rounded"
                      style={{ width: '130px', height: '130px', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div>
                      <span className="small text-muted">{post.date}</span>
                      <h3 className="h6 mb-2">{post.title}</h3>
                      <p className="small text-muted mb-3">{post.excerpt}</p>
                      <Link to="/blog-post" className="small fw-bold text-decoration-none">
                        Read Story <i className="bi bi-chevron-right small"></i>
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

