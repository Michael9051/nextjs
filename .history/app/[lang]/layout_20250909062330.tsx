
import React from "react";
import type { Metadata } from "next";
import { Roboto} from "next/font/google";
import Provider from "@/app/[lang]/Hoc/Provider";
import "./globals.css";
import ResponsiveNav from "@/app/[lang]/Helper/NavFormation/ResponsiveNav";
import ScrollToTop from "@/app/[lang]/Helper/ScrollToTop/ScrollToTop";
import FooterPolicy from "@/app/[lang]/Helper/PrivacyPolicy/FooterPolicy";


import { i18n, Locale } from "@/i18n.config";




//Fonts
const font = Roboto({
  weight:['300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  preload: false,
})

export const metadata: Metadata = {
  title: "Mebo Rast",
  description: "Stazione di Servizio",
  // icons: {
  //   icon: "/favicon.ico",
  // },
  icons: [
  { rel: "icon", url: "/favicon.ico" },
  // { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  // { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192" },
  ],
  
};



export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale as Locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>
}>) {

  const resolvedParams = await params;
  const lang = resolvedParams.lang;
 

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <Provider>
          <ResponsiveNav  />
           {children}
           <FooterPolicy />
           <ScrollToTop />
        </Provider>
      </body>
    </html>
  );
}
