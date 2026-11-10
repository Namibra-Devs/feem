import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Lightbox from '../components/Lightbox';
import { albums, galleryItems } from '../data/galleryData';
import { blogPosts } from '../data/siteData';

export default function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const filteredItems =
    selectedAlbum === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.album === selectedAlbum);

  const activeItem =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  const handlePrev = () => {
    if (activeLightboxIndex > 0) {
      setActiveLightboxIndex(activeLightboxIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeLightboxIndex < filteredItems.length - 1) {
      setActiveLightboxIndex(activeLightboxIndex + 1);
    }
  };

  return (
    <>
      <SEO
        title="FEEM | GALLERY"
        description="Explore the photo gallery of Female Empowerment Initiative (FEEM). Visuals from our community field outreach, classroom sessions, and charity events."
        canonicalPath="/pages/gallery.html"
      />

      <main id="main-content">
        <section className="page-header-banner text-center">
          <div className="container">
            <span className="section-badge mb-2">Visual Moments</span>
            <h1 className="mb-3">Our Gallery</h1>
            <p>
              Explore our journey through captivating visuals in our gallery.
            </p>
          </div>
        </section>

        <section className="py-5 bg-white border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            {/* Header info */}
            <div className="text-center mb-4">
              <span className="section-badge">Photo Collection</span>
              <h2>Image Gallery</h2>
              <p className="text-muted">
                Each photograph captures real community transformation, smiles, and progress.
              </p>
            </div>

            {/* Album Grouping Filter Tabs */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
              {albums.map((album) => (
                <button
                  key={album}
                  type="button"
                  onClick={() => {
                    setSelectedAlbum(album);
                    setActiveLightboxIndex(null);
                  }}
                  className={`btn ${
                    selectedAlbum === album ? 'btn-feem-primary' : 'btn-feem-outline'
                  } btn-sm`}
                >
                  {album}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="row g-4">
              {filteredItems.map((item, index) => (
                <div key={item.id} className="col-6 col-md-4 col-lg-3">
                  <div
                    className="feem-card h-100 overflow-hidden position-relative d-flex flex-column"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setActiveLightboxIndex(index)}
                    role="button"
                    tabIndex="0"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveLightboxIndex(index);
                      }
                    }}
                    aria-label={`View enlarged photo: ${item.title}`}
                  >
                    <div className="position-relative overflow-hidden" style={{ height: '210px' }}>
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-100 h-100"
                        style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                        loading="lazy"
                      />
                      {/* Flag large images (>500KB) for optimization without changing originals */}
                      {item.isLarge && (
                        <div
                          className="position-absolute top-0 end-0 m-2"
                          title={item.optimizationFlag}
                        >
                          <span className="opt-flag-badge">
                            <i className="bi bi-speedometer2"></i> {item.sizeKb} KB
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-3 d-flex flex-column flex-grow-1 justify-content-between">
                      <div>
                        <span className="badge bg-light text-muted small mb-1">{item.album}</span>
                        <h3 className="h6 mb-1 text-truncate" title={item.title}>{item.title}</h3>
                        <p className="text-muted small m-0 line-clamp-2" style={{ fontSize: '0.82rem' }}>
                          {item.caption}
                        </p>
                      </div>
                      <div className="pt-2 text-accent small fw-bold mt-auto d-flex align-items-center gap-1">
                        <i className="bi bi-arrows-fullscreen"></i> View Lightbox
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Post Preview Section from old gallery page */}
        <section className="py-5">
          <div className="container">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
              <div>
                <span className="section-badge">Updates</span>
                <h2>Our News Blog</h2>
                <p className="text-muted m-0">Checkout our blogs for new updates and insights</p>
              </div>
              <Link to="/news-blog" className="btn btn-feem-outline mt-3 mt-md-0">
                View More Blog Posts
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
                      style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div>
                      <span className="small text-muted">{post.date}</span>
                      <h3 className="h6 mb-1">{post.title}</h3>
                      <p className="small text-muted mb-2">{post.excerpt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {activeItem && (
          <Lightbox
            item={activeItem}
            onClose={() => setActiveLightboxIndex(null)}
            onPrev={handlePrev}
            onNext={handleNext}
            hasPrev={activeLightboxIndex > 0}
            hasNext={activeLightboxIndex < filteredItems.length - 1}
          />
        )}
      </main>
    </>
  );
}

