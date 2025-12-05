import { ChevronRight } from 'lucide-react';
import Img from '../assets/status.png'
import { motion } from 'framer-motion'
const Status = () => {

    const textContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        }
    }


    const textItemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }


    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, type: "spring", bounce: 0.4 }
        }
    }
    return (
        <section className='bg-neutral-950 text-white px-12'>

            <div className='grid md:grid-cols-2 grid-cols-1 items-center place-content-center gap-6 p-3 py-10'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={textContainerVariants}
                    className='flex flex-col space-y-8 items-center md:items-start'
                >
                    <motion.h2
                        variants={textItemVariants}
                        className='capitalize font-medium text-4xl md:text-5xl tracking-wider text-center md:text-left leading-tight'
                    >
                        Trust us due to our <span className="text-teal-500">safe and convenient</span> deposit
                    </motion.h2>

                    <motion.p
                        variants={textItemVariants}
                        className='text-center md:text-left text-lg tracking-tighter text-neutral-400'
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perferendis expedita, nostrum quas ab optio eos beatae nobis modi, doloremque voluptatibus reiciendis.
                    </motion.p>

                    <motion.div variants={textItemVariants} className="w-full flex justify-center md:justify-start">
                        <button className="w-[170px] bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-lg font-semibold leading-6 text-white inline-block">
                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            </span>
                            <div className="relative flex space-x-2 items-center justify-center z-10 rounded-full bg-zinc-950 py-3 px-4 ring-1 ring-white/10 hover:bg-zinc-900 transition">
                                <span>Know more</span>
                              
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

             
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={imageVariants}
                    className="flex justify-center md:justify-end" 
                >
                    <motion.img
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        src={Img}
                        className="w-full max-w-md object-contain drop-shadow-2xl"
                        alt="Status illustration"
                    />
                </motion.div>
            </div>



        </section>
    )
}

export default Status