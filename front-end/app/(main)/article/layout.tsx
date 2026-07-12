
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "مقاله",
    description: "weblog",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    );
}
