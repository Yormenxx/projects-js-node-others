"use client";
import { Button } from "../ui/button";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { GUARANTEES_DATA } from "../data/data";
import Image from "next/image"
export function ShootingStarsAndStarsBackgroundDemo() {
    return (
        <div className=" mt-20 py-10 md:py-20 bg-neutral-900 flex flex-col items-center justify-center relative w-full px-10 ">
            <h1 className="text-3xl md:text-5xl lg:text-7xl text-center font-medium text-white capitalize  ">Built from the ground up</h1>
            <p className="text-center text-lg pb-2 px-4 text-white">All of our services are designed to help your business stand out</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto">

                {
                    GUARANTEES_DATA.map(({ image, title, paragraph }, index) => (
                        <div key={index} className="flex flex-col items-start justify-start rounded-lg bg-foreground/30 p-10  text-white border border-neutral-900 hover:border-neutral-700 duration-150 ease-in-out "  >

                            <Button className="
                      px-4 py-2 w-16 h-12
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-neutral-700 to-neutral-800 
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"><Image src={image}  className="w-8 h-8" alt="image" /></Button>

                            <div >
                                <h3 className="pt-4 capitalize font-bold">{title}</h3>
                                <p>{paragraph}</p>
                            </div>
                        </div>
                    ))
                }


            </div>

            <ShootingStars />
            <StarsBackground />
        </div>
    );
}
