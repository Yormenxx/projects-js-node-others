import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

function Hero() {
    return (
        <>

            <section className="min-h-[900px] flex justify-center items-center">

                <div></div>


                <motion.div className="relative z-20 text-center  px-20 flex flex-col space-y-8 items-center justify-center text-white"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1.5,delay:0.5}}>

                    <h1 className="text-5xl md:text-8xl font-bold capitalize">The great outdoors</h1>
                    <p className="text-lg">Wonder often, wonder always</p>
                    <div className= "text-white inline-flex items-center justify-center w-14 h-14 border-2 rounded-full">
                        <FaPlay />
                    </div>
                </motion.div>
            </section>


        </>
    )
}

export default Hero