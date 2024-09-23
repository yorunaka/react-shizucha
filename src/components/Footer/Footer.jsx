import React from 'react'

const Footer = () => {
  return (
    // footer section
    <section className='py-32 bg-yellow-800/40'>
        <div className=''>
            <div className='container flex flex-col-3 items-center p-4 justify-around'>
            <div className='text-white '>
                <h1 className='text-2xl font-bold'>Shizucha</h1>
                <p className='text-sm'>Start your day, with a cup of tea.</p>
            <div className='pt-4'>
                <h1 className='text-xl font-bold'>Kontak Kami</h1>
                <p className='text-sm'>Jl. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, et aliquid.</p>
                <p className='text-sm'>081234567890</p>
                <p className='text-sm'></p>
            </div>
            </div>
            <div className='text-white'>
                <h1 className='text-xl font-bold pl-3'>Follow Us!</h1>
                <div className='gap-4'>
                    <a href="" className='my-auto flex'><img width="75" height="75" src="https://img.icons8.com/sf-ultralight/75/facebook.png" alt="facebook--v1"/>
                    <p className='my-auto'>Shizucha</p></a>
                    <a href="" className='my-auto flex'><img width="75" height="75" src="https://img.icons8.com/sf-ultralight/75/instagram-new.png" alt="instagram-new"/>
                    <p className='my-auto'>@shizucha.ocha</p></a>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Footer