import { motion } from "framer-motion";
import { BRAND_LOGOS, HERO_CONTENT } from "../constants";
import hero from "../assets/hero.jpg";


const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};


const containerLogosVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const logoItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
};

function Hero() {
    return (
        <section className="px-6 py-20 lg:py-28 overflow-hidden">

         
            <div className="container mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }} 
                    transition={{ staggerChildren: 0.2 }}
                    className="flex flex-col items-center"
                >
                  
                    <motion.div
                        variants={fadeInUpVariants}
                        className="mb-8 w-fit mx-auto border border-neutral-700 bg-neutral-900/50 backdrop-blur-md px-4 py-2 rounded-full text-neutral-300 text-sm font-medium text-center"
                    >
                        {HERO_CONTENT.badgeText}
                    </motion.div>

            
                    <motion.h1
                        variants={fadeInUpVariants}
                        className="text-5xl text-center lg:text-7xl xl:text-8xl mb-6 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent leading-tight"
                    >
                        {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
                            <span key={index} className="block">
                                {text}
                            </span>
                        ))}
                    </motion.h1>

           
                    <motion.p
                        variants={fadeInUpVariants}
                        className="mt-4 text-neutral-400 mx-auto max-w-2xl text-center text-lg lg:text-xl"
                    >
                        {HERO_CONTENT.subHeading}
                    </motion.p>

                
                    <motion.div
                        variants={fadeInUpVariants}
                        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#"
                            className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-8 rounded-xl font-bold transition-colors shadow-lg shadow-blue-600/20"
                        >
                            {HERO_CONTENT.callToAction.primary}
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#"
                            className="border border-neutral-600 hover:border-neutral-400 text-white py-3 px-8 rounded-xl font-bold transition-colors bg-neutral-900/40 backdrop-blur-sm"
                        >
                            {HERO_CONTENT.callToAction.secondary}
                        </motion.a>
                    </motion.div>
                </motion.div>

               
                <div className="py-20 flex flex-col items-center">

                
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-neutral-500 text-sm font-semibold uppercase tracking-widest text-center mb-10"
                    >
                        {HERO_CONTENT.trustedByText}
                    </motion.p>

           
                    <motion.div
                        variants={containerLogosVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, margin: "-50px" }}
                        className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
                    >
                        {BRAND_LOGOS.map((item, index) => (
                            <motion.img
                                key={index}
                                variants={logoItemVariants}
                                src={item.src}
                                alt={item.alt}
                                className="h-6 md:h-10 w-auto object-contain"
                            />
                        ))}
                    </motion.div>

                
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }} 
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mt-20 w-full max-w-6xl"
                    >
                        <img
                            src={hero}
                            alt="hero dashboard"
                            className="w-full rounded-2xl border border-neutral-800 shadow-2xl shadow-blue-900/20"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Hero;