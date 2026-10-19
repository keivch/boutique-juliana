import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { ProductCard } from "@/components/product-card";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { catalog } from "@/lib/catalog";
import {
  formattedAddress,
  instagramHandle,
  mapsEmbedUrl,
  mapsUrl,
  pageMetadata,
  site,
  whatsappUrl,
} from "@/lib/site";

export const metadata = pageMetadata({ path: "/" });

const highlights = [
  {
    title: "En tienda",
    text: "Carrera 30A #3A-49, Florencia de la Italia, Palmira.",
  },
  {
    title: "Por WhatsApp",
    text: "Pregunta por una prenda, la talla o el precio y te respondemos por el chat.",
  },
  {
    title: "En Instagram",
    text: "Las novedades también se publican en el perfil de la boutique.",
  },
];

export default function Home() {
  return (
    <main>
      <section id="inicio">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
          <div>
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em]">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Palmira, Valle del Cauca
            </p>
            <h1 className="mt-6 font-serif text-6xl leading-[0.9] font-medium tracking-tight sm:text-7xl lg:text-8xl">
              Boutique
              <span className="block">Juliana</span>
            </h1>
            <p className="mt-5 font-serif text-2xl italic text-ink/80 sm:text-3xl">
              Ropa para dama en Palmira
            </p>
            <p className="mt-6 max-w-md text-base leading-7 text-ink/80 sm:text-lg sm:leading-8">
              La tienda está en Florencia de la Italia. Pasa a conocer las
              novedades o escríbenos por WhatsApp y te ayudamos a elegir.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappUrl()} external>
                <WhatsAppIcon className="size-5" />
                Escribir por WhatsApp
              </ButtonLink>
              <ButtonLink href={mapsUrl()} variant="secondary" external>
                Cómo llegar
              </ButtonLink>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src={site.logo}
              alt="Logo de Boutique Juliana"
              width={1254}
              height={1254}
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 320px, 288px"
              className="h-auto w-56 rounded-full bg-white ring-1 ring-gold ring-offset-4 ring-offset-cream sm:w-72 lg:w-80"
            />
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream" aria-label="Datos de la tienda">
        <dl className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3 md:py-14">
          <div>
            <dt className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
              Dónde
            </dt>
            <dd className="mt-3 font-serif text-3xl leading-tight">
              {site.address.neighborhood}
            </dd>
            <dd className="mt-2 text-sm text-cream/70">
              {site.address.locality}, {site.address.region}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
              Horario
            </dt>
            <dd className="mt-3 font-serif text-3xl leading-tight">
              {site.hours.map((group) => group.label).join(" · ")}
            </dd>
            <dd className="mt-2 text-sm text-cream/70">{site.closedLabel}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
              WhatsApp
            </dt>
            <dd className="mt-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-3xl leading-tight underline decoration-gold/70 underline-offset-4"
              >
                {site.phoneDisplay}
              </a>
            </dd>
            <dd className="mt-2 text-sm text-cream/70">Respuesta directa de la boutique</dd>
          </div>
        </dl>
      </section>

      <section id="coleccion">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>01 — Colección</SectionLabel>
              <h2 className="mt-4 font-serif text-5xl font-medium tracking-tight sm:text-6xl">
                La colección
              </h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-ink/75">
              Casual, deportiva, jeans, shorts, bermudas, vestidos y conjuntos.
              Escríbenos y te contamos qué hay en tienda, las tallas y el precio.
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {catalog.map((item, index) => (
              <li key={item.slug}>
                <ProductCard item={item} index={index} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="boutique" className="border-t border-gold/30">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel>02 — La boutique</SectionLabel>
            <h2 className="mt-4 font-serif text-5xl font-medium tracking-tight sm:text-6xl">
              Tu boutique en Palmira
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-ink/80 sm:text-lg sm:leading-8">
              Boutique Juliana es una tienda de ropa para dama en Florencia de
              la Italia. Puedes pasar a ver las novedades o escribir por
              WhatsApp para que te ayuden a escoger.
            </p>
          </div>
          <ol className="border-y border-gold/40">
            {highlights.map((item, index) => (
              <li
                key={item.title}
                className="grid grid-cols-[auto_1fr] gap-4 border-b border-gold/40 py-6 last:border-b-0"
              >
                <span className="font-serif text-2xl" aria-hidden="true">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-serif text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/75">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="visita" className="border-t border-gold/30">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>03 — Visítanos</SectionLabel>
            <h2 className="mt-4 font-serif text-5xl font-medium tracking-tight sm:text-6xl">
              {site.address.neighborhood}
            </h2>
            <p className="mt-4 text-lg leading-8">
              {site.address.streetAddress}
              <br />
              {site.address.locality}, {site.address.region}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={mapsUrl()} external>
                Cómo llegar
              </ButtonLink>
              <ButtonLink href={site.instagram} variant="secondary" external>
                {instagramHandle()}
              </ButtonLink>
            </div>
            <div className="mt-10">
              <h3 className="text-xs font-medium uppercase tracking-[0.22em]">Horario</h3>
              <ul className="mt-4 border-t border-gold/40">
                {site.hours.map((group) => (
                  <li
                    key={group.label}
                    className="flex flex-col gap-1 border-b border-gold/40 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="font-medium">{group.label}</span>
                    <span className="text-ink/75 sm:text-right">
                      {group.slots.map((slot) => slot.label).join(" y ")}
                    </span>
                  </li>
                ))}
                <li className="py-4 text-ink/75">{site.closedLabel}</li>
              </ul>
            </div>
            <div className="mt-8 space-y-2 text-sm leading-6">
              <p>
                WhatsApp:{" "}
                <a
                  className="underline decoration-gold/70 underline-offset-4"
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                Correo:{" "}
                <a
                  className="underline decoration-gold/70 underline-offset-4 break-words"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </p>
              <p className="text-ink/70">{formattedAddress()}</p>
            </div>
          </div>
          <div className="min-h-80 overflow-hidden border border-gold/50 bg-white">
            <iframe
              title="Mapa de Boutique Juliana en Palmira"
              src={mapsEmbedUrl()}
              className="h-full min-h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-ink text-cream">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
              WhatsApp
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight font-medium sm:text-6xl">
              Escríbenos y te mostramos lo que hay en tienda
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3">
            <ButtonLink href={whatsappUrl()} external>
              <WhatsAppIcon className="size-5" />
              Abrir WhatsApp
            </ButtonLink>
            <p className="text-sm text-cream/70">{site.phoneDisplay}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em]">
      <span className="h-px w-8 bg-gold" aria-hidden="true" />
      {children}
    </p>
  );
}
