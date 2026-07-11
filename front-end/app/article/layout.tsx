
import { Metadata } from "next";
import Footer from "../(main)/_components/Footer";
import Navbar from "../(main)/_components/Navbar";
import { getAllArticles } from "@/services/blogs";

export const metadata: Metadata = {
  title: "مقاله",
  description: "weblog",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const allArticles = await getAllArticles()
    return (
        <div>
            <Navbar allArticles={allArticles} />
            {children}
            <Footer />
        </div>
    );
}
