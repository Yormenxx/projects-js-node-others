"use client"
import Image from "next/image"
import Link from "next/link"
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Retraso de 0.2s entre cada elemento hijo
      delayChildren: 0.3,   // Pequeña pausa inicial antes de empezar
    },
  },
};

// Variantes para cada elemento hijo (aparecen deslizándose hacia arriba)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};
const Hero = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py20 xl:flex-row ">

      <div className="absolute right-0 top-0 h-screen w-screen bg-[url('/pattern-bg.png')] bg-cover bg-center md:-right-28 xl:-top-60" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Se anima una vez al entrar en pantalla
        className="relative z-20 flex flex-1 flex-col xl:w-1/2"
      >
        {/* Envolvemos el icono absoluto para que sea parte de la cascada */}
        <motion.div variants={itemVariants}>
          <Image src="/camp.svg" alt="camp" width={50} height={50} className="absolute left-[-5px] -top-8" />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-[52px] font-[700] leading-[120%] lg:text-[88px] lg:font-[700] lg:leading-[120%]"
        >
          Putuk Truno Camp Area
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-gray-600 xl:max-w-[520px]"
        >
          <span className="text-green-600">Putuk Truno Camp Area</span> is a beautiful camping area located in the heart of nature, offering a serene escape from the hustle and bustle of city life. Surrounded by lush greenery and breathtaking landscapes, it provides the perfect setting for outdoor enthusiasts and nature lovers to unwind and reconnect with the great outdoors.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="my-11 flex flex-wrap gap-5"
        >
          <div className="flex items-center gap-2">
            {
              Array(5).fill(0).map((_, index) => (
                // Agregamos una pequeña animación inicial a las estrellas también
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }} // Un pequeño retraso extra para que brillen al final
                >
                  <Image src="/star.svg" alt="star" width={20} height={20} className="inline-block" />
                </motion.div>
              ))
            }
          </div>

          <p className="text-[16px] font-[700] lg:text-[20px] lg:font-[700]">
            198k
            <span className="text-[16px] font-[400] lg:text-[20px] lg:font-[400] ml-1">Excellent Reviews</span>
          </p>

        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex w-full gap-3 sm:flex-row"
        >
          {/* Botón 1 con efecto Hover y Tap */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=" lg:flex lg:items-center lg:justify-center  bg-green-500 hover:bg-green-600 ease-in-out duration-150 text-white rounded-lg py-3 px-8"
          >
            <Link href="/#" className="flex transition-all whitespace-nowrap">
              Download App
            </Link>
          </motion.div>

          {/* Botón 2 con efecto Hover y Tap */}
          <motion.div
            whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.1)" }} // Un verde muy sutil al hover
            whileTap={{ scale: 0.95 }}
            className="group lg:flex lg:items-center lg:justify-center border border-transparent hover:border-green-500 ease-in-out duration-150 text-gray-700 rounded-lg py-2 px-8"
          >
            <Link href="/login" className="flex transition-all whitespace-nowrap  ">
              <Image src="/play.svg" alt="user" width={20} height={50} className="mr-3" />
              How do we work?
            </Link>
          </motion.div>

        </motion.div>

      </motion.div>

      <div className="relative flex  flex-1 items-start">
        <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-neutral-900 px-7 py-8">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-[400] text-gray-500">Location</p>
              <Image src="/close.svg" alt="close" width={20} height={20} className="inline-block" />
            </div>
            <p className="text-[20px] font-bold text-white ">Aguas calientes</p>

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-[16px] font-[400] text-gray-500">Distance</p>
                <p className="text-[20px] font-bold text-white ">173.28 mi</p>
              </div>

              <div className="flex flex-col">
                <p className="text-[16px] font-[400] text-gray-500">Elevation</p>
                <p className="text-[20px] font-bold text-white ">2 km</p>
              </div>

            </div>


          </div>
        </div>


      </div>



    </section>
  )
}

export default Hero
