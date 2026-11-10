import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { eventsList } from '../data/siteData';

export default function Programs() {
  const initiatives = [
    {
      title: 'Vocational Skills & Micro-Enterprise Training',
      subtitle: 'Crafting Confidence: Soap & Bead Making',
      image: '/assets/images/act1.webp',
      description:
        'Empowering girls with creative, practical skills in liquid soap, detergent, and traditional/modern bead craftsmanship—fostering self-reliance, micro-business acumen, and financial independence.'
    },
    {
      title: 'Pads for Progress (Menstrual Dignity)',
      subtitle: 'Ending Period Poverty in Rural Classrooms',
      image: '/assets/images/img1.webp',
      description:
        'Supplying free sanitary towels, menstrual cups/pads, and destigmatizing menstruation so that no girl loses academic hours or drops out due to lack of basic hygiene products.'
    },
    {
      title: 'Building Self-Esteem & Leadership Circles',
      subtitle: 'Cognitive Transformation & Assertiveness',
      image: '/assets/images/RAPH-PIXELS_98.webp',
      description:
        'Facilitating structured psychological and social empowerment workshops that teach girls self-worth, public speaking, assertiveness, and resilience against abusive grooming.'
    },
    {
      title: 'Educational Support & Academic Retention',
      subtitle: 'Tutoring, School Essentials & Scholarships',
      image: '/assets/images/new-get.webp',
      description:
        'Providing textbooks, school bags, uniforms, and targeted scholarship assistance for vulnerable girls transitioning between basic and secondary school levels.'
    }
  ];

  return (
    <>
      <SEO
        title="FEEM | PROGRAMS & ACTIVITIES"
        description="Discover FEEM's flagship programs: vocational skills training, Pads for Progress menstrual dignity, self-esteem building, and educational scholarships."
        canonicalPath="/pages/programs.html"
      />

      <main id="main-content">
        <section className="page-header-banner text-center">
          <div className="container">
            <span className="section-badge mb-2">Impact In Action</span>
            <h1 className="mb-3">Programs &amp; Activities</h1>
            <p>
              Empowering minds through sustainable skills, health literacy, and education.
            </p>
          </div>
        </section>

        {/* Initiatives Grid */}
        <section className="py-5 bg-white border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="text-center mb-5">
              <span className="section-badge">Key Initiatives</span>
              <h2>Explore Our Key Initiatives</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: '640px' }}>
                Each initiative directly dismantles barriers preventing young women and
                girls from achieving full social and economic self-sufficiency.
              </p>
            </div>

            <div className="row g-4">
              {initiatives.map((item, idx) => (
                <div key={item.title} className="col-md-6">
                  <div className="feem-card h-100 overflow-hidden d-flex flex-column">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-100"
                      style={{ height: '260px', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div className="p-4 d-flex flex-column flex-grow-1">
                      <span className="badge bg-light text-dark align-self-start mb-2">{item.subtitle}</span>
                      <h3 className="h4 mb-3">{item.title}</h3>
                      <p className="text-muted mb-4 flex-grow-1">{item.description}</p>
                      <div className="d-flex gap-2 mt-auto">
                        <Link to="/get-involved" className="btn btn-feem-outline btn-sm">
                          Volunteer Here
                        </Link>
                        <Link to="/donate" className="btn btn-feem-accent btn-sm">
                          Sponsor Initiative
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Weekly Activities Callout */}
        <section className="py-5">
          <div className="container text-center">
            <div className="feem-surface-box mx-auto" style={{ maxWidth: '780px' }}>
              <span className="section-badge">Schedule</span>
              <h2 className="h3 mb-3">Our Proposed Weekly Activities</h2>
              <p className="text-muted mb-4">
                Explore our recurring weekly calendar including mentorship circles, vocational
                crafting studios, and adolescent health clinics.
              </p>
              <Link to="/activities" className="btn btn-feem-primary">
                View Weekly Activities Schedule <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Events Section */}
        <section className="py-5 bg-white border-top" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
              <div>
                <span className="section-badge">Calendar</span>
                <h2>Upcoming Program Events</h2>
              </div>
              <Link to="/events" className="btn btn-feem-outline mt-3 mt-md-0">
                Full Events Schedule
              </Link>
            </div>

            <div className="row g-4">
              {eventsList.slice(0, 2).map((ev) => (
                <div key={ev.id} className="col-md-6">
                  <div className="feem-card p-4 d-flex flex-column flex-sm-row gap-4 h-100">
                    <img
                      src={ev.image}
                      alt={ev.title}
                      className="rounded"
                      style={{ width: '160px', height: '140px', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div>
                      <div className="text-muted small mb-1">
                        <i className="bi bi-calendar-check me-1"></i> {ev.date}
                      </div>
                      <h3 className="h5 mb-2">{ev.title}</h3>
                      <p className="text-muted small mb-2">{ev.description}</p>
                      <Link to="/events" className="small fw-bold text-decoration-none">
                        View Details <i className="bi bi-chevron-right small"></i>
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

