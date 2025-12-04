import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/NavBar'
import Dishes from './components/Dishes'
import Accion from './components/Accion'
import About from './components/About'
import Mission from './components/Mission'
import Expertise from './components/Expertise'
import Review from './components/Review'
const App = () => {
  return (
    <div className='overflow-y-hidden text-neutral-200 antialiased bg-neutral-950'>
      <Navbar/>
      <Hero/>
      <Accion/>
      <Dishes/>
      <About/>
      <Mission/>
      <Expertise/>
      <Review/>
    </div>
  )
}

export default App