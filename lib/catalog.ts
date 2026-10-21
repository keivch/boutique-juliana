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
 *      category: "Vestidos",
 *    }
 *
 * - `slug`: identificador único, sin espacios.
 * - `name`: texto de la tarjeta y del mensaje de WhatsApp.
 * - `image`: foto vertical (4:5) de la prenda.
 * - `category`: una de `categories`. Dentro de cada grupo, la página
 *   ordena las prendas por `name`.
 * - `line`: opcional. Frase corta de la fila de novedades.
 *   Para mostrarla ahí, agrega su `slug` a `featuredSlugs`.
 */
export const categories = [
  "Vestidos",
  "Conjuntos",
  "Enterizos",
  "Jeans",
  "Shorts",
  "Faldas",
  "Camisetas",
  "Chaquetas",
  "Tops",
] as const;

export type Category = (typeof categories)[number];

export type CatalogItem = {
  slug: string;
  name: string;
  image: string;
  category: Category;
  line?: string;
};

export const catalog: CatalogItem[] = [
  {
    slug: "vestido-jean-corto",
    name: "Vestido jean corto",
    image: "/productos/bj-vestido-jean-corto-01.png",
    category: "Vestidos",
    line: "Denim, corte corto",
  },
  {
    slug: "conjunto-blusa-gris-short-jean",
    name: "Conjunto blusa gris y short jean",
    image: "/productos/bj-conjunto-blusa-gris-short-jean-01.png",
    category: "Conjuntos",
    line: "Blusa crop y short roto",
  },
  {
    slug: "conjunto-blusa-negra-short-jean",
    name: "Conjunto blusa negra y short jean",
    image: "/productos/bj-conjunto-blusa-negra-short-jean-01.png",
    category: "Conjuntos",
    line: "Ribete blanco y short roto",
  },
  {
    slug: "conjunto-body-vino-jean-claro",
    name: "Conjunto body vino y jean claro",
    image: "/productos/bj-conjunto-body-vino-jean-claro-01.png",
    category: "Conjuntos",
    line: "Body y bota ancha",
  },
  {
    slug: "conjunto-chaqueta-jean-negro",
    name: "Conjunto chaqueta y jean negro",
    image: "/productos/bj-conjunto-chaqueta-jean-negro-01.png",
    category: "Conjuntos",
    line: "Denim negro, bota ancha",
  },
  {
    slug: "conjunto-corset-blanco-jean",
    name: "Conjunto corset blanco y jean",
    image: "/productos/bj-conjunto-corset-blanco-jean-01.png",
    category: "Conjuntos",
    line: "Corset de encaje",
  },
  {
    slug: "crop-rayas-gris-cuello",
    name: "Crop rayas gris con cuello blanco",
    image: "/productos/bj-crop-rayas-gris-cuello-01.png",
    category: "Tops",
    line: "Cuello blanco y abertura atrás",
  },
  {
    slug: "crop-rayas-negro-cuello",
    name: "Crop rayas negro con cuello blanco",
    image: "/productos/bj-crop-rayas-negro-cuello-01.png",
    category: "Tops",
    line: "Rayas negras y cuello blanco",
  },
];

export const featuredSlugs = [
  "vestido-jean-corto",
  "conjunto-corset-blanco-jean",
  "conjunto-chaqueta-jean-negro",
  "conjunto-body-vino-jean-claro",
] as const;

function byName(a: CatalogItem, b: CatalogItem) {
  return a.name.localeCompare(b.name, "es");
}

export function categoryId(category: string) {
  return category
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");
}

export function featuredItems() {
  return featuredSlugs.flatMap((slug) => {
    const item = catalog.find((entry) => entry.slug === slug);
    return item ? [item] : [];
  });
}

export function catalogGroups() {
  return categories.flatMap((category) => {
    const items = catalog.filter((item) => item.category === category).sort(byName);
    return items.length ? [{ category, items }] : [];
  });
}

export function productInquiry(name: string) {
  return `Hola, busco ${name.toLowerCase()} en Boutique Juliana. ¿Me cuentas qué hay disponible y el precio?`;
}
