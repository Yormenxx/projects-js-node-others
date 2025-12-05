import { motion } from 'framer-motion'
import { ChevronRight } from "lucide-react"

const Suscribe = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }


  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }
  return (
    <section className='bg-neutral-950 text-white py-11'>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className='flex flex-col items-center justify-center gap-6 max-w-4xl mx-auto'
      >

        <motion.h2
          variants={itemVariants}
          className='capitalize font-medium text-4xl md:text-5xl tracking-wider text-center'
        >
          Subscribe and get news updates
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className='w-full md:w-3/5 text-center text-lg tracking-tight text-neutral-400'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima amet mollitia omnis eveniet maxime qui ut tempore corrupti nihil fuga quo expedita.
        </motion.p>

        <motion.form
          variants={itemVariants}
          action=""
          className='
                flex flex-col sm:flex-row p-2 rounded-2xl bg-black gap-4 items-center mt-6 w-full md:w-auto
                border border-neutral-800 
                transition-all duration-300 ease-in-out
                focus-within:border-emerald-500 
                focus-within:ring-1 focus-within:ring-emerald-500
                focus-within:shadow-lg focus-within:shadow-emerald-500/20
            '
        >
          <input
            type="email"
            placeholder='Type your email'
            className='bg-transparent border-none outline-none text-white w-full sm:w-80 ml-4 py-2 placeholder:text-neutral-500'
          />

          <button className="w-full sm:w-auto bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-xl p-px text-lg font-semibold leading-6 text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-xl">
              <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center justify-center z-10 rounded-xl bg-zinc-950 py-3 px-6 ring-1 ring-white/10 hover:bg-zinc-900 transition">
              <span>Subscribe</span>

              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ChevronRight className='font-bold' size={20} />
              </motion.span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </motion.form>

      </motion.div>


    </section>
  )
}

export default Suscribe