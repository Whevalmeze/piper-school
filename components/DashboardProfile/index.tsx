import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

type Props = {
  user: {
    firstname: string,
    lastname: string,
  }
}

const DashboardProfile = ({user}: Props) => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-between w-full">
        <div>
          <p className="text-xl">Hi, {user?.firstname}.</p>
          <h2 className="text-2xl font-bold">Welcome back, Admin.</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative"><Input className="px-10" placeholder="Search" /><Search width={15} className="absolute top-[20%] left-3" /></div>
          <Avatar className="absolute md:static top-0 right-0">
            <AvatarImage src=" " alt="@shadcn" />
            <AvatarFallback>{user.firstname[0]+user.lastname[0]}</AvatarFallback>
          </Avatar>
        </div>
    </div>
  )
}

export default DashboardProfile