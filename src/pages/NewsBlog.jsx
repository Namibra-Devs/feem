import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts, eventsList } from '../data/siteData';

export default function NewsBlog() {
  return (
    <>
      <SEO
        title="FEEM | NEWS BLOG"
        description="Latest news, field updates, articles, and educational insights from the Female Empowerment Initiative (FEEM)."
        canonicalPath="/pages/newsblog.html"
      />

      <main id="main-content">
        <section className="page-header-banner text-center">
          <div className="container">
            <span className="section-badge mb-2">Our Stories</span>
            <h1 className="mb-3">News &amp; Updates</h1>
            <p>
              Stay updated with the latest community initiatives, educational breakthroughs, and stories of change.
            </p>
          </div>
        </section>

        {/* Featured Story */}
        <section className="py-5 bg-white border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <img
                  src="/assets/images/act1.webp"
                  alt="Crafting Confidence Soap and Bead Skills"
                  className="img-fluid rounded border"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <span className="section-badge">Featured Update</span>
                <h2 className="mb-3">Crafting Confidence: Soap &amp; Bead Skills for Girls</h2>
                <p className="text-muted">
                  Empowering girls with creative, practical skills in soap and bead making—fostering
                  self-reliance, dignity, and viable micro-enterprise livelihoods.
                </p>
                <p className="text-muted">
                  Through this initiative, participants gain hands-on chemistry knowledge, hygiene
                  safety standards, and basic bookkeeping skills, allowing them to produce essential
                  items for their families and earn income to support their schooling.
                </p>
                <Link to="/blog-post" className="btn btn-feem-primary mt-2">
                  Read Full Article <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span className="section-badge">Articles</span>
              <h2>Latest Publications &amp; Reflections</h2>
            </div>

            <div className="row g-4">
              {blogPosts.map((post) => (
                <div key={post.id} className="col-md-6">
                  <div className="feem-card h-100 overflow-hidden d-flex flex-column">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-100"
                      style={{ height: '220px', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div className="p-4 d-flex flex-column flex-grow-1">
                      <div className="text-muted small mb-2">
                        <i className="bi bi-clock me-1"></i> {post.date}
                      </div>
                      <h3 className="h5 mb-2">{post.title}</h3>
                      <p className="text-muted small mb-4 flex-grow-1">
                        {post.excerpt}
                      </p>
                      <Link to="/blog-post" className="btn btn-feem-outline btn-sm align-self-start mt-auto">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Events Section from old newsblog */}
        <section className="py-5 bg-white border-top border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="text-center mb-5">
              <span className="section-badge">Calendar</span>
              <h2>Explore Our Events</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: '640px' }}>
                Join our ongoing charitable outreaches, sanitary product drives, and community advocacy forums.
              </p>
            </div>

            <div className="row g-4">
              {eventsList.slice(0, 3).map((ev) => (
                <div key={ev.id} className="col-md-4">
                  <div className="feem-card h-100 p-4 d-flex flex-column">
                    <img
                      src={ev.image}
                      alt={ev.title}
                      className="rounded mb-3"
                      style={{ height: '180px', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <span className="text-muted small mb-1">{ev.location}</span>
                    <h3 className="h6 mb-2">{ev.title}</h3>
                    <p className="small text-muted mb-3 flex-grow-1">{ev.description}</p>
                    <Link to="/events" className="small fw-bold text-decoration-none mt-auto">
                      View Event <i className="bi bi-chevron-right small"></i>
                    </Link>
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

