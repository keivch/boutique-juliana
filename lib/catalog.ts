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
 *
 * Recomendado: foto vertical 3:4, en JPG o WebP.
 */
export type CatalogItem = {
  slug: string;
  name: string;
  image?: string;
  detail?: string;
};

export const catalog: CatalogItem[] = [
  { slug: "casual", name: "Casual" },
  { slug: "deportiva", name: "Deportiva" },
  { slug: "jeans", name: "Jeans" },
  { slug: "shorts", name: "Shorts" },
  { slug: "bermudas", name: "Bermudas" },
  { slug: "vestidos", name: "Vestidos" },
  { slug: "conjuntos", name: "Conjuntos" },
];

export function productInquiry(name: string) {
  return `Hola, busco ${name.toLowerCase()} en Boutique Juliana. ¿Me cuentas qué hay disponible y el precio?`;
}
