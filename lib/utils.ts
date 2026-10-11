// import { clsx, type ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// export const SOCIAL_LINKS = {
//   github: "https://github.com/ahmadibraheem555",
//   linkedin: "https://www.linkedin.com/in/ahmad-ibraheem-dev",
//   email: "mailto:ahmadibraheem680@gmail.com",
// } as const;

// export const EMAIL_ADDRESS = "example@gmail.com";





import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SOCIAL_LINKS = {
  github: "https://github.com/ahmadibraheem555",
  linkedin: "https://www.linkedin.com/in/ahmad-ibraheem-dev",
  email: "mailto:ahmadibraheem680@gmail.com",
} as const;

export const EMAIL_ADDRESS = "ahmadibraheem680@gmail.com";
