import {Menu, X} from "lucide-react"
import { useState } from "react"
import { LINKS} from "../constants/App"


const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen]= useState(false);
    const toggleNavbar = ()=>{
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
  return (
   <nav className="fixed w-full flex justify-center  z-50  " >

        <div className="w-full px-2 py-3 mx-auto relative text-sm bg-neutral-950 ">

                <div className="flex justify-between items-center p-2">

                        <div className="flex items-center flex-shrink-0">


                            <span className="text-3xl tracking-tight font-extrabold">REST <span className="text-orange-500"> AURA</span> </span>
                        </div>

                        <ul className="hidden lg:flex  ml-14 space-x-12">
                                {LINKS.map((item, index)=>
                                    <li key={index}>
                                        <a href={item.targetId} className=" uppercase text-sm hover:text-orange-600 ease-in duration-150">{item.text}</a>
                                    </li>
                                )}
                        </ul>

                        <div className="hidden lg:flex  justify-center space-x-11 items-center ">
                            <a href="#" className="px-4 py-2 rounded-md border border-white hover:bg-orange-500 ease-in duration-200">Book a table</a>
                        </div>
{/* 
                        <div className="hidden lg:flex justify-center space-x-12 items-center">
                            <a href="" className="py-2 px-3 border rounded-md hover:opacity-70 ">Sign in</a>
                            <a href="" className="bg-gradient-to-r from-orange-500 to-orange-700 py-2 px-3 border rounded-md hover:opacity-70">Create account</a>
                        </div> */}
                        
                        <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={toggleNavbar}>

                                {mobileDrawerOpen ? <X/ > : <Menu />}

                            </button>
                        </div>

                </div>
                            {mobileDrawerOpen &&(
                                <div className="fixed  w-full bg-neutral-950 p-12 lg:hidden">

                                    <ul>
                                        {LINKS.map((item, index)=>
                                            <li key={index} className="py-4 text-center font-bold hover:text-orange-500">
                                                 <a href={item.targetId} className="text-lg hover:text-orange-600 ease-in duration-150">{item.text}</a>
                                            </li>
                                        )}
                                    </ul>

                                    <div className="flex space-x-6 m-auto justify-center ">
                                        <a href="#" className="px-4 py-2 rounded-md border border-white hover:bg-orange-500 ease-in duration-200">Book a table</a>
                                    </div>
{/* 
                                    <div className="flex space-x-6 ">
                                        <a href="" className="py-2 px-3 border rounded-md hover:opacity-70 ">Sign in</a>
                                        <a href="" className="bg-gradient-to-r from-orange-500 to-orange-700 py-2 px-3 border rounded-md hover:opacity-70">Create account</a>
                                    </div> */}

                                </div>
                            )}

        </div>


   </nav>
  

)
}

export default Navbar