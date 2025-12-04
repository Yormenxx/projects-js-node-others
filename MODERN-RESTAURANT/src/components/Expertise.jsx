import React from 'react'
import {CUSINES} from '../constants/App'
const Expertise = () => {
  return (
    <section>
        <div className='text-4xl mb-6 font-bold text-center py-4'>
            <h2>Our expertise</h2>
        </div>

        <div className='p-6'>
            {
                CUSINES.map(({number, image, title, description})=>(
                    <div className='flex items-center border-b-4 border-neutral-800/40 border-dotted my-8 py-2'>
                        <div className='pr-2 text-2xl flex-shrink-0'>{number}</div>
                        <div className='w-1/3 flex-shrink-0'>
                            <img src={image}  className='h-auto rounded' alt={title} />
                        </div>
                        <div className='pl-8'>
                            <h2 className='uppercase text-2xl tracking-tighter text-rose-500'>{title}</h2>
                            <p className='tracking-tighter text-lg'>{description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Expertise