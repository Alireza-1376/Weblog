import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import SidebarProvider from "@/context/ShowSidebar";


export const metadata: Metadata = {
  title: "وبلاگ",
  description: "weblog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className="min-h-full flex flex-col">
        <ToastContainer />
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
