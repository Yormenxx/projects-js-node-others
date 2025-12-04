import { UpdateFollower } from "react-mouse-follower"
import headphone4 from "../assets/headphone4.png"
import { motion } from "framer-motion"
import { fadeUp } from "./Services"



function Banner() {
    return (
        <>

            <section>

                <div className="px-40 py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-x-0 gap-12">

                    <div>
                        <motion.img src={headphone4} alt="" className="w-[300px]"
                            initial={{ opacity: 0, x: -100, rotate: -180 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}



                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
                            <motion.h1 className="capitalize text-3xl lg:text-4xl font-semibold font-roboto"
                            variants={fadeUp(0.7)}
                            initial = "hidden"
                            whileInView="show"
                            >the latest headphones with the latest technology</motion.h1>
                            <motion.p
                            variants={fadeUp(0.9)}
                            initial = "hidden"
                            whileInView="show"
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et laudantium architecto odit, distinctio incidunt quos quaerat corrupti perferendis impedit magnam inventore recusandae dolorem facere eos dolores nulla voluptatum! Veniam.</motion.p>

                            <UpdateFollower

                                mouseOptions={{
                                    backgroundColor:"white",
                                    zIndex:999,
                                    followSpeed:0.5,
                                    mixBlendMode:"difference",
                                    scale:5,
                                }}
                            
                            >
                                <motion.button className="border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-lg hover:bg-[#e33343] hover:text-white "
                                variants={fadeUp(1.3)}
                                initial = "hidden"
                                whileInView="show"
                                >Learn more</motion.button>
                            </UpdateFollower>

                        </div>
                    </div>

                </div>


            </section>
        </>
    )
}

export default Banner