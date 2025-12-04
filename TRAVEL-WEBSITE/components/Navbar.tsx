import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="max-container flex items-center justify-between relative z-30 py-5 px-6 lg:px-20 3xl:px-0">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {
          NAV_LINKS.map((link) => (

            <Link href={link.href} key={link.key} className=" flex items-center justify-center text-gray-600 curosor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>

          ))
        }

      </ul>

      <div className=" lg:flex lg:items-center lg:justify-center hidden bg-green-600 hover:bg-green-500 ease-in-out duration-150 text-white rounded-lg py-2 px-8">

        <Link href="/login" className="flex transition-all whitespace-nowrap">
          <Image src="/user.svg" alt="user" width={20} height={50} />
          Login
        </Link>
      </div>

        <Image
          src="/menu.svg"
          alt="menu"
          width={24}
          height={24}
          className="inline-block cursor-pointer lg:hidden "/>
          

    </nav>
  )
}

export default Navbar
