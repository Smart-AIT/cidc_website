import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/shared/SmoothScroll";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import CustomCursor from "@/components/ui/CustomCursor";
// Client component wrapper import karenge dynamic scroll ke liye
// import GlobalBackground from "./components/layout/GlobalBackground";
import GlobalBackground from "../components/layout/GlobalBackground";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CIDC — College Innovation & Development Club",
  description:
    "CIDC is a student-driven development community at AIT Pune focused on building real-world systems through project-based learning.",
  icons: {
    icon: "/CIDC.png",
  },
  verification: {
    google: "C7WZDw5nHbT63Kg-d2WARNhPqurlZXWa27l-nXrf0Dc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full`}>
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K2ZMZNLLW0"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K2ZMZNLLW0');
            `,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      {/* Items-center joda taaki andar ka content browser ke center me alignment banaye rakhe */}
      <body className="min-h-full flex flex-col items-center bg-[#f4f4f0] relative antialiased w-full overflow-x-hidden">
        {/* Pure website ke piche rehne wala animated layout background */}
        <GlobalBackground />

        <CustomCursor />
        {/* Main content layer relative and z-10 taaki background par scroll overlap ho */}
        <div className="relative z-10 w-full flex flex-col min-h-screen items-center">
          <SmoothScroll>{children}</SmoothScroll>
        </div>
        <ScrollToTopButton />
      </body>
    </html>
  );
}