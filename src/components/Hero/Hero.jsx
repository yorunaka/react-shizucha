import React from 'react'
import background from '../../assets/bg.jpg'
import Navbar from '../Navbar/Navbar'

const bgimg = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  opacity: '0.9',
}

const Hero = () => {
  return (
  <main style={bgimg}>
    <section className="relative min-h-[750px] w-full bg-yellow-800/40 z-10">
        <div className="container">
        {/* Navbar Section */}
        <Navbar />
        {/* Hero Section */}
          <div className="min-h-[500px]">
            <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
              <div className='text-center'>
              <h1 className='text-white text-4xl font-bold leading-tight sm:text-6xl tracking-tight'>Mulai Harimu Dengan Secangkir Teh</h1>
              <p className='text-white leading-snug pt-2 text-xl'>Shizucha merukpakan sebuah brand yang berfokus dalam menghadirkan produk teh berkualitas</p>
              </div>
              <div class="hidden sm:pt-7 sm:mb-8 sm:flex sm:justify-center">
                  <div class=" bg-white/90 relative rounded-full px-3 py-1 text-md leading-6 text-gray-600 ring-2 ring-gray-900/10 hover:ring-gray-900/80">
                    Tertarik Mencoba? <a href="#" class="font-semibold text-yellow-600"><span class="absolute inset-0" aria-hidden="true"></span>Klik Disini!</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar Section */}
    </section>
  </main>
  );
};

export default Hero