import { getAllArticles } from "@/services/blogs";
import Footer from "../(main)/_components/Footer";
import Navbar from "./_components/Navbar";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const allArticles =await getAllArticles()
    return (
        <div>
            <Navbar allArticles={allArticles} />
            {children}
            <Footer />
        </div>
    );
}
