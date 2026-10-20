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
 * - `image`: foto cuadrada de la prenda.
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
    slug: "vestido-denim-corto-halter",
    name: "Vestido denim corto halter",
    image: "/productos/bj-vestido-denim-corto-halter-01.jpg",
    category: "Vestidos",
    line: "Denim, de día",
  },
  {
    slug: "vestido-negro-manga-larga-fruncido",
    name: "Vestido negro manga larga fruncido",
    image: "/productos/bj-vestido-negro-manga-larga-fruncido-01.jpg",
    category: "Vestidos",
    line: "Manga larga y fruncido",
  },
  {
    slug: "conjunto-blanco-plisado-halter",
    name: "Conjunto blanco plisado halter",
    image: "/productos/bj-conjunto-blanco-plisado-halter-01.jpg",
    category: "Conjuntos",
  },
  {
    slug: "conjunto-negro-encaje",
    name: "Conjunto de encaje negro",
    image: "/productos/bj-conjunto-negro-dos-piezas-fruncido-02.jpg",
    category: "Conjuntos",
  },
  {
    slug: "conjunto-halter-short-negro",
    name: "Conjunto halter y short negro",
    image: "/productos/bj-conjunto-halter-short-negro-01.jpg",
    category: "Conjuntos",
  },
  {
    slug: "conjunto-leggings-top-rosa",
    name: "Conjunto leggings y top rosa",
    image: "/productos/bj-conjunto-leggings-top-rosa-01.jpg",
    category: "Conjuntos",
  },
  {
    slug: "conjunto-negro-canale-bota-ancha",
    name: "Conjunto negro canale bota ancha",
    image: "/productos/bj-conjunto-negro-canale-bota-ancha-01.jpg",
    category: "Conjuntos",
  },
  {
    slug: "conjunto-negro-halter-falda-drapeada",
    name: "Conjunto negro halter y falda drapeada",
    image: "/productos/bj-conjunto-negro-halter-falda-drapeada-01.jpg",
    category: "Conjuntos",
  },
  {
    slug: "conjunto-saco-minifalda-negro",
    name: "Conjunto saco y minifalda negro",
    image: "/productos/bj-conjunto-saco-minifalda-negro-ribete-01.jpg",
    category: "Conjuntos",
  },
  {
    slug: "conjunto-top-falda-lila",
    name: "Conjunto top y falda lila",
    image: "/productos/bj-conjunto-top-falda-lila-01.jpg",
    category: "Conjuntos",
  },
  {
    slug: "conjunto-tres-piezas-gris-celeste",
    name: "Conjunto tres piezas gris y celeste",
    image: "/productos/bj-conjunto-tres-piezas-gris-celeste-01.jpg",
    category: "Conjuntos",
    line: "Tres piezas",
  },
  {
    slug: "enterizo-blanco-canale",
    name: "Enterizo blanco canale con ribete negro",
    image: "/productos/bj-enterizo-blanco-canale-ribete-negro-01.jpg",
    category: "Enterizos",
  },
  {
    slug: "enterizo-corto-amarillo",
    name: "Enterizo corto amarillo canale",
    image: "/productos/bj-enterizo-corto-amarillo-canale-01.jpg",
    category: "Enterizos",
  },
  {
    slug: "jean-ancho-lavado-claro",
    name: "Jean ancho lavado claro",
    image: "/productos/bj-jean-lavado-claro-02.jpg",
    category: "Jeans",
  },
  {
    slug: "jean-azul-ajustado",
    name: "Jean azul ajustado",
    image: "/productos/bj-jean-azul-ajustado-most-wanted-01.jpg",
    category: "Jeans",
  },
  {
    slug: "jean-azul-ancho-deconstruido",
    name: "Jean azul ancho deconstruido",
    image: "/productos/bj-jean-azul-ancho-deconstruido-01.jpg",
    category: "Jeans",
    line: "Corte ancho y deshilachado",
  },
  {
    slug: "jean-azul-claro-recto",
    name: "Jean azul claro recto",
    image: "/productos/bj-jean-azul-claro-recto-01.jpg",
    category: "Jeans",
  },
  {
    slug: "jean-azul-claro-tiro-alto",
    name: "Jean azul claro tiro alto",
    image: "/productos/bj-jean-azul-tiro-alto-02.jpg",
    category: "Jeans",
  },
  {
    slug: "jean-azul-oscuro-recto",
    name: "Jean azul oscuro recto",
    image: "/productos/bj-jean-azul-oscuro-01.jpg",
    category: "Jeans",
  },
  {
    slug: "jean-azul-oscuro-tiro-alto",
    name: "Jean azul oscuro tiro alto",
    image: "/productos/bj-jean-azul-tiro-alto-03.jpg",
    category: "Jeans",
  },
  {
    slug: "jean-bota-ancha-lavado-acido",
    name: "Jean bota ancha lavado ácido",
    image: "/productos/bj-jean-bota-ancha-lavado-acido-01.jpg",
    category: "Jeans",
    line: "Bota ancha",
  },
  {
    slug: "jean-cargo-claro",
    name: "Jean cargo claro",
    image: "/productos/bj-jean-cargo-claro-bolsillos-01.jpg",
    category: "Jeans",
  },
  {
    slug: "jean-denim-oscuro-rasgado",
    name: "Jean denim oscuro rasgado",
    image: "/productos/bj-jean-denim-oscuro-01.jpg",
    category: "Jeans",
  },
  {
    slug: "jean-negro-clasico",
    name: "Jean negro clásico",
    image: "/productos/bj-jean-negro-clasico-01.jpg",
    category: "Jeans",
  },
  {
    slug: "jean-negro-lavado-strass",
    name: "Jean negro lavado con strass",
    image: "/productos/bj-jean-negro-lavado-strass-baby-girl-01.jpg",
    category: "Jeans",
  },
  {
    slug: "jean-negro-skinny-botones",
    name: "Jean negro skinny con botones",
    image: "/productos/bj-jean-negro-skinny-botones-01.jpg",
    category: "Jeans",
  },
  {
    slug: "jean-skinny-lavado-claro",
    name: "Jean skinny lavado claro",
    image: "/productos/bj-jean-lavado-claro-01.jpg",
    category: "Jeans",
  },
  {
    slug: "short-denim-claro",
    name: "Short denim claro",
    image: "/productos/bj-short-denim-01.jpg",
    category: "Shorts",
  },
  {
    slug: "short-gris-deslavado",
    name: "Short gris deslavado",
    image: "/productos/bj-short-blanco-01.jpg",
    category: "Shorts",
  },
  {
    slug: "short-jean-azul",
    name: "Short jean azul",
    image: "/productos/bj-short-jean-azul-01.jpg",
    category: "Shorts",
  },
  {
    slug: "short-mezclilla-desgastada",
    name: "Short mezclilla desgastada",
    image: "/productos/bj-short-mezclilla-desgastada-01.jpg",
    category: "Shorts",
  },
  {
    slug: "short-negro-deslavado",
    name: "Short negro deslavado",
    image: "/productos/bj-short-negro-02.jpg",
    category: "Shorts",
  },
  {
    slug: "falda-vaquera-flare-marfil",
    name: "Falda vaquera flare marfil",
    image: "/productos/bj-falda-vaquera-flare-marfil-01.jpg",
    category: "Faldas",
    line: "Flare, color marfil",
  },
  {
    slug: "minifalda-denim-tachuelas",
    name: "Minifalda denim con tachuelas",
    image: "/productos/bj-minifalda-denim-tachuelas-01.jpg",
    category: "Faldas",
    line: "Denim con tachuelas",
  },
  {
    slug: "camiseta-blanca-estampado-conejo",
    name: "Camiseta blanca con estampado de conejo",
    image: "/productos/bj-camiseta-blanca-estampado-conejo-01.jpg",
    category: "Camisetas",
    line: "Estampado a color",
  },
  {
    slug: "camiseta-blanca-numero-23",
    name: "Camiseta blanca número 23 con pedrería",
    image: "/productos/bj-camiseta-blanca-numero-23-pedreria-01.jpg",
    category: "Camisetas",
  },
  {
    slug: "camiseta-crema-pedreria",
    name: "Camiseta crema con pedrería",
    image: "/productos/bj-camiseta-crema-chanel-pedreria-01.jpg",
    category: "Camisetas",
  },
  {
    slug: "camiseta-nike-blanca-crop",
    name: "Camiseta Nike blanca crop",
    image: "/productos/bj-camiseta-nike-blanca-crop-01.jpg",
    category: "Camisetas",
  },
  {
    slug: "camiseta-nike-blanca-just-do-it",
    name: "Camiseta Nike blanca Just Do It",
    image: "/productos/bj-camiseta-nike-blanca-just-do-it-01.jpg",
    category: "Camisetas",
  },
  {
    slug: "camiseta-nike-crema-just-do-it",
    name: "Camiseta Nike crema Just Do It",
    image: "/productos/bj-camiseta-nike-crema-just-do-it-01.jpg",
    category: "Camisetas",
  },
  {
    slug: "camiseta-nike-crop-crema",
    name: "Camiseta Nike crop crema",
    image: "/productos/bj-camiseta-nike-crop-crema-01.jpg",
    category: "Camisetas",
  },
  {
    slug: "camiseta-nike-gris-triple-swoosh",
    name: "Camiseta Nike gris triple swoosh",
    image: "/productos/bj-camiseta-nike-gris-triple-swoosh-01.jpg",
    category: "Camisetas",
  },
  {
    slug: "chaqueta-denim-negra-rayas",
    name: "Chaqueta denim negra con rayas",
    image: "/productos/bj-chaqueta-denim-negra-rayas-01.jpg",
    category: "Chaquetas",
  },
  {
    slug: "top-negro-canale-cuello-u",
    name: "Top negro canale cuello U",
    image: "/productos/bj-top-negro-canale-cuello-u-01.jpg",
    category: "Tops",
  },
];

export const featuredSlugs = [
  "vestido-negro-manga-larga-fruncido",
  "vestido-denim-corto-halter",
  "conjunto-tres-piezas-gris-celeste",
  "falda-vaquera-flare-marfil",
  "jean-bota-ancha-lavado-acido",
  "jean-azul-ancho-deconstruido",
  "minifalda-denim-tachuelas",
  "camiseta-blanca-estampado-conejo",
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
