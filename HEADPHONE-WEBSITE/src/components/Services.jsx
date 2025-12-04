import { UpdateFollower } from "react-mouse-follower"
import { servicesData } from "../constants"
import {motion} from "framer-motion"


export const fadeUp = (delay) =>{
    return {
        hidden:{
            opacity:0,
            y:100,

        },
        show:{
            opacity:1,
            y:0,
            transition:{
                duration:0.5,
                delay
            }
        }
    }
}

function Services() {
    return (
        <>
            <section className="bg-neutral-300 font-roboto py-8 px-40">

                <div className="py-14">
                    <motion.h1 variants={fadeUp(0.5)} initial="hidden" whileInView="show" className="text-3xl font-bold text-center">Services</motion.h1>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1  ">
                    {
                        servicesData.map((item, index) => (
                            <UpdateFollower
                            mouseOptions={{
                                backgroundColor: "white",
                                zIndex: 999,
                                followSpeed: 0.5,
                                rotate: 720,
                                scale: 5,
                                mixBlendMode: "darken",
                                backgroundElement: (
                                    <motion.div
                                   
                                    >
                                        <img src={item.image} alt="" />
                                    </motion.div>
                                )
                            }}>
                                <motion.div key={index} className="flex flex-col items-center justify-center p-6 max-w-[300px] mx-auto shadow-xl rounded-lg bg-white/20" 
                                
                                variants={fadeUp(item.delay)}
                                initial="hidden"
                                whileInView="show"
                                >
                                    <img src={item.image} alt="" className="w-[100px] mb-4" />
                                    <div className="text-center space-y-3">
                                        <h1 className="text-2xl font-bold">{item.title}</h1>
                                        <p className="text-center text-sm text-black/80">{item.description}</p>
                                    </div>
                                </motion.div>

                            </UpdateFollower>
                        )

                        )
                    }
                </div>


            </section>
        </>
    )
}

export default Services