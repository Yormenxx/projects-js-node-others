import React from 'react'
import { HERO_CONTENT } from '../constants'
import { motion } from "framer-motion"

const Hero = () => {


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
        delayChildren: 0.2,   
      }
    }
  }



  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  }


  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0, y: 50 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1, 
        ease: "easeOut" 
      }
    }
  }

  return (
    <section className='dark:bg-neutral-950 overflow-hidden'> 
        <motion.div 
            className="flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >

            
            <motion.h1 
                variants={textVariants}
                className='text-6xl lg:text-[10rem] p-2 uppercase font-bold dark:text-white text-center leading-none'
            >
                    {HERO_CONTENT.title}
            </motion.h1>

            <motion.p 
                variants={textVariants}
                className='font-medium tracking-tighter mb-4 mt-6 dark:text-white text-xl md:text-2xl max-w-2xl text-center px-4'
            >
                {HERO_CONTENT.subtitle}
            </motion.p>

         
            <motion.img 
                variants={imageVariants}
                src={HERO_CONTENT.image} 
                alt="Hero banner" 
                className='w-full h-[65vh] object-cover rounded-2xl p-2 shadow-2xl' 
            />

        </motion.div>

    </section>
  )
}

export default Hero