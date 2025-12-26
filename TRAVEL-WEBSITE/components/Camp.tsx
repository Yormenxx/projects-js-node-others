"use client";

import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { motion, Variants } from "framer-motion";


interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}


const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div 
      className={`h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        
       
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-neutral-900 p-4 shadow-lg">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

     
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url, index) => (
              <Image
                key={url}
                src={url}
                alt="person"
                width={52}
                height={52}
                className="inline-block h-10 w-10 rounded-full border-2 border-neutral-800 object-cover" 
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};


const boxVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const sliderVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};


const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 overflow-hidden">
      
     
      <motion.div 
        variants={sliderVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} 
        className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]"
      >
        <CampSite
          backgroundImage="/img-1.png"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="/img-2.png"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </motion.div>

    
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <motion.div
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }} 
          className="bg-neutral-900 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl shadow-2xl"
        >
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-neutral-300">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure but don't know the way. We will guide you to the best
            climbing locations in Indonesia.
          </p>
          
          <Image
            src="/quote.svg"
            alt="camp-quote"
            width={186}
            height={219}
            className="camp-quote opacity-50" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Camp;