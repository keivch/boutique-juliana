"use client";

import { useSyncExternalStore } from "react";
import { storeStatus, type StoreStatus } from "@/lib/hours";

const listeners = new Set<() => void>();
let cachedMinute = "";
let cachedStatus: StoreStatus | null = null;

function subscribe(listener: () => void) {
  listeners.add(listener);
  const id = window.setInterval(() => {
    listeners.forEach((notify) => notify());
  }, 30_000);
  return () => {
    listeners.delete(listener);
    window.clearInterval(id);
  };
}

function getSnapshot() {
  const now = new Date();
  const minute = now.toISOString().slice(0, 16);
  if (minute !== cachedMinute || !cachedStatus) {
    cachedMinute = minute;
    cachedStatus = storeStatus(now);
  }
  return cachedStatus;
}

function getServerSnapshot() {
  return null;
}

export function StoreStatus({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const status = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const text = tone === "dark" ? "text-cream/70" : "text-ink/75";
  const dot = !status
    ? "bg-transparent"
    : status.open
      ? "bg-gold"
      : tone === "dark"
        ? "bg-cream/40"
        : "bg-ink/30";

  return (
    <p className={`inline-flex min-h-5 items-center gap-2 text-sm ${text}`} aria-live="polite">
      <span
        aria-hidden="true"
        className={`size-1.5 shrink-0 rounded-full ${dot} ${status?.open ? "dot-live" : ""}`}
      />
      {status?.label ?? "Horario de la tienda"}
    </p>
  );
}
