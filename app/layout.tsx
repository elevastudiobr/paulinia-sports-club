import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Paulínia Sports Club | Futebol e Esporte",
    template: "%s | Paulínia Sports Club",
  },
  description:
    "Conheça o Paulínia Sports Club em Paulínia. Confira nossa estrutura esportiva, alugue quadras e conheça a Escola Oficial São Paulo FC.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Paulínia Sports Club",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}