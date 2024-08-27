import React from 'react'

const FeedbackItems = (props) => {
  return (
    <div className='bg-white/35 max-w-max max-h-max w-full h-full p-6 rounded-2xl justify-items-center lg:h-full '>
      <h1 className='text-center text-lg font-medium ml-5 mr-5 mb-2 lg:text-balance lg:items-center'>
        "{props.feedback}"
      </h1>
      <div className='grid justify-center items-center pt-2'>
      <div className="w-[150px] h-[2px] bg-slate-600"></div>
      </div>
      <div className='grid pt-5 justify-items-center'>
          <img
          className='rounded-full h-24 w-24' 
          src={props.image} 
          alt="people" 
          />
        <div>
          <h1 className='text-xl font-bold pt-2'>
            {props.name}
            </h1>
        </div>
      </div>
    </div>
  )
}

export default FeedbackItems