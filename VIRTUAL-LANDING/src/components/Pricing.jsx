import React from 'react'
import { pricingOptions } from '../constants'
import { CheckCircle2 } from 'lucide-react'
export const Pricing = () => {
  return (
   <>
   
    <div className='mt-24'>

        <div className="text-center p-6">

          <span className='bg-black rounded-lg border border-solid border-white py-2 px-3  uppercase'>Services</span>


        </div>

        <div className='flex flex-wrap items-center'>
          {pricingOptions.map((option,index)=>(

            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">

              <div  className='p-10 border border-neutral-700 rounded-xl hover:translate-x-1.5 hover:-translate-y-1.5 ease-in duration-200' >

                <p className='text-4xl mb-8 font-bold bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
                  {option.title}
                </p>

                <p>
                  <span className='text-6xl mt-6 mr-2 '>{option.price}</span>
                  <span className='text-neutral-400 tracking-tight'>/Month</span>
                </p>

                <ul>

                  {option.features.map((feature,index)=>(

                      <li key={index} className="mt-8 flex items-center">
                        
                        <CheckCircle2/>

                        <span className='ml-2 pb-3'>{feature}</span>

                      </li>

                  ))}
          
                </ul>

                <a href="" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-gradient-to-r from-orange-500 to-orange-700 py-2 px-3 border rounded-md hover:opacity-80 transition duration-200">
                  Suscribe
                </a>



              </div>

            </div>

          ))}
        </div>


    </div>
   
   
   </>
  )
}
