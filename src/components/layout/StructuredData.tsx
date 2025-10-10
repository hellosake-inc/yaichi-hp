import { STORE_INFO } from "@/constants/storeInfo";

export default function StructuredData() {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: STORE_INFO.name,
    description: STORE_INFO.tagline,
    url: "https://yaichi-restaurant.com",
    telephone: STORE_INFO.phone,
    email: STORE_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: STORE_INFO.address.street,
      addressLocality: STORE_INFO.address.city,
      addressRegion: STORE_INFO.address.state,
      postalCode: STORE_INFO.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.4323,
      longitude: -121.8995,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "11:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "11:00",
        closes: "22:00",
      },
    ],
    servesCuisine: ["Japanese", "Udon", "Seafood"],
    priceRange: "$$",
    acceptsReservations: "True",
    menu: STORE_INFO.delivery.touchbistro,
    image: [
      "https://yaichi-restaurant.com/hero-bg.avif",
      "https://yaichi-restaurant.com/bento/bento-1.jpg",
      "https://yaichi-restaurant.com/bento/bento-3.jpg",
    ],
    sameAs: [
      STORE_INFO.social.facebook,
      STORE_INFO.social.instagram,
      STORE_INFO.social.twitter,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Menu",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Appetizers",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MenuItem",
                name: "Edamame",
                description: "Steamed soybeans",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Udon",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MenuItem",
                name: "Kake Udon",
                description: "Traditional hot udon in savory broth",
              },
            },
          ],
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "89",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: STORE_INFO.name,
    image: "https://yaichi-restaurant.com/YAICHILOGO.png",
    url: "https://yaichi-restaurant.com",
    telephone: STORE_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: STORE_INFO.address.street,
      addressLocality: STORE_INFO.address.city,
      addressRegion: STORE_INFO.address.state,
      postalCode: STORE_INFO.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.4323,
      longitude: -121.8995,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "11:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "11:00",
        closes: "22:00",
      },
    ],
    priceRange: "$$",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://yaichi-restaurant.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Menu",
        item: "https://yaichi-restaurant.com/menu",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contact",
        item: "https://yaichi-restaurant.com/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
