import React from 'react'
import Mob from '../assets/Mob.png'
const Hero = () => {
  return (
    <div className='bg-neutral-950'>
        <section className='py-20 ' class="container-hero">

            <div className='flex flex-col items-center md:space-x-10 z-20 md:flex-row py-20'>

                <div>
                    <img src={Mob} className='w-11/12 ' alt="hero" />
                </div>

                <div className="container py-5 text-white space-y-6 ">

                    <h2 className='font-bold md:text-6xl text-4xl'>Make easier your crypto transactions</h2>
                    <p className='font-medium py-8 w-full'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, vel at dolorem corrupti nisi labore quas quae pariatur tenetur incidunt quo assumenda atque itaque sunt ipsum veniam cumque placeat eos.
                    </p>
                    <a href="#" className='px-7 py-3 bg-teal-700  rounded-lg'>Try for free</a>

                </div>

           



            </div>

            


        </section>
    </div>
  )
}

export default Hero