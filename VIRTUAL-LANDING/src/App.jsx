import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import FeatureSection from "./components/FeatureSection"
import Accion from "./components/Accion"
import Workflow from "./components/Workflow"
import Carousel from "./components/Carousel"
import Services from "./components/Services"
import { Pricing } from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
    
    <Navbar/>

    <div className="max-w-7xl mx-auto pt-20 px-6">

    </div>

    <HeroSection/>

    <FeatureSection/>

    <Services/>

    <Accion/>
    
    <Carousel/>


    <Workflow/>

    <Pricing/>

    <Testimonials/>

    <Footer/>
  
    
    </>
  )
}

export default App