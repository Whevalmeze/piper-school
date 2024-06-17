"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const ActiveLink = (props: {link:string}) => {
    const pathname = usePathname()
    return (
            <Link href={props.link}>
                <div className={`px-10 text-gray-300 capitalize py-3 rounded-xl ${"/" + props.link === pathname ? "bg-arapawa-500" : ""} `}>
                    {props.link}
                </div>
            </Link>
  )
}

export default ActiveLink