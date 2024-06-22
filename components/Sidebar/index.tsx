"use client"
import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import ActiveLink from '../ActiveLink'
import { BookOpenText, ChevronLeft, ChevronRight, CircleGauge, LogOut, Network, Settings, Users, Wallet } from 'lucide-react'

const links: Array<string> = ["dashboard", "users", "academic", "financial", "communication"]
const icons: Array<ReactNode> = [<CircleGauge size={16} />, <Users size={16} />, <BookOpenText size={16} />,<Wallet size={16} />, <Network size={16} />]

const Sidebar = () : ReactNode => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  return (
    <motion.div className='bg-arapawa-800 relative flex flex-col justify-between h-full min-h-screen min-w-[20%] text-white py-5 px-2'>
        <div className="">
        <div className='text-4xl font-bold p-2 mb-20 tracking-tight'>Piper School</div>
            <ul className='flex flex-col gap-1'>
                {
                    links.map((link: string, index: number): ReactNode => {
                       return <li key={index}>
                                <ActiveLink startsWith={true} link={`/${link}`} default="px-10 flex items-center gap-2 text-gray-300 capitalize py-3 rounded-xl" active="bg-arapawa-500">
                                    <>
                                        {icons[index]}
                                        {link}
                                    </>
                                </ActiveLink>
                            </li>
                    })
                }
            </ul>
        </div>
            <ul className="px-10 capitalize py-3 text-gray-300 gap-1 flex flex-col ">
                <li className='flex gap-2 items-center'><Settings size={16}/> Settings</li>
                <li className='flex gap-2 items-center'><LogOut size={16}/>Logout</li>
            </ul>
        <motion.div whileTap={{scale: 1.4}} drag className='absolute bottom-[5%] right-4 cursor-pointer border rounded-full' onClick={() => setIsSidebarOpen(prev=> !isSidebarOpen)}>
            { isSidebarOpen ? <ChevronLeft size={15}/> : <ChevronRight size={15}/>}
        </motion.div>
    </motion.div>
    )
}

export default Sidebar;