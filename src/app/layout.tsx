import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// IMPORTANT: Replace with your actual deployed domain
const siteUrl = 'https://www.mysticsight.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mystic Sight - AI Tarot Reading & Guidance',
    template: '%s | Mystic Sight',
  },
  description: 'Unveil your path with AI-powered tarot card interpretations. Ask your question, draw three cards, and receive insightful readings from Mystic Sight. Explore your future today.',
  keywords: ['tarot reading', 'ai tarot', 'mystic sight', 'online tarot', 'tarot cards', 'divination', 'spiritual guidance', 'future prediction'],
  
  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Mystic Sight - AI Tarot Reading & Guidance',
    description: 'Discover your path with AI-driven tarot interpretations. Ask, draw, and gain insight.',
    url: siteUrl,
    siteName: 'Mystic Sight',
    images: [
      {
        url: '/og-image.png', // Recommended: 1200x630. Place this in your /public folder
        width: 1200,
        height: 630,
        alt: 'Mystic Sight Tarot Reading',
      },
    ],
    locale: 'en_US', // Adjust if your primary language is different
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Mystic Sight - AI Tarot Reading & Guidance',
    description: 'Explore your future with AI-powered tarot readings on Mystic Sight. Get your personalized interpretation now.',
    images: ['/og-image.png'], // Should be the same as og:image. Place this in your /public folder
    // creator: '@YourTwitterHandle', // Optional: Add your Twitter handle
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Optional: If you have an icons/manifest.json
  // icons: {
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
  // manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteNameForJsonLd = "Mystic Sight - Tarot Reading";
  const siteDescriptionForJsonLd = "Unveil your path with AI-powered tarot card interpretations. Ask your question, draw three cards, and receive insightful readings from Mystic Sight.";
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteNameForJsonLd,
    url: siteUrl,
    description: siteDescriptionForJsonLd,
    // potentialAction: { // Uncomment if you have site search
    //   '@type': 'SearchAction',
    //   target: {
    //     '@type': 'EntryPoint',
    //     urlTemplate: `${siteUrl}/search?q={search_term_string}`
    //   },
    //   'query-input': 'required name=search_term_string'
    // }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
