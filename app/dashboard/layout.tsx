import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./style/body.css"

import { cn } from "@/lib/utils";
import Sidebar from "@/components/Sidebar";

const fontSans = FontSans({
   subsets: ["latin"],
   variable: "--font-sans",
  });

export const metadata: Metadata = {
  title: "Dashboard | Piper School",
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
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
