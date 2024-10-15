import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function that combines multiple class names into one.
 * It takes in multiple class names as arguments and returns a single class name string.
 * It uses the `clsx`+ `twMerge` library under the hood to handle truthy and falsy values.
 *
 * This utility function is used to conditionally apply class names based on props.
 * Instead of writing
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
