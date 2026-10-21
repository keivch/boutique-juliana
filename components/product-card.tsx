import Image from "next/image";
import { productInquiry, type CatalogItem } from "@/lib/catalog";
import { whatsappUrl } from "@/lib/site";

export function ProductCard({ item }: { item: CatalogItem }) {
  return (
    <a
      href={whatsappUrl(productInquiry(item.name))}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col border border-gold/40 bg-white transition duration-300 hover:border-gold motion-safe:hover:-translate-y-1"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f2f2f2]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 46vw"
          className="object-contain motion-safe:transition motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h3 className="font-serif text-xl leading-tight font-medium transition group-hover:text-gold sm:text-2xl">
          {item.name}
        </h3>
        <p className="mt-auto pt-4 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-gold">
          WhatsApp
        </p>
      </div>
    </a>
  );
}
