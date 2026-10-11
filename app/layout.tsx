import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "Dev.Ahmad | Front-End Developer & UI Specialist",
//   description:
//     "Portfolio of Ahmad Ibraheem: responsive web apps, interactive AI-powered tools, and clean UI design built with React, Next.js, and TypeScript.",
// };
export const metadata: Metadata = {
  title: "Dev.Ahmad | Front-End Developer & UI Specialist",
  description:
    "Portfolio of Ahmad Ibraheem, a front-end developer building responsive web apps and AI-powered tools with Next.js, React, TypeScript, and Tailwind CSS.",
  keywords: [
    "Front-End Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "AI integration",
    "Portfolio",
  ],
  authors: [{ name: "Ahmad Ibraheem" }],
};

export const viewport: Viewport = {
  themeColor: "#0a0d12",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${display.variable} ${body.variable}`}>
      <body>
        <CustomCursor />
        {children}
        </body>
    </html>
  );
}
