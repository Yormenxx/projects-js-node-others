import React from 'react'
import { SERVICES_CONTENT } from "../constants"
import { motion } from "framer-motion"

const Services = () => {


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
            y: 50, 
            scale: 0.9 
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
                duration: 0.6, 
                ease: "easeOut" 
            }
        }
    }

    return (
        <div className='dark:bg-neutral-950 dark:text-white py-20 overflow-hidden'>

            <section className='container mx-auto px-4'>

              
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className='text-4xl lg:text-6xl font-bold tracking-tight mb-4'>
                        Our Home Renovations <span className="text-neutral-500">Services</span>
                    </h2>
                    <div className="w-24 h-1 bg-neutral-800 dark:bg-white mx-auto rounded-full"></div>
                </motion.div>
                
         
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                >
                    {SERVICES_CONTENT.map((item, index) => (
                        <motion.div 
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10 }} 
                            className='group relative flex flex-col items-center bg-white dark:bg-neutral-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-neutral-200 dark:border-neutral-800'
                        >
                    
                            <div className="w-full h-64 overflow-hidden">
                                <motion.img 
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    src={item.image} 
                                    alt={item.alt} 
                                    className='w-full h-full object-cover' 
                                />
                            </div>

                
                            <div className="p-6 text-center flex flex-col flex-grow">
                                <h3 className='font-bold text-2xl mb-4 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors'>
                                    {item.title}
                                </h3>
                                <p className='text-neutral-600 dark:text-neutral-400 text-base leading-relaxed'>
                                    {item.description}
                                </p>
                                
                             
                                <div className="mt-6">
                                    <button className="text-sm font-semibold uppercase tracking-wider border-b-2 border-transparent group-hover:border-black dark:group-hover:border-white transition-all">
                                        Learn More
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

export default Services