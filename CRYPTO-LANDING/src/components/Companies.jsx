import Marquee from 'react-fast-marquee'
import { companyInfo } from '../data/Data'


const Companies = () => {
  return (
    <div className='w-full  py-10'>
      <div className="flex  items-center justify-between">
        <Marquee>
          {
            companyInfo.map(({ id, img }) => (
              <img src={img} alt="company" key={id} width={200} className='mx-10' />
            ))
          }

        </Marquee>
      </div>
    </div>
  )
}

export default Companies