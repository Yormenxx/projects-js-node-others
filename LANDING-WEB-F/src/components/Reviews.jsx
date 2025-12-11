import React from 'react'
import { REVIEWS } from '../constants'
import { motion } from "framer-motion"

const Reviews = () => {

  
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
      y: 20,
      scale: 0.95
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
    <div className='dark:bg-neutral-950 dark:text-white pb-20' id='reviews'>
      <section className='max-w-7xl mx-auto px-4 pt-20 border-t border-neutral-200 dark:border-neutral-800'>

  
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className='text-3xl lg:text-5xl tracking-tight uppercase font-bold mb-6'>
            Reviews
          </h2>
          <p className='text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed'>
            {REVIEWS.text}
          </p>
        </motion.div>

     
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {REVIEWS.reviews.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }} 
              className='flex flex-col justify-between bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-all duration-300'
            >

      
              <div className="mb-6">
                <p className='text-neutral-700 dark:text-neutral-300 italic leading-relaxed'>
                  "{item.review}"
                </p>
              </div>

   
              <div className='flex items-center mt-auto pt-6 border-t border-neutral-100 dark:border-neutral-800'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-12 h-12 rounded-full mr-4 object-cover border-2 border-neutral-200 dark:border-neutral-700'
                />
                <div>
                  <h4 className='font-bold text-base text-neutral-900 dark:text-white'>
                    {item.name}
                  </h4>
                  <p className='text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-medium'>
                    {item.title}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </section>
    </div>
  )
}

export default Reviews