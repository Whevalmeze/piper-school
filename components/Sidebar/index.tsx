"use client"
import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import ActiveLink from '../ActiveLink'
import { BookOpenText, ChevronLeft, ChevronRight, CircleGauge, LogOut, Network, Settings, Users, Wallet } from 'lucide-react'

const links: Array<string> = ["dashboard", "users", "academic", "financial", "communication"]
const icons: Array<ReactNode> = [<CircleGauge key={"gayd"} size={16} />, <Users key={"gayds"} size={16} />, <BookOpenText key={"gaydd"} size={16} />, <Wallet key={"gasyd"} size={16} />, <Network key={"gaysd"} size={16} />]

const Sidebar = (): ReactNode => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <motion.div
      className='bg-arapawa-800 relative hidden lg:flex flex-col justify-between h-full min-h-screen text-white py-5 px-2'
      animate={{ width: isSidebarOpen ? '20%' : '5%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="">
        <motion.div
          className='text-4xl font-bold p-2 mb-20 tracking-tight'
          initial={{ opacity: 0 }}
          animate={{ opacity: isSidebarOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          Piper School
        </motion.div>
        <ul className='flex flex-col gap-1'>
          {
            links.map((link: string, index: number): ReactNode => {
              return (
                <li key={index}>
                  <ActiveLink startsWith={true} link={`/${link}`} default={`${isSidebarOpen ? "lg:px-10" : "p-4"} flex items-center gap-2 text-gray-300 capitalize py-3 rounded-xl`} active="bg-arapawa-500">
                    <>
                      <span>{icons[index]}</span>
                      <motion.span
                        className={`${isSidebarOpen ? "" : "hidden"} hidden lg:block`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isSidebarOpen ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {link}
                      </motion.span>
                    </>
                  </ActiveLink>
                </li>
              )
            })
          }
        </ul>
      </div>
      <ul className="px-10 capitalize py-3 text-gray-300 gap-1 flex flex-col ">
        <motion.li
          className='flex gap-2 items-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: isSidebarOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Settings size={16} /> 
          <motion.span
            className={`${isSidebarOpen ? "" : "hidden"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isSidebarOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            Settings
          </motion.span>
        </motion.li>
        <motion.li
          className='flex gap-2 items-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: isSidebarOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <LogOut size={16} /> 
          <motion.span
            className={`${isSidebarOpen ? "" : "hidden"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isSidebarOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            Logout
          </motion.span>
        </motion.li>
      </ul>
      <motion.div
        className='absolute bottom-[5%] right-4 cursor-pointer border rounded-full p-1'
        onClick={() => setIsSidebarOpen(prev => !prev)}
      >
        {isSidebarOpen ? <ChevronLeft size={15} /> : <ChevronRight size={15} />}
      </motion.div>
    </motion.div>
  )
}

export default Sidebar;
