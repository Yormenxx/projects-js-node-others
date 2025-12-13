import { motion } from "framer-motion";
import { TESTIMONIALS_CONTENT } from "../constants";

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};


const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

function Testimonials() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mt-10">
        
    
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }} 
          variants={headerVariants}
          className="text-center mb-16 border-t border-neutral-800 pt-10"
        >
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
            {TESTIMONIALS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-6 text-neutral-400 max-w-xl mx-auto text-lg">
            {TESTIMONIALS_CONTENT.sectionDescription}
          </p>
        </motion.div>

       
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2"
        >
          {TESTIMONIALS_CONTENT.reviews.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }} 
              className="flex flex-col items-start justify-between rounded-2xl bg-neutral-900 border border-neutral-800 p-8 shadow-lg hover:border-neutral-600 transition-colors duration-300"
            >
            
              <div className="mb-6">
                <span className="text-4xl text-neutral-600 font-serif leading-none">“</span>
                <p className="text-neutral-300 italic leading-relaxed text-sm lg:text-base -mt-4 pl-2">
                  {item.review}
                </p>
              </div>

            
              <div className="flex items-center mt-auto w-full pt-4 border-t border-neutral-800">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover ring-2 ring-neutral-700"
                />
                <div>
                  <p className="text-sm font-bold text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-neutral-500 uppercase tracking-wide">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials