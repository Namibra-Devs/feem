# FEEM Initiative Web Application (Revamped)

Modern, sleek, and accessible web application for the **Female Empowerment Initiative (FEEM)** (`https://www.feeminitiative.org`), rebuilt using **React**, **JavaScript**, **Vite**, and **Bootstrap 5**.

---

## 🎨 Design System & Color Palette

The visual identity maintains the original text styling and font family (**Sofia Sans**) while updating the palette to flat, modern, and high-contrast colors with **no fancy shadows or gradients**:

| Token | Hex Code | Role & Usage |
| :--- | :--- | :--- |
| **Background** | `#f8f6ee` | Soft, warm off-white canvas for optimal reading comfort. |
| **Primary** | `#2e3a2f` | Deep olive forest charcoal. Used for primary text, primary buttons, headers, and footer. Passes WCAG AAA contrast against background (**11.01:1**). |
| **Secondary** | `#6b7f5b` | Natural moss sage green. Used for section accents, secondary badges, and borders. |
| **Tertiary** | `#d9c9b2` | Warm sand beige. Used for badges, subtle card surfaces, and dividers. |
| **Accent** | `#c96faf` | Flat mauve orchid. Used for focal highlights, CTA buttons, active tabs, and focus outlines. |

- **Typography**: `Sofia Sans` (`sans-serif`) imported via Google Fonts.
- **Constraints**: 100% flat accents and solid surfaces; no skeuomorphic drop shadows, neon box glows, or heavy gradients.

---

## 🚀 Key Features

