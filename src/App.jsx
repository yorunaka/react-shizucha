import React from 'react'
import Hero from './components/Hero/Hero'
import Feedback from './components/Feedback/Feedback'
import Products from './components/Products/Products'
import Contacts from './components/Contacts/Contacts'

const App = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(()=>{
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);

  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Feedback />
      <Products />
      <Contacts />
    </div>
  )
}

export default App