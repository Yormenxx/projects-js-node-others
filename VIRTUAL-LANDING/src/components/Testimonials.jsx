import React from 'react'
import { testimonials } from '../constants'

export default function Testimonials() {
  return (
    <div className='mt-16'>

        <div className='text-center p-6'>
            
          <span className='bg-black rounded-lg border border-solid border-white py-2 px-3  uppercase'>Testimonials</span>


            <h2 className='p-3 text-4xl font-bold uppercase md:text-6xl drop-shadow-lg mb-4'>What the community is saying</h2>
        </div>


        <div className='flex flex-wrap justify-center items-center'>

            {testimonials.map((testimonial,index)=>(
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">

                    <div className='rounded-md border-2 bg-neutral-900 border-neutral-600 '>

                        <p className='tracking-wide leading-relaxed text-neutral-400 px-2 py-3'>{testimonial.text}</p>

                        <div className='bg-neutral-800 px-7 py-3 '>

                            <img className='w-12 h-12 rounded-full border-2 border-orange-600 '
                            src={testimonial.image}
                            
                            alt=""
                                  
                           />

                           <div>


                            <h5>{testimonial.user}</h5>

                            <span className="text-sm font-normal italic text-neutral-100">{testimonial.company}</span>
                           </div>

                        </div>


                    </div>



                </div>
            ))}


        </div>

    </div>
  )
}
