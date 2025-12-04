import { UpdateFollower } from "react-mouse-follower"
import { blogData } from "../constants"
import { motion } from "framer-motion"
import { fadeUp } from "./Services"
function Blogs() {
    return (
        <>
            <section className="bg-gray-50 px-40">
                <div >
                    <h1 className="text-3xl font-bold text-center font-roboto py-12">Blogs</h1>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-16">
                    {
                        blogData.map((item, index) => {
                            return (

                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: "black",
                                        zIndex: 999,
                                        followSpeed: 1.5,
                                        text: "read",
                                        textFontSize: "3px",
                                        scale: 5
                                    }}>

                                    <motion.div className="flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:translate-y-2 duration-200"
                                        variants={fadeUp(item.delay)}
                                        initial="hidden"
                                        whileInView="show">
                                        <img src={item.img} alt="" />

                                        <div className="space-y-2 ">
                                            <h1 className="text-lg font-bold line-clamp-1 font-roboto">{item.title}</h1>
                                            <p className="line-clamp-3">{item.desc}</p>
                                        </div>
                                    </motion.div>

                                </UpdateFollower>


                            )
                        })
                    }
                </div>



            </section>


        </>
    )
}

export default Blogs