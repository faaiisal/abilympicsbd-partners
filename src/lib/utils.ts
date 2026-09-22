import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS class names safely, resolving conflicts.
 * Wraps clsx + tailwind-merge for use across all components.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a countdown to a target ISO date string.
 * Returns { days, hours, minutes, seconds } or null if date has passed.
 */
export function getCountdown(isoTarget: string): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null {
  const target = new Date(isoTarget).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

/**
 * Zero-pad a number to at least 2 digits.
 * Used in countdown display ("09" not "9").
 */
export function pad(n: number): string {
  return n.toString().padStart(2, "0");
}
