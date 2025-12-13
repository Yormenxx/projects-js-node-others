import { motion } from "framer-motion";
import { KEY_FEATURES_CONTENT } from "../constants";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
      delayChildren: 0.1,   
    },
  },
};


const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

function Features() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
  
        <div className="text-center mb-16 border-t border-neutral-800 pt-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }} 
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-5xl font-bold tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent"
          >
            {KEY_FEATURES_CONTENT.sectionTitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto"
          >
            {KEY_FEATURES_CONTENT.sectionDescription}
          </motion.p>
        </div>

        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-wrap justify-between gap-y-12"
        >
          {KEY_FEATURES_CONTENT.features.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center w-full md:w-1/2 lg:w-1/3 p-4"
            >
          
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5, color: "#60a5fa" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex justify-center items-center mb-6 text-white text-5xl bg-neutral-900 p-4 rounded-2xl shadow-lg border border-neutral-800"
              >
                {item.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              
              <p className="text-neutral-400 leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Features;