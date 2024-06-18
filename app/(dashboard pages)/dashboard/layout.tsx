import { Metadata } from "next";

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
    <>
      {children}
    </>
  );
}
