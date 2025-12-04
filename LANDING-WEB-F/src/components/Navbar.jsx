import { useContext,useState } from 'react'
import logo from "../assets/logo.webp"
import { LINKS } from '../constants'
import {Menu, X} from "lucide-react"
import { ThemeContext } from '../App';

const Navbar = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

  const [mobileDrawerOpen, setMobileDrawerOpen]= useState(false);
  const toggleNavbar = ()=>{
      setMobileDrawerOpen(!mobileDrawerOpen)
  }
return (
 <nav className="w-full  dark:bg-neutral-950 ">

      <div className="w-full px-2 py-3 mx-auto relative border-b ">

              <div className="flex justify-between items-center p-2">

                      <div className="flex items-center flex-shrink-0">

                         <img className='w-52 h-7' src={logo} alt="logo" />
                      </div>

                      <ul className="hidden lg:flex  ml-14 space-x-12">
                              {LINKS.map((item, index)=>
                                  <li key={index}>
                                      <a href={item.link} className='px-3 py-2 text-lg font-medium hover:text-white hover:bg-black  hover:rounded-lg duration-200 ease-in dark:hover:text-dark dark:hover:bg-white dark:hover:text-black dark:text-white '>{item.name}</a>
                                  </li>
                              )}
                      </ul>

                      <div>
                        <button onClick={toggleTheme} className="rounded-full w-14 h-8 bg-neutral-950 text-white ">
                        {theme === 'light' ? 'Dark' : 'Light'}
                        </button>
                      </div>
                      
                      <div className="lg:hidden md:flex flex-col justify-end">
                          <button onClick={toggleNavbar}>

                              {mobileDrawerOpen ? <X/ > : <Menu />}

                          </button>
                      </div>

              </div>
                          {mobileDrawerOpen &&(
                            
                              <div className="fixed  w-full  lg:hidden bg-white">

                                  <ul>
                                      {LINKS.map((item, index)=>
                                          <li key={index} className="py-4 text-center font-bold ">
                                               <a href={item.link} className="text-lg text-black">{item.name}</a>
                                          </li>
                                      )}
                                  </ul>

                               

                              </div>
                          )}

      </div>


 </nav>


)
}

export default Navbar