import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, quickLinks } from '../data/siteData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [honeypot, setHoneypot] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    // Spam bot check
    if (honeypot) {
      setStatus({ state: 'error', message: 'Spam submission detected.' });
      return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ state: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setStatus({ state: 'submitting', message: 'Subscribing...' });

    const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT;

    try {
      if (formEndpoint && !formEndpoint.includes('YOUR_FORM_ID_HERE')) {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            formType: 'Newsletter Subscription',
            email: email,
            timestamp: new Date().toISOString()
          })
        });

        if (response.ok) {
          setStatus({
            state: 'success',
            message: 'Thank you for subscribing to FEEM updates!'
          });
          setEmail('');
        } else {
          throw new Error('Subscription service error');
        }
      } else {
        // Fallback simulation when form service endpoint is not yet configured
        setTimeout(() => {
          setStatus({
            state: 'success',
            message: 'Thank you for subscribing! (Demo: configure VITE_FORM_ENDPOINT to receive submissions).'
          });
          setEmail('');
        }, 500);
      }
    } catch (err) {
      setStatus({
        state: 'error',
        message: 'Could not connect to subscription service. Please try again later.'
      });
    }
  };

  return (
    <footer className="feem-footer" role="contentinfo">
      <div className="container">
        <div className="row g-4 mb-4">
          {/* Column 1: Organization Summary & Contact */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <img
                src="/assets/images/feem-logo.webp"
                alt="FEEM Logo"
                width="48"
                height="46"
              />
            </div>
            <p className="mb-3">
              {siteConfig.description}
            </p>
            <div className="d-flex flex-column gap-1">
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-decoration-none text-white d-flex align-items-center gap-2"
                aria-label={`Call FEEM at ${siteConfig.phone}`}
              >
                <i className="bi bi-telephone-fill text-accent"></i>
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-decoration-none text-white d-flex align-items-center gap-2"
                aria-label={`Email FEEM at ${siteConfig.email}`}
              >
                <i className="bi bi-envelope-fill text-accent"></i>
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-4 col-md-6">
            <h4>Quick Links</h4>
            <div className="row g-2">
              <div className="col-6">
                <ul className="footer-links">
                  {quickLinks.slice(0, 6).map((link) => (
                    <li key={link.path}>
                      <Link to={link.path} className="text-decoration-none">
                        <i className="bi bi-chevron-right me-1 small"></i>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-6">
                <ul className="footer-links">
                  {quickLinks.slice(6).map((link) => (
                    <li key={link.path}>
                      <Link to={link.path} className="text-decoration-none">
                        <i className="bi bi-chevron-right me-1 small"></i>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3: Newsletter & Social */}
          <div className="col-lg-4 col-md-12">
            <h4>Stay Connected</h4>
            <p className="mb-3">
              Subscribe to our newsletter to receive stories, updates, and upcoming outreach news.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mb-3" noValidate>
              {/* Spam Honeypot */}
              <input
                type="text"
                name="website_hp"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="feem-hp-field"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status.state === 'submitting'}
                  aria-label="Email address for newsletter"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-feem-accent"
                  disabled={status.state === 'submitting'}
                  aria-label="Subscribe to newsletter"
                >
                  {status.state === 'submitting' ? '...' : 'Join'}
                </button>
              </div>

              {status.message && (
                <div
                  className={`small mt-2 p-2 rounded ${
                    status.state === 'success' ? 'bg-success text-white' : 'bg-danger text-white'
                  }`}
                  role="alert"
                >
                  {status.message}
                </div>
              )}
            </form>

            <h5 className="fs-6 mt-4 mb-2">Follow Us</h5>
            <div className="social-icons" aria-label="Social Media Links">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Follow FEEM on Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Follow FEEM on X (Twitter)"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Follow FEEM on Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Follow FEEM on LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Follow FEEM on TikTok"
              >
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="copyright-bar d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
          <span>© {new Date().getFullYear()} {siteConfig.shortName} — Female Empowerment Initiative. All rights reserved.</span>
          <span className="fst-italic">{siteConfig.tagline}</span>
        </div>
      </div>
    </footer>
  );
}

