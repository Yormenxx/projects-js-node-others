import { motion } from 'framer-motion'
import { pricingInfo } from '../data/Data'

const Pricing = () => {


    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, type: "spring", bounce: 0.3 }
        }
    }

    
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }


    return (
        <div className='bg-neutral-950 text-white py-20'>
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ staggerChildren: 0.2 }}
            >
                <motion.h2 variants={textVariants} className='capitalize font-medium text-6xl pt-8 text-center'>
                    Best crypto currently
                </motion.h2>

                <div className='flex justify-center'>
                    <motion.p variants={textVariants} className='w-full md:w-2/4 text-center text-lg tracking-tighter py-10 text-neutral-400'>
                        Lorem Esse ad in non aliquip. Aliqua nostrud cillum officia ea commodo ex sit sunt exercitation. Ea id ipsum eiusmod irure officia ad enim duis minim do magna exercitation.
                    </motion.p>
                </div>
            </motion.div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
              
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-wrap md:flex-row flex-col justify-center gap-y-8 gap-x-6 items-center group px-4"
            >

                {pricingInfo.map(({ image, name, price }) => (
                    <motion.div
                        key={name}
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.1,
                            zIndex: 10,
                            transition: { duration: 0.3 }
                        }}
                        className='
                            relative px-10 py-10 md:px-20 md:py-6 
                            bg-neutral-900 rounded-xl 
                            cursor-pointer shadow-xl 
                            transition-all duration-300
                            group-hover:blur-sm group-hover:opacity-40
                            hover:!blur-none hover:!opacity-100 
                            hover:shadow-2xl hover:shadow-teal-900/40
                        '
                    >
                        <img src={image} className="mx-auto w-20 h-20 object-contain mb-4" alt={name} />
                        <h3 className='font-bold text-2xl text-center mb-2'>{name}</h3>
                        <span className='font-bold text-xl block text-center pb-4 text-teal-500'>{price}</span>

                        <div className="flex justify-center mt-2">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className='bg-teal-700 text-white font-bold px-6 py-3 rounded-md hover:bg-teal-600 transition'
                            >
                                Buy now
                            </motion.button>
                        </div>
                    </motion.div>
                ))}

            </motion.div>

        </div>
    )
}

export default Pricing