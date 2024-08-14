/* eslint-disable no-unused-vars */
import React from 'react'

const Product = () => {
  return (
    <section className='w-full h-full top-0 bg-yellow-700/30'>
      <div className='text-white text-center font-bold text-3xl pt-16 space-y-4'>
        <h1>Produk</h1>
      </div>
      {/* products section */}
      <div className='grid grid-cols-3 p-6'>
        {/* produk 1 */}
        <div className='bg-yellow-600/30 p-3 rounded-md'>
        <div className='pt-2 pb-4 text-center font-bold text-xl '>
          <h1>Matcha</h1>
        </div>
          <div className='grid items-center h-[100px] w-[100px]'>
            <img src="src/assets/product-1.png" alt="" className='rounded-xl'/>
          </div>
          <div className='pt-2 pl-2'>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolore expedita voluptates voluptate error mollitia earum magnam eveniet labore nemo!</p>
          </div>
          <div className='pt-3 pb-3 pl-2'>
          <a href="#" className='button nline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg'>Order Here!</a>
          </div>
        </div>
        {/* produk 2 */}
        <div>

        </div>
        {/* produk 3 */}
      </div>
    </section>
  )
}

export default Product