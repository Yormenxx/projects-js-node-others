import { ReactNode, useRef } from "react";
import {motion, useMotionValue,frame} from "motion/react"
import { useState,useCallback} from "react";
import  * as variants from "@/lib/motionVariants"

type FeatureCardProps = {
    classes?:string
    children:ReactNode
}


const FeatureCard = ({classes,children}:FeatureCardProps) => {
  const glowRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const [showGlow, setShowGlow] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>)=>{
    const rect = cardRef.current?.getBoundingClientRect()
    frame.read(()=>{
        x.set(event.clientX - Number(rect?.left))
        y.set(event.clientY - Number(rect?.top))
    })
  },[x,y])

  return (
    <motion.div 
    variants={variants.staggerContainer}
    initial="start"
    whileInView="end"
    viewport={{once:true}}
    className={`relative overflow-hidden p-px ring ring-inset ring-zinc-800/50 rounded-[14px] ${classes}`}>

      <motion.div className="relative isolate bg-card backdrop-blur-md rounded-xl overflow-hidden" ref={cardRef} 
      onMouseOver={()=>setShowGlow(true)}
      onMouseOut={()=>setShowGlow(false)}
      onMouseMove={handleMouseMove}
      >
        {
          children
        }
      </motion.div>

        <motion.div className="absolute -top-[150px] -left-[150px] rounded-full -z-10 w-[300px] h-[300px] bg-foreground blur-[50px]  " ref={glowRef} initial={{opacity:0}} animate={{opacity:Number(showGlow)}}
        style={{x ,y}}
        >

        </motion.div>
    </motion.div>
  )
}

export default FeatureCard
