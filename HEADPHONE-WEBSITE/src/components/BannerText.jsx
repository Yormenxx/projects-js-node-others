import { fadeUp } from "./Services"
import { motion } from "framer-motion"
function BannerText() {
    return (
        <>
            <section className="py-12 text-center px-40">

                <motion.div className="bg-[#e33343]/80 text-white rounded-lg p-9 hover:scale-105 duration-300 ease-in-out shadow-xl max-w-[700px] mx-auto"
                variants={fadeUp(0.7)}
                initial = "hidden"
                whileInView="show">
                    <p className="capitalize font-bold text-3xl ">
                        Headphones with good quality and affordable price
                    </p>

                </motion.div>

            </section>
        </>
    )
}

export default BannerText