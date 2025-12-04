import React from 'react'

const Suscribe = () => {
  return (
    <section className='bg-neutral-950 text-white py-11'>

        <div className='flex flex-col items-center justify-center gap-3  '>
            <h2 className='capitalize font-bold text-4xl py-14  text-center '>Suscribe and get news updates</h2>
            <p className='w-3/5 text-center tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima amet mollitia omnis eveniet maxime qui ut tempore corrupti nihil fuga quo expedita, quos nesciunt pariatur doloremque delectus. Quia, eos maxime.</p>
            <form action="" className='flex p-2 rounded-md border-neutral-900 bg-black gap-8 '>
                <input type="email" placeholder='Type your email' className='bg-transparent border-none outline-none'/>
                <a href="#" className='bg-teal-700 text-white font-bold px-4 py-3 rounded-md'>Suscribe</a>
            </form>
        </div>


    </section>
  )
}

export default Suscribe