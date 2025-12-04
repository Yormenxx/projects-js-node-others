import React from 'react'
import { pricingInfo } from '../data/Data'

const Pricing = () => {
  return (
    <div className='bg-neutral-950 text-white py-20'>
        <h2 className='capitalize font-bold text-4xl py-20  text-center'>best crypto currently</h2>

        <div className="flex flex-wrap md:flex-row flex-col justify-center gap-y-5 gap-x-6 items-center">

            {
                pricingInfo.map(({image,name,price})=>(
                    <div className='px-20 py-6 bg-neutral-900 rounded '>
                        <img src={image} alt="" />
                        <h3 className='font-bold text-2xl text-center'>{name}</h3>
                        <span className='font-bold text-xl block text-center p-4 text-teal-700 '>{price}</span>
                        <a href="#" className='bg-teal-700 text-white font-bold px-4 py-3 rounded-md text-center m-6'>Buy now</a>
                    </div>
                ))
            }



        </div>

    </div>
  )
}

export default Pricing