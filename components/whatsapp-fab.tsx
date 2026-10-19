import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fab-in fixed right-4 bottom-4 z-40 inline-flex size-14 items-center justify-center rounded-full bg-gold text-sm font-medium text-ink shadow-[0_10px_30px_rgba(17,17,17,0.18)] transition hover:bg-[#a4843f] sm:right-6 sm:bottom-6 sm:h-12 sm:w-auto sm:gap-2 sm:px-4"
    >
      <WhatsAppIcon className="size-7 sm:size-5" />
      <span className="sr-only sm:not-sr-only">WhatsApp</span>
    </a>
  );
}
