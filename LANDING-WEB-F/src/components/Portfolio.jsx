import React from 'react'
import { PORTFOLIO_PROJECTS } from '../constants'
import { motion } from "framer-motion"

const Portfolio = () => {


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, 
            }
        }
    }


    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.95
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
                duration: 0.5, 
                ease: "easeOut" 
            }
        }
    }

  return (
    <div className='dark:bg-neutral-950 dark:text-white py-10' id='portfolio'>
        <section className='max-w-7xl mx-auto px-4 border-b border-neutral-800 pb-20'>

            
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='text-3xl lg:text-5xl tracking-tight text-center uppercase font-bold my-16'
            >
                Portfolio
            </motion.h2>

          
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
                {PORTFOLIO_PROJECTS.map((project) =>(
                    <motion.div 
                        key={project.id} 
                        variants={cardVariants}
                        className='group relative overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300'
                    >
                      
                        <div className="h-80 w-full overflow-hidden"> 
                            <motion.img 
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                src={project.image} 
                                alt={project.name} 
                                className='h-full w-full object-cover' 
                            />
                        </div>

                       
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100 px-6 text-center">
                            
                           
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <h3 className='mb-2 text-2xl font-bold text-white'>
                                    {project.name}
                                </h3>
                                <p className='mb-6 text-neutral-300 text-sm leading-relaxed'>
                                    {project.description}
                                </p>
                                
                          
                                <button className="border border-white text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300">
                                    View Project
                                </button>
                            </div>

                        </div>

                    </motion.div>
                ))}
            </motion.div>

        </section>
    </div>
  )
}

export default Portfolio