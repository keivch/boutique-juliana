import type { ReactNode } from "react";

const variants = {
  primary: "bg-gold text-ink hover:bg-[#a4843f]",
  secondary:
    "border border-ink/15 text-ink hover:border-ink hover:bg-ink hover:text-cream",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium tracking-wide transition motion-safe:active:scale-[0.98] ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
