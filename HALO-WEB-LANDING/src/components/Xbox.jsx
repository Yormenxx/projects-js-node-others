import xs from "../../public/assets/xs-original.png"
import box from "../../public/assets/box.svg"
import kk from "../../public/assets/kk.svg"
import fps from "../../public/assets/fps.svg"
import { motion } from "framer-motion";
import { fadeIn } from "../variants"; // Asumo que 'fadeIn' maneja las direcciones

// Variantes específicas para la aparición de los íconos (FPS, 4K, Box)
const iconContainerVariants = {
    // Estado que inicia la secuencia
    show: {
        transition: {
            staggerChildren: 0.15, // Retraso entre la aparición de cada ícono
            delayChildren: 0.3,    // Retraso inicial antes de que aparezca el primer ícono
        },
    },
};

// Variantes para cada ícono individual
const iconItemVariants = {
    hidden: { 
        opacity: 0, 
        y: 20, 
        scale: 0.8 
    },
    show: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 10,
        }
    },
};


function Xbox() {
    return (
        <section className="bg-neutral-950 px-14">

            <hr className="text-white/10"/>
            <div className="py-5 bgXbox">
                <div className="flex flex-col items-center z-20 md:flex-row">


                    <motion.div 
                        variants={fadeIn("right", 0.3)} 
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.5 }} 
                        className="md:w-1/2"
                    >
                        <img src={xs} alt="Xbox Series X|S" />
                    </motion.div>

        
                    <motion.div 
                        variants={fadeIn("up", 0.4)} 
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.5 }}
                        className="flex flex-col text-center mb-12 md:text-left md:w-1/2 md:pr-10 text-white"
                    >
                        <h2 className="text-6xl md:text-5xl font-bold uppercase text-[#adff2f] tracking-wide mb-4">Optimizado para Xbox Series X|S</h2>
                        <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed py-3">Los juegos creados con el kit de desarrollo para Xbox Series X|S están diseñados para aprovechar las capacidades únicas de la nueva generación de consolas. Mostrarán tiempos de carga, imágenes, capacidad de respuesta y velocidades de fotogramas de hasta 120 FPS sin precedentes.</p>
                        <a href="#" target="_blank" className="text-[#03ec0f] text-2xl py-2 rounded-2xl font-bold hover:opacity-80 ease-in duration-100 mb-10 p">Mas información</a>

                      
                        <motion.div 
                            variants={iconContainerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.5 }}
                            className="flex items-center justify-around md:justify-between"
                        >
                      
                            <motion.div variants={iconItemVariants} className="flex flex-col w-[100px] items-center md:items-start">
                                <img src={fps} alt="60 fotogramas por segundo" className="w-[40px] mb-2" />
                                <span className="text-sm text-center md:text-left">60 fotogramas por segundo</span>
                            </motion.div>
                            
                   
                            <motion.div variants={iconItemVariants} className="flex flex-col w-[100px] items-center md:items-start">
                                <img src={kk} alt="4K Ultra HD" className="w-[70px] mb-2" />
                                <span className="text-sm text-center md:text-left">4K Ultra HD</span>
                            </motion.div>
                            
                        
                            <motion.div variants={iconItemVariants} className="flex flex-col w-[100px] items-center md:items-start">
                                <img src={box} alt="Entrega inteligente" className="w-[50px] mb-2" />
                                <span className="text-sm text-center md:text-left">Entrega inteligente</span>
                            </motion.div>
                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Xbox