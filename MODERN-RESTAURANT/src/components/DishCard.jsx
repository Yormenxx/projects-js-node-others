import { motion } from "framer-motion";


const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

const DishCard = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}
      className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white hover:shadow-xl transition-shadow duration-300"
    >
   
      <div className="w-full h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="p-5">
        <h3 className="mb-2 text-2xl font-bold tracking-tighter text-gray-800">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default DishCard