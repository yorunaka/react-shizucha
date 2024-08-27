/* eslint-disable no-unused-vars */
import React from 'react'
import ProductsLists from './ProductsLists';
import Carousel from 'react-multi-carousel';
import { responsive } from '../../assets/carousel';
import { productsData } from '../../assets/productsData';

const products = productsData.map((item) =>
  <ProductsLists
  id={item.id}
  titles={item.title}
  images={item.image}
  descriptions={item.description}
  />
);

const Product = () => {
  return (
    <section className='w-full h-full top-0 bottom-0 bg-yellow-700/30 pb-14'>
      <div className='text-white text-center font-bold text-3xl py-14'>
        <h1>Produk</h1>
      </div>
      {/* products section */}
      <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
        {/* produk 1 */}
        {products}
      </div>
    </section>
  )
}

export default Product