import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Build integrity: abf66e8a2ff069c619152a59560a28d7

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
