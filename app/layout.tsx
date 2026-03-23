import type { Metadata } from "next";
import "./globals.scss";

const siteUrl = "https://the416.dz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "The 416 — Restaurant & Bar à Oran, Algérie",
    template: "%s | The 416 Oran",
  },

  description:
    "The 416, restaurant gastronomique au Boulevard du Lion, Oran. Plats, desserts, cafés, bar à jus et plus. Une expérience culinaire d'exception en Algérie. مطعم ذا 416 في وهران، الجزائر — أطباق، حلويات، مشروبات، كافيه وبار عصائر.",

  keywords: [
    // French
    "restaurant Oran",
    "restaurant Boulevard du Lion Oran",
    "restaurant gastronomique Oran",
    "meilleur restaurant Oran",
    "restaurant Algérie",
    "café Oran",
    "bar jus Oran",
    "desserts Oran",
    "fine dining Oran",
    "The 416",
    "the416 Oran",
    "restaurant le 416",
    "brunch Oran",
    "sortie restaurant Oran",
    // Arabic
    "مطعم وهران",
    "مطعم الجزائر",
    "ذا 416",
    "مطعم بوليفار دو ليون",
    "أفضل مطعم في وهران",
    "مطعم فاخر وهران",
    "حلويات وهران",
    "كافيه وهران",
    "بار عصائر وهران",
    "مطاعم وهران الجزائر",
  ],

  authors: [{ name: "The 416" }],
  creator: "The 416",
  publisher: "The 416",

  alternates: {
    canonical: siteUrl,
    languages: {
      "fr-DZ": siteUrl,
      "ar-DZ": siteUrl,
    },
  },

  openGraph: {
    title: "The 416 — Restaurant & Bar à Oran, Algérie",
    description:
      "Plats, desserts, cafés, bar à jus dans un cadre élégant au Boulevard du Lion, Oran. مطعم ذا 416 — وهران، الجزائر.",
    url: siteUrl,
    siteName: "The 416",
    type: "website",
    locale: "fr_DZ",
    alternateLocale: ["ar_DZ"],
  },

  twitter: {
    card: "summary_large_image",
    title: "The 416 — Restaurant & Bar à Oran",
    description:
      "Une expérience culinaire d'exception au Boulevard du Lion, Oran, Algérie.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

// JSON-LD structured data — helps Google show rich results (address, hours, menu…)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "The 416",
  url: siteUrl,
  description:
    "Restaurant gastronomique au Boulevard du Lion, Oran. Plats, desserts, cafés et bar à jus.",
  servesCuisine: ["Française", "Méditerranéenne", "Internationale"],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Boulevard du Lion",
    addressLocality: "Oran",
    addressRegion: "Oran",
    addressCountry: "DZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.6971,
    longitude: -0.6308,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "00:00",
    },
  ],
  hasMenu: `${siteUrl}/#menu`,
  menu: `${siteUrl}/#menu`,
  reservations: `${siteUrl}/#reservation`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33-1-42-56-78-90",
    contactType: "reservations",
    availableLanguage: ["French", "Arabic"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
