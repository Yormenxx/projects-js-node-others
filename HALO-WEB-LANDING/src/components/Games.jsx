import { gamesItems } from "../constants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react"; 

const Games = () => {

   
    const gridContainerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, 
            },
        },
    };

 
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };


    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="bg-neutral-950 text-white py-20 px-4 md:px-8">


            <div className="max-w-4xl mx-auto text-center mb-6 space-y-4">
                <motion.h1
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.5 }}
                    className="text-3xl md:text-5xl font-bold uppercase text-[#adff2f] tracking-wide"
                >
                    Explora la Franquicia
                </motion.h1>

                <motion.p
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.5 }}
                    className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed"
                >
                    La legendaria saga Halo regresa con la campaña de Master Chief más amplia hasta la fecha y una experiencia multijugador revolucionaria.
                </motion.p>
            </div>

      
            <motion.div
                variants={gridContainerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }} 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            >
                {gamesItems.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className="group bg-neutral-900/50 rounded-xl overflow-hidden border border-neutral-800 hover:border-[#adff2f]/50 transition-colors duration-300"
                    >
                        
                        <div className="overflow-hidden aspect-video relative">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                     
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                        </div>

                 
                        <div className="p-6 space-y-4">
                            <h2 className="text-2xl font-bold group-hover:text-[#adff2f] transition-colors duration-300">
                                {item.title}
                            </h2>

                            <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3">
                                {item.desc}
                            </p>

                            <a
                                href={item.link || "#"}
                                className="inline-flex items-center text-[#adff2f] font-semibold tracking-wide hover:underline mt-2"
                            >
                          
                                <span>Ver detalles</span>
                                <motion.span
                                    className="ml-2"
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </motion.span>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

        </section>
    );
}

export default Games;