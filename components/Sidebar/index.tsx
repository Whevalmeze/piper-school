import React, { ReactNode } from 'react'
import ActiveLink from '../ActiveLink'

const links: Array<string> = ["dashboard", "users", "academic", "financial", "communication"]

const Sidebar = () : ReactNode => {
  return (
    <div className='bg-arapawa-950 min-h-screen min-w-[20%] text-white py-5 px-2'>
        <div className='text-4xl m-auto font-bold p-2 mb-20 tracking-tight'>Piper School</div>
        <ul className='flex flex-col gap-4'>
            {
                links.map((link: string, index: number): ReactNode => {
                   return <li key={index}>
                            <ActiveLink link={link} />
                        </li>
                })
            }
        </ul>
    </div>
    )
}

export default Sidebar