import { motion } from "framer-motion";

const Hero = () => {

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: 50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",

        when: "beforeChildren",
        staggerChildren: 0.15
      }
    }
  };


  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 15px rgb(173, 255, 47, 0.4)",
      transition: { type: "spring", stiffness: 300, damping: 15 }
    },
    tap: { scale: 0.95 }
  };
  return (
    <section >

      <div className="w-full h-screen flex items-center justify-center md:justify-end">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:mr-8  flex flex-col items-center space-y-5 max-w-md text-white backdrop-blur-2xl py-8 px-6 rounded-xl text-center border border-white/10 shadow-2xl"
        >


          <motion.h1 variants={itemVariants} className="text-4xl font-bold leading-tight">
            Halo: The Master Chief Collection
          </motion.h1>



          <motion.p variants={itemVariants} className="text-neutral-200">
            En honor al icónico héroe y a su épico viaje, la historia completa del Master Chief se une en Halo: The Master Chief Collection.
          </motion.p>


          <motion.div variants={itemVariants} className="font-bold text-lg flex space-x-4 text-neutral-300">
            <a href="#" className="hover:text-[#adff2f] transition-colors">Xbox Console</a>
            <span>|</span>
            <a href="#" className="hover:text-[#adff2f] transition-colors">Xbox on PC</a>
          </motion.div>


          <div className="flex flex-col items-center mt-4 space-y-4 w-full">

           
            <motion.a
              href="#"
            
              variants={{ ...itemVariants, ...buttonHoverVariants }}
              whileHover="hover"
              whileTap="tap"
              className="w-full max-w-[250px] text-center text-xl bg-[#adff2f] text-[#026b07] font-bold px-4 py-2 rounded-full"
            >
              Unirse a Game Pass
            </motion.a>

          
            <motion.a
              href="#"
        
              variants={{ ...itemVariants, ...buttonHoverVariants }}
              whileHover="hover"
              whileTap="tap"
              className="w-full max-w-[250px] text-center text-xl bg-transparent border-2 border-[#adff2f] text-[#adff2f] font-bold px-4 py-2 rounded-full hover:bg-[#adff2f]/10 transition-colors"
            >
              Consíguelo ahora
            </motion.a>

          </div>
        </motion.div>
      </div>



    </section>
  )
}

export default Hero
