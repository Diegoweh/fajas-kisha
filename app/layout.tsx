import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fajaskisha.com.mx"),
  title: {
    default: "Fajas Kisha — Fajas Colombianas Postquirúrgicas y Reductivas",
    template: "%s | Fajas Kisha",
  },
  description:
    "Fajas colombianas con más de 30 años de experiencia. Postoperatorio, postparto, reductivas y línea caballero. Envíos a todo México desde Mazatlán.",
  keywords: [
    "fajas colombianas",
    "fajas postquirúrgicas",
    "fajas reductivas",
    "fajas postparto",
    "cinturillas",
    "bodys moldeadores",
    "fajas Mazatlán",
    "Fajas Kisha",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Fajas Kisha",
    locale: "es_MX",
    title: "Fajas Kisha — Fajas Colombianas Postquirúrgicas y Reductivas",
    description:
      "Fajas colombianas con más de 30 años de experiencia. Postoperatorio, postparto, reductivas y línea caballero. Envíos a todo México.",
    images: [
      {
        url: "/kisha-logo.png",
        width: 1854,
        height: 902,
        alt: "Fajas Kisha logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fajas Kisha — Fajas Colombianas Postquirúrgicas y Reductivas",
    description:
      "Fajas colombianas con más de 30 años de experiencia. Postoperatorio, postparto, reductivas y línea caballero.",
    images: ["/kisha-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Fajas Kisha",
  description:
    "Fajas colombianas con más de 30 años de experiencia. Postoperatorio, postparto, reductivas y línea caballero.",
  url: "https://fajaskisha.com.mx",
  logo: "https://fajaskisha.com.mx/kisha-logo.png",
  image: "https://fajaskisha.com.mx/kisha-logo.png",
  email: "Grupokisha@fajaskisha.com.mx",
  telephone: "+52-669-269-8425",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mazatlán",
    addressRegion: "Sinaloa",
    addressCountry: "MX",
  },
  sameAs: ["https://www.instagram.com/grupokisha/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
