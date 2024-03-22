import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./_providers/auth";
import { CryptoDataProvider } from "./_providers/CryptoProvider";
import Footer from "./_components/footer";

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
                <CryptoDataProvider>
                    <body className={`${inter.className} dark`}>
                        <div className="flex-1">{children}</div>
                        <Footer />
                    </body>
                </CryptoDataProvider>
            </AuthProvider>
        </html>
    );
}
