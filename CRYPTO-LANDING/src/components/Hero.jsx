import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Mob from '../assets/Mob.png'
const Hero = () => {

    const textContainerVars = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, 
                delayChildren: 0.3   
            }
        }
    }

    const textItemVars = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1.7, ease: "easeOut" }
        }
    }

    const imageVars = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1.8, type: "spring", bounce: 0.4 }
        }
    }
    return (
        <div className='px-15'>
            <section className=' container-hero '>

                <div className='flex flex-col items-center justify-center md:space-x-10 z-20 md:flex-row py-5'>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.4 }}
                        variants={imageVars}
                        className="relative"
                    >
                      
                        <motion.img
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            src={Mob}
                            className='max-w-80 md:max-w-lg drop-shadow-2xl' 
                            alt="hero"
                        />
                    </motion.div>

                    <motion.div
                        variants={textContainerVars}
                        initial="hidden"
                        whileInView="visible" 
                        viewport={{ once: false, amount: 0.4 }}
                        className="max-w-xl text-center md:text-left container py-5 text-white space-y-6 "
                    >

                        <motion.h2 variants={textItemVars} className='font-bold md:text-6xl text-4xl leading-tight'>
                            Make easier your <span className="text-emerald-400">crypto transactions</span>
                        </motion.h2>

                        <motion.p variants={textItemVars} className='font-medium py-4 w-full text-neutral-300'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, vel at dolorem corrupti nisi labore quas quae pariatur tenetur.
                        </motion.p>

                        <motion.div variants={textItemVars}>
                            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-lg font-semibold leading-6 text-white inline-block">
                                <span className="absolute inset-0 overflow-hidden rounded-full">
                                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </span>
                                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-4 ring-1 ring-white/10 ">
                                    <span>Try free</span>
                                   
                                    <motion.span
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <ChevronRight className='font-bold' />
                                    </motion.span>
                                </div>
                                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                            </button>
                        </motion.div>

                    </motion.div>





                </div>




            </section >
        </div >
    )
}

export default Hero