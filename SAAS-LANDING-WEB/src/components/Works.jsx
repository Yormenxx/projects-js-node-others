import { motion } from "framer-motion";
import { HOW_IT_WORKS_CONTENT } from "../constants";


const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};


const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Works() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        
        <motion.div
          initial="hidden"
          whileInView="visible"
    
          viewport={{ once: false, amount: 0.5 }}
          variants={headerVariants}
          className="text-center mb-16 border-t border-neutral-800 pt-10"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
            {HOW_IT_WORKS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
            {HOW_IT_WORKS_CONTENT.sectionDescription}
          </p>
        </motion.div>

     
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
        
          viewport={{ once: false, margin: "-100px" }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {HOW_IT_WORKS_CONTENT.steps.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }} 
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between overflow-hidden group"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

          
              <div className="rounded-xl overflow-hidden h-48 w-full bg-neutral-950 relative">
              
                 <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-300 z-10"></div>
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Works;