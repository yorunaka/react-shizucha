import React from 'react'

const ProductsLists = (props) => {
  return (
    <div className='bg-yellow-600/30 p-4 rounded-md'>
    <div className='pt-2 pb-4 text-center font-bold text-2xl '>
      <h1>{props.titles}</h1>
    </div>
      <div className='grid justify-items-center pb-3 '>
        <img src={props.images} alt={props.id} className='rounded-xl h-[300px] w-[300px]'/>
      </div>
        <div className='m-5'>
          <p className='text-balance'>{props.descriptions}</p>
        </div>
          <div className='grid justify-items-center pt-2'>
            <a href="#" className='button nline-flex items-center px-5 py-3 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg'>Order Here!</a>
          </div>
    </div>
  )
}

export default ProductsLists