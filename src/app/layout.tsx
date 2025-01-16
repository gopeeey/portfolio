import Navbar from "@/components/ui/Navbar";
import type { Metadata } from "next";
import { Flamenco, Montserrat } from "next/font/google";
import "./globals.css";

const flamenco = Flamenco({
  variable: "--font-flamenco",
  weight: ["300", "400"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Gopeh | Full Stack Developer",
  description:
    "I just really enjoy creating beautiful and performant software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${flamenco.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
