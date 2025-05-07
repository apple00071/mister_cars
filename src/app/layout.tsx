import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MisterCars - Best Car Service Center in Madhapur, Hyderabad",
  description: "Professional car service center in Madhapur, Hyderabad. Specialized in all car brands, offering services like general service, engine repair, AC service, and more. Book your car service now!",
  keywords: "car service hyderabad, car repair madhapur, car mechanic hyderabad, car ac service, engine repair, wheel alignment, car battery service, oil change hyderabad",
  authors: [{ name: "MisterCars" }],
  openGraph: {
    title: "MisterCars - Best Car Service Center in Madhapur, Hyderabad",
    description: "Professional car service center in Madhapur, Hyderabad. Book your car service now!",
    url: "https://www.mistercar.in",
    siteName: "MisterCars",
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
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1E40AF" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MisterCars" />
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
              "name": "MisterCars",
              "image": "https://www.mistercar.in/logo.png",
              "@id": "https://www.mistercar.in",
              "url": "https://www.mistercar.in",
              "telephone": "+919963120180",
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
