import React from 'react';

export default function FormAlert({ state, message, onDismiss }) {
  if (!message) return null;

  const isSuccess = state === 'success';

  return (
    <div
      className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'} d-flex align-items-center justify-content-between p-3 mt-3`}
      role="alert"
    >
      <div className="d-flex align-items-center gap-2">
        <i className={`bi ${isSuccess ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill'} fs-5`}></i>
        <span>{message}</span>
      </div>
      {onDismiss && (
        <button
          type="button"
          className="btn-close"
          onClick={onDismiss}
          aria-label="Dismiss alert"
        ></button>
      )}
    </div>
  );
}

