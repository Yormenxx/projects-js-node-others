import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram } from "react-icons/fa"
import { FaMapLocation } from "react-icons/fa6"
import Cards from "../assets/credit-cards.webp"
import { fadeUp } from "./Services"

function Footer() {
    return (
        <>
            <footer className="px-40 bg-pink-300 pt-12 pb-8 text-white ">

                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="space-y-6">
                            <h1 className="text-3xl font-bold uppercase">Playing</h1>
                            <p className="text-sm max-w-[300px]">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet cupiditate sequi dolorem impedit dignissimos, iure temporibus ullam nam eius sunt eaque minus earum qui tenetur corporis reprehenderit necessitatibus, magni quae.
                            </p>
                            <div>
                                <p className="flex items-center gap-2">
                                    <FaPhone />
                                    +1 (123) 435-4355
                                </p>
                                <p className="flex items-center gap-2 mt-2">
                                    {" "}
                                    <FaMapLocation /> Noire , Igmen Loir
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">

                            <h1 className="capitalize text-3xl font-bold ">quick links </h1>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
                                <div className="space-y-2">
                                    <ul>
                                        <li>Home</li>
                                        <li>About us</li>
                                        <li>Contact</li>
                                        <li>Privacy Policy</li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <ul>
                                        <li>Home</li>
                                        <li>About us</li>
                                        <li>Contact</li>
                                        <li>Privacy Policy</li>
                                    </ul>
                                </div>


                            </div>

                        </div>

                        <div className="space-y-6">
                            <h1 className="font-bold text-3xl">Follow Us</h1>
                            <div className="flex items-center gap-3">
                                <FaFacebook className="text-3xl hover:scale-105 duration-300 ease-in-out"/>
                                <FaInstagram  className="text-3xl hover:scale-105 duration-300 ease-in-out" />
                                <FaTelegram  className="text-3xl hover:scale-105 duration-300 ease-in-out" />
                                <FaGoogle className="text-3xl hover:scale-105 duration-300 ease-in-out"  />
                            </div>
                            <div>
                                <p className="font-bold text-lg">Payment methods</p>
                                <img src={Cards} alt="" className="w-[80%]" />
                            </div>
                        </div>


                    </div>

                </div>

            </footer>

        </>
    )
}

export default Footer