"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'


const ActiveLink = (props: {link:string, icon: ReactNode}) => {
    const pathname = usePathname()
    return (
            <Link href={props.link}>
                <div className={`px-10 flex gap-2 text-gray-300 capitalize py-3 rounded-xl ${"/" + props.link === pathname ? "bg-arapawa-500" : ""} `}>
                    {props.icon}
                    {props.link}
                </div>
            </Link>
  )
}

export default ActiveLink