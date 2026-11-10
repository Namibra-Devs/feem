import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data/siteData';

export default function SEO({
  title,
  description,
  canonicalPath = '',
  image = '/assets/images/feem-logo.webp',
  type = 'website'
}) {
  const fullTitle = title.includes('FEEM') ? title : `${title} | FEEM`;
  const metaDescription = description || siteConfig.description;
  const canonicalUrl = `${siteConfig.url}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
  const fullImageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image}`;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/images/feem-logo.webp`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    sameAs: [
      siteConfig.socials.twitter,
      siteConfig.socials.linkedin,
      siteConfig.socials.tiktok
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone,
        contactType: 'Customer Support and Donations',
        email: siteConfig.email,
        areaServed: 'GH'
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@feem_initiative" />

      {/* JSON-LD Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
}

