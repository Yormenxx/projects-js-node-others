import master from "../../public/assets/master.jpg"
import { motion } from "framer-motion";


const sectionVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,  
        }
    }
};


const imageVariants = {
    hidden: { 
        opacity: 0, 
        x: -50,
        scale: 0.95 
    },
    show: { 
        opacity: 1, 
        x: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8,
            ease: "easeOut"
        }
    }
};


const contentVariants = {
    hidden: { 
        opacity: 0, 
        y: 50,
        scale: 0.95
    },
    show: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 18,
            duration: 0.8,
            ease: "easeOut"
        }
    }
};


function BuyGame() {
  return (
    <section className="py-20 bg-neutral-950 text-white">
      <div className="container mx-auto px-4">
        

        <motion.div 
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"

            viewport={{ once: true, amount: 0.4 }} 
            className="flex flex-col items-center md:flex-row justify-center  p-8 rounded-xl shadow-2xl"
        >
            
         
            <motion.div 
                variants={imageVariants} 
                className="md:w-1/3 flex justify-center mb-8 md:mb-0"
            >
                <img src={master} alt="master" className="h-[450px] object-cover rounded-lg shadow-xl" />
            </motion.div>

       
            <motion.div 
                variants={contentVariants}
                className="md:w-1/2 md:pl-16 text-center md:text-left"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2 text-[#03ec0f]">Halo Infinite (Campaña)</h2>
                <h3 className="text-xl md:text-3xl font-semibold leading-snug mb-6 text-gray-300">Se incluye con Game Pass</h3>
                
                <p className="leading-relaxed mb-10 text-gray-400">
                    Disfruta de la campaña de Halo Infinite y de cientos de juegos de alta calidad por un módico precio mensual. La mejor forma de jugar desde el primer día.
                </p>
           
                <div className="w-full flex flex-col gap-4 md:flex-row md:gap-6 mb-8">
                    <a 
                        href="#" 
                        className="bg-[#adff2f] text-gray-900 uppercase font-bold px-8 py-3 rounded-full hover:bg-[#97f02a] duration-200 ease-in-out shadow-lg text-lg flex justify-center items-center"
                    >
                        Unete a Game Pass
                    </a>
                    <a 
                        href="#" 
                        className="text-white border-2 border-[#adff2f] uppercase font-bold px-8 py-3 rounded-full hover:bg-gray-700 duration-200 ease-in-out text-lg flex justify-center items-center"
                    >
                        Ya eres miembro?
                    </a>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-700">
                    <h4 className="font-bold text-lg mb-4 text-gray-300">Comprar Halo Infinite individualmente</h4>

                    <div className="flex items-center justify-center md:justify-start">
                        <select 
                            name="platform" 
                            id="platform-select" 
                            className="w-[180px] py-2 px-3 border border-gray-600 rounded bg-neutral-950 text-white focus:ring-[#adff2f] focus:border-[#adff2f]"
                        >
                            <option value="steam">Steam</option>
                            <option value="gamepass">Game Pass (Adquisición)</option>
                            <option value="pc">Pc Windows 10</option>
                            <option value="xbox">Xbox Series X|S / Xbox One</option>
                        </select>

                        <a 
                            href="#" 
                            className="bg-[#adff2f] text-gray-900 uppercase font-bold px-4 py-2 rounded ml-3 hover:opacity-80 duration-200 ease-in-out"
                        >
                            Comprar ahora
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default BuyGame