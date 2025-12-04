import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import hero from "./assets/hero.jpg"
import Explores from "./components/Explores"
import Journal from "./components/Journal"
import Footer from "./components/Footer"
function App() {

  return (
    <>
      <div className="overflow-x-hidden  ">
        <div className="bg-[url('./assets/hero.jpg')] bg-cover bg-center relative ">
          <Navbar />
          <Hero />
        </div>
        <Explores/>
        <Journal/>
        <Footer/>
      </div>

    </>
  )
}

export default App
