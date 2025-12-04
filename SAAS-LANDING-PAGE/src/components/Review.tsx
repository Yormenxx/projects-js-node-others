import { motion } from "motion/react"
import * as variants from "@/lib/motionVariants"
import { reviewData } from "./constants/data"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Quote } from "lucide-react"
const Review = () => {
    return (
        <>
            <section className="section">
                <div className="container">

                    <div className="section-head mt-6">
                        <motion.p variants={variants.fadeInUp}
                            initial="start"
                            whileInView="end"
                            viewport={{ once: true }}
                            className="section-subtitle">
                            {reviewData.sectionSubtitle}
                        </motion.p>
                        <motion.h2 variants={variants.fadeInUp}
                            initial="start"
                            whileInView="end"
                            viewport={{ once: true }}

                            className="section-title">
                            {reviewData.sectionTitle}
                        </motion.h2>

                    </div>

                    <motion.div variants={variants.staggerContainer} initial="start" whileInView="end" viewport={{once:true}} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

                        {
                            reviewData.reviewCard.map(({title,text,reviewAuthor,date},index)=>(
                                <motion.div variants={variants.fadeInUp} key={index}>
                                    
                                <Card className="relative">
                                    <CardHeader>
                                        <CardTitle className="text-xl">
                                            {title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent>
                                    	<p className="text-sm text-muted-foreground line-clamp-3">
                                        {text}
                                        </p>
                                         
                                    
                                    </CardContent>

                                    <CardFooter className="block">
                                        <p>{reviewAuthor}</p>
                                        <p className="text-xs text-muted-foreground">{date}</p>
                                    </CardFooter>

                                    <div className="absolute bottom-0 right-3 text-primary opacity-[0.02]">
                                        <Quote size={50}/>
                                    </div>

                                </Card>



                                </motion.div>

                            ))
                        }

                    </motion.div>
                </div>
            </section>

        </>
    )
}

export default Review
