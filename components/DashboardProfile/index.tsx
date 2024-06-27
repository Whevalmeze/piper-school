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
    <div className="flex flex-col lg:flex-row justify-between w-full">
        <div>
          <p className="text-xl">Hi, {user?.firstname}.</p>
          <h2 className="text-2xl font-bold">Welcome back, Admin.</h2>
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Search" /><Search />
          <Avatar>
            <AvatarImage src=" " alt="@shadcn" />
            <AvatarFallback>{user.firstname[0]+user.lastname[0]}</AvatarFallback>
          </Avatar>
        </div>
    </div>
  )
}

export default DashboardProfile