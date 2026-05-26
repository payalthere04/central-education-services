import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { WhatsAppButton } from "@/components/pro-blocks/whatsapp-button";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Central Education Services | Expert Admission Guidance",
  description:
    "Get expert admission guidance for Medical, Engineering, Management, Pharmacy, Nursing, and Aviation courses in India & Abroad. Personalized career counselling by Dr. Akshay Patmase.",
  keywords:
    "MBBS admission, BDS admission, engineering admission, MBA admission, nursing admission, education consultancy, Nagpur",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${poppins.variable} font-sans relative antialiased`}>
        <LpNavbar1 />
        <main>{children}</main>
        <Footer1 />
        <WhatsAppButton />
      </body>
    </html>
  );
}
