"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { navLinks } from "@/lib/nav";
import { site, whatsappUrl } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-cream/95 backdrop-blur-md">
      <div className="h-1 bg-gold" />
      <div className="mx-auto flex h-[4.25rem] w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src={site.logo}
            alt=""
            width={1254}
            height={1254}
            sizes="44px"
            loading="eager"
            className="size-11 shrink-0 rounded-full bg-white object-cover ring-1 ring-gold"
          />
          <span className="truncate font-serif text-lg leading-none tracking-tight sm:text-2xl">
            Boutique Juliana
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Secciones">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.22em] text-ink/80 transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center gap-2 rounded-full bg-gold px-4 text-sm font-medium tracking-wide text-ink transition hover:bg-[#a4843f] md:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center md:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="menu-movil"
          aria-label="Secciones"
          className="absolute inset-x-0 top-full border-b border-gold/30 bg-cream px-5 py-4 shadow-lg md:hidden"
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 font-serif text-3xl"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href={whatsappUrl()} external className="mt-3 w-full">
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </ButtonLink>
        </nav>
      ) : null}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
