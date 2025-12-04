
import { motion } from "framer-motion"
import { SlideUp } from "../utility/animation"
import { exploreData } from "../constants"
import { data } from "framer-motion/client"
function Explores() {
    return (
        <>
            <section className="bg-neutral-950 px-20 text-white">


                <motion.div className="text-center md:max-w-[650px] mx-auto space-y-4  "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.2 }}>
                    <p className="text-3xl">Explore the world</p>
                    <p>We look to provide the most authentic contentt from athletes, adventuren, explorers travellers autound the world. Our long them mission is to educate inspire and enuble all peoples to experience & protect wildeness.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center mt-20 ">
                    {
                        exploreData.map((item,index)=>(
                            <motion.div key={index} className="relative"
                            variants={SlideUp(item.delay)} initial="hidden" animate="visible"
                            >
                                <img src={item.img} alt="" className="w-[380px] h-[550px] object-cover " />
                                <div className="absolute w-full bottom-0 inset-0 bg-neutral-950/15 ">
                                    <div className="h-full space-y-1 py-6 flex flex-col justify-end items-center ">
                                        <h3 className="text-2xl font-semibold ">{item.title}</h3>
                                        <h3 className="uppercase">{item.place}</h3>
                                    </div>
                                </div>
                            </motion.div>
                            
                        ))
                    }
                </div>

                <button className="block mx-auto mt-6 text-blue-700 uppercase font-bold cursor-pointer">See more</button>

            </section>

        </>
    )
}

export default Explores