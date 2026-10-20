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

  return (
    <a
      href={whatsappUrl(productInquiry(item.name))}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col border border-gold/45 bg-white transition duration-300 hover:border-gold motion-safe:hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden bg-[#f2f2f2]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          priority={index < 4}
          sizes="(min-width: 1024px) 22vw, 46vw"
          className="object-contain motion-safe:transition motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
        />
        <span
          aria-hidden="true"
          className="absolute top-3 left-3 bg-ink/80 px-2 py-1 text-xs tracking-[0.22em] text-gold"
        >
          {number}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-gold">
          {item.category}
        </p>
        <h3 className="mt-2 font-serif text-2xl leading-tight font-medium transition group-hover:text-gold sm:text-3xl">
          {item.name}
        </h3>
        {item.line ? (
          <p className="mt-2 text-sm leading-6 text-ink/75">{item.line}</p>
        ) : null}
        <p className="mt-auto pt-5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold">
          WhatsApp
        </p>
      </div>
    </a>
  );
}
