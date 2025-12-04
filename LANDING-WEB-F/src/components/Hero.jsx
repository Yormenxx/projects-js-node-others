import React from 'react'
import { HERO_CONTENT } from '../constants'
const Hero = () => {


  return (
    <section className='dark:bg-neutral-950'>

        <div className="flex flex-col items-center">

            <h1 className='text-6xl lg:text-[10rem] p-2 uppercase font-bold dark:text-white'>
                    {HERO_CONTENT.title}
            </h1>

            <p className='font-medium tracking-tighter mb-4 mt-6 dark:text-white'>
                {HERO_CONTENT.subtitle}
            </p>

            <img src={HERO_CONTENT.image} alt="" className='w-full h-[65vh] object-cover rounded-2xl p-2' />


        </div>





    </section>
  )
}

export default Hero