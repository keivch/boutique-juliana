import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/nav";
import {
  formattedAddress,
  instagramHandle,
  site,
  whatsappUrl,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-gold/30 bg-cream pb-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={site.logo}
              alt=""
              width={1254}
              height={1254}
              sizes="48px"
              className="size-12 rounded-full bg-white object-cover ring-1 ring-gold"
            />
            <span className="font-serif text-2xl">Boutique Juliana</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-ink/70">
            Ropa para dama en {site.address.locality}, {site.address.region}.
          </p>
        </div>
        <nav aria-label="Secciones del pie">
          <p className="text-xs font-medium uppercase tracking-[0.22em]">Página</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="underline decoration-gold/70 underline-offset-4"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em]">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                className="underline decoration-gold/70 underline-offset-4"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                className="underline decoration-gold/70 underline-offset-4 break-words"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                className="underline decoration-gold/70 underline-offset-4"
                href={site.instagram}
                target="_blank"
                rel="me noopener noreferrer"
              >
                {instagramHandle()}
              </a>
            </li>
            <li className="pt-2 leading-6 text-ink/70">{formattedAddress()}</li>
          </ul>
        </div>
      </div>
      <p className="px-5 pb-6 text-center text-xs tracking-wide text-ink/50">
        © 2026 Boutique Juliana
      </p>
      <div className="border-t border-gold/20">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <a
            href="https://www.sitcols.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ink/40 transition hover:text-ink/70"
          >
            <span
              aria-hidden="true"
              className="inline-flex size-4 items-center justify-center rounded-[3px] bg-ink/50 text-[9px] font-medium text-cream"
            >
              S
            </span>
            <span className="text-[11px] font-medium tracking-[0.16em]">SITCOLS</span>
          </a>
          <a
            href="https://www.sitcols.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-wide text-ink/40 transition hover:text-ink/70"
          >
            Visitar sitio
            <span aria-hidden="true"> ›</span>
          </a>
        </div>
        <p className="mx-auto w-full max-w-6xl px-5 pb-4 text-[10px] tracking-wide text-ink/35 sm:px-8">
          © 2026 Sitcols. Desarrollo de esta página.
        </p>
      </div>
    </footer>
  );
}
