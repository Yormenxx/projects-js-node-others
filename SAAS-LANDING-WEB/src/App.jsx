import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Works from "./components/Works"


function App() {

  return (
    <>
     <main>
        <Navbar/>
        <Hero/>
        <Works/>
        <Features/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
     </main>
    </>
  )
}

export default App
