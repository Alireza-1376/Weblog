
import { Metadata } from "next";
import Footer from "../(main)/_components/Footer";

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
            {children}
            <Footer />
        </div>
    );
}
