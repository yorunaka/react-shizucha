import React from 'react'
import background from ''

const Hero = () => {
  return (
  <main style={{
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh'
  }}>
    <section className="min-h-[750px] w-full">
        <div className="container">
        {/* Navbar Section */}

        {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2">

          </div>
        </div>
    </section>
  </main>
  );
};

export default Hero