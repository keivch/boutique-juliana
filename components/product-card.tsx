import Image from "next/image";
import { productInquiry, type CatalogItem } from "@/lib/catalog";
import { whatsappUrl } from "@/lib/site";

export function ProductCard({
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
      className="group relative flex aspect-[3/4] overflow-hidden border border-gold/45 bg-ink text-cream transition duration-300 hover:border-gold motion-safe:hover:-translate-y-1"
    >
      {item.image ? (
        <>
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, 50vw"
            className="object-cover motion-safe:transition motion-safe:duration-500 motion-safe:group-hover:scale-[1.04]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/25" />
        </>
      ) : null}
      <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5">
        <span
          aria-hidden="true"
          className={
            item.image
              ? "w-fit bg-ink/75 px-2 py-1 text-xs tracking-[0.22em] text-gold"
              : "text-xs tracking-[0.22em] text-gold"
          }
        >
          {number}
        </span>
        <div>
          <h3 className="font-serif text-[1.65rem] leading-none font-medium transition group-hover:text-gold sm:text-4xl">
            {item.name}
          </h3>
          {item.detail ? (
            <p className="mt-2 text-sm leading-5 text-cream/80">{item.detail}</p>
          ) : null}
          <p className="mt-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold">
            WhatsApp
          </p>
        </div>
      </div>
    </a>
  );
}
