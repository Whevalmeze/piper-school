import React, { ReactNode } from 'react'
import ActiveLink from '../ActiveLink'

const links: Array<string> = ["Dashboard", "Users", "Academic", "Financial", "Communication"]

const Sidebar = () : ReactNode => {
  return (
    <div className='bg-arapawa-950 min-h-screen min-w-[25%] text-white p-5'>
        <span className='text-xl font-bold p-10 mb-10'>Piper School</span>
        <ActiveLink />
        <ul className='flex flex-col gap-4 p-2'>
            {
                links.map((link: string, index: number): ReactNode => {
                   return <li key={index}>
                            <div className='px-6 py-4 rounded-lg bg-arapawa-500'>{link}</div>
                        </li>
                })
            }
        </ul>
    </div>
    )
}

export default Sidebar