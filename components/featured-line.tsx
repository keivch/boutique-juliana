import Image from "next/image";
import { productInquiry, type CatalogItem } from "@/lib/catalog";
import { whatsappUrl } from "@/lib/site";

export function FeaturedLine({
  item,
  index,
}: {
  item: CatalogItem;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  if (!item.image) {
    return (
      <a
        href={whatsappUrl(productInquiry(item.name))}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full min-h-56 flex-col justify-between border border-gold/45 bg-cream p-4 transition duration-300 hover:border-gold motion-safe:hover:-translate-y-1 sm:min-h-64 sm:p-5"
      >
        <span aria-hidden="true" className="text-xs tracking-[0.22em] text-gold">
          {number}
        </span>
        <div>
          <h3 className="font-serif text-3xl leading-none font-medium transition group-hover:text-gold sm:text-4xl">
            {item.name}
          </h3>
          {item.line ? (
            <p className="mt-3 text-sm leading-6 text-ink/75">{item.line}</p>
          ) : null}
          <p className="mt-5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold">
            WhatsApp
          </p>
        </div>
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl(productInquiry(item.name))}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col border border-gold/45 bg-cream transition duration-300 hover:border-gold motion-safe:hover:-translate-y-1"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-ink">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover motion-safe:transition motion-safe:duration-500 motion-safe:group-hover:scale-[1.04]"
        />
        <span
          aria-hidden="true"
          className="absolute top-3 left-3 bg-ink/75 px-2 py-1 text-xs tracking-[0.22em] text-gold"
        >
          {number}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-serif text-3xl leading-none font-medium transition group-hover:text-gold sm:text-4xl">
          {item.name}
        </h3>
        {item.line ? (
          <p className="mt-3 text-sm leading-6 text-ink/75">{item.line}</p>
        ) : null}
        <p className="mt-auto pt-6 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold">
          WhatsApp
        </p>
      </div>
    </a>
  );
}
