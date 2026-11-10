import React, { useEffect } from 'react';

export default function Lightbox({ item, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!item) return null;

  return (
    <div
      className="feem-lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Preview: ${item.title}`}
    >
      <div
        className="feem-lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="feem-lightbox-close"
          onClick={onClose}
          aria-label="Close image preview"
        >
          <i className="bi bi-x-lg"></i>
        </button>

        {/* Image Display */}
        <div className="text-center bg-black d-flex align-items-center justify-content-center" style={{ minHeight: '380px', maxHeight: '70vh' }}>
          <img
            src={item.src}
            alt={item.title}
            className="img-fluid"
            style={{ maxHeight: '70vh', objectFit: 'contain' }}
          />
        </div>

        {/* Info & Controls */}
        <div className="p-3 p-md-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <span className="badge bg-secondary">{item.album}</span>
              {item.isLarge && (
                <span className="opt-flag-badge">
                  <i className="bi bi-exclamation-triangle-fill"></i> {item.sizeKb} KB (Flagged for optimization)
                </span>
              )}
            </div>
            <h5 className="mb-1 fw-bold">{item.title}</h5>
            <p className="text-muted small m-0">{item.caption}</p>
          </div>

          <div className="d-flex align-items-center gap-2 ms-auto">
            <button
              className="feem-lightbox-nav-btn"
              onClick={onPrev}
              disabled={!hasPrev}
              aria-label="Previous image"
              style={{ opacity: hasPrev ? 1 : 0.4 }}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              className="feem-lightbox-nav-btn"
              onClick={onNext}
              disabled={!hasNext}
              aria-label="Next image"
              style={{ opacity: hasNext ? 1 : 0.4 }}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

