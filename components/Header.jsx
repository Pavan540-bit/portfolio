import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button';
import Nav from './Nav';

const Header = () => {
    return (
        <header className='py-8 xl:py-12 text-white '>
            <div className='container mx-auto flex items-center justify-between'>
                {/* {logo} */}
                <Link href='/'>
                    <h1 className='text-4xl font-semibold'>
                        Pavan
                        <span
                            className='text-accent'
                            style={{ color: '#90a4ae' }}
                        >.</span>
                    </h1>
                </Link>


                {/* {desktop nav} */}
                <div className="hidden xl:flex items-center gap-8"  >
                    <Nav />
                    <Link href='/contact'>
                        <Button>Hire me</Button>
                    </Link>
                </div>


                  {/* {mobile nav} */}
                <div className="xl:hidden "  >
                    
                    <Link href='/contact'>
                        <Button>mobile nav</Button>
                    </Link>
                </div>

            </div>
        </header>
    )
}

export default Header
