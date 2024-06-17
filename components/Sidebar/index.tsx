import React, { ReactNode } from 'react'
import ActiveLink from '../ActiveLink'
import Link from 'next/link'

const links: Array<string> = ["dashboard", "users", "academic", "financial", "communication"]

const Sidebar = () : ReactNode => {
  return (
    <div className='bg-arapawa-950 min-h-screen min-w-[25%] text-white p-5'>
        <span className='text-xl font-bold p-10 mb-10'>Piper School</span>
        <ActiveLink />
        <ul className='flex flex-col gap-4 p-2'>
            {
                links.map((link: string, index: number): ReactNode => {
                   return <li key={index}>
                            <div className='px-6 py-4 rounded-lg bg-arapawa-500'><Link className='capitalize' href={link}>{link}</Link></div>
                        </li>
                })
            }
        </ul>
    </div>
    )
}

export default Sidebar