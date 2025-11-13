const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palmrenovate.com';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#organization`,
    name: "Palm Renovate",
    alternateName: "Palm Renovate",
    url: siteUrl,
    logo: `${siteUrl}/images/greenviewrenovation-bg.webp`,
    image: `${siteUrl}/images/greenviewrenovation-bg.webp`,
    description: "Palm Renovate is your trusted local home remodeling company with over 15 years of experience transforming living spaces. Licensed, bonded, and insured contractors serving Palm Beach & Broward County.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Palm Beach",
      addressRegion: "FL",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.7056",
      longitude: "-80.0364",
    },
    telephone: "+1-813-838-2193",
    email: "swolkov@palmdevgroup.com",
    priceRange: "$$",
    areaServed: [
      {
        "@type": "City",
        name: "Palm Beach",
      },
      {
        "@type": "City",
        name: "Broward County",
      },
      {
        "@type": "City",
        name: "Boynton Beach",
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "26.5284",
        longitude: "-80.0906",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Remodeling Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitchen Remodeling",
            description: "Professional kitchen remodeling services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathroom Remodeling",
            description: "Bathroom renovation and remodeling services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Room Addition",
            description: "Home addition and expansion services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Complete Home Remodeling",
            description: "Full home renovation services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Design & Architectural Planning",
            description: "Design and architectural planning services",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      // Add social media links when available
      // "https://www.facebook.com/palmrenovate",
      // "https://www.instagram.com/palmrenovate",
      // "https://www.linkedin.com/company/palmrenovate",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

