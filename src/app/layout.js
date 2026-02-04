import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./Provider";

// 1. We keep these for modern typography
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "FreshMart | Premium Groceries",
    description: "Quality Daily, At Your Door.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F8FAFC] text-slate-900`}>
        <Providers>
            {/* 2. FLEX WRAPPER: Keeps footer at bottom and nav at top */}
            <div className="flex min-h-screen flex-col">
                {/* 3. Global Navigation (Move your Nav code here later) */}
                <header className="sticky top-0 z-50">
                    {/* Your Navbar Component goes here */}
                </header>
                {/* 4. Page Content */}
                <main className="flex-grow">
                    {children}
                </main>
                {/* 5. Global Footer */}
                <footer className="border-t border-slate-200 bg-white py-12">
                    <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
                        © 2024 FreshMart. All rights reserved.
                    </div>
                </footer>
            </div>
        </Providers>
        </body>
        </html>
    );
}