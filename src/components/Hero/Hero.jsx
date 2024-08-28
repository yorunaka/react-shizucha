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
  const [sidebar, setSidebar] = React.useState(false)
  return (
  <main style={bgimg}>
    <section className="relative min-h-[750px] w-full bg-yellow-800/35 z-10">
        <div className="container">
        {/* Navbar Section */}
        <Navbar sidebar={sidebar} setSidebar={setSidebar} />
        {/* Hero Section */}
          <div className="min-h-[500px]">
            <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
              <div className='text-center '>
              <h1 className='text-white drop-shadow-lg text-4xl font-bold leading-tight sm:text-6xl tracking-tight'>Mulai Harimu Dengan Secangkir Teh</h1>
              <p className='text-white leading-snug drop-shadow-lg pt-2 text-xl'>Shizucha merupakan sebuah brand yang berfokus dalam menghadirkan produk teh berkualitas</p>
              </div>
              <div class="hidden sm:pt-7 sm:flex sm:justify-center">
                  <div class=" bg-white/90 shadow-xl hover:shadow-black/50 relative rounded-full px-3 py-1 text-md leading-6 text-gray-600 hover:ring-gray-900/80">
                    Tertarik Mencoba? <a href="#produk" class="font-semibold text-yellow-600"><span class="absolute inset-0" aria-hidden="true"></span>Klik Disini!</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar Section */}
        {
          sidebar && (
          <div className="absolute top-0 right-0 w-[220px] h-full bg-yellow-800/80 z-10">
            <div className='w-full h-full flex justify-center items-center'>
            <div className="flex flex-col gap-5">
              <ul>
                <li className="text-white text-2xl font-bold uppercase"><a href="">Shizu<span className='text-yellow-400'>cha</span></a></li>
              </ul>
              <div className="w-[70px] h-[1px] bg-white"></div>
              <div>
                <ul>
                  <li className="text-white text-lg pt-4"><a href="">Tentang Kami</a></li>
                  <li className="text-white text-lg pt-4"><a href="">Produk</a></li>
                  <li className="text-white text-lg pt-4"><a href="">Kontak Kami</a></li>
                </ul>
              </div>
              <div className="w-[70px] h-[1px] bg-white"></div>
            </div>
            </div>
          </div>
        )
        }
    </section>
  </main>
  );
};

export default Hero