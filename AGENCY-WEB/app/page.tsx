"use client"
import Image from "next/image";
import Link from "next/link";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text";
import { CoverDemo } from "@/components/demos/CoverDemo";
import Navbar from "@/components/Navbar";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { PiCheckBold } from "react-icons/pi";
import Action from "@/components/Action";
import Services from "@/components/Services";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import Guarantees from "@/components/Guarantees";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <div className="overflow-clip  inset-0 -z-10  w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

        <Navbar />

        <main>

          <section >

            <div >

              <div className=" mt-14">
                <AnimatedShinyTextDemo />
              </div>



              <h1>
                <CoverDemo />
              </h1>

              <p className="text-center md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-neutral-500">
                Schedule a call with us to discuss your project and get a quote in minutes.
              </p>

              <div className="flex justify-center items-center gap-x-4">

                <Link href="/meeting" className="px-10 py-3 rounded-md  border-2 border-black dark:border-white capitalize bg-neutral-950 text-white hover:bg-white hover:text-black transition duration-200 text-sm hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                  Book a call
                </Link>


                <Link href="/meeting" className="px-10 py-3 rounded-md  border-2 border-black dark:border-white capitalize bg-white text-black hover:bg-violet-500 hover:text-white transition duration-200 text-sm hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                  Showcase
                </Link>

              </div>

              <div className="flex justify-between  gap-4 py-10 px-2 md:px-20  text-left md:items-center md:mx-auto">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>

                  <p className="flex space-x-2 items-center font-semibold md:text-xl md:space-x-4">
                    <PiCheckBold className="text-xl text-violet-500  mr-2" />Design
                  </p>
                </BoxReveal>

                <BoxReveal boxColor={"#5046e6"} duration={0.5}>

                  <p className="flex space-x-2 items-center font-semibold md:text-xl md:space-x-4">
                    <PiCheckBold className="text-xl text-violet-500 mr-2" />Development
                  </p>
                </BoxReveal>

                <BoxReveal boxColor={"#5046e6"} duration={0.5}>

                  <p className="flex space-x-2 items-center font-semibold md:text-xl md:space-x-4">
                    <PiCheckBold className="text-xl text-violet-500  mr-2" />Marketing
                  </p>
                </BoxReveal>


                <BoxReveal boxColor={"#5046e6"} duration={0.5}>

                  <p className="flex space-x-2 items-center font-semibold md:text-xl md:space-x-4">
                    <PiCheckBold className="text-xl text-violet-500  mr-2" />Strategy
                  </p>
                </BoxReveal>
              </div>


              <Action />
              <Services />

              <VelocityScroll className="capitalize text-blue-500/50 py-20">Bird digital marketing services</VelocityScroll>


              <Process />
              <Testimonial />
              <Guarantees />


              <article className="md:flex items-center my-20 justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0 bg-neutral-100 rounded-lg">

                <Image
                  src={"/images/proposal_illustration.png"}
                  alt="jordan"
                  width={1000}
                  height={1000}
                  className=" md:w-1/3 rounded-md order-2"
                />

                <div className="flex flex-col gap-y-5 md:w-1/2 order-1">

                  <h1 className="text-lg md:text-2xl ">
                    Let's make things happen
                  </h1>

                  <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>

                  <Link href="/meeting" className="w-[130px] px-6 py-2 rounded-md  border-2 border-black dark:border-white capitalize bg-neutral-950 text-white hover:bg-white hover:text-black transition duration-200 text-sm hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                    Book a call
                  </Link>

                </div>



              </article>


            <Footer/>

            </div>

          </section>


        </main>





      </div>
    </>

  );
}
