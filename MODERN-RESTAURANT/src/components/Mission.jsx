import React from 'react'
import missionVideo from '../assets/mission.mp4'
import missionImg from '../assets/mission.jpeg'
import { MISSION } from '../constants/App'
const Mission = () => {
  return (
    <section>
        <div className='text-center'>

            <h2 className='text-4xl mb-6 font-bold'>
                Our mission
            </h2>

            <div className='flex relative items-center justify-center'>

                <video className='w-full' loop playsInline muted autoPlay poster={missionImg}>
                    <source src={missionVideo} type='video/mp4'/>
                </video>

                <div className='absolute h-full w-full  rounded-3xl bg-neutral-900/40'> 
                </div>
                <p className='absolute tracking-tighter text-4xl max-w-lg'>{MISSION}</p>
            </div>

        </div>
    </section>
  )
}

export default Mission