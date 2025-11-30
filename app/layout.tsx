import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ruben Cuevas",
  description: "Ruben Cuevas — Software Engineer at Amazon in NYC",
  keywords: ["Ruben Cuevas", "Software Engineer", "Amazon", "NYC", "Web Development"],
  authors: [{ name: "Ruben Cuevas" }],
  creator: "Ruben Cuevas",
  metadataBase: new URL("https://rubencu.com"),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rubencu.com",
    title: "Ruben Cuevas",
    description: "Software Engineer at Amazon in NYC",
    siteName: "Ruben Cuevas",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ruben Cuevas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ruben Cuevas",
    description: "Software Engineer at Amazon in NYC",
    creator: "@rubencu_",
    images: ["/og-image.jpg"],
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

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ruben Cuevas",
    url: "https://rubencu.com",
    email: "hi@rubencu.com",
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Amazon",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
    },
    sameAs: [
      "https://x.com/rubencu_",
      "https://github.com/rubencu",
      "https://www.linkedin.com/in/rubencu",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
