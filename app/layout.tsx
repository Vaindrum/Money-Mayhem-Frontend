import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MoneyMayhem",
  description: "Build your empire. Rags to Riches.",
  keywords: ["moneymayhem", "MoneyMayhem", "Money Mayhem", "money mayhem", "Money mayhem", "money Mayhem", "MONEYMAYHEM", "MONEY MAYHEM", "Vaindrum", "vaindrum", "Vaibhav Raj", "vaibhav raj", "Dharul Mittal", "dharul mittal"],
  authors: [{ name: "Vaibhav Raj", url: "https://github.com/Vaindrum" }, {name: "Dharul Mittal", url: "https://github.com/DharulMittal"}],
  icons: {
    icon: "/micon.ico",
    apple: "/m-apple-icon.png",
    shortcut: "/micon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
