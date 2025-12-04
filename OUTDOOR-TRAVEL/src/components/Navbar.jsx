import logo from "../assets/logo.png"
import { SlideBottom } from "../utility/animation"
import { motion } from "framer-motion"
function Navbar() {
    return (
        <>

            <nav className=" text-white md:px-40 py-3">
                <div>
                    <ul className="list-none flex justify-around items-center uppercase font-semibold relative z-20 md:text-lg ">
                        <li>
                            <motion.a variants={SlideBottom(0)} initial="hidden" animate="visible" href="#" className="hoverNav">About</motion.a>
                        </li>
                        <li>
                            <motion.a variants={SlideBottom(0.2)}  initial="hidden" animate="visible"  href="#" className="hoverNav">Explore</motion.a>
                        </li>
                        <li>
                            {" "}
                            <img src={logo} alt="logo" className="w-14" />
                        </li>

                        <li>
                            <motion.a variants={SlideBottom(0.4)}   initial="hidden" animate="visible" href="#" className="hoverNav">Journal</motion.a>
                        </li>
                        <li>
                            <motion.a variants={SlideBottom(0.6)}   initial="hidden" animate="visible" href="#" className="hoverNav">Search</motion.a>
                        </li>
                    </ul>

                </div>

            </nav>


        </>
    )
}

export default Navbar