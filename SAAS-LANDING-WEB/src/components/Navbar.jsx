import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import logo from "../assets/logo.png";
import { NAV_ITEMS } from "../constants";
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleMenu = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  
  const menuVariants = {
    hidden: { opacity: 0, height: 0, transition: { when: "afterChildren" } },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1, 
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 }
    }
  };


  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (

    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">

      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">

      
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center flex-shrink-0"
          >
            <img src={logo} className="h-8 w-auto mr-2" alt="logo" />
          
          </motion.div>

        
          <ul className="hidden lg:flex ml-14 space-x-12">
            {NAV_ITEMS.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, color: "#3b82f6" }} 
                className="text-neutral-300 hover:text-white transition-colors"
              >
                <a href={item.link}>{item.title}</a>
              </motion.li>
            ))}
          </ul>

       
          <div className="hidden lg:flex justify-center space-x-4 items-center">
            <a href="#" className="py-2 px-3 border border-transparent hover:border-neutral-500 rounded-md transition text-neutral-300 hover:text-white">
              Login
            </a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white shadow-lg"
            >
              Start free trial
            </motion.a>
          </div>

     
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {mobileDrawerOpen ? <RiCloseFill /> : <RiMenu3Line />}
            </button>
          </div>
        </div>

     
        <AnimatePresence>
          {mobileDrawerOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 left-0 top-full z-20 bg-neutral-900 w-full p-8 flex flex-col justify-center items-center border-b border-neutral-800 lg:hidden overflow-hidden"
            >
              <ul>
                {NAV_ITEMS.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="py-4 text-center"
                  >
                    <a
                      href={item.link}
                      onClick={() => setMobileDrawerOpen(false)} 
                      className="text-xl text-neutral-300 hover:text-orange-500 transition-colors"
                    >
                      {item.title}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div variants={itemVariants} className="flex space-x-6 mt-6">
                <a href="#" className="py-2 px-3 border border-neutral-700 rounded-md text-neutral-300">
                  Login
                </a>
                <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white">
                  Start free trial
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;