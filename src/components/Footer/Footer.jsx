import React from 'react'

const Footer = () => {
  return (
    // footer section
    <section className='p-16 bg-yellow-800/30'>
        <div className=''>
            <div className='container flex justify-between items-center p-4'>
            <div className='text-white'>
                <h1 className='text-2xl font-bold'>Shizucha</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, et aliquid.</p>
            </div>
            <div className='text-white'>
                <h1 className='text-xl font-bold'>Kontak Kami</h1>
                <p className='text-sm'>Jl. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, et aliquid.</p>
                <p className='text-sm'>081234567890</p>
                <p className='text-sm'></p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Footer