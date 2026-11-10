import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | FEEM"
        description="The page you are looking for does not exist on FEEM Initiative."
      />

      <main id="main-content" className="py-5 text-center my-auto">
        <div className="container py-5">
          <span className="section-badge mb-2">404 Error</span>
          <h1 className="display-4 fw-bold mb-3">Page Not Found</h1>
          <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: '540px' }}>
            We could not find the page you were looking for. It may have been moved, renamed,
            or is temporarily unavailable.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/" className="btn btn-feem-primary">
              Return Home
            </Link>
            <Link to="/contact" className="btn btn-feem-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

