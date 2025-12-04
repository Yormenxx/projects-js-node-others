import { PROJECTS_DATA } from "@/components/data/data"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Image from "next/image"


const Showcase = () => {

    return (

        <>

            <div className="overflow-clip  inset-0 -z-10  w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

                <Navbar />


                <h1 className="text-3xl md:text-5xl lg:text-7xl text-center font-medium capitalize mt-20  ">Built from the ground up</h1>
                <p className="text-center pb-10 text-lg  px-4 ">All of our services are designed to help your business stand out</p>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-10">
                
                    {

                        PROJECTS_DATA.map(({image,title},index)=>(
                            <div key={index} className="bg-neutral-200 p-3 rounded-md">
                                <Image src={image} alt="imagen" className="w-full h-[250px] object-cover overflow-hidden"/>
                                <h2 className="text-2xl pt-4">{title}</h2>
                            </div>
                        ))


                    }
                
                
                </div>

                <Footer/>

            </div>

        </>

    )

}


export default Showcase