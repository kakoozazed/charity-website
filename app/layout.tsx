// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/styles/brand";

// Load premium fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: BRAND.blue },
    { media: "(prefers-color-scheme: dark)", color: BRAND.blue },
  ],
};

export const metadata: Metadata = {
  title: "Charity for Children's Ministry (CCM) | Uplifting Vulnerable Children",
  description: "Dedicated to uplifting vulnerable children through education, healthcare, counseling, and community empowerment in Kasese, Uganda.",
  keywords: ["children charity", "Uganda charity", "child education", "child protection", "nonprofit", "Kasese", "community support"],
  authors: [{ name: "Charity for Children's Ministry" }],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-384.png", type: "image/png", sizes: "384x384" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-384.png", sizes: "384x384", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.charityforchildrensministry.org",
    title: "Charity for Children's Ministry (CCM)",
    description: "Dedicated to uplifting vulnerable children for a brighter future.",
    siteName: "Charity for Children's Ministry",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Charity for Children's Ministry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charity for Children's Ministry (CCM)",
    description: "Dedicated to uplifting vulnerable children for a brighter future.",
    images: ["/twitter-image.png"],
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
  appleWebApp: {
    capable: true,
    title: "CCM",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{
        '--color-pink': BRAND.pink,
        '--color-yellow': BRAND.yellow,
        '--color-blue': BRAND.blue,
        '--color-blue-light': BRAND.shades?.blue?.light || '#4a48d6',
        '--color-blue-dark': BRAND.shades?.blue?.dark || '#25247a',
        '--color-pink-light': BRAND.shades?.pink?.light || '#f02ba3',
        '--color-pink-dark': BRAND.shades?.pink?.dark || '#c40473',
        '--color-yellow-light': BRAND.shades?.yellow?.light || '#fff65c',
        '--color-yellow-dark': BRAND.shades?.yellow?.dark || '#e6d800',
      } as React.CSSProperties}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="application-name" content="CCM" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CCM" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content={BRAND.blue} />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color={BRAND.blue} />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white text-slate-900`}
      >
        {/* Main content - NO LOADER */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Structured data - moved to body end */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NonprofitOrganization",
              "name": "Charity for Children's Ministry (CCM)",
              "description": "Dedicated to uplifting vulnerable children through education, healthcare, counseling, and community empowerment.",
              "url": "https://ccm-uganda.org",
              "logo": "https://ccm-uganda.org/icon-512.png",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kisanga B Cell",
                "addressLocality": "Nyamwamba Division, Kasese Municipality",
                "addressRegion": "Western Region",
                "addressCountry": "UG"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+256706522508",
                "contactType": "Customer Service",
                "email": "charityforchildrensminitry@gmail.com",
                "availableLanguage": ["English"]
              },
              "sameAs": [
                "https://twitter.com/CCMUganda",
                "https://facebook.com/CCMUganda",
                "https://instagram.com/CCMUganda"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}