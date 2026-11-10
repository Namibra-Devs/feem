import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    badge: 'Our Slogan',
    title: (
      <>
        For The <span style={{ color: 'var(--feem-accent)' }}>Good Of All.</span>
      </>
    ),
    isH1: true,
    lead: 'A prosperous and a promising future for Ghana devoid of poverty is inclusive of the growth and development of women and children. This is the overarching vision of FEEM (Female Empowerment Initiative).',
    primaryCta: { text: 'Make a Donation', link: '/donate', isAccent: true },
    secondaryCta: { text: 'Get Involved', link: '/get-involved' },
    image: '/assets/images/hero-img.webp',
    imageAlt: 'Empowered young women of FEEM Initiative smiling together'
  },
  {
    id: 2,
    badge: 'Health & Dignity',
    title: (
      <>
        Pads for <span style={{ color: 'var(--feem-accent)' }}>Progress.</span>
      </>
    ),
    isH1: false,
    lead: 'Supporting dignity and health—one pad at a time. Empowering adolescent girls with free sanitary supplies and menstrual health education to stop school absenteeism across rural Ghana.',
    primaryCta: { text: 'Donate Sanitary Packs', link: '/donate', isAccent: true },
    secondaryCta: { text: 'Explore Programs', link: '/programs' },
    image: '/assets/images/image14.webp',
    imageAlt: 'FEEM vocational and community hygiene session'
  },
  {
    id: 3,
    badge: 'Vocational Training',
    title: (
      <>
        Crafting <span style={{ color: 'var(--feem-accent)' }}>Confidence.</span>
      </>
    ),
    isH1: false,
    lead: 'Sparking creativity and self-reliance through practical soap and bead craftsmanship sessions. Equipping young women with monetizable skills to build independent futures.',
    primaryCta: { text: 'Read Success Stories', link: '/stories', isAccent: false },
    secondaryCta: { text: 'Partner With Us', link: '/partnership' },
    image: '/assets/images/home4.webp',
    imageAlt: 'Hands-on community empowerment session'
  },
  {
    id: 4,
    badge: 'Academic Retention',
    title: (
      <>
        Investing In <span style={{ color: 'var(--feem-accent)' }}>Her Education.</span>
      </>
    ),
    isH1: false,
    lead: 'We believe that to solve society’s numerous problems—of which poverty is one—there is an urgent need to invest in women and girls, especially in their formal schooling and leadership.',
    primaryCta: { text: 'Sponsor a Student', link: '/donate', isAccent: true },
    secondaryCta: { text: 'Learn About Us', link: '/about' },
    image: '/assets/images/image8.webp',
    imageAlt: 'School guidance counselling and educational mentoring session'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-play timer (5 seconds), pauses on user hover or focus for accessibility
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch swipe handling for mobile devices
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  // Keyboard navigation when slider has focus
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  return (
    <section
      className="hero-slider-section position-relative overflow-hidden"
      style={{ backgroundColor: 'var(--feem-bg)', borderBottom: '1px solid var(--feem-border)' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex="0"
      role="region"
      aria-roledescription="carousel"
      aria-label="FEEM Highlight Programs and Initiatives Carousel"
    >
      <div className="container py-4 py-lg-5">
        <div className="slider-wrapper position-relative">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;

            return (
              <div
                key={slide.id}
                className={`slide-item transition-fade ${isActive ? 'active d-block' : 'd-none'}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} of ${slides.length}: ${slide.badge}`}
                aria-hidden={!isActive}
              >
                <div className="row align-items-center g-4 g-lg-5 min-vh-50">
                  {/* Text Content */}
                  <div className="col-lg-7 order-2 order-lg-1">
                    <span className="section-badge mb-2">{slide.badge}</span>

                    {slide.isH1 ? (
                      <h1 className="display-4 fw-bold mb-3 text-dark">
                        {slide.title}
                      </h1>
                    ) : (
                      <h2 className="display-4 fw-bold mb-3 text-dark">
                        {slide.title}
                      </h2>
                    )}

                    <p className="lead mb-4 text-muted" style={{ maxWidth: '620px' }}>
                      {slide.lead}
                    </p>

                    <div className="d-flex flex-wrap gap-3">
                      <Link
                        to={slide.primaryCta.link}
                        className={`btn ${
                          slide.primaryCta.isAccent ? 'btn-feem-accent' : 'btn-feem-primary'
                        } btn-lg`}
                      >
                        {slide.primaryCta.text}
                      </Link>
                      <Link
                        to={slide.secondaryCta.link}
                        className="btn btn-feem-outline btn-lg"
                      >
                        {slide.secondaryCta.text}
                      </Link>
                    </div>
                  </div>

                  {/* Slide Image */}
                  <div className="col-lg-5 order-1 order-lg-2 text-center">
                    <div className="slider-image-wrapper position-relative">
                      <img
                        src={slide.image}
                        alt={slide.imageAlt}
                        className="img-fluid rounded border"
                        style={{
                          borderColor: 'var(--feem-border)',
                          maxHeight: '440px',
                          width: '100%',
                          objectFit: 'cover'
                        }}
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Bar (Controls & Indicators) */}
        <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top" style={{ borderColor: 'var(--feem-border)' }}>
          {/* Slide Indicators */}
          <div className="d-flex align-items-center gap-2" role="tablist" aria-label="Slide Selection">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`slider-indicator-btn ${idx === currentSlide ? 'active' : ''}`}
                aria-label={`Go to slide ${idx + 1}: ${slide.badge}`}
                aria-selected={idx === currentSlide}
                role="tab"
              >
                <span className="visually-hidden">{slide.badge}</span>
              </button>
            ))}
          </div>

          {/* Prev / Next Arrows */}
          <div className="d-flex align-items-center gap-2">
            <button
              type="button"
              className="btn btn-sm btn-feem-outline d-inline-flex align-items-center justify-content-center p-2"
              onClick={prevSlide}
              aria-label="Previous slide"
              style={{ width: '40px', height: '40px' }}
            >
              <i className="bi bi-chevron-left fs-6"></i>
            </button>
            <button
              type="button"
              className="btn btn-sm btn-feem-outline d-inline-flex align-items-center justify-content-center p-2"
              onClick={nextSlide}
              aria-label="Next slide"
              style={{ width: '40px', height: '40px' }}
            >
              <i className="bi bi-chevron-right fs-6"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

