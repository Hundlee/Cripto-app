import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./_providers/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Cripto",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <AuthProvider>
                <body className={`${inter.className} dark`}>{children}</body>
            </AuthProvider>
        </html>
    );
}
