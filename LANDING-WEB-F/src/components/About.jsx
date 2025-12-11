import React from 'react'
import about from "../assets/about.webp"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className='dark:bg-neutral-950 dark:text-white py-20 overflow-hidden' id='about'>
        <section className='container mx-auto px-4'>

        
            <motion.h2 
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className='text-3xl lg:text-5xl tracking-tight text-center uppercase font-bold mb-16 lg:mb-24'
            >
                About Me
            </motion.h2>

            
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

               
                <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800">
                       
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10"></div>
                        
                        <img 
                            src={about} 
                            alt="About profile" 
                            className='w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105' 
                        />
                    </div>
                </motion.div>

              
                <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
                    viewport={{ once: true, amount: 0.5 }}
                    className="w-full lg:w-1/2 flex flex-col justify-center"
                >
                    <h3 className='text-2xl lg:text-3xl font-semibold mb-6 text-neutral-800 dark:text-neutral-200'>
                        Who I am?
                    </h3>

                    <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, aliquam dolor libero sint iusto modi, maxime amet eveniet numquam incidunt, corrupti laborum alias autem minima adipisci eaque nemo dolorum illum!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi quo praesentium, ratione quasi incidunt quibusdam excepturi officiis explicabo quas ea, accusamus libero quis sequi, consequuntur tenetur temporibus dolorum! Laudantium.
                        </p>
                    </div>

                   
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-8"
                    >
                        <button className="px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition-opacity shadow-lg">
                            Download CV
                        </button>
                    </motion.div>

                </motion.div>

            </div>

        </section>
    </div>
  )
}

export default About