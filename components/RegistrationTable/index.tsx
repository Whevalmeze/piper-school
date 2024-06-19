import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  type InvoiceType = {
    invoice: string,
    name: string,
    entranceClass: string,
    sex: string,
  }
  
  
  const invoices: Array<InvoiceType> = [
    {
      invoice: "INV001",
      name: "Mr. Joseph Archibong",
      entranceClass: "JSS 1",
      sex: "Male",
    },
    {
      invoice: "INV002",
      name: "Mr. Joseph Archibong",
      entranceClass: "JSS 2",
      sex: "Female",
    },
    {
      invoice: "INV003",
      name: "Mr. Joseph Archibong",
      entranceClass: "SSS 1",
      sex: "Male",
    },
    {
      invoice: "INV004",
      name: "Mr. Joseph Archibong",
      entranceClass: "SSS 3",
      sex: "Female",
    },
    {
      invoice: "INV005",
      name: "Mr. Joseph Archibong",
      entranceClass: "SSS 3",
      sex: "Female",
    },
  ]
  
  export function RegistrationTable() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Student's Name</TableHead>
            <TableHead className="text-left">Class</TableHead>
            <TableHead className="text-left">Gender</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.name}</TableCell>
              <TableCell className="text-left">{invoice.entranceClass}</TableCell>
              <TableCell className="text-left">{invoice.sex}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableCaption className="text-red-500 hover:underline mt-1 text-center cursor-pointer pb-3">View all recent registrations</TableCaption>
      </Table>
    )
  }
  