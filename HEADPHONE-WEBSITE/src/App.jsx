import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Banner from "./components/Banner"
import { UpdateFollower } from "react-mouse-follower"
import BannerText from "./components/BannerText"
import Blogs from "./components/Blogs"
import Footer from "./components/Footer"
function App() {


  return (
    <>
      <main>
        <UpdateFollower
          mouseOptions={
            {
              backgroundColor:"white",
              zIndex:999,
              followSpeed:1.5
            }
          }
        >

          <Navbar />
          <Hero/>
        </UpdateFollower>

        <UpdateFollower
        mouseOptions={
          {
            backgroundColor:"white",
            zIndex:999,
            followSpeed:1.5
          }
        }>

        <Services/>
        </UpdateFollower>
        <Banner/>
        <BannerText/>
        <Blogs/>
        <Footer/>
      </main>

    </>
  )
}

export default App
