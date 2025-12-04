import { motion } from "framer-motion"
import { journalData } from "../constants"
import { SlideUp } from "../utility/animation"
function Journal() {
    return (
        <>
            <section className="px-20 bg-neutral-950  py-20 text-white ">


                <motion.div className="text-center md:max-w-[650px] mx-auto space-y-4 py-12  "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.2 }}>
                    <p className="text-3xl">The journal</p>
                    <p>Our favorite stories about public lands and opportunities for you to go involved in protecting your outdoor experienced.</p>
                </motion.div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center mt-2">
                    {
                        journalData.map((item,index)=>(
                            <motion.div key={index}  variants={SlideUp(item.delay)} initial="hidden" animate="visible">
                                    <div className="overflow-hidden">
                                        <img src={item.image} className="w-full h-[350px] object-cover" alt="" />
                                    </div>

                                    <div className="space-y-1 py-6  text-center px-12 ">
                                        <p className="uppercase ">{item.date}</p>
                                        <p className="text-xl font-semibold">{item.title}</p>
                                        <p className="mt-8">{item.about}</p>
                                       
                                    </div>
                            </motion.div>
                        ))
                    }
                </div>


                <button className="block mx-auto mt-6 text-blue-700 uppercase font-bold cursor-pointer">Read more</button>

            </section>

        </>
    )
}

export default Journal