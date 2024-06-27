import "./style/body.css"

import Sidebar from "@/components/Sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <main className='w-full max-h-screen h-screen overflow-y-hidden min-h-full'>
        <section className="overflow-y-scroll h-screen p-6 w-full flex flex-col gap-3 container min-h-full">{children}</section>
      </main>
    </>
  );
}
