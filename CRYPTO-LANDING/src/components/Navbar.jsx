import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { Link } from '../data/Data'
import { Menu,X } from 'lucide-react'

const Navbar = () => {

    const [toggleMobile, setToggleMobile ] = useState(false)
    const toggleNav = ()=>{
        setToggleMobile(!toggleMobile)
    }

  return (
    <div className='bg-neutral-950'>

        <div className="w-full">


            <div className='px-4 py-3 relative mx-auto'>

                <div className="flex items-center justify-between"> 


                    <div className="flex items-center flex-shrink-0">
                        <img className='w-24' src={Logo} alt="" />
                    </div>

                    <ul className="hidden lg:flex space-x-12">
                        {
                            Link.map((item,key)=>
                                
                                <li key={key}>

                                    <a className='text-lg text-white font-medium' href={item.item}>{item.name}</a>

                                </li>
                                
                            )
                        }
                    </ul>

                    <div className='lg:hidden md:flex flex-col justify-end'>

                        <button onClick={toggleNav} className='text-white'>

                            {toggleMobile ? <X/> : <Menu/> }

                        </button>

                    </div>



                </div>

              


            </div>

            {toggleMobile &&(

                <div className="w-full lg:hidden fixed bg-neutral-950">

                    <ul>
                        {
                            Link.map((item,key)=>
                                
                                <li key={key} className='py-4 text-center'>

                                    <a className='text-lg text-white font-medium' href={item.item}>{item.name}</a>

                                </li>
                                
                            )
                        }
                    </ul>

                </div>
            )

            }


        </div>






    </div>
  )
}

export default Navbar