import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FormAlert from '../components/FormAlert';
import DonateButton from '../components/DonateButton';
import donationDetails from '../data/donation';
import { submitToFormService } from '../utils/formSubmit';

export default function Donate() {
  // Pre-set amounts matching and modernizing the old page's $10 / GH₵ options
  const [selectedAmount, setSelectedAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('50');
  const [copiedKey, setCopiedKey] = useState(null);

  // Feature flag for Phase 2 online payments (ships disabled by default)
  const isOnlinePaymentEnabled =
    import.meta.env.VITE_ENABLE_ONLINE_DONATIONS === 'true' ||
    import.meta.env.NEXT_PUBLIC_ENABLE_ONLINE_DONATIONS === 'true';

  // "I have donated" form state
  const [donorForm, setDonorForm] = useState({
    name: '',
    amount: '',
    method: 'MTN Mobile Money',
    reference: '',
    contactInfo: '',
    message: '',
    website_hp: ''
  });
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleAmountClick = (amt) => {
    setSelectedAmount(amt);
    setCustomAmount(amt);
    setDonorForm((prev) => ({ ...prev, amount: amt }));
  };

  const handleCustomAmountChange = (e) => {
    const val = e.target.value;
    setCustomAmount(val);
    setSelectedAmount(null);
    setDonorForm((prev) => ({ ...prev, amount: val }));
  };

  const handleDonorFormChange = (e) => {
    const { name, value } = e.target;
    setDonorForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDonorFormSubmit = async (e) => {
    e.preventDefault();

    if (!donorForm.name || !donorForm.amount || !donorForm.reference || !donorForm.contactInfo) {
      setFormStatus({
        state: 'error',
        message: 'Please fill out all required fields: Your Name, Amount, Reference, and Email/Phone.'
      });
      return;
    }

    setFormStatus({ state: 'submitting', message: 'Recording your donation details...' });

    const result = await submitToFormService(
      {
        ...donorForm,
        formType: 'Donation Confirmation (I Have Donated)'
      },
      'Donation Confirmation'
    );

    if (result.ok) {
      setFormStatus({
        state: 'success',
        message:
          'Thank you for your generous gift! Your donation confirmation has been submitted to our team for verification and acknowledgment.'
      });
      setDonorForm({
        name: '',
        amount: '',
        method: 'MTN Mobile Money',
        reference: '',
        contactInfo: '',
        message: '',
        website_hp: ''
      });
    } else {
      setFormStatus({
        state: 'error',
        message: result.error || 'Unable to submit confirmation at this time.'
      });
    }
  };

  return (
    <>
      <SEO
        title="FEEM | DONATE"
        description="Support Female Empowerment Initiative (FEEM). Give via Bank Transfer, MTN Mobile Money, or Telecel Cash to fund scholarships, menstrual hygiene, and livelihood training."
        canonicalPath="/pages/donate.html"
      />

      <main id="main-content">
        {/* Banner Section matching old page title */}
        <section className="page-header-banner text-center">
          <div className="container">
            <span className="section-badge mb-2">Support Our Mission</span>
            <h1 className="mb-3">Make a Difference Today</h1>
            <p>
              Your generosity makes a direct difference in the lives of adolescent girls
              and vulnerable mothers across Ghana.
            </p>
          </div>
        </section>

        {/* Section: Make a Donation (Amount Selector) */}
        <section className="py-5 bg-white border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="text-center mb-4">
              <span className="section-badge">Contribution</span>
              <h2>Make a Donation</h2>
              <p className="text-muted">Choose or enter an amount you wish to contribute</p>
            </div>

            <div className="mx-auto" style={{ maxWidth: '640px' }}>
              <div className="d-flex align-items-center mb-3">
                <span className="input-group-text bg-light border-end-0 fw-bold px-3 py-2">
                  GH₵ / $
                </span>
                <input
                  type="number"
                  className="form-control form-control-lg border-start-0"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  min="1"
                  aria-label="Donation amount in Ghana Cedis or USD"
                />
              </div>

              {/* Amount options from old site */}
              <div className="d-flex flex-wrap gap-2 justify-content-center mt-3">
                {['10', '25', '50', '100', '250', '500'].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => handleAmountClick(amt)}
                    className={`btn ${
                      selectedAmount === amt ? 'btn-feem-primary' : 'btn-outline-secondary'
                    } px-3 py-2 fw-bold`}
                  >
                    GH₵ / ${amt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Ways to Give (Bank & Mobile Money loaded from data/donation.js) */}
        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span className="section-badge">Direct Channels</span>
              <h2>Ways to Give</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: '640px' }}>
                You can transfer directly using official Mobile Money (MoMo) or Bank wire.
                Click the copy button on each detail for easy pasting in your banking app.
              </p>
            </div>

            <div className="row g-4">
              {/* Mobile Money Details */}
              {donationDetails.mobileMoney.map((momo, idx) => (
                <div key={momo.network} className="col-md-6">
                  <div className="feem-card h-100 p-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-phone-fill fs-4 text-accent"></i>
                        <h3 className="h5 m-0">{momo.network}</h3>
                      </div>
                      <span className="badge bg-light text-dark">Mobile Money</span>
                    </div>

                    <div className="feem-surface-box mb-3">
                      <div className="mb-2">
                        <small className="text-muted d-block">Account Name</small>
                        <strong>{momo.accountName}</strong>
                      </div>
                      <div className="d-flex align-items-center justify-content-between pt-2 border-top">
                        <div>
                          <small className="text-muted d-block">Number / Merchant ID</small>
                          <span className="fw-bold font-monospace">{momo.merchantIdOrNumber}</span>
                        </div>
                        <button
                          type="button"
                          className={`copy-pill ${copiedKey === `momo-${idx}` ? 'copied' : ''}`}
                          onClick={() => handleCopy(momo.merchantIdOrNumber, `momo-${idx}`)}
                          aria-label={`Copy ${momo.network} number`}
                        >
                          <i className={`bi ${copiedKey === `momo-${idx}` ? 'bi-check2' : 'bi-clipboard'}`}></i>
                          {copiedKey === `momo-${idx}` ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>

                    <p className="small text-muted m-0">
                      <i className="bi bi-info-circle me-1"></i> {momo.instructions}
                    </p>
                  </div>
                </div>
              ))}

              {/* Bank Account Details */}
              <div className="col-12">
                <div className="feem-card p-4 p-md-5">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-bank2 fs-4 text-primary"></i>
                      <h3 className="h5 m-0">Official Bank Wire Details</h3>
                    </div>
                    <span className="badge bg-light text-dark">Local &amp; International</span>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6 col-lg-3">
                      <div className="feem-surface-box h-100 p-3">
                        <small className="text-muted d-block">Bank Name</small>
                        <span className="fw-bold">{donationDetails.bank.bankName}</span>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="feem-surface-box h-100 p-3">
                        <small className="text-muted d-block">Account Name</small>
                        <span className="fw-bold">{donationDetails.bank.accountName}</span>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="feem-surface-box h-100 p-3 d-flex flex-column justify-content-between">
                        <div>
                          <small className="text-muted d-block">Account Number</small>
                          <span className="fw-bold font-monospace">{donationDetails.bank.accountNumber}</span>
                        </div>
                        <button
                          type="button"
                          className={`copy-pill mt-2 ${copiedKey === 'bank-acc' ? 'copied' : ''}`}
                          onClick={() => handleCopy(donationDetails.bank.accountNumber, 'bank-acc')}
                          aria-label="Copy bank account number"
                        >
                          <i className={`bi ${copiedKey === 'bank-acc' ? 'bi-check2' : 'bi-clipboard'}`}></i>
                          {copiedKey === 'bank-acc' ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="feem-surface-box h-100 p-3 d-flex flex-column justify-content-between">
                        <div>
                          <small className="text-muted d-block">Branch / SWIFT</small>
                          <span className="fw-bold font-monospace">{donationDetails.bank.branch} / {donationDetails.bank.swiftCode}</span>
                        </div>
                        <button
                          type="button"
                          className={`copy-pill mt-2 ${copiedKey === 'swift' ? 'copied' : ''}`}
                          onClick={() => handleCopy(donationDetails.bank.swiftCode, 'swift')}
                          aria-label="Copy SWIFT code"
                        >
                          <i className={`bi ${copiedKey === 'swift' ? 'bi-check2' : 'bi-clipboard'}`}></i>
                          {copiedKey === 'swift' ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <p className="small text-muted mt-3 mb-0">
                    <i className="bi bi-info-circle me-1"></i> {donationDetails.bank.instructions}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 2: Online Payment Gateway (Controlled by Feature Flag) */}
        {isOnlinePaymentEnabled && (
          <section className="py-5 bg-white border-top border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
            <div className="container">
              <div className="text-center mb-4">
                <span className="badge bg-success mb-2">Phase 2: Online Gateway</span>
                <h2>Donate Online Securely</h2>
                <p className="text-muted">Pay instantly via card or mobile money through verified payment gateways</p>
              </div>

              <div className="mx-auto" style={{ maxWidth: '540px' }}>
                <DonateButton
                  amount={parseFloat(customAmount) || 50}
                  currency="GHS"
                  donorEmail={donorForm.contactInfo}
                  donorName={donorForm.name}
                />
              </div>
            </div>
          </section>
        )}

        {/* Section: "I have donated" Form */}
        <section className="py-5 bg-white border-top border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="feem-surface-box p-4 p-md-5">
                  <div className="text-center mb-4">
                    <span className="section-badge">Confirmation</span>
                    <h2>I Have Donated</h2>
                    <p className="text-muted">
                      Already completed your transfer? Fill out this quick form so we can confirm
                      your gift and issue your acknowledgment.
                    </p>
                  </div>

                  <form onSubmit={handleDonorFormSubmit} noValidate>
                    {/* Spam protection */}
                    <input
                      type="text"
                      name="website_hp"
                      value={donorForm.website_hp}
                      onChange={handleDonorFormChange}
                      className="feem-hp-field"
                      tabIndex="-1"
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    <div className="row g-3 mb-3">
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="donorName">Your Full Name *</label>
                        <input
                          id="donorName"
                          type="text"
                          name="name"
                          value={donorForm.name}
                          onChange={handleDonorFormChange}
                          className="form-control"
                          placeholder="e.g. Kwame Mensah"
                          required
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="donorAmount">Amount Donated (GH₵) *</label>
                        <input
                          id="donorAmount"
                          type="number"
                          name="amount"
                          value={donorForm.amount}
                          onChange={handleDonorFormChange}
                          className="form-control"
                          placeholder="e.g. 150"
                          min="1"
                          required
                        />
                      </div>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="donorMethod">Payment Method Used *</label>
                        <select
                          id="donorMethod"
                          name="method"
                          value={donorForm.method}
                          onChange={handleDonorFormChange}
                          className="form-select"
                        >
                          <option value="MTN Mobile Money">MTN Mobile Money</option>
                          <option value="Telecel Cash">Telecel Cash</option>
                          <option value="Bank Wire / Transfer">Bank Wire / Transfer</option>
                          <option value="Other">Other / International</option>
                        </select>
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="donorReference">Transaction Reference / ID *</label>
                        <input
                          id="donorReference"
                          type="text"
                          name="reference"
                          value={donorForm.reference}
                          onChange={handleDonorFormChange}
                          className="form-control"
                          placeholder="e.g. MoMo Ref / Txn ID"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="donorContact">Email Address or Phone Number *</label>
                      <input
                        id="donorContact"
                        type="text"
                        name="contactInfo"
                        value={donorForm.contactInfo}
                        onChange={handleDonorFormChange}
                        className="form-control"
                        placeholder="e.g. donor@example.com or +233..."
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label" htmlFor="donorMessage">Optional Message / Dedication</label>
                      <textarea
                        id="donorMessage"
                        name="message"
                        value={donorForm.message}
                        onChange={handleDonorFormChange}
                        className="form-control"
                        rows="3"
                        placeholder="Leave a note or specify where you would like your gift directed..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-feem-primary btn-lg w-100"
                      disabled={formStatus.state === 'submitting'}
                    >
                      {formStatus.state === 'submitting' ? 'Submitting Confirmation...' : 'Confirm My Donation'}
                    </button>

                    <FormAlert
                      state={formStatus.state}
                      message={formStatus.message}
                      onDismiss={() => setFormStatus({ state: 'idle', message: '' })}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Where your gift goes */}
        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span className="section-badge">Accountability</span>
              <h2>Where Your Gift Goes</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: '640px' }}>
                Every donation directly fuels educational access, menstrual dignity,
                vocational independence, and rural outreach.
              </p>
            </div>

            <div className="row g-4">
              {donationDetails.whereYourGiftGoes.map((item) => (
                <div key={item.title} className="col-md-6 col-lg-3">
                  <div className="feem-card h-100 p-4 d-flex flex-column">
                    <h3 className="h6 mb-2 fw-bold">{item.title}</h3>
                    <p className="text-muted small mb-3 flex-grow-1">{item.description}</p>
                    <div className="badge bg-light text-dark p-2 border font-monospace small">
                      {item.metricPlaceholder}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Major Gifts / Institutional Partnership Callout */}
        <section className="py-5 bg-white border-top border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container text-center" style={{ maxWidth: '780px' }}>
            <span className="section-badge">Large Gifts &amp; Grants</span>
            <h2 className="mb-3">Planning a Major Gift or Institutional Grant?</h2>
            <p className="text-muted mb-4">
              For corporate sponsorships, institutional grants, endowment gifts, or bespoke
              project partnerships, please connect directly with our partnerships leadership.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link to="/partnership" className="btn btn-feem-primary">
                Corporate Partnership Form
              </Link>
              <Link to="/contact" className="btn btn-feem-outline">
                Contact Leadership
              </Link>
            </div>
          </div>
        </section>

        {/* Privacy Note */}
        <section className="py-4 bg-light border-bottom">
          <div className="container text-center" style={{ maxWidth: '840px' }}>
            <p className="small text-muted m-0">
              <i className="bi bi-shield-check me-1"></i>
              {donationDetails.privacyNote}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

