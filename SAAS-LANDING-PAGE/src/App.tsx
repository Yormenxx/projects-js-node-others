
import { ReactLenis } from 'lenis/react'


import Navbar from "@/components/Navbar"
import Hero from "./components/Hero"
import Brand from './components/Brand'
import Features from './components/Features'
import Process from './components/Process'
import Overview from './components/Overview'
import Review from './components/Review'
import Blog from './components/Blog'
import Cta from './components/Cta'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <ReactLenis root>

   
      <div className="relative isolate overflow-hidden">
        <Navbar />

        <div>
          <Hero />
          <Brand/>
          <Features/>
          <Process/>
          <Overview/>
          <Review/>
          <Blog/>
          <Cta/>
        </div>

        <Footer/>
      </div>

      </ReactLenis>

    </>
  )
}

export default App
