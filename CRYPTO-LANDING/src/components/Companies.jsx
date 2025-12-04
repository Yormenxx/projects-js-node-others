import React from 'react'
import { companyInfo } from '../data/Data'


const Companies = () => {
  return (
    <div className='bg-neutral-900 py-20'>
        <div className="flex md:flex-row flex-col items-center justify-center space-x-4 space-y-4 flex-wrap">
            {
                companyInfo.map(({id,img})=>(
                    <img src={img} alt="company" key={id} />
                ))
            }
        </div>
    </div>
  )
}

export default Companies