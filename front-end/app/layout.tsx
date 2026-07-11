import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./(main)/_components/ThemeProvider";
import Navbar from "./(main)/_components/Navbar";
import { getAllArticles } from "@/services/blogs";



export const metadata: Metadata = {
  title: "صفحه اصلی",
  description: "weblog",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </html>
  );
}
