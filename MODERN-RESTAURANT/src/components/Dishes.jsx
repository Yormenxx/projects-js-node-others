import { DISHES } from "../constants/App"
import DishCard from "../components/DishCard"
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const Dishes = () => {
    return (
        <section className="container mx-auto py-16 px-4" id="dishes">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center text-3xl font-bold text-orange-500 tracking-tighter lg:text-4xl"
            >
                Our dishes
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} 
                className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
                {DISHES.map((project, index) => (
                    <DishCard key={index} project={project} />
                ))}
            </motion.div>
        </section>
    );
};
export default Dishes