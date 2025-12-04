import React from 'react'
import {SERVICES_CONTENT} from "../constants"


const Services = () => {
  return (
    <div className='dark:bg-neutral-950 dark:text-white'>

        <section className='mx-auto border-b-2'>

            <div className="py-20">

                <h2 className='text-xl lg:text-3xl tracking-tighter text-center'>
                    Our Home Renovations Services
                </h2>

                
                <ul className='w-full flex flex-row lg:flex-column flex-wrap justify-center lg:justify-between items-center my-9 px-3'>
                    {SERVICES_CONTENT.map((item,index)=>
                            <li key={index} className='flex flex-col items-center'>

                                <img src={item.image} alt={item.alt} className='w-640 h-56 rounded-2xl' />
                                <h2 className='font-bold text-2xl py-3'>{item.title}</h2>
                                <p className='text-sm w-[400px]'>{item.description}</p>

                            </li>
                        )
                    }

                </ul>
              

            </div>




        </section>




    </div>
  )
}

export default Services