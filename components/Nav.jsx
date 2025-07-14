'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


const links = [
    {
        id: 1,
        name: "home",
        path: "/"
    },
    {
         id: 2,
        name: "services",
        path: "/services"
    },
    {
         id: 3,
        name: "resume",
        path: "/resume"
    },
    {
         id: 4,
        name: "work",
        path: "/work"
    },
    {
         id: 5,
        name: "contact",
        path: "/contact"
    }
]

const Nav = () => {

    // Get the current pathname
    const pathname = usePathname();

    return (
        <nav className='flex gap-8'>
            {
                links.map((pavan,index) => {
                    return (
                        <Link href={pavan.path} key={index} className={`link.path === pathname && grey-port capitalize font-medium `}>
                            {pavan.name}
                        </Link>
                    )
                })
            }
        </nav>
    )
}

export default Nav
