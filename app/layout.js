import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finora",
  description:
    "AI-powered personal finance platform with budgeting, recurring transactions, receipt scanning, and intelligent financial insights.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-slate-950 text-slate-300 py-12 border-t">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>© 2026 Finora • Built by Chitranshu Mahaur</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
