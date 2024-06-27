import UsersNav from "@/components/UsersNav";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2 className="text-2xl font-bold m-0">Users</h2>
      <UsersNav />
      {children}
    </>
  );
}
