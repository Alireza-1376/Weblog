
import { Metadata } from "next";
import Footer from "../(main)/_components/Footer";
import Navbar from "../(main)/_components/Navbar";

export const metadata: Metadata = {
  title: "مقاله",
  description: "weblog",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
