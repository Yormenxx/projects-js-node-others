import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (

    <div>
    <footer className='mx-auto flex flex-col lg:flex-row justify-center items-center border-t py-4'>

<div className="flex items-center">

    <div className=" w-full flex space-x-6 items-center mb-2 dark:text-white">

        <a href="" target='_blank' rel='noopener noreferrer' aria-label='visit facebook'>
        <Facebook />
        </a>
        <a href="" target='_blank' rel='noopener noreferrer' aria-label='visit instagram'>
        <Instagram/>
        </a>
        <a href="" target='_blank' rel='noopener noreferrer' aria-label='visit twitter'>
        <Twitter />
        </a>



    </div>

</div>




</footer>

    </div>

  )
}

export default Footer