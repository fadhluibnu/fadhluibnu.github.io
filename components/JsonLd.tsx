export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fadhlu Ibnu",
    url: "https://fadhluibnu.my.id",
    jobTitle: "Backend Developer & FullStack Engineer",
    image: "https://fadhluibnu.my.id/og-image.png",
    sameAs: [
      "https://github.com/fadhluibnu",
      "https://www.linkedin.com/in/fadhluibnu"
    ],
  };
  const dangerHtml = { __html: JSON.stringify(data) };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={dangerHtml}
    />
  );
}

export function BreadcrumbJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://fadhluibnu.my.id"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Experience Details",
        "item": "https://fadhluibnu.my.id/experience-details"
      }
    ]
  };
  const dangerHtml = { __html: JSON.stringify(data) };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={dangerHtml}
    />
  );
}
