import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hrservicosprediais.com.br"),
  title: {
    default: "HR Serviços Prediais | Manutenção e Reformas de Prédios",
    template: "%s | HR Serviços Prediais"
  },
  description: "HR Serviços Prediais oferece soluções completas em elétrica, pintura, recuperação de fachadas, retrofit, estrutura, alicerces, ar condicionado, projetos estruturais e reformas em geral. Expertise e qualidade para seu condomínio.",
  keywords: [
    "serviços prediais",
    "manutenção predial",
    "recuperação de fachadas",
    "retrofit predial",
    "pintura predial",
    "elétrica predial",
    "ar condicionado",
    "projetos estruturais",
    "reformas de prédios",
    "alicerces",
    "recuperação estrutural",
    "construção civil"
  ],
  authors: [{ name: "HR Serviços Prediais" }],
  creator: "HR Serviços Prediais",
  publisher: "HR Serviços Prediais",
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://hrservicosprediais.com.br",
    title: "HR Serviços Prediais | Manutenção e Reformas de Prédios",
    description: "Soluções completas em serviços prediais: elétrica, pintura, recuperação de fachadas, retrofit e muito mais.",
    siteName: "HR Serviços Prediais",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "HR Serviços Prediais"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "HR Serviços Prediais | Manutenção e Reformas de Prédios",
    description: "Soluções completas em serviços prediais com qualidade e expertise.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://hrservicosprediais.com.br"
  },
  verification: {
    google: "google-site-verification-code",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "HR Serviços Prediais",
              image: "/favicon/favicon.ico",
              "@id": "https://hrservicosprediais.com.br",
              url: "https://hrservicosprediais.com.br",
              telephone: "+55-11-98897-7319",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Henrique Gonçalves Baptista Nº 2245 -  Jardim Belval - Complemento: Apt. 161 Edif. 4",
                addressLocality: "Jardim Belval",
                addressRegion: "SP",
                postalCode: "06.420-130",
                addressCountry: "BR",
                latitude: -23.51958743656625,
                longitude: -46.89950409333373
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                opens: "08:00",
                closes: "18:00"
              },
              sameAs: [
                "https://www.instagram.com/hrservicosprediais/",
              ],
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "50"
              }
            })
          }}
        />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
