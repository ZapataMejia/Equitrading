import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "EQUITRADING",
  tagline: "Top-quality Hardware Tools",
  description: "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.",
  description_short: "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs.",
  url: "https://screwfast.uk",
  author: "Emil Gulamov",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}:Tu Socio en Transformadores de Potencia`,
  description: "En EQUITRADING, ofrecemos soluciones de alta calidad en transformadores de potencia, equipos eléctricos y servicios de inspección. Confiabilidad y excelencia en cada proyecto!",
  image: ogImageSrc,
};
