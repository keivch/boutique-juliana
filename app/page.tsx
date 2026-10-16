import Image from "next/image";
import {
  formattedAddress,
  mapsUrl,
  pageMetadata,
  site,
  whatsappUrl,
} from "@/lib/site";

export const metadata = pageMetadata({ path: "/" });

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#3b1d24]">
      <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-8 px-6 py-20">
        <Image
          src={site.logo}
          alt="Logo de Boutique Juliana"
          width={1254}
          height={1254}
          priority
          className="h-auto w-44 sm:w-56"
        />
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6b2d3c]">
          Palmira, Valle del Cauca
        </p>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Boutique Juliana
          </h1>
          <p className="max-w-xl text-lg leading-8">
            Ropa para dama en Palmira. Visítanos en Florencia de la Italia y
            conoce las novedades de la boutique.
          </p>
        </div>
        <address className="text-base not-italic leading-7">
          {formattedAddress()}
          <br />
          Colombia
        </address>
        <div className="flex flex-col gap-4 text-base leading-7">
          <div>
            <p className="font-medium">Horario</p>
            <ul>
              {site.hours.map((group) => (
                <li key={group.label}>
                  {group.label}: {group.slots.map((slot) => slot.label).join(" y ")}
                </li>
              ))}
              <li>{site.closedLabel}</li>
            </ul>
          </div>
          <p>
            WhatsApp:{" "}
            <a className="underline" href={whatsappUrl()}>
              {site.phoneDisplay}
            </a>
          </p>
          <p>
            Correo:{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-3 text-base font-medium sm:flex-row">
          <a
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#6b2d3c] px-6 text-[#f7f1ea]"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#6b2d3c] px-6"
            href={mapsUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cómo llegar
          </a>
          <a
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#6b2d3c] px-6"
            href={site.instagram}
            target="_blank"
            rel="me noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
}
