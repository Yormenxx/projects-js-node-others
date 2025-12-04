import Image from "next/image"
import { Element } from "react-scroll"
import squiggle from "../public/icons/squiggle.svg"
import star from "../public/icons/star.svg"
import { AnimatedBeamMultipleOutputDemo } from "./demos/animated-beam"
import {BoxRevealDemo} from "./demos/box-reveal"

const Process = () => {
    return (
        <section>
            <div>

                <Element name="process">

                    <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center pt-10">Our {""}

                        <span className="text-blue-500 flex gap-x-1 items-center">

                            <Image src={squiggle} alt="squiggle" className="w-6" />
                            Creative
                            <Image src={star} alt="star" className="w-6 mb-8" />
                        </span>
                        Process
                    </h1>

                    <p className="text-center text-lg pb-10 text-neutral-700">All of our services are designed to help your business to get noticed.</p>

                    <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
                        <div className="w-full md:w-1/2 order-2 md:order-1">
                            <AnimatedBeamMultipleOutputDemo />
                        </div>
                        <div className="w-full  md:w-1/2 order-1 md:order-2 md:ml-0">
                            <BoxRevealDemo />
                        </div>

                    </div>


                </Element>

            </div>
        </section>
    )
}

export default Process
