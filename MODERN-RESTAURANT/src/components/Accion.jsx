import hero from "../assets/hero.png";
import { motion } from "framer-motion";

const Accion = () => {
  return (

    <section className=" py-20 overflow-hidden"> 
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        
      
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:w-1/2 items-center lg:items-start gap-6 text-center lg:text-left"
        >
          <h3 className="text-4xl lg:text-6xl text-white font-extrabold tracking-tight leading-tight">
            Enjoy your <span className="text-orange-500">meals</span>
          </h3>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            assumenda repudiandae itaque fuga accusantium. A consequuntur illo
            consequatur commodi voluptas.
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05, backgroundColor: "#ea580c" }} 
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
          >
            More information
          </motion.a>
        </motion.div>

       
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex justify-center"
        >
          <motion.img
            src={hero}
            alt="Delicious meal"
            className="w-72 lg:w-96 object-contain"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Accion;