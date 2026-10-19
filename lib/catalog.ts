/**
 * Colección de la página de inicio.
 *
 * Cómo publicar una foto:
 * 1. Guarda la imagen en `public/productos/`.
 *    Ejemplo: `public/productos/vestido-negro.jpg`
 * 2. Duplica un bloque de esta lista y completa los datos:
 *    {
 *      slug: "vestido-negro",
 *      name: "Vestido negro",
 *      image: "/productos/vestido-negro.jpg",
 *      detail: "Tallas S a XL",
 *    }
 *
 * - `slug`: identificador único, sin espacios.
 * - `name`: texto de la tarjeta y del mensaje de WhatsApp.
 * - `image`: opcional. Sin foto, la tarjeta queda en negro y dorado.
 * - `detail`: opcional. Una línea corta bajo el nombre.
 * - `line`: opcional. Frase corta de la fila de novedades.
 *   Para mostrarla ahí, agrega su `slug` a `featuredSlugs`.
 *
 * Recomendado: foto vertical 3:4, en JPG o WebP.
 */
export type CatalogItem = {
  slug: string;
  name: string;
  image?: string;
  detail?: string;
  line?: string;
};

export const catalog: CatalogItem[] = [
  { slug: "casual", name: "Casual", line: "Para el día a día" },
  { slug: "deportiva", name: "Deportiva" },
  { slug: "jeans", name: "Jeans", line: "El básico de la tienda" },
  { slug: "shorts", name: "Shorts" },
  { slug: "bermudas", name: "Bermudas" },
  { slug: "vestidos", name: "Vestidos", line: "De día o para salir" },
  { slug: "conjuntos", name: "Conjuntos", line: "Listos para llevar" },
];

export const featuredSlugs = ["vestidos", "jeans", "conjuntos", "casual"] as const;

export function featuredItems() {
  return featuredSlugs.flatMap((slug) => {
    const item = catalog.find((entry) => entry.slug === slug);
    return item ? [item] : [];
  });
}

export function productInquiry(name: string) {
  return `Hola, busco ${name.toLowerCase()} en Boutique Juliana. ¿Me cuentas qué hay disponible y el precio?`;
}
