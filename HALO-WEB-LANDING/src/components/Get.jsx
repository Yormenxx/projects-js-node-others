import { motion } from "framer-motion";

const Get = () => {

    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, 
                delayChildren: 0.3,  
            }
        }
    };

   
    const textItemVariants = {
        hidden: { opacity: 0, y: 30 }, 
        visible: {
            opacity: 1,
            y: 0, // Suben a su posición
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

  
    const iconContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15 
            }
        }
    };

   
    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 200, damping: 20 }
        }
    };

    return (
        <section className="bg-neutral-950 text-white flex justify-center py-10 px-4">
         
            <motion.article
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }} 
                className="flex flex-col max-w-4xl text-center space-y-8 items-center"
            >

                <motion.h1 variants={textItemVariants} className="text-4xl md:text-6xl font-bold leading-tight">
                    DISFRUTA DEL ÉPICO VIAJE DEL MASTER CHIEF
                </motion.h1>

                
                <motion.div
                    variants={textItemVariants}
                    className="w-24 h-1 bg-[#adff2f] rounded-full"
                ></motion.div>

                <motion.p variants={textItemVariants} className="text-lg md:text-xl tracking-wide text-neutral-300 max-w-3xl">
                    Seis juegos, una saga épica. Esta experiencia integrada y optimizada para PC y Xbox Series X|S agrupa toda la historia del Master Chief. Incluye Halo: Reach, Halo: Combat Evolved Anniversary, Halo 2: Anniversary, Halo 3, Halo 3: ODST y Halo 4; esta es la experiencia de Halo definitiva.
                </motion.p>

                <motion.h2 variants={textItemVariants} className="text-3xl md:text-5xl font-bold pt-6">
                    Maneras de jugar
                </motion.h2>

                
                <motion.div
                    variants={iconContainerVariants} 
                    className="flex flex-wrap justify-center items-center gap-8 mt-4"
                >
                    <motion.img variants={iconVariants} src="https://cms-assets.xboxservices.com/assets/22/76/22764741-7db4-4709-aca0-f53b58bf92a0.svg?n=5229005_Image-0_XGP-White_1034x128.svg" alt="Xbox Game Pass" width={200} className="w-[160px] md:w-[200px]" />

                    <motion.img variants={iconVariants} src="https://cms-assets.xboxservices.com/assets/e7/13/e71381f6-adf4-4bd3-9836-a9000cb24e86.svg?n=5229005_Image-0_Xbox-Series-X-S-White_1000x128.svg" alt="Xbox Series X|S" width={200} className="w-[160px] md:w-[200px]" />

                    <motion.img variants={iconVariants} src="https://cms-assets.xboxservices.com/assets/48/4b/484b6ba1-e720-42c1-9642-fe626ea68be1.svg?n=5229005_Image-0_Xbox-on-PC-White_760x128.svg" alt="Xbox on PC" width={190} className="w-[150px] md:w-[190px]" />

                    <motion.img variants={iconVariants} src="https://cms-assets.xboxservices.com/assets/ae/a2/aea2ca11-187b-412e-9da0-fe9881ab2d05.svg?n=5229005_Image-0_Steam-White_421x128.svg" alt="Steam" width={110} className="w-[90px] md:w-[110px]" />
                </motion.div>

            </motion.article>
        </section>
    )
}

export default Get