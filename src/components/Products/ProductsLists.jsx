import React from 'react'

const ProductsLists = (props) => {
  return (
    <div class="w-72 bg-yellow-600/30 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
        <img src={props.images} alt={props.id} class="h-80 w-72 object-cover rounded-t-xl" />
        <div class="px-4 py-3 w-72">
            <span class="text-white mr-3 uppercase text-xs">Brand</span>
            <p class="text-lg font-bold text-black truncate block capitalize">
                {props.titles}
            </p>
            <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                <del>
                    <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
            </div>
            <div className=''>
              <p className='text-sm line-clamp-5 text-balance overflow-hidden'>{props.descriptions}</p>
            </div>
              <div className='grid justify-items-center pt-2'>
                <a href="#" className='button nline-flex items-center px-5 py-3 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-900 duration-500'>Pesan Disini!</a>
              </div>
        </div>
    </a>
</div>
    // <div className='bg-yellow-600/30 p-4 rounded-md'>
    // <div className='pt-2 pb-4 text-center font-bold text-2xl '>
    //   <h1>{props.titles}</h1>
    // </div>
    //   <div className='grid justify-items-center pb-3 '>
    //     <img src={props.images} alt={props.id} className='rounded-xl h-[300px] w-[300px]'/>
    //   </div>
    //     <div className='m-5'>
    //       <p className='text-balance truncate'>{props.descriptions}</p>
    //     </div>

    // </div>
  )
}

export default ProductsLists