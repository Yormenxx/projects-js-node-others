import React from 'react'
import Img from '../assets/status.png'
const Status = () => {
  return (
    <section className='bg-neutral-950 text-white p-3'>

        <div className='grid md:grid-cols-2 grid-cols-1 items-center'>
            <div className='flex flex-col  space-y-5'>
                <h2 className='capitalize font-bold text-4xl py-14  text-center'>Trust us due to our safe and convenient deposit</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perferendis expedita, nostrum quas ab optio eos beatae nobis modi, doloremque voluptatibus reiciendis earum accusantium perspiciatis totam labore voluptates tenetur accusamus!
                </p>
                <a href="#" className='bg-teal-700 text-white font-bold px-4 py-3 rounded-md w-[120px]'>
                    Know more
                </a>
            </div>

            <div>
                <img src={Img} alt="" />
            </div>
        </div>



    </section>
  )
}

export default Status