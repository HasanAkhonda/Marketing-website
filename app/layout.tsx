import NavigationBar from "@/components/navigation/NavigationBar";
import { AppConfig } from "@/config/app.config";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.slogan,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900">
        <NavigationBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
