import { navLinks } from "../constants/index"
import { IoMdMenu } from "react-icons/io";
import { SlEarphones } from "react-icons/sl";
import { HiOutlineX } from "react-icons/hi";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";
import { useState } from "react";
function Navbar() {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
    return (
        <>
            <motion.nav

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .5, delay: .2 }}
                className="py-4 px-3 bg-neutral-900  text-white font-roboto">

                <div className="flex justify-between items-center">

                    <div>

                        <a href="#" className="text-xl font-bold uppercase">

                            Playing / <span className="font-extralight text-white/60">Market</span>
                        </a>

                    </div>

                    <div className="hidden md:flex">
                        <ul className="flex items-center gap-4">
                            {
                                navLinks.map((item, index) =>

                                    <li key={index}>
                                        <UpdateFollower
                                            mouseOptions={{
                                                backgroundColor: "white",
                                                zIndex: 999,
                                                followSpeed: 1.5,
                                                scale: 5,
                                                mixBlendMode: "difference"
                                            }}>
                                            <a href={item.link} className="inline-block uppercase text-sm py-3 px-2">
                                                {item.name}
                                            </a>
                                        </UpdateFollower>
                                    </li>

                                )
                            }
                        </ul>
                        <div className="flex items-center px-2 text-xl ps-14">

                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: "white",
                                    zIndex: 999,
                                    followSpeed: 1.5,
                                    scale: 5,
                                    mixBlendMode: "difference"
                                }}>
                                <SlEarphones />
                            </UpdateFollower>

                        </div>
                    </div>

                    <div className="md:hidden flex justify-end ">

                        <button onClick={toggleNavbar}>

                            {mobileDrawerOpen ? <HiOutlineX className="text-4xl" /> : <IoMdMenu className="text-4xl" />}

                        </button>


                    </div>

                  

                </div>



                {
                        mobileDrawerOpen && (

                            <ul className="flex flex-col items-center gap-4">
                                {
                                    navLinks.map((item, index) =>

                                        <li key={index}>
                                            <UpdateFollower
                                                mouseOptions={{
                                                    backgroundColor: "white",
                                                    zIndex: 999,
                                                    followSpeed: 1.5,
                                                    scale: 5,
                                                    mixBlendMode: "difference"
                                                }}>
                                                <a href={item.link} className="inline-block uppercase text-sm py-3 px-2">
                                                    {item.name}
                                                </a>
                                            </UpdateFollower>
                                        </li>

                                    )
                                }
                            </ul>


                        )
                    }



            </motion.nav>

        </>


    )
}

export default Navbar