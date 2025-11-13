import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palmrenovate.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Palm Renovate - Home Remodeling and Renovation Contractors",
    template: "%s | Palm Renovate"
  },
  description: "Palm Renovate is your trusted local home remodeling company with over 15 years of experience transforming living spaces. Licensed, bonded, and insured contractors serving Palm Beach & Broward County.",
  keywords: [
    "home remodeling",
    "home renovation",
    "kitchen remodeling",
    "bathroom remodeling",
    "room addition",
    "home contractors",
    "Palm Beach remodeling",
    "Broward County renovation",
    "Boynton Beach contractors",
    "licensed contractors",
    "home improvement",
    "residential remodeling",
    "custom home renovation",
    "design and architectural planning",
    "accessory dwelling units",
    "ADU construction"
  ],
  authors: [{ name: "Palm Renovate" }],
  creator: "Palm Renovate",
  publisher: "Palm Renovate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Palm Renovate",
    title: "Palm Renovate - Home Remodeling and Renovation Contractors",
    description: "Palm Renovate is your trusted local home remodeling company with over 15 years of experience transforming living spaces. Licensed, bonded, and insured contractors serving Palm Beach & Broward County.",
    images: [
      {
        url: `${siteUrl}/images/greenviewrenovation-bg.webp`,
        width: 1200,
        height: 630,
        alt: "Palm Renovate - Home Remodeling Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palm Renovate - Home Remodeling and Renovation Contractors",
    description: "Palm Renovate is your trusted local home remodeling company with over 15 years of experience transforming living spaces.",
    images: [`${siteUrl}/images/greenviewrenovation-bg.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Home Improvement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
