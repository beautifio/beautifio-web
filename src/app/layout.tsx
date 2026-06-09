import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { AuthProvider } from "@/lib/supabase/auth-provider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Beautifio — Masa Depan Dimulai Hari Ini",
  description: "Platform untuk anak muda Indonesia menemukan arah, lingkungan, dan peluang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen font-body">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
