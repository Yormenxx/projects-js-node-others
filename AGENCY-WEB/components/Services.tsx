import Image from "next/image";
import {  Element } from "react-scroll";
import { SERVICES_DATA } from "./data/data";

const Services = () => {
  return (
    
    <section>

        <div>

            <Element name="services" >

                <h1 className="text-3xl md:text-5xl lg:text-7xl text-center font-medium pt-10 text-foreground/60 capitalize  ">Built from the ground up</h1>
                <p className="text-center text-lg pb-2 px-4">All of our services are designed to help your business stand out</p>

                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 py-20 items-center place-items-center">
                    {
                        SERVICES_DATA.map(({title,desc,image},index)=>(
                            <div key={index} className="flex flex-col items-center bg-foreground/5 px-2 py-4 rounded-lg shadow-lg">
                                <Image src={image} alt={title}  className="object-cover overflow-hidden w-[200px] h-[150px] " />

                                <div className="w-[50%] md:w-[90%]">
                                    <h2 className="capitalize text-2xl  text-center font-medium py-6">{title}</h2>
                                    <p className="font-sm tracking-wide leading-snug text-center">{desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </Element>



        </div>

    </section>
  )
}

export default Services
