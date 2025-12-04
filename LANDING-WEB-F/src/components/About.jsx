import React from 'react'
import about from "../assets/about.webp"


const About = () => {
  return (
    <div className='dark:bg-neutral-950 dark:text-white'>
        <section className='pt-20'>

        <h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase mt-20 mb-12'>About</h2>

        <div className="flex flex-col items-center lg:space-x-8 mx-4 ">
            <div className="mb-8 lg:mb-8">

                <img src={about} alt="About" className='w-full h-auto' />

                <p className='text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, aliquam dolor libero sint iusto modi, maxime amet eveniet numquam incidunt, corrupti laborum alias autem minima adipisci eaque nemo dolorum illum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi quo praesentium, ratione quasi incidunt quibusdam excepturi officiis explicabo quas ea, accusamus libero quis sequi, consequuntur tenetur temporibus dolorum! Laudantium.
                </p>

            </div>
        </div>

        </section>
    </div>
  )
}

export default About