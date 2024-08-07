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
                <div onClick={() => setSidebar(!sidebar)}>
                    <GiHamburgerMenu className='text-white text-3xl cursor-pointer'/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar