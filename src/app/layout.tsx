import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import SectionIndicators from "@/components/ui/SectionIndicators";
import type { Metadata } from "next";
import { Flamenco, Montserrat } from "next/font/google";
import { ToastContainer } from "react-toastify";
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
        className={`${flamenco.variable} ${montserrat.variable} antialiased relative`}
      >
        <Navbar />
        <SectionIndicators />
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={true}
          newestOnTop={false}
          theme="colored"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
