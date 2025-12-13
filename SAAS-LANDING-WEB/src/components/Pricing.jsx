import { motion } from "framer-motion";
import { PLANS_CONTENT } from "../constants";


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
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

function Pricing() {
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
            {PLANS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-6 text-neutral-400 max-w-xl mx-auto text-lg">
            {PLANS_CONTENT.sectionDescription}
          </p>
        </motion.div>


        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }} 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PLANS_CONTENT.plans.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
             
              className={`p-8 rounded-2xl shadow-xl border flex flex-col justify-between transition-all duration-300 relative overflow-hidden
                ${
                  index === 1 
                    ? "bg-neutral-900 border-blue-500 shadow-blue-900/20 z-10 scale-105 md:scale-110" 
                    : "bg-neutral-900/50 border-neutral-800 hover:border-neutral-600"
                }
              `}
            >
          
              {index === 1 && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}

              <div>
                <h3 className="text-lg lg:text-2xl mb-2 tracking-tighter uppercase text-white font-bold">
                  {item.name}
                </h3>
                <p className="text-neutral-400 mb-6 text-sm h-10">
                  {item.description}
                </p>
                
                <div className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                  {item.price}
                  <span className="text-base font-normal text-neutral-500 ml-2">/mo</span>
                </div>

                <ul className="mb-8 space-y-4 text-neutral-300">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
               
                      <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${index === 1 ? 'bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]' : 'bg-neutral-600'}`}></span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-4 rounded-xl font-bold uppercase tracking-wide transition-colors
                    ${
                      index === 1
                        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25"
                        : "border border-neutral-600 hover:border-neutral-400 text-white hover:bg-neutral-800"
                    }
                `}
              >
                {PLANS_CONTENT.ctaText}
              </motion.button>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;