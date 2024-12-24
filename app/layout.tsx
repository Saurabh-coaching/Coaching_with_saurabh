import type { Metadata } from "next";
import "./globals.css";
import { montserrat, merriweather } from "./fonts/fonts";
import Navbar from "./_components/header/Navbar";
import Footer from "./_components/footer/Footer";

export const metadata: Metadata = {
  title: "Saurabh",
  description: "Getting you desired Personal, Professional and Spiritual Results",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${merriweather.variable} antialiased bg-black`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
