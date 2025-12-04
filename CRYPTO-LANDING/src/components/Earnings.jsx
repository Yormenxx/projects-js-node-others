import React from 'react'
import Img from '../assets/earnings.png'
const Earnings = () => {
  return (
    <section className='bg-neutral-950 text-white'>
        <div className='grid md:grid-cols-2 grid-cols-1 items-center gap-6 p-3'>
            <div>
                <img className='w-full' src={Img} alt="earnings" />
            </div>

            <div className='flex flex-col  space-y-5' >
                <h2 className='capitalize font-bold text-4xl py-10  text-center tracking-wider'>Track your earnings and cryptocode made it easy</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem consectetur ad cum, temporibus fuga debitis impedit modi velit obcaecati excepturi minus eius, ipsa officia sint, officiis neque delectus recusandae perferendis!
                </p>
                <a href="#" className='bg-teal-700 text-white font-bold px-4 py-3 rounded-md w-[120px]'>
                    Get started
                </a>
            </div>
        </div>
    </section>
  )
}

export default Earnings