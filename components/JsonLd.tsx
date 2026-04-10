export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LawnCareService",
    name: "Aggro Lawn Care",
    description:
      "Family-owned lawn care serving Fresno County since 2020. BBB A+ rated. Lawn mowing, edging, yard trimming, yard cleanup, and weed control.",
    url: "https://aggro-lawn-care.vercel.app",
    telephone: "+15596967204",
    email: "aggrolawncare@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4652 N Lafayette Ave",
      addressLocality: "Fresno",
      addressRegion: "CA",
      postalCode: "93705",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    areaServed: {
      "@type": "Place",
      name: "Fresno County, CA",
    },
    sameAs: [
      "https://www.facebook.com/AggroLawnCare/",
      "https://nextdoor.com/pages/aggro-lawn-care-fresno-ca/",
    ],
    priceRange: "$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
