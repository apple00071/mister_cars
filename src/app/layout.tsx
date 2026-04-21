import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mistercar.in'),
  title: 'Mistercar - Car & Bike Services in Madhapur',
  description: 'Mistercar is your premium car and bike service center in Madhapur, Hyderabad. Expert mechanics, 24/7 service, and free pickup & dropoff for all major brands.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  keywords: "car service hyderabad, bike service hyderabad, car repair madhapur, bike repair madhapur, car mechanic hyderabad, bike mechanic hyderabad, car ac service, engine repair, wheel alignment, car battery service, bike maintenance, oil change hyderabad, two-wheeler service, Tata Motors service, Mahindra repair, Maruti Suzuki center, Hyundai service, Toyota repair, Kia car service, Honda bike repair, Hero MotoCorp service, Bajaj bike maintenance, TVS service center, Royal Enfield specialist, Yamaha bike service, Suzuki two wheeler repair, KTM service hyderabad",
  authors: [{ name: "Mister Car" }],
  openGraph: {
    title: "Mistercar - Best Car & Bike Service Center in Madhapur, Hyderabad",
    description: "Mistercar at Ayyappa Society, Madhapur. Professional car and bike services including Tata, Mahindra, Maruti, Hero, and more. 24/7 service with free pickup & dropoff!",
    url: "https://www.mistercar.in",
    siteName: "Mistercar",
    images: [
      {
        url: '/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Mister Car - Car & Bike Service in Hyderabad',
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mistercar - Car & Bike Services in Madhapur',
    description: 'Expert car and bike service center in Ayyappa Society, Madhapur. 24/7 mechanics for Tata, Mahindra, Maruti, Hero, Bajaj, and more.',
    images: ['/Logo.png'],
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
  verification: {
    google: "your-google-verification-code", // Replace with actual code from Google Search Console
  },
  alternates: {
    canonical: "https://www.mistercar.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1E40AF" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mister Car" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F9N05CW98H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-F9N05CW98H');
          `}
        </Script>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "AutoRepair",
                "name": "Mistercar - Car & Bike Services in Madhapur",
                "image": "https://www.mistercar.in/Logo.png",
                "@id": "https://www.mistercar.in",
                "url": "https://www.mistercar.in",
                "telephone": "+91 99631 20180",
                "priceRange": "₹₹",
                "description": "Mistercar is a 24/7 car and bike service center in Madhapur offering comprehensive maintenance and repair for brands like Tata, Mahindra, Maruti Suzuki, Hero, Bajaj, TVS, and Royal Enfield. Free pickup & dropoff services available.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "No. 57, Road, Ayyappa Society Main Rd, Mega Hills",
                  "addressLocality": "Madhapur",
                  "addressRegion": "Telangana",
                  "postalCode": "500081",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 17.4459923,
                  "longitude": 78.3838793
                },
                "areaServed": [
                  { "@type": "City", "name": "Madhapur" },
                  { "@type": "City", "name": "Hitech City" },
                  { "@type": "City", "name": "Kondapur" },
                  { "@type": "City", "name": "Gachibowli" },
                  { "@type": "City", "name": "Jubilee Hills" }
                ],
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                    ],
                    "opens": "00:00",
                    "closes": "23:59"
                  }
                ],
                "sameAs": [
                  "https://www.instagram.com/mistercar.in"
                ],
                "makesOffer": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Car Repair and Maintenance",
                      "description": "Complete car service for Tata, Mahindra, Maruti Suzuki, Hyundai, and other brands including engine repair, AC service, and oil change."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bike Repair and Maintenance",
                      "description": "Professional bike service for Hero, Bajaj, TVS, Royal Enfield, and Yamaha including engine tuning and brake service."
                    }
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.mistercar.in"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://www.mistercar.in#services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "About",
                    "item": "https://www.mistercar.in#about"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Contact",
                    "item": "https://www.mistercar.in#contact"
                  }
                ]
              }
            ])
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
