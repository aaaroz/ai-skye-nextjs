import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/libs/providers";
import { baseUrl } from "@/libs/entities";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s - KontenKilat",
    default: "KontenKilat",
  },
  description: "AI untuk UMKM: Inovasi Pintar Usaha Makin Lancar!",
  keywords: [
    "AI",
    "KontenKilat",
    "Inovasi Pintar Usaha",
    "Inovasi UMKM",
    "Artificial Intellegent",
    "Aplikasi Pembuat Konten",
    "Konten",
    "Kilat",
    "Chat GPT",
    "Konten Tiktok",
    "Konten Instagram",
    "Konten Shopee",
    "Social Media",
  ],
  openGraph: {
    title: "KontenKilat.id",
    description: "AI untuk UMKM: Inovasi Pintar Usaha Makin Lancar!",
    url: baseUrl,
    siteName: "KontenKilat",
    images: [`${baseUrl}/open-graph/kontenkilat-og.png`],
    type: "website",
    emails: ["support@kontenkilat.id"],
    locale: "id-ID",
  },
  twitter: {
    title: "KontenKilat.id",
    creator: "KontenKilat.id",
    card: "summary_large_image",
    images: [`${baseUrl}/open-graph/kontenkilat-og.png`],
    description: "AI untuk UMKM: Inovasi Pintar Usaha Makin Lancar!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased font-inter bg-background text-foreground`}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
