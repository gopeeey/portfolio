import Loader from "@/components/Loader";
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

const title = "Samuel Gopeh: Full Stack Developer";
const description =
  "Samuel Gopeh is a full stack developer who is passionate about building high-quality and efficient software.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://www.gopeh.com",
    type: "website",
    images: ["https://www.gopeh.com/images/portfolio_screenshot.png"],
  },
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
        <Loader />
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
