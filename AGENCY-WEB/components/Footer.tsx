import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    return (
        <footer className=" py-10  px-10 md:mx-auto ">
            <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
                <h1 className="text-3xl md:text-5xl font-medium ">
                    <Image
                        src={"/logo/logo.webp"}
                        width={10000}
                        height={10000}
                        className="w-40"
                        alt="image"
                    />{" "}
                </h1>
                <p className="text-left  text-xl  text-gray-500">519-200-5000</p>
                <p className="text-left  text-xl  text-gray-500">
                    admin@birdsoftware.ca
                </p>
            </div>

            <div className="flex md:justify-center gap-x-4 mt-10">
                © 2025 Bird. All Rights Reserved.
                <Link href="/" className="text-blue-500">
                    Privacy Policy
                </Link>
            </div>
        </footer>
    )
}

export default Footer
