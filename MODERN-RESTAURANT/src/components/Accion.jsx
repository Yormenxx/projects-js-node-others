import React from 'react'
import hero from "../assets/hero.png"
const Accion = () => {
  return (
    <div>
        <div className=" flex lg:flex-row flex-col items-center justify-center mt-4 ">

            <div className="flex flex-col lg:w-1/2   items-center justify-center gap-3">

                <h3 className='text-6xl text-white font-extrabold'>Enjoy your meals</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum assumenda repudiandae itaque fuga accusantium. A consequuntur illo consequatur commodi voluptas autem error quis, exercitationem culpa. Doloribus ipsam ut tempora suscipit!</p>
                <a href="#" className='px-6 py-2 border border-white rounded-sm bg-orange-500 hover:opacity-80'>More information</a>
            </div>

            <div>
                <img src={hero} alt="" className='w-96 animate-spin-slow' />
            </div>

        </div>




    </div>
  )
}

export default Accion