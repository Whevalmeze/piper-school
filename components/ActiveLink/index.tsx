"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type Props = {
    link: string,
    default: string,
    active: string,
    icon?: ReactNode,
    startsWith?: boolean,
    children: ReactNode,
}

const ActiveLink = (props: Props) => {
    const pathname = usePathname()
    
    const isActive = !props.startsWith ? pathname === `${props.link}` : pathname.startsWith(`${props.link}/`) || pathname === `${props.link}`;

    return (
        <Link className={`${props.default}  ${isActive ? props.active : ""}`} href={`${props.link}`}>
            {props.children}
        </Link>
    )
}

export default ActiveLink
