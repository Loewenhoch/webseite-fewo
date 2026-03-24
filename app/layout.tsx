import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Sora } from "next/font/google";
import "./globals.css";
import { GlobalImageLightbox } from "@/components/ui/global-image-lightbox";
import { seoData, brandData } from "@/lib/site-data";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(seoData.siteUrl),
  title: seoData.title,
  description: seoData.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seoData.title,
    description: seoData.description,
    url: seoData.siteUrl,
    siteName: brandData.name,
    locale: "de_AT",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1020",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${sora.variable} ${cormorant.variable} antialiased`}>
        {children}
        <GlobalImageLightbox />
      </body>
    </html>
  );
}
