"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const ActiveLink = () => {
    const pathname = usePathname()
    return (
    <div>
        <Link href={pathname}>{pathname}</Link>
    </div>
  )
}

export default ActiveLink