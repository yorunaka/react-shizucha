import React from 'react'
import background from '../../assets/bg.jpg'

const bgimg= {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}

const Hero = () => {
  return (
  <main style={bgimg}>
    <section className="min-h-[750px] w-full">
        <div className="container">
        {/* Navbar Section */}

        {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h1>
                Shizucha
              </h1>
            </div>
          </div>
        </div>
    </section>
  </main>
  );
};

export default Hero