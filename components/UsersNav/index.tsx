import  "./style.css"
import ActiveLink from "../ActiveLink"

type Props = {}

const UsersNav = (props: Props) => {
  return (
    <div className="usernav">
        <div className="usernav__link">
            <ActiveLink default="" active="bg-gray-100 rounded-lg px-4 py-2" link="/users/administrator"><>Administrators</></ActiveLink>
        </div>
        <div className="usernav__link">
            <ActiveLink default="" active="bg-gray-100 rounded-lg px-4 py-2" link="/users/teacher"><span>Teachers</span></ActiveLink>
        </div>
        <div className="usernav__link">
            <ActiveLink default="" active="bg-gray-100 rounded-lg px-4 py-2" link="/users/parent"><span>Parents</span></ActiveLink>
        </div>
        <div className="usernav__link">
            <ActiveLink default="" active="bg-gray-100 rounded-lg px-4 py-2" link="/users/student"><span>Students</span></ActiveLink>
        </div>
    </div>
  )
}

export default UsersNav;