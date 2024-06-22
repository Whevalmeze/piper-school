"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

const ActiveLink = (props: { link: string, icon: ReactNode }) => {
    const pathname = usePathname()
    
    const isActive = pathname === `/${props.link}` || pathname.startsWith(`/${props.link}/`);

    return (
        <Link href={`/${props.link}`}>
            <div className={`px-10 flex items-center gap-2 text-gray-300 capitalize py-3 rounded-xl ${isActive ? "bg-arapawa-500" : ""}`}>
                {props.icon}
                {props.link}
            </div>
        </Link>
    )
}

export default ActiveLink
