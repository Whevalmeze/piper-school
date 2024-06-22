import Link from "next/link"
import  "./style.css"

type Props = {}

const UsersNav = (props: Props) => {
  return (
    <div className="usernav">
        <div className="usernav__link">
            <Link href="administrator">Administrators</Link>
        </div>
        <div className="usernav__link">
            <Link href="teacher">Teachers</Link>
        </div>
        <div className="usernav__link">
            <Link href="parent">Parents</Link>
        </div>
        <div className="usernav__link">
            <Link href="student">Students</Link>
        </div>
    </div>
  )
}

export default UsersNav;