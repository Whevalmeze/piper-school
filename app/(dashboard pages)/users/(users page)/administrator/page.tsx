"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import getPathname from "@/lib/userpaths"
import { Search } from "lucide-react"
import { usePathname } from "next/navigation"

type Props = {
}

const Administrator = (props: Props) => {
  const path = usePathname();
  const pathname = getPathname(path);
  
  return (
    <section>
      <div className="flex gap-4 lg:w-[100%] ">
        <div className="relative">
          <Search className="absolute top-3 left-3" width={15} height={15} />
          <Input className="pl-10 w-full capitalize" placeholder={`Search ${pathname}`}  />
        </div>
        <Button>Add {`${pathname}`}</Button>
      </div>
    </section>
  )
}

export default Administrator