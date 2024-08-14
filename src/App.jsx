import React from 'react'
import Hero from './components/Hero/Hero'
import Feedback from './components/Feedback/Feedback'
import Products from './components/Products/Products'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Feedback />
      <Products />
    </div>
  )
}

export default App