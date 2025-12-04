
import { REVIEW } from '../constants/App'
import Img from '../assets/xaviour.jpeg'
import customer1 from '../assets/customer1.jpeg'
import customer2 from '../assets/customer2.jpeg'
import customer3 from '../assets/customer3.jpeg'
import customer4 from '../assets/customer4.jpeg'

const Review = () => {
  return (
<section>
    <div className='flex flex-col'>
        <p className='text-3xl font-medium leading-normal tracking-tighter lg:mx-4 py-6'>
            {REVIEW.content}
        </p>
        <div className='flex items-center justify-center gap-6'>
            <img src={Img} width={80} height={80} className='rounded-full' alt={REVIEW.name} />
            <div><h6>{REVIEW.name}</h6><p className='text-sm'>{REVIEW.profession}</p></div>
        </div>

       
    </div>

    <div className='flex flex-col items-center justify-center md:flex-row py-7'>
            {[customer1, customer2,customer3, customer4].map((customer, index )=>(
                 <img key={index} src={customer} alt="customer" className='h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl' />
            )
               
            )}
    </div>


</section>
  )
}

export default Review