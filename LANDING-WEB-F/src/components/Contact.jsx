import React from 'react'
import { CONTACT_INFO } from '../constants'
import { Phone,Mail,MapPinHouse } from 'lucide-react'

const Contact = () => {
  return (
    <div className=' dark:bg-neutral-950 dark:text-white'>

        <div className='pb-20'>

            <h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase pt-20 mb-12'>Contact us</h2>
            <p className='text-center mx-auto max-w-2xl pb-9 '>
                {CONTACT_INFO.text}
            </p>

            <div className="flex flex-col lg:flex-row justify-around mx-4">
                
                <div className='flex mb-8 lg:mb-0 items-center'>
                    <Phone className='mr-4 text-3xl' />
                    <p className='text-lg font-semibold mr-2'>{CONTACT_INFO.email.label}</p>
                    <p>{CONTACT_INFO.email.value}</p>

                </div>

                <div className='flex mb-8 lg:mb-0 items-center'>
                    <Mail className='mr-4 text-3xl' />
                   
                    <p className='text-lg font-semibold mr-2'>{CONTACT_INFO.address.label}</p>
                    <p>{CONTACT_INFO.address.value}</p>

                </div>


                <div className='flex mb-8 lg:mb-0 items-center'>
                    <MapPinHouse className='mr-4 text-3xl'  />
                    <p className='text-lg font-semibold mr-2'>{CONTACT_INFO.phone.label}</p>
                    <p>{CONTACT_INFO.phone.value}</p>

                </div>
            </div>

        </div>






    </div>
  )
}

export default Contact