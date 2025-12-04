import React from 'react'
import videoHero from "../assets/hero.mp4"
import hero from "../assets/hero.jpeg"
import logo from "../assets/logo.png"
const Hero = () => {
  return (
    <div>
        <section className='relative h-screen justify-center  items-center'>

            <div className="absolute inset-0  h-full w-full overflow-hidden">
                <video src={videoHero} className='object-cover w-full h-full' autoPlay muted loop playsInline poster={hero}></video>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black">

            </div>
            <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
                <img src={logo} alt="restaura" className='w-full p-4' />
                <p className='p-4 text-lg tracking-tighter text-white'></p>
            </div>

        </section>
    </div>
  )
}

export default Hero