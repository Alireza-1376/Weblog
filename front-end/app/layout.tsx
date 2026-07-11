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
  const articles = await getAllArticles()
  return (
    <html lang="en" dir="rtl">
      <ThemeProvider>
        <Navbar allArticles={articles} />
        {children}
      </ThemeProvider>
    </html>
  );
}
