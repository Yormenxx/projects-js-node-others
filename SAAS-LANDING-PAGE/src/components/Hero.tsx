import { heroBanner } from "@/assets"
import { heroData } from "./constants/data"
import { Button } from "./ui/button"
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog"
import { AspectRatio } from "./ui/aspect-ratio"
import ReactPlayer from "react-player/youtube"
import { CirclePlay } from "lucide-react"
import { useRef } from "react"
import { motion, Variants,useScroll,useSpring,useTransform } from "motion/react"

const heroVariantsContainer:Variants={
    start:{},
    end:{
        transition:{
            staggerChildren:0.4
        }
    }
}

const heroVariants: Variants = {
    start: {
        y: 30,
        opacity: 0,
        filter: "blur(5px)"
    },
    end: {
        y: 0,
        opacity: 1,
        filter: "blur(0)",
        transition: {
            duration: 0.7,
            ease: "easeInOut"
        }
    }
}



const Hero = () => {

    const heroBannerRef = useRef<HTMLElement>(null)

    const {scrollYProgress} = useScroll({
        target:heroBannerRef,
        offset:["start 1080px","50% start"]
    })

    const scrollYTranform = useTransform(scrollYProgress, [0,1], [0.85, 0.96])

    const scale = useSpring(scrollYTranform,{
        stiffness:300,
        damping:30,
        restDelta:0.001
    } )


    return (
        <>

            <section className="py-10 md:py-16">
                <motion.div variants={heroVariantsContainer} initial="start" animate="end" className="container text-center">
                    <div className="max-w-screen-md mx-auto">
                        <div >
                            <motion.p variants={heroVariants} initial="start" animate="end" className="test-sm uppercase tracking-wider bg-secondary/50 text-secondary-foreground max-w-max mx-auto px-3 py-1 rounded-full border-t border-blue-500/10 backdrop-blur-2xl mb-6 md:mb-10"> {heroData.sectionSubtitle}
                            </motion.p>
                            <motion.h2 variants={heroVariants}  className=" text-4xl font-semibold !leading-tight mb-4 md:text-5xl md:mb-5 lg:text-6xl ">
                                {heroData.sectionTitle}
                                <span className="relative isolate ms-4">
                                    {heroData.decoTitle}
                                    <span className="absolute -z-10 top-2 -left-6 -right-4 bottom-0.5 bg-foreground/5 rounded-full px-8 ms-3 border-t border-foreground/20 shadow-[inset_0px_0px_30px] shadow-foreground/20 md:top-3 md:bottom-3 lg:top-4 lg:bottom-2 ">

                                    </span>
                                </span>
                            </motion.h2>
                            <motion.p variants={heroVariants}  className="leading-relaxed tracking-wider capitalize text-lg">
                                {heroData.sectionText}
                            </motion.p>
                            <motion.div variants={heroVariants}  className="flex justify-center gap-2 my-4">
                                <Button>Start Free Trial</Button>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className="cursor-pointer bg-violet-700 text-white">
                                            <CirclePlay /> Watch Demo
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="p-0 overflow-hidden max-w-[640px] xl:max-w-[1000px]">
                                        <AspectRatio ratio={16 / 9}>
                                            <ReactPlayer url="https://youtu.be/2kCbFmjEi6A?si=gQrtBLU_10kfmk1Z"
                                                style={{
                                                    minWidth: "100%",
                                                    maxWidth: "100%",
                                                    minHeight: "100%",
                                                    maxHeight: "100%",
                                                }}>

                                            </ReactPlayer>
                                        </AspectRatio>
                                    </DialogContent>
                                </Dialog>

                            </motion.div>
                        </div>

                    </div>

                    <div className="relative mt-12 max-w-screen mx-auto isolate rounded-xl md:mt-16">
                        <motion.figure 
                        initial={{
                            y:120,
                            opacity:0,
                            filter:"blur(5px)"
                        }} 
                        animate={{
                            y:0,
                            opacity:1,
                            filter:"blur(0)"
                        }}
                        transition={{
                            duration:1.5,
                            delay:0.5,
                            ease:"backInOut"
                        }}
                        className="bg-background/60 border border-slate-800 backdrop-blur-3xl rounded-3xl shadow-2xl overflow-hidden"
                        
                        ref={heroBannerRef}
                        style={{scale}}
                        >
                            <img src={heroBanner} width={1460} height={815} alt="banner" />
                        </motion.figure>

                        <motion.div 
                        initial={{
                            scale:0.8,
                            opacity:0
                        }}
                        animate={{
                            scale:1,
                            opacity:1
                        }}
                        transition={{
                            duration:2,
                            delay:0.5,
                            ease:"backInOut"
                        }}

                        className="absolute bg-violet-800 inset-5 blur-[50px] -z-10">

                        </motion.div>
                        <motion.div 
                          initial={{
                            scale:0.4,
                            opacity:0
                        }}
                        animate={{
                            scale:1,
                            opacity:1
                        }}
                        transition={{
                            duration:2,
                            delay:1.5,
                            ease:"backOut"
                        }}
                        
                        className="absolute inset-0 bg-primary blur-[200px] scale-y-75 rounded-full -z-10">

                        </motion.div>
                    </div>
                </motion.div>
            </section>

        </>
    )
}

export default Hero
