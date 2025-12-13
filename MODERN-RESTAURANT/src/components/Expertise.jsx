import { motion } from 'framer-motion';
import { CUSINES } from '../constants/App';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
    },
  },
};


const itemVariants = {
  hidden: { opacity: 0, x: -50 }, 
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const Expertise = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='mb-12 text-center'
      >
        <h2 className='text-3xl lg:text-4xl font-bold tracking-tighter text-gray-800'>
          Our <span className="text-orange-500">Expertise</span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} 
        className='flex flex-col gap-8'
      >
        {CUSINES.map(({ number, image, title, description }, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className='flex flex-col md:flex-row items-center border-b border-dotted border-neutral-300 pb-8 last:border-0 hover:bg-gray-50 rounded-lg p-4 transition-colors duration-300'
          >
           
            <div className='flex-shrink-0 pr-0 md:pr-8 mb-4 md:mb-0'>
                <span className='text-4xl md:text-5xl font-mono text-gray-200 font-bold'>
                    {number}
                </span>
            </div>

         
            <div className='w-full md:w-1/3 flex-shrink-0 mb-4 md:mb-0 relative overflow-hidden rounded-xl'>
              <motion.img 
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.4 }}
                src={image} 
                className='w-full h-48 md:h-auto object-cover rounded-xl shadow-sm' 
                alt={title} 
              />
            </div>

         
            <div className='w-full md:w-2/3 pl-0 md:pl-8 text-center md:text-left'>
              <h3 className='uppercase text-2xl font-bold tracking-tighter text-rose-500 mb-2'>
                {title}
              </h3>
              <p className='text-gray-600 text-lg leading-relaxed'>
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Expertise;