import { absoluteUrl, formattedAddress, site } from "@/lib/site";

type JsonLdValue = Record<string, unknown>;

export function storeJsonLd(): JsonLdValue {
  const address = {
    "@type": "PostalAddress",
    streetAddress: `${site.address.streetAddress}, ${site.address.neighborhood}`,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  };

  const store: JsonLdValue = {
    "@type": "ClothingStore",
    "@id": absoluteUrl("/#tienda"),
    name: site.name,
    url: site.url,
    description: site.description,
    image: absoluteUrl(site.logo),
    logo: absoluteUrl(site.logo),
    address,
    areaServed: [
      {
        "@type": "City",
        name: site.address.locality,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: site.address.region,
        },
      },
    ],
    sameAs: [site.instagram],
    currenciesAccepted: "COP",
    email: site.email,
    telephone: site.phone,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: site.email,
      telephone: site.phone,
      url: `https://wa.me/${site.phone.replace(/\D/g, "")}`,
      availableLanguage: "es",
      areaServed: "CO",
    },
    openingHoursSpecification: site.hours.flatMap((group) =>
      group.slots.map((slot) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: group.days,
        opens: slot.opens,
        closes: slot.closes,
      })),
    ),
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${formattedAddress()}, Colombia`)}`,
    inLanguage: site.language,
  };

  if (site.geo) {
    store.geo = {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      store,
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#sitio"),
        name: site.name,
        url: site.url,
        description: site.description,
        inLanguage: site.language,
        publisher: { "@id": absoluteUrl("/#tienda") },
      },
    ],
  };
}

export function JsonLd({ data }: { data: JsonLdValue }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
