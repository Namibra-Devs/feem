import React, { useState } from 'react';

/**
 * Phase 2 Component: DonateButton
 *
 * Designed to integrate with payment providers (Paystack, Flutterwave, Hubtel)
 * using client-side popup or checkout redirect.
 *
 * SECURITY:
 * - Uses ONLY client-safe public keys (VITE_PAYMENT_PUBLIC_KEY / NEXT_PUBLIC_PAYMENT_PUBLIC_KEY).
 * - NEVER references or imports PAYMENT_SECRET_KEY or PAYMENT_WEBHOOK_SECRET.
 * - Collects NO credit card numbers directly on our pages (provider hosted checkout handles PCI compliance).
 */
export default function DonateButton({
  amount = 100,
  currency = 'GHS',
  donorEmail = '',
  donorName = '',
  customReference = '',
  onSuccess,
  onClose
}) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [notice, setNotice] = useState(null);

  // Access only public keys
  const publicKey =
    import.meta.env.VITE_PAYMENT_PUBLIC_KEY ||
    import.meta.env.NEXT_PUBLIC_PAYMENT_PUBLIC_KEY ||
    '';

  const handleOnlinePayment = () => {
    setIsProcessing(true);
    setNotice(null);

    // If no real public key configured yet, display provider connection notice
    if (!publicKey || publicKey.includes('placeholder')) {
      setTimeout(() => {
        setIsProcessing(false);
        setNotice({
          type: 'warning',
          message:
            'Online payment gateway integration is prepared (Phase 2). To activate live transactions, configure NEXT_PUBLIC_PAYMENT_PUBLIC_KEY in your environment and connect your chosen payment provider (Paystack, Flutterwave, or Hubtel).'
        });
      }, 400);
      return;
    }

    // Provider initialization stub
    // E.g., when Paystack or Flutterwave script is injected in the future:
    // const handler = window.PaystackPop.setup({
    //   key: publicKey,
    //   email: donorEmail,
    //   amount: amount * 100,
    //   currency: currency,
    //   ref: customReference || 'FEEM_' + Math.floor(Math.random() * 1000000000 + 1),
    //   callback: (response) => onSuccess && onSuccess(response),
    //   onClose: () => onClose && onClose()
    // });
    // handler.openIframe();

    setTimeout(() => {
      setIsProcessing(false);
      setNotice({
        type: 'info',
        message: `Initiating gateway checkout for ${currency} ${amount}. Verification stub ready at /api/verify-donation.`
      });
    }, 600);
  };

  return (
    <div className="donate-button-wrapper">
      <button
        type="button"
        className="btn btn-feem-accent btn-lg w-100 d-flex align-items-center justify-content-center gap-2"
        onClick={handleOnlinePayment}
        disabled={isProcessing}
        aria-label={`Donate ${currency} ${amount} online`}
      >
        <i className="bi bi-shield-lock-fill"></i>
        {isProcessing ? 'Connecting to Payment Provider...' : `Pay Online (${currency} ${amount})`}
      </button>

      {notice && (
        <div
          className={`alert alert-${notice.type === 'warning' ? 'warning' : 'info'} mt-3 mb-0 small`}
          role="alert"
        >
          <div className="d-flex align-items-start gap-2">
            <i className="bi bi-info-circle-fill flex-shrink-0 mt-1"></i>
            <div>{notice.message}</div>
          </div>
        </div>
      )}
    </div>
  );
}

