import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Mister Car - Car & Bike Service & Repair in Hyderabad',
  description: 'Professional car and bike service center in Hyderabad. Expert mechanics, genuine parts, and comprehensive vehicle care solutions for cars and bikes.',
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
  keywords: "car service hyderabad, bike service hyderabad, car repair madhapur, bike repair madhapur, car mechanic hyderabad, bike mechanic hyderabad, car ac service, engine repair, wheel alignment, car battery service, bike maintenance, oil change hyderabad, two-wheeler service",
  authors: [{ name: "Mister Car" }],
  openGraph: {
    title: "Mister Car - Best Car & Bike Service Center in Madhapur, Hyderabad",
    description: "Professional car and bike service center in Madhapur, Hyderabad. Book your vehicle service now!",
    url: "https://www.mistercar.in",
    siteName: "Mister Car",
    locale: "en_IN",
    type: "website",
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
    google: "your-google-verification-code", // You'll need to add this
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
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "Mister Car",
              "image": "https://www.mistercar.in/logo.png",
              "@id": "https://www.mistercar.in",
              "url": "https://www.mistercar.in",
              "telephone": "+918790437427",
              "description": "Professional car and bike service center in Hyderabad offering comprehensive maintenance, repair, and free pickup & dropoff services.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plot No 1-98/3/22/B, Beside Andhra Bank ATM",
                "addressLocality": "Madhapur",
                "addressRegion": "Telangana",
                "postalCode": "500081",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 17.4459923,
                "longitude": 78.3938607
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "10:00",
                  "closes": "16:00"
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
                    "description": "Complete car service including engine repair, AC service, oil change, and more with free pickup and dropoff."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Bike Repair and Maintenance",
                    "description": "Professional bike service including engine tuning, brake service, and general maintenance with free pickup and dropoff."
                  }
                }
              ]
            })
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
