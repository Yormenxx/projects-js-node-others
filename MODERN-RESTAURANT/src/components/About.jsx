import React from 'react'
import Img from '../assets/about.jpeg'
import {ABOUT} from '../constants/App'
const About = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-2  '>
            <div>
                <img src={Img} className='w-full p-2 rounded-3xl lg:-rotate-3' alt="about" />
            </div>

            <div>
                <h2 className='text-3xl text-center m-3 font-bold lg:text-5xl tracking-tighter'>{ABOUT.header}</h2>

                <p className='leading-relaxed tracking-tight text-2xl'>{ABOUT.content}</p>
            </div>
        </div>
    </section>
  )
}

export default About