import { useState } from "react"
import logo from "../assets/logo.png"
import { NAV_ITEMS } from "../constants"
import { RiCloseFill, RiMenu3Line } from "@remixicon/react"


function Navbar() {

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  const toggleMenu = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  return (
    <>
      <nav className=" relative z-50 m-3" >

        <div className="text-neutral-400 max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-lg border border-neutral-900">


          <img src={logo} width={120} height={24} alt="logo" />


          <div>
            <ul className="hidden md:flex space-x-6">
              {
                NAV_ITEMS.map((item, index) => (
                  <li key={index}>
                    <a className="hover:text-blue-500 duration-150 ease-in-out" href={item.link}>{item.title}</a>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            <a href="" className="hover:text-neutral-100">Login</a>
            <a href="" className="border border-neutral-500 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition">Get a demo</a>
            <a href="" className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Star free trial</a>
          </div>


          <div className="md:hidden">

            <button onClick={toggleMenu} className="text-white cursor-pointer ">
              {mobileDrawerOpen ? <RiCloseFill /> : <RiMenu3Line />}
            </button>

          </div>

        </div>

        {
          mobileDrawerOpen && (

            <div className="md:hidden bg-neutral-900/60 backdrop-blur-2xl border border-neutral-800 p-4 rounded-xl mt-2">
              <ul className="flex flex-col space-y-4">
                {
                  NAV_ITEMS.map((item, index) => (
                    <li key={index}>
                      <a className="hover:text-blue-500 text-neutral-300 duration-150 ease-in-out" href={item.link}>{item.title}</a>
                    </li>
                  ))
                }

                <a href="" className="hover:text-neutral-100 text-blue-500">Login</a>
                <a href="" className="border border-neutral-500 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition">Get a demo</a>
                <a href="" className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Star free trial</a>
              </ul>

            </div>



          )
        }

      </nav>

    </>
  )
}

export default Navbar