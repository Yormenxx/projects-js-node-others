import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { motion } from "framer-motion";
import gallery1 from "/assets/gallery/gallery1.jpg";
import gallery2 from "/assets/gallery/gallery2.jpg";
import gallery3 from "/assets/gallery/gallery3.jpg";
import gallery4 from "/assets/gallery/gallery4.jpg";
import gallery5 from "/assets/gallery/gallery5.jpg";
import gallery6 from "/assets/gallery/gallery6.jpg";
import gallery7 from "/assets/gallery/gallery7.jpg";


const rawImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7];

function Gallery() {
   
    const images = rawImages.map((img) => ({
        original: img,
        thumbnail: img,
        originalClass: "rounded-t-xl", 
        thumbnailClass: "rounded-lg border-none focus:outline-none",
    }));

   
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    return (
        <section className="bg-neutral-950 py-20 px-4 overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }} 
                className="max-w-7xl mx-auto flex flex-col items-center"
            >

     
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-6xl font-bold mb-6 text-center text-[#adff2f] tracking-widest uppercase"
                >
                    Conviértete
                </motion.h1>

          
                <motion.p
                    variants={itemVariants}
                    className="w-full md:w-2/3 text-center text-neutral-300 text-lg mb-12 leading-relaxed"
                >
                    Halo, una de las sagas más emblemáticas de los videojuegos, está más grande que nunca.
                    Con una amplia campaña de mundo abierto y una experiencia multijugador dinámica gratuita.
                </motion.p>

               
                <motion.div
                    variants={itemVariants}
                    className="w-full max-w-5xl relative z-10"
                >
                    <div className="border border-neutral-800 p-2 rounded-2xl bg-neutral-900 shadow-2xl shadow-[#adff2f]/10">
                        <ImageGallery
                            items={images}
                            showPlayButton={false}
                            showFullscreenButton={true} 
                            showNav={true} 
                            autoPlay={true} 
                            slideInterval={4000}
                            slideDuration={500}
                            thumbnailPosition="bottom"
                            showThumbnails={true}
                            additionalClass="custom-gallery-class"  
                        />
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}

export default Gallery;