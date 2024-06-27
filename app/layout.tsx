import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
   subsets: ["latin"],
   variable: "--font-sans",
  });

export const metadata: Metadata = {
  title: "Piper School",
  description: "Manage your school with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontSans.className)}>
        {children}
      </body>
    </html>
  );
}