### 1. Component Architecture & Routes
- **Hero Slider Section** ([`src/components/HeroSlider.jsx`](file:///Users/user/Documents/NAMIBRA/feem/src/components/HeroSlider.jsx)): Dynamic landing page carousel highlighting our slogan, Pads for Progress, vocational skills, and educational support with autoplay (pause on hover/focus), keyboard arrows, touch swipe, and slide indicators.
- **Dual Routing**: Every page has been converted into a dedicated React component. The app provides **dual routing** to ensure modern clean URLs while retaining 100% backwards compatibility with legacy bookmarks and external links:

- **Home**: `/` and `/index.html`
- **About Us**: `/about` and `/pages/about.html`
- **What We Do**: `/what` and `/pages/what.html`
- **Programs & Activities**: `/programs` and `/pages/programs.html`
- **Proposed Weekly Activities**: `/activities` and `/pages/activities.html`
- **Resources & Research**: `/resources` and `/pages/ResearchResource.html`
- **Get Involved (Volunteer)**: `/get-involved` and `/pages/getinvolve.html`
- **Contact Us**: `/contact` and `/pages/contact.html`
- **Donate**: `/donate` and `/pages/donate.html`
- **Partnership**: `/partnership` and `/pages/partnership.html`
- **Events & News**: `/events` and `/pages/events.html`
- **Gallery**: `/gallery` and `/pages/gallery.html`
- **News Blog**: `/news-blog` and `/pages/newsblog.html`
- **Blog Post (Reader)**: `/blog-post` and `/pages/blogpost.html`
- **Impact Stories**: `/stories` and `/pages/stories.html`
- **Impact Stories (Reports)**: `/impact-stories` and `/pages/impactstories.html`
- **Gender Based Violence**: `/gender` and `/pages/gender.html`
- **Menstrual Hygiene**: `/menstrual` and `/pages/menstrual.html`
- **Sexual Health**: `/sexual` and `/pages/sexual.html`
- **Educational Support / Scholarship**: `/scholarship` and `/pages/scholarship.html`
- **Building Self Esteem**: `/building` and `/pages/building.html`

### 2. SEO & Structured Data
- **Heading Hierarchy**: Strictly **one `<h1>` per page**; followed by sequential `<h2>` and `<h3>` tags.
- **Dynamic Per-Page Metadata**: Managed with `react-helmet-async` through `<SEO />`, providing unique `<title>`, `<meta name="description">`, and Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) + Twitter Card tags (`summary_large_image`).
- **Canonical URLs**: Every page references its matching canonical URL on `https://www.feeminitiative.org`.
- **Search Engine Discovery**: `robots.txt` and `sitemap.xml` are located in `public/` and built into the site root.
- **JSON-LD Schema**: Embedded `schema.org/NGO` structured data including organizational name, logo, contact phone, contact email, and official social media profiles.
- **PWA & Icons**: Preserves `site.webmanifest` and favicon configured in `index.html`.

### 3. Accessibility (a11y) & Responsiveness
- **Semantic HTML**: Structural `<header>`, `<nav>`, `<main id="main-content">`, `<section>`, `<article>`, and `<footer>` elements.
- **Skip Link**: Accessible `.skip-to-content` link at the top of the DOM for screen readers and keyboard users.
- **Visible Focus States**: Dedicated high-visibility focus ring (`:focus-visible` with 3px outline in accent color `#c96faf` and 3px offset).
- **Responsive Layout**: Designed mobile-first and tested at **360px** (small smartphones), **768px** (tablets), and **1280px+** (desktops).
- **Minimum Touch Targets**: All interactive elements (buttons, inputs, navigation links) adhere to at least 44px × 44px hit areas.

### 4. Interactive Gallery & Large Image Optimization Audit
- **Lazy Loading**: Images use native `loading="lazy"` for minimal mobile data usage.
- **Interactive Lightbox**: Full-screen modal with Next/Previous navigation, keyboard controls (ArrowLeft, ArrowRight, Escape), and image metadata.
- **Album Filter Tabs**: Categorized into *All*, *Community Outreach*, *Workshops & Training*, *Education*, and *Events & Charity*.
- **Image Size Audit Flag**: Large original images (> 500 KB) are flagged with an optimization badge (e.g. `5.4 MB — Flagged for optimization`) in the gallery data (`src/data/galleryData.js`) **without modifying or compressing the original files**, keeping the original media intact.

### 5. Forms & Anti-Spam Protection
Forms across the site (Contact, Volunteer, Partnership, Newsletter, and "I Have Donated"):
- Maintain the original field sets and required validation.
- Real-time client-side input validation and error states.
- **Anti-Spam Bot Trap**: Hidden honeypot fields (`website_hp`) that trap automated spam bots without burdening real users.
- **Universal Form Submissions**: Controlled by `src/utils/formSubmit.js`.

---

## 💳 Donate Page Implementation

### Phase 1 (Built & Active Now)
- **Maintained Content**: Preserves the original heading *"Make a Difference Today"*, amount selector ($ / GH₵), and text layout.
- **Ways to Give**: Bank wire and Mobile Money details loaded directly from `src/data/donation.js`.
  - Account name, bank name, account number, MTN MoMo, and Telecel Cash lines with **one-click copy-to-clipboard** buttons.
  - **Zero invented numbers**: All sensitive values are left as clear `TODO` placeholders for FEEM administrators.
- **"I Have Donated" Form**:
  - Fields: Full Name, Amount in GH₵, Payment Method, Transaction Reference/ID, Email or Phone, and Optional Message.
  - Submits securely through the configured form service (`VITE_FORM_ENDPOINT`).
- **Where Your Gift Goes**: Authentic descriptions and metrics derived from the original site with configurable placeholders.
- **Major Gifts Link**: Direct CTA pointing to `/partnership` and `/contact` for corporate sponsors and large endowments.
- **Privacy Note**: Explains that donor data is kept strictly confidential and no financial credentials or card details are ever collected or stored on our servers.

### Phase 2 (Prepared Stub — Ships Disabled by Default)
- **Feature Flag**: Controlled by `NEXT_PUBLIC_ENABLE_ONLINE_DONATIONS=false` and `VITE_ENABLE_ONLINE_DONATIONS=false`. The online checkout UI remains hidden until an administrator enables it.
- **`DonateButton.jsx`**: Client-safe button that initializes provider checkouts using public keys only (`NEXT_PUBLIC_PAYMENT_PUBLIC_KEY` / `VITE_PAYMENT_PUBLIC_KEY`).
- **Serverless Verification Handler**: `/api/verify-donation.js` stub for verifying transaction status and processing provider webhook callbacks on the backend.
- **Strict Constraints**: Secret keys (`PAYMENT_SECRET_KEY`, `PAYMENT_WEBHOOK_SECRET`) are never imported into frontend bundles.

---

## 🔑 Environment Variables & Setup Guide

### 1. Connecting a Form Service
To receive form submissions (Contact, Volunteer, Partnership, Newsletter, and "I Have Donated"), choose one of the following providers:

#### Option A: Formspree (Recommended)
1. Go to [https://formspree.io](https://formspree.io) and create a free account.
2. Click **"+ New Form"**, name it `FEEM Submissions`, and enter the email address where notifications should be delivered (`feeminitiative766@gmail.com`).
3. Copy your unique Formspree Endpoint (e.g. `https://formspree.io/f/mqkrvxyz`).
4. In your `.env` file, set:
   ```bash
   VITE_FORM_ENDPOINT=https://formspree.io/f/mqkrvxyz
   ```

#### Option B: Web3Forms
1. Go to [https://web3forms.com](https://web3forms.com) and request an access key using `feeminitiative766@gmail.com`.
2. Check your inbox to retrieve the Access Key.
3. In your `.env` file, set:
   ```bash
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

*(Note: In local development without an endpoint configured, forms operate in simulated demo mode with instant feedback).*

---

### 2. Connecting an Online Payment Gateway (Phase 2 Activation)

When FEEM is ready to accept live online card and mobile money payments, follow these steps:

#### Provider Comparison & Selection
You may connect any licensed Ghanaian/African payment processor:
- **Paystack** ([paystack.com](https://paystack.com)): Supports Mobile Money (MTN, Telecel, AT), Cards (Visa, Mastercard), and Apple Pay.
- **Flutterwave** ([flutterwave.com](https://flutterwave.com)): Supports Ghanaian Mobile Money, Cards, Bank Transfers, and international currencies.
- **Hubtel** ([hubtel.com](https://hubtel.com)): Direct integration with Ghana Interbank Payment and Settlement Systems (GhIPSS) and local telecommunication networks.

#### Steps with the Payment Provider:
1. **Register & Verify Account**: Register the NGO on the provider's portal. You will need to submit organization registration certificates, proof of operating address, and a verified bank account in FEEM's official name.
2. **Retrieve API Keys**: In the provider's developer dashboard:
   - Copy the **Public Key** (starts with `pk_live_` or `pk_test_`).
   - Copy the **Secret Key** (starts with `sk_live_` or `sk_test_`).
   - Generate or copy the **Webhook Signing Secret**.
3. **Configure Environment Variables**:
   In your production deployment platform (e.g., Vercel, Netlify, Cloudflare Pages):
   ```bash
   # Enable the online payment UI
   NEXT_PUBLIC_ENABLE_ONLINE_DONATIONS=true
   VITE_ENABLE_ONLINE_DONATIONS=true

   # Client Public Key (Safe for browser)
   NEXT_PUBLIC_PAYMENT_PUBLIC_KEY=pk_live_xxxxxxxxxxxxxxxxxxxx
   VITE_PAYMENT_PUBLIC_KEY=pk_live_xxxxxxxxxxxxxxxxxxxx

   # Server-side Secrets (ONLY in server environment; NEVER commit or expose to client)
   PAYMENT_SECRET_KEY=sk_live_xxxxxxxxxxxxxxxxxxxx
   PAYMENT_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxx
   ```
4. **How Server-Side Verification Works (`/api/verify-donation.js`)**:
   - The client checkout popup collects the donation and receives a transaction reference (e.g. `FEEM_TXN_123456`).
   - The client sends `{ reference: 'FEEM_TXN_123456' }` to `/api/verify-donation`.
   - The server handler makes a secure `GET` request to the provider's verification endpoint (e.g. `https://api.paystack.co/transaction/verify/:reference`) using the secret key in the `Authorization: Bearer ${PAYMENT_SECRET_KEY}` header.
   - The server inspects the returned status (`success`), verifies that the currency and expected amount match, and records the verified gift without exposing any payment credentials to the frontend.
   - The provider webhook sends events directly to `/api/verify-donation` signed with `PAYMENT_WEBHOOK_SECRET` for automated asynchronous confirmation.

---

## 🛠️ Local Development & Build

### Prerequisites
- Node.js `v18+` or `v20+` (tested on Node `v24.11.1`)
- npm `v9+` or `v11+`

### Installation
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### Build for Production
```bash
npm run build
```
The optimized static application will be output to `dist/`.

### Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
├── api/
│   └── verify-donation.js        # Serverless payment verification stub (Phase 2)
├── assets/                       # Preserved original images, videos, and css
│   ├── images/                   # All 100+ original high-res images
│   └── videos/                   # MP4 video assets
├── public/
│   ├── assets -> ../assets       # Symlinked assets for Vite static serving
│   ├── robots.txt                # Search engine crawler permissions
│   ├── sitemap.xml               # Complete XML sitemap
│   └── site.webmanifest          # PWA manifest
├── src/
│   ├── components/
│   │   ├── DonateButton.jsx      # Phase 2 online payment gateway component
│   │   ├── Footer.jsx            # Sleek footer with newsletter form & social links
│   │   ├── FormAlert.jsx         # Accessible feedback alert component
│   │   ├── Lightbox.jsx          # Accessible full-screen photo modal
│   │   ├── Navbar.jsx            # Responsive, keyboard-accessible navigation
│   │   └── SEO.jsx               # Per-page head metadata & JSON-LD schema
│   ├── data/
│   │   ├── donation.js           # Bank & MoMo details (TODO placeholders)
│   │   ├── galleryData.js        # Albums, captions, and >500KB audit flags
│   │   └── siteData.js           # Core site text, mentors, events, and blogs
│   ├── pages/                    # 22 React Page Components
│   │   ├── About.jsx
│   │   ├── Activities.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Building.jsx
│   │   ├── Contact.jsx
│   │   ├── Donate.jsx
│   │   ├── Events.jsx
│   │   ├── Gallery.jsx
│   │   ├── Gender.jsx
│   │   ├── GetInvolved.jsx
│   │   ├── Home.jsx
│   │   ├── ImpactStories.jsx
│   │   ├── Menstrual.jsx
│   │   ├── NewsBlog.jsx
│   │   ├── NotFound.jsx
│   │   ├── Partnership.jsx
│   │   ├── Programs.jsx
│   │   ├── Resources.jsx
│   │   ├── Scholarship.jsx
│   │   ├── Sexual.jsx
│   │   ├── Stories.jsx
│   │   └── WhatWeDo.jsx
│   ├── styles/
│   │   └── custom.css            # Custom styling & CSS variables (#f8f6ee palette)
│   ├── utils/
│   │   └── formSubmit.js         # Formspree / Web3Forms submission engine
│   ├── App.jsx                   # React Router with modern + legacy paths
│   └── main.jsx                  # Application entry point
├── .env.example                  # Environment template
├── index.html                    # Vite application HTML entry
├── package.json
└── vite.config.js
```

---

## 🔒 Security & Privacy Commitments
1. **No Sensitive Numbers Invented**: All bank account and mobile money numbers in `src/data/donation.js` are explicit `TODO` placeholders.
2. **Zero Client Secrets**: Payment provider secret keys are isolated to serverless functions and omitted from client code.
3. **No Card Data Collection**: All payment processing is offloaded to PCI-DSS certified payment gateways.
4. **No Donor Data in Repo**: Confirmations are dispatched securely to email form endpoints rather than committed to git.

