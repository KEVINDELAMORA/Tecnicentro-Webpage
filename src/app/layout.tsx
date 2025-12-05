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
  title: "Tecnicentro de Colima | Maquinaria y Afilado Industrial",
  description: "Venta de maquinaria ligera, afilado de sierras y reparación de herramientas en Colima. Servicio profesional para carpinteros y constructores.",
  keywords: ["afilado de sierras", "maquinaria ligera", "reparación de herramientas", "Colima", "sierra cinta", "discos de sierra", "Tecnicentro"],
  authors: [{ name: "Tecnicentro de Colima" }],
  openGraph: {
    title: "Tecnicentro de Colima | Expertos en Corte y Maquinaria",
    description: "Venta, reparación y afilado industrial. Todo para tu taller en un solo lugar.",
    url: "https://tecnicentro-colima.vercel.app", // Placeholder URL
    siteName: "Tecnicentro de Colima",
    locale: "es_MX",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
