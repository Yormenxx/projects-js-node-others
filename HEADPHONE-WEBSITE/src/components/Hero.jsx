import { useState } from "react"
import { headPhone } from "../constants"
import { FaWhatsapp } from "react-icons/fa"
import { UpdateFollower } from "react-mouse-follower"
import { AnimatePresence, easeInOut, motion } from 'framer-motion'


const fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay,
                ease: easeInOut,
            }
        },

        exit: {
            opacity: 0,
            y: 50,
            scale: 0.5,
            transition: {
                duration: 0.2,
                ease: easeInOut,
            }
        }

    }

}

function Hero() {

    const [activeData, setActiveData] = useState(headPhone[0])

    const handleActive = (data) => {
        setActiveData(data)
    }
    return (
        <>
            <section className="bg-neutral-900 text-white px-16 font-roboto">
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px]">

                    <div className="flex flex-col justify-center py-14 md:py-2 xl:max-w-[500px]">

                        <div className="space-y-5 md:text-left text-center">

                            <AnimatePresence mode="wait">

                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: "white",
                                        zIndex: 999,
                                        followSpeed: 0.5,
                                        rotate: -720,
                                        mixBlendMode: "difference",
                                        scale: 10,
                                    }}>
                                    <motion.h1 className="text-3xl font-bold font-roboto lg:text-6xl"
                                        key={activeData.title}
                                        variants={fadeUp(0.2)}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit">
                                        {
                                            activeData.title
                                        }
                                    </motion.h1>

                                </UpdateFollower>

                            </AnimatePresence>

                            <AnimatePresence mode="wait">
                                <motion.p className="text-sm leading-loose text-white/60"
                                    key={activeData.id}
                                    variants={fadeUp(0.4)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit">
                                    {
                                        activeData.description
                                    }
                                </motion.p>

                            </AnimatePresence>

                            <AnimatePresence mode="wait">
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: activeData.bgColor,
                                        zIndex: 999,
                                        followSpeed: 0.5,
                                        rotate: -720,
                                        scale: 6,
                                        mixBlendMode: "difference",
                                        backgroundElement: (
                                            <div>
                                                <img src={activeData.image} alt="" />
                                            </div>
                                        )
                                    }}>

                                    <motion.button style={{
                                        backgroundColor: activeData.bgColor
                                    }} className="inline-block px-4 py-2 rounded-md"
                                        key={activeData.id}
                                        variants={fadeUp(0.4)}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit">
                                        Buy and listen
                                    </motion.button>


                                </UpdateFollower>


                            </AnimatePresence>







                            <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">

                                <div className="w-20 h-[1px] bg-white"></div>
                                <p className="uppercase text-sm">Top Headphones for you</p>
                                <div className="w-20 h-[1px] bg-white"></div>

                            </div>

                            <div className="grid grid-cols-3 gap-10">
                                {
                                    headPhone.map((item, index) => {

                                        return (
                                            <div key={index} onClick={() => handleActive(item)} className="grid grid-cols-2 place-items-center cursor-pointer">
                                                <div>
                                                    <img src={item.image} alt="" className="w-[200px]" />
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="font-bold">{item.price}</p>
                                                    <p className="text-sm text-nowrap">{item.modal}</p>



                                                </div>
                                            </div>

                                        )
                                    }

                                    )
                                }


                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col justify-end items-center">
                        <AnimatePresence>
                            <motion.img src={activeData.image} alt="" className="w-[300px] md:w-[400px] xl:w-[500px]"
                             key={activeData.title}
                             initial={{opacity:0,scale:0.9,y:100}}
                             animate={{opacity:1,scale:1,y:0}}
                             transition={{duration:0.5}}
                             
                             />
                        </AnimatePresence>
                       
                    </div>

                    <div >
                        <a href=""><FaWhatsapp className="text-3xl bottom-10 right-10 hover:rotate-[360deg] duration-300 z-[999] mix-blend-difference" /></a>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Hero