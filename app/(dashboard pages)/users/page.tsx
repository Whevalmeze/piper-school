import { redirect } from "next/navigation";

type Props = {}

const Users = (props: Props) => {
    redirect("/users/administrator")
  return null
}

export default Users;