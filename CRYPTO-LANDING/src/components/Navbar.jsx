import { useState } from 'react'
import Logo from '../assets/Logo.png'
import { Link } from '../data/Data'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {


    const mobileMenuVars = {
        initial: { y: -20, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        },
        exit: {
            y: -20,
            opacity: 0,
            transition: { duration: 0.2 }
        }
    }

    const linkVars = {
        initial: { y: -10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -10, opacity: 0 }
    }
    const [toggleMobile, setToggleMobile] = useState(false)

    const toggleNav = () => {
        setToggleMobile(!toggleMobile)
    }


    const closeMobileMenu = () => {
        setToggleMobile(false)
    }

    return (
        <nav className='sticky top-0 z-50 w-full bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-800'>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2.5 }}
                        className="flex items-center flex-shrink-0"
                    >
                        <img className='w-20 cursor-pointer hover:opacity-90 transition' src={Logo} alt="Logo" />
                    </motion.div>

                    <ul className="hidden lg:flex space-x-10">
                        {Link.map((item, key) => (
                            <motion.li
                                key={key}
                                className='group'
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 * key, duration: 1.5 }}
                            >
                                <a
                                    className='text-lg text-neutral-300 group-hover:text-white transition-colors duration-200 font-medium'
                                    href={item.item}
                                >
                                    {item.name}
                                </a>
                            </motion.li>
                        ))}
                    </ul>

                    <div className='lg:hidden flex items-center'>
                        <button
                            onClick={toggleNav}
                            className='text-white p-2 focus:outline-none hover:bg-neutral-800 rounded-md transition'
                        >
                            <motion.div
                                key={toggleMobile ? "close" : "open"}
                                initial={{ scale: 0.5, rotate: -90 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {toggleMobile ? <X size={28} /> : <Menu size={28} />}
                            </motion.div>
                        </button>
                    </div>

                </div>
            </div>


            <AnimatePresence>
                {toggleMobile && (
                    <motion.div
                        variants={mobileMenuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute top-full left-0 w-full bg-neutral-950/95 border-b border-neutral-800 shadow-xl lg:hidden flex flex-col items-center py-6 backdrop-blur-md"
                    >
                        <ul className='w-full text-center space-y-6'>
                            {Link.map((item, key) => (
                                <motion.li
                                    key={key}
                                    variants={linkVars}
                                >
                                    <a
                                        className='text-xl text-neutral-300 hover:text-white font-medium block w-full py-2'
                                        href={item.item}
                                        onClick={closeMobileMenu}
                                    >
                                        {item.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar