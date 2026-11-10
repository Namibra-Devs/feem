/**
 * Universal form submission utility for FEEM forms.
 * Wires contact, volunteer, partnership, newsletter, and donation forms
 * to the configured form service endpoint (e.g. Formspree, Web3Forms, Getform).
 */

export async function submitToFormService(formData, formTitle = 'Form Submission') {
  // Check anti-spam honeypot
  if (formData.website_hp || formData.hp_field) {
    console.warn('Bot submission blocked via honeypot.');
    return {
      ok: false,
      error: 'Submission could not be completed. Please try again without automated scripts.'
    };
  }

  // Remove honeypot fields before submitting
  const cleanData = { ...formData };
  delete cleanData.website_hp;
  delete cleanData.hp_field;

  const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  try {
    // If Web3Forms access key is supplied
    if (web3FormsKey) {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3FormsKey,
          subject: `FEEM ${formTitle}: ${cleanData.email || cleanData.name || 'New Submission'}`,
          ...cleanData
        })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        return { ok: true, data };
      }
      return { ok: false, error: data.message || 'Error sending submission to Web3Forms.' };
    }

    // Standard Formspree / REST endpoint
    if (endpoint && !endpoint.includes('YOUR_FORM_ID_HERE')) {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          _subject: `FEEM ${formTitle}`,
          submissionDate: new Date().toISOString(),
          ...cleanData
        })
      });

      if (res.ok) {
        return { ok: true };
      } else {
        const errorData = await res.json().catch(() => ({}));
        return {
          ok: false,
          error: errorData.error || 'The form service rejected the submission. Please check your credentials.'
        };
      }
    }

    // Demo/Development fallback when no live form endpoint is configured yet
    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
      ok: true,
      demoMode: true,
      message: 'Demo mode submission received successfully. (Configure VITE_FORM_ENDPOINT in .env for production email delivery).'
    };
  } catch (err) {
    console.error('Form submission exception:', err);
    return {
      ok: false,
      error: 'Network connection error. Please verify your internet connection and try again.'
    };
  }
}

