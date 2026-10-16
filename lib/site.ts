import type { Metadata } from "next";

export const site = {
  name: "Boutique Juliana",
  url: "https://boutiquejuliana.store",
  locale: "es_CO",
  language: "es-CO",
  title: "Boutique Juliana | Ropa para dama en Palmira",
  description:
    "Ropa para dama en Palmira, Valle del Cauca. Boutique Juliana está en Florencia de la Italia, Carrera 30A #3A-49. Conoce la tienda y las novedades.",
  keywords: [
    "Boutique Juliana",
    "boutique de ropa Palmira",
    "ropa para dama Palmira",
    "ropa de mujer Palmira",
    "boutique Palmira",
    "Florencia de la Italia",
    "ropa para dama Valle del Cauca",
  ],
  logo: "/logo.jpg",
  instagram: "https://www.instagram.com/julianaboutique2231/",
  email: "atencionalcliente@boutiquejuliana.store",
  phone: "+573225645656",
  phoneDisplay: "+57 322 5645656",
  hours: [
    {
      label: "Lunes a viernes",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      slots: [
        { opens: "08:00", closes: "12:00", label: "8:00 a. m. a 12:00 p. m." },
        { opens: "15:00", closes: "19:00", label: "3:00 p. m. a 7:00 p. m." },
      ],
    },
    {
      label: "Sábados",
      days: ["Saturday"],
      slots: [
        { opens: "08:00", closes: "12:00", label: "8:00 a. m. a 12:00 p. m." },
      ],
    },
  ],
  closedLabel: "Domingos: cerrado",
  geo: null as { latitude: number; longitude: number } | null,
  address: {
    streetAddress: "Carrera 30A #3A-49",
    neighborhood: "Florencia de la Italia",
    locality: "Palmira",
    region: "Valle del Cauca",
    country: "CO",
  },
} as const;

export const siteRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
] as const;

export function absoluteUrl(path = "/") {
  if (path === "/") return site.url;
  return new URL(path, site.url).toString();
}

export function formattedAddress() {
  const { streetAddress, neighborhood, locality, region } = site.address;
  return `${streetAddress}, ${neighborhood}, ${locality}, ${region}`;
}

export function mapsUrl() {
  const query = `${formattedAddress()}, Colombia`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function whatsappUrl() {
  return `https://wa.me/${site.phone.replace(/\D/g, "")}`;
}

export function pageMetadata({
  title,
  description = site.description,
  path,
}: {
  title?: string;
  description?: string;
  path: string;
}): Metadata {
  const socialTitle = title ? `${title} | ${site.name}` : site.title;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: site.locale,
      url: path,
      siteName: site.name,
      title: socialTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
