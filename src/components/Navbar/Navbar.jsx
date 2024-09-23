import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = ({sidebar, setSidebar}) => {
  return (
    <nav className='absolute top-0 left-0 w-full z-20 pt-5'>
        <div className="container">
            <div className='flex justify-between items-center'>
                <h1>
                    <a href="#" className='text-white text-3xl font-bold uppercase drop-shadow-2xl tracking-tight'>Shizu<span className='text-yellow-400'>cha</span></a>
                </h1>
                    <ul className='hidden drop-shadow-2xl text-white text-xl leading-5 lg:flex lg:gap-8 md:hidden sm:hidden'>
                        <li><a href="#" className='p-4 hover:bg-yellow-600/70 hover:rounded-lg transition ease-in-out delay-75'>Tentang Kami</a></li>
                        <li><a href="#produk" className='p-4 hover:bg-yellow-600/70 hover:rounded-lg transition ease-in-out delay-75'>Produk</a></li>
                        <li><a href="#contacts" className='p-4 hover:bg-yellow-600/70 hover:rounded-lg transition ease-in-out delay-75'>Kontak Kami</a></li>
                    </ul>
                <div className='lg:hidden' onClick={() => setSidebar(!sidebar)}>
                    <GiHamburgerMenu className='text-white text-3xl cursor-pointer'/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar