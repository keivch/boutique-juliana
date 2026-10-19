import { site } from "@/lib/site";

const TIME_ZONE = "America/Bogota";

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

const DAY_NAMES: Record<(typeof WEEKDAYS)[number], string> = {
  Sunday: "domingo",
  Monday: "lunes",
  Tuesday: "martes",
  Wednesday: "miércoles",
  Thursday: "jueves",
  Friday: "viernes",
  Saturday: "sábado",
};

export type StoreStatus = {
  open: boolean;
  label: string;
};

export function storeStatus(date: Date): StoreStatus {
  const { weekday, minutes } = bogotaClock(date);
  const today = WEEKDAYS.indexOf(weekday);

  for (let offset = 0; offset < 7; offset += 1) {
    const day = WEEKDAYS[(today + offset) % 7];
    const slots = slotsFor(day);
    if (slots.length === 0) continue;

    if (offset === 0) {
      const current = slots.find(
        (slot) => minutes >= slot.opensAt && minutes < slot.closesAt,
      );
      if (current) {
        return {
          open: true,
          label: `Abierta ahora, hasta las ${formatTime(current.closes)}`,
        };
      }

      const upcoming = slots.find((slot) => minutes < slot.opensAt);
      if (upcoming) {
        const reopening = slots.some((slot) => slot.closesAt <= minutes);
        const prefix = reopening ? "Abre de nuevo" : "Abre hoy";
        return {
          open: false,
          label: `${prefix} a las ${formatTime(upcoming.opens)}`,
        };
      }

      continue;
    }

    const first = slots[0];
    const when = offset === 1 ? "mañana" : `el ${DAY_NAMES[day]}`;
    const todayIsClosed = slotsFor(weekday).length === 0;
    const label = todayIsClosed
      ? `Hoy cerrado. Abre ${when} a las ${formatTime(first.opens)}`
      : `Abre ${when} a las ${formatTime(first.opens)}`;

    return { open: false, label };
  }

  return { open: false, label: "Consulta el horario en tienda" };
}

function slotsFor(day: string) {
  const group = site.hours.find((entry) =>
    (entry.days as readonly string[]).includes(day),
  );
  if (!group) return [];

  return group.slots.map((slot) => ({
    opens: slot.opens,
    closes: slot.closes,
    opensAt: toMinutes(slot.opens),
    closesAt: toMinutes(slot.closes),
  }));
}

function bogotaClock(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "Monday";
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? "0");

  return {
    weekday: (hour === 24 ? nextWeekday(weekday) : weekday) as (typeof WEEKDAYS)[number],
    minutes: hour === 24 ? minute : hour * 60 + minute,
  };
}

function nextWeekday(weekday: string) {
  const index = WEEKDAYS.indexOf(weekday as (typeof WEEKDAYS)[number]);
  return WEEKDAYS[(index + 1) % 7];
}

function toMinutes(value: string) {
  const [hour, minute] = value.split(":").map(Number);
  return hour * 60 + minute;
}

function formatTime(value: string) {
  const [hour, minute] = value.split(":").map(Number);
  const period = hour >= 12 ? "p. m." : "a. m.";
  const hour12 = hour % 12 || 12;
  return `${hour12}:${String(minute).padStart(2, "0")} ${period}`;
}
