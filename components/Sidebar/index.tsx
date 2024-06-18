import React, { ReactNode } from 'react'
import ActiveLink from '../ActiveLink'
import { BookOpenText, CircleGauge, LogOut, Network, Settings, Users, Wallet } from 'lucide-react'

const links: Array<string> = ["dashboard", "users", "academic", "financial", "communication"]
const icons: Array<ReactNode> = [<CircleGauge size={16} />, <Users size={16} />, <BookOpenText size={16} />,<Wallet size={16} />, <Network size={16} />]

const Sidebar = () : ReactNode => {
  return (
    <div className='bg-arapawa-950 flex flex-col justify-between h-full min-h-screen min-w-[20%] text-white py-5 px-2'>
        <div className="">
        <div className='text-4xl font-bold p-2 mb-20 tracking-tight'>Piper School</div>
            <ul className='flex flex-col gap-1'>
                {
                    links.map((link: string, index: number): ReactNode => {
                       return <li key={index}>
                                <ActiveLink link={link} icon={icons[index]} />
                            </li>
                    })
                }
            </ul>
        </div>
            <ul className="px-10 capitalize py-3 text-gray-300 gap-1 flex flex-col ">
                <li className='flex gap-2 items-center'><Settings size={16}/> Settings</li>
                <li className='flex gap-2 items-center'><LogOut size={16}/>Logout</li>
            </ul>
    </div>
    )
}

export default Sidebar