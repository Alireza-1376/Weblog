import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./(main)/_components/ThemeProvider";

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
