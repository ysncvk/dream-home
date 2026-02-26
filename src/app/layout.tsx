import type { Metadata } from "next";
import { Nunito, Fredoka } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ayaz's Dream House 🏔️",
  description: "My dream house is small and peaceful in the mountains – by Ayaz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${fredoka.variable}`}>
        {children}
      </body>
    </html>
  );
}
