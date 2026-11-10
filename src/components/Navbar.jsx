import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks, siteConfig } from '../data/siteData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile navigation on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock background body scrolling on mobile when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('feem-menu-open');
    } else {
      document.body.classList.remove('feem-menu-open');
    }
    return () => {
      document.body.classList.remove('feem-menu-open');
    };
  }, [isOpen]);

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg fixed-top feem-navbar"
        aria-label="Main Navigation"
      >
        <div className="container position-relative">
          {/* Brand Logo */}
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center"
            aria-label="FEEM Initiative Home"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/assets/images/feem-logo.webp"
              alt="FEEM Initiative Logo"
              width="50"
              height="48"
            />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className={`navbar-toggler feem-menu-toggle border-0 p-2 ${isOpen ? 'is-active' : ''}`}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="feemNavbarContent"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className="feem-toggle-icon">
              <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'} fs-2 text-dark`}></i>
            </span>
          </button>

          {/* Navigation Menu (Desktop standard, Mobile full-screen circular reveal) */}
          <div
            className={`navbar-collapse feem-nav-menu ${isOpen ? 'is-open' : ''}`}
            id="feemNavbarContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-1 gap-lg-2">
              {navLinks.map((link) => {
                if (link.isHighlight) {
                  return (
                    <li key={link.path} className="nav-item ms-lg-2 my-2 my-lg-0">
                      <Link
                        to={link.path}
                        className="btn-nav-donate text-center d-block d-lg-inline-block text-decoration-none"
                        onClick={() => setIsOpen(false)}
                      >
                        <i className="bi bi-heart-fill me-1 text-white"></i> {link.name}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={link.path} className="nav-item">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `nav-link ${isActive ? 'active' : ''}`
                      }
                      end={link.path === '/'}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Footer inside fullscreen overlay */}
            <div className="feem-mobile-nav-footer d-lg-none text-center">
              <p className="small text-muted mb-2 fw-semibold fst-italic">
                {siteConfig.tagline}
              </p>
              <div className="d-flex justify-content-center gap-3">
                {siteConfig.socials.twitter && (
                  <a
                    href={siteConfig.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary fs-5"
                    aria-label="Twitter / X"
                  >
                    <i className="bi bi-twitter-x"></i>
                  </a>
                )}
                {siteConfig.socials.linkedin && (
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary fs-5"
                    aria-label="LinkedIn"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                )}
                {siteConfig.socials.tiktok && (
                  <a
                    href={siteConfig.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary fs-5"
                    aria-label="TikTok"
                  >
                    <i className="bi bi-tiktok"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
