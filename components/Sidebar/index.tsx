import React, { ReactNode } from 'react'
import ActiveLink from '../ActiveLink'

const links: Array<string> = ["dashboard", "users", "academic", "financial", "communication"]

const Sidebar = () : ReactNode => {
  return (
    <div className='bg-arapawa-950 flex flex-col justify-between h-full min-h-screen min-w-[20%] text-white py-5 px-2'>
        <div className="">
        <div className='text-4xl font-bold p-2 mb-20 tracking-tight'>Piper School</div>
            <ul className='flex flex-col gap-1'>
                {
                    links.map((link: string, index: number): ReactNode => {
                       return <li key={index}>
                                <ActiveLink link={link} />
                            </li>
                    })
                }
            </ul>
        </div>
            <ul className="px-10 capitalize py-3 text-gray-300 gap-1 flex flex-col ">
                <li>Settings</li>
                <li>Logout</li>
            </ul>
    </div>
    )
}

export default Sidebar